package com.sharecode.share.controller;

import com.sharecode.share.models.CodeData;
import com.sharecode.share.repository.CodeDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@CrossOrigin(allowedHeaders =
    {"Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"},
    methods = {RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT, 
    RequestMethod.DELETE}
 )
@RestController
public class CodeDataController {
    @Autowired
    private CodeDataRepository codeDataRepository;

    @PostMapping("/addCode")
    public String addCode(@RequestBody CodeData codeData) {
        codeDataRepository.save(codeData);
        return "Data added successfully";
    }

    @GetMapping("/getAllCodes")
    public List<CodeData> getAllCodes() {
        return codeDataRepository.findAll();
    }

    @GetMapping("/getCode/{codeId}")
    public Optional<CodeData> getCode(@PathVariable String codeId) {
        return codeDataRepository.findById(codeId);
    }

    public String getCurrTime() {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        return dtf.format(now);
    }
    @PostMapping("/updateCode/{codeId}")
    public void updateCode(@PathVariable String codeId,@RequestBody CodeData codeData) {
        var currCodeData = codeDataRepository.findById(codeId);

        if(currCodeData.isPresent()) {
            // code is already exists
            currCodeData.get().setData(codeData.getData());
            currCodeData.get().setUpdatedAt(getCurrTime());
            codeDataRepository.save(currCodeData.get());

        } else {
            // code is not exists
            CodeData newCodeData = new CodeData(codeId, codeData.getData(), getCurrTime(), getCurrTime());
            codeDataRepository.save(newCodeData);
        }
    }

    @GetMapping("/getRandomKey")
    public String getRandomKey() {
        int leftLimit = 48; // numeral '0'
        int rightLimit = 122; // letter 'z'
        int targetStringLength = 6;
        Random random = new Random();
        String generatedString = null;
        do {
            generatedString = random.ints(leftLimit, rightLimit + 1)
                    .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
                    .limit(targetStringLength)
                    .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                    .toString();
        } while (this.getCode(generatedString).isPresent());
        return generatedString;
    }
}
