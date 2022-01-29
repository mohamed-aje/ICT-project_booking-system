package workingdirectory.mvc.controllers;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import workingdirectory.mvc.models.DeskReservation;
import workingdirectory.mvc.repositories.DeskRepository;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("rest")
public class TestRestController {
    @Autowired
    DeskRepository deskReservationService;

    //create reservation
    @PostMapping
    public DeskReservation createReservation(@RequestBody DeskReservation reservation) {
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

        updatedReservation.setDate(reservation.getDate());
        updatedReservation.setDeskId(reservation.getDeskId());
        updatedReservation.setFirstName(reservation.getFirstName());
        updatedReservation.setLastName(reservation.getLastName());

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
