package com.sharecode.share;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class ShareApplication {
    @Autowired
	public static void main(String[] args) {
		SpringApplication.run(ShareApplication.class, args);
	}

}
