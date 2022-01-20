package controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import models.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rest")
public class TestRestController {

    @GetMapping ("/test")
    public String testController() throws JsonProcessingException {
        User u=new User(1, "Test","Test");
        ObjectMapper objectMapper = new ObjectMapper();
        String json = objectMapper.writeValueAsString(u);


    return json;}

    @GetMapping ("/my_test")
    public String testController(@RequestParam String name) throws JsonProcessingException {
        return "Hello "+name;}

}
