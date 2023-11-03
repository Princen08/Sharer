package com.sharecode.share;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;


@SpringBootApplication
public class ShareApplication {
    @Autowired
	public static void main(String[] args) {
		SpringApplication.run(ShareApplication.class, args);
	}
}
