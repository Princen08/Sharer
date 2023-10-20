package com.sharecode.share.repository;

import com.sharecode.share.models.CodeData;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CodeDataRepository extends MongoRepository<CodeData, String> {

}
