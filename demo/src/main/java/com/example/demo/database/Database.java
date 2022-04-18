package com.example.demo.database;

import com.example.demo.Model.Product;
import com.example.demo.repositories.ProductRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class Database {
    //Logger
    private static final Logger logger = LoggerFactory.getLogger(Database.class);
    @Bean
    CommandLineRunner initDatabase(ProductRepository productRepository){

        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                Product p1 = new Product( "macbook pro 16 inch",2020, 2440.0,"");
                Product p2 = new Product( "Iphone pro max 16 inch",2020, 2440.0,"");

                logger.info("insert data: "+ productRepository.save(p1));
                logger.info("insert data: " + productRepository.save(p2));

            }
        };
    }
}
