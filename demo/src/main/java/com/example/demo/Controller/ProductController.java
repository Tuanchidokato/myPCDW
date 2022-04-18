package com.example.demo.Controller;

import com.example.demo.Model.Product;
import com.example.demo.Model.ResponseObject;
import com.example.demo.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/Products")

public class ProductController {

    @Autowired
    private ProductRepository repository;
    @GetMapping("")
    List<Product> getAllProducts(){
        Product p1 = new Product( "macbook pro 16 inch",2020, 2440.0,"");
        Product p2 = new Product( "Iphone pro max 16 inch",2020, 2440.0,"");


        return repository.findAll();
    }

    @GetMapping("/{id}")
    // let's return an object with: data, message,status
    ResponseEntity<ResponseObject> findById(@PathVariable Long id){
        Optional<Product> foundProduct= repository.findById(id);
        return foundProduct.isPresent()?
              ResponseEntity.status(HttpStatus.OK).body(
              new ResponseObject("ok","Query product successfully",foundProduct)
            )
        :
              ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("false","Can not find product with id= "+ id,"")
            );

    }
}
