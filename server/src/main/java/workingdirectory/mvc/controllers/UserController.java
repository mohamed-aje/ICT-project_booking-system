package workingdirectory.mvc.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import workingdirectory.mvc.models.User;
import workingdirectory.mvc.repositories.UserRepository;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("user")
public class UserController {
    @Autowired
    UserRepository userService;

    @GetMapping("/getall")
    public List<User> getAllUser() throws JsonProcessingException {
        return userService.findAll();
    }

    @GetMapping("{account}")
    public User getUser(@PathVariable String account){
        User user = userService.findById(account).orElseThrow();
        return user;
    }

    @PutMapping("{account}")
    public ResponseEntity<User> updateReservation(@PathVariable String account, @RequestBody User user) throws JsonProcessingException {
        User updatedUser = userService.findById(account).orElseThrow();
        updatedUser.setAnonymReservations(user.isAnonymReservations());
        userService.save(updatedUser);

        return ResponseEntity.ok(updatedUser);
    }


}
