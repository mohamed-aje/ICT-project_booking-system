package workingdirectory.mvc.controllers;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import workingdirectory.mvc.models.DeskReservation;
import workingdirectory.mvc.repositories.DeskRepository;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("rest")
public class TestRestController {
    @Autowired
    DeskRepository deskReservationService;

    @GetMapping ("/my_test")
    public String testController(@RequestParam String name) throws JsonProcessingException {
        DeskReservation deskReservation = new DeskReservation(-1L, LocalDateTime.now(),1L,"MaInTest","qwerty");
        deskReservationService.save(deskReservation);
        return "Hello "+name;}

    @GetMapping ("/getData")
    public List<DeskReservation> getAllDeskReservation() throws JsonProcessingException {
        List<DeskReservation> list=deskReservationService.findAll();

        return list;
    }



}
