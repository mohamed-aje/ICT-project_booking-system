package workingdirectory.mvc.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import workingdirectory.mvc.models.Desk;
import workingdirectory.mvc.models.DeskReservation;
import workingdirectory.mvc.repositories.DeskRepository;
import workingdirectory.mvc.repositories.DeskReservationRepository;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("desk")
public class DeskController {
    @Autowired
    DeskRepository deskService;

    //create
    @PostMapping
    public Desk createDesk(@RequestBody Desk desk) {
        return deskService.save(desk);
    }

    //read
    @GetMapping("/getall")//information tables
    public List<Desk> getAllReservation() throws JsonProcessingException {
        return deskService.findAll();
    }

    @GetMapping("{id}")
    public Desk getDesk(@PathVariable long id) throws JsonProcessingException {
        Desk desk = deskService.findById(id).orElseThrow();
        return desk;
    }



}
