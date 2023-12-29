const router = require("express").Router();
const crypto = require("crypto");

const codeData = require("../models/codeDataSchema");
const CodeData = require("../models/codeDataSchema");

async function generateUniqueKey() {
  let isUnique = false;
  let randomKey;
  const length = 7;
  while (!isUnique) {
    const randomBytes = crypto.randomBytes(Math.ceil(length / 2));
    randomKey = randomBytes.toString("hex").slice(0, length);
    const existingDoc = await codeData.findOne({ id: randomKey });
    isUnique = !existingDoc;
  }
  return randomKey;
}

// Getting random-key for new request
router.get("/getRandomKey", async (req, res) => {
  const key = await generateUniqueKey();
  return res.send({status: "sucess", key: key});
});


// Getting data by key
router.get('/getCode/:codeID', async(req, res) => {
    const codeID = req.params.codeID;
    const data = await codeData.findOne({id: codeID});
    return res.send({status: "sucess", data: data});
});

// Update or Add Code data
router.post("/updateCode", async(req, res) => {
    const {id, data} =  req.body;
   
    const exist = await codeData.findOne({id: id}) 
    if(exist) {
        const updatedData = {
            data: data,
            updatedAt: new Date().getTime()
        }
        await codeData.updateOne({id: id}, { $set: updatedData})
        return res.send({status: "Sucess", message: "Data updated sucessfully."})
    } else {
       // need to create new documenet
      //  await addData(id, data);
      const newCodeData = new CodeData({
        id: id,
        data: data,
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime()
      })
       await newCodeData.save();
       return res.send({status: "Sucess", message: "Data added sucessfully."})
    }
})

module.exports = router;