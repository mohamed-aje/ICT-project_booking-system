package workingdirectory.mvc.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.*;
import workingdirectory.mvc.models.User;
import workingdirectory.mvc.repositories.UserRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("reservations")
public class UserController {
    @Autowired
    UserRepository userService;

    @GetMapping({"account"})
    public User getUser(@PathVariable String account) {
        User user = userService.findById(account).orElseThrow();
        return user;
    }
}
