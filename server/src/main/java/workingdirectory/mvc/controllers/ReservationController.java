package workingdirectory.mvc.controllers;


import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import workingdirectory.mvc.models.Desk;
import workingdirectory.mvc.models.DeskReservation;
import workingdirectory.mvc.repositories.DeskRepository;
import workingdirectory.mvc.repositories.DeskReservationRepository;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("reservations")
public class ReservationController {
    @Autowired
    DeskReservationRepository deskReservationService;
    @Autowired
    DeskRepository deskService;

    //create reservation
    @PostMapping("{id}")
    public DeskReservation createReservation(@PathVariable Long id, @RequestBody DeskReservation reservation) {
        Desk desk = deskService.findById(id).orElseThrow();
        reservation.setDesk(desk);
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
        //updatedReservation.setDeskId(reservation.getDeskId());
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
