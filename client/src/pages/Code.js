import Navbar from "../components/Navbar";
import Textarea from "../components/Textarea";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { updateCode } from "../api/updateCode";

const SAVE_INTERVAL_MS = 2000
var temp = "";

const Code = () => {
  const [code, setCode] = useState("");
  const [updatedCode, setUpdatedCode] = useState("")
  const [initial, setInitial] = useState(true);
  const { id: documentId } = useParams()
  const [socket, setSocket] = useState()
 
  useEffect(() => {
    const s = io(`${process.env.REACT_APP_API_BASE_URL}`)
    setSocket(s)

    return () => {
      s.disconnect()
    }
  }, []);

  useEffect(() => {
    if (socket == null) return

    socket.once("load-data", document => {
       setCode(document)
       temp = document;
    })
    socket.emit("join room", documentId)

  }, [socket, documentId])

  

  useEffect(() => {
    if (socket == null) return
    socket.on("receive-changes", (data) => {
      temp = data;
    })
    const interval = setInterval(async () => {
        setCode(temp)
        await updateCode(temp, documentId)
    }, SAVE_INTERVAL_MS)

    return () => {
      clearInterval(interval)
    }
  }, [socket])
  
  useEffect(() => {
    if (socket == null) return
    socket.emit("send-changes", code)
    temp = code
  }, [socket, code])

  return (
    <>
      <div className="">
        <Navbar />
        <Textarea
          codeData={{
            code: code,
            setCode: setCode,
          }}
        />
      </div>
    </>
  );
};
export default Code;
