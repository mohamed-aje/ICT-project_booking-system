package workingdirectory.mvc.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import workingdirectory.mvc.models.User;
import workingdirectory.mvc.repositories.UserRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("reservations")
public class UserController {
    @Autowired
    UserRepository userService;
}
