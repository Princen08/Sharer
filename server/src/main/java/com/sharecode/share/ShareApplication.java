package com.sharecode.share;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import java.util.Collections;
import java.util.Arrays;

@SpringBootApplication
public class ShareApplication {
    @Autowired
	public static void main(String[] args) {
		SpringApplication.run(ShareApplication.class, args);
	}
	@Bean
	public CorsConfiguration corsConfiguration() {
		CorsConfiguration configuration = new CorsConfiguration();
		configuration.setAllowedOrigins(Arrays.asList("*"));
		return configuration;
	}

}
