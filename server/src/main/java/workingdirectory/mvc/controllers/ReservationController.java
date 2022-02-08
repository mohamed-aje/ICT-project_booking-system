package workingdirectory.mvc.controllers;


import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import workingdirectory.mvc.models.Desk;
import workingdirectory.mvc.models.DeskReservation;
import workingdirectory.mvc.models.User;
import workingdirectory.mvc.repositories.DeskRepository;
import workingdirectory.mvc.repositories.DeskReservationRepository;
import workingdirectory.mvc.repositories.UserRepository;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("reservations")
public class ReservationController {
    @Autowired
    DeskReservationRepository deskReservationService;
    @Autowired
    DeskRepository deskService;
    @Autowired
    UserRepository userService;

    //create reservation
    @PostMapping("{id}")
    public DeskReservation createReservation(@PathVariable Long id, @RequestBody DeskReservation reservation) {
        Desk desk = deskService.findById(id)
                .orElseThrow();
        reservation.setDesk(desk);

        User user = userService.findById(reservation.getEmail())
                .orElseThrow();
        user.setAccount(reservation.getEmail());
        reservation.setUser(user);

        return deskReservationService.save(reservation);
    }


    //read all reservations
    @GetMapping("/getall")
    public List<DeskReservation> getAllReservation() throws JsonProcessingException {
        return deskReservationService.findAll();
    }

    //update reservation
    @PutMapping("{id}")
    public ResponseEntity<DeskReservation> updateReservation(@PathVariable Long id, @RequestBody DeskReservation reservation) throws JsonProcessingException {
        DeskReservation updatedReservation = deskReservationService.findById(id)
                .orElseThrow();

        System.out.println(reservation.getEmail());
        User user = userService.findById(reservation.getEmail())
                .orElseThrow();

        user.setAccount(reservation.getEmail());

        updatedReservation.setDate(reservation.getDate());
        //updatedReservation.setDeskId(reservation.getDeskId());
        updatedReservation.setUser(user);

        deskReservationService.save(updatedReservation);

        return ResponseEntity.ok(updatedReservation);
    }

    //delete reservation
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteReservation(@PathVariable long id) {
        deskReservationService.deleteById(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
