package workingdirectory.mvc.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.itextpdf.text.DocumentException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import workingdirectory.mvc.models.Desk;
import workingdirectory.mvc.models.DeskReservation;
import workingdirectory.mvc.models.User;
import workingdirectory.mvc.repositories.DeskRepository;
import workingdirectory.mvc.repositories.DeskReservationRepository;
import workingdirectory.mvc.repositories.UserRepository;
import workingdirectory.mvc.utils.Utils;
import java.io.FileNotFoundException;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin("*")
@RestController
@RequestMapping("reservations")
public class ReservationController {
    public static final String FILE_NAME = "test.pdf";
    @Autowired
    DeskReservationRepository deskReservationService;
    @Autowired
    DeskRepository deskService;
    @Autowired
    UserRepository userService;

    @GetMapping("/getPdf")
    public ResponseEntity<byte[]> getPDF() throws FileNotFoundException, DocumentException {

       /* for (DeskReservation d : list) {
            Paragraph paragraph = new Paragraph(d.getCreateTimeStamp()+" "+d.getEmail()+" "+d.getDate()+" "+d.getReservationId(), font);
            document.add(paragraph);
        }*/

        List<String> list = deskReservationService.findAll().stream().map(x->x.getReservationId()+" "+x.getCreateTimeStamp()+" "
                +x.getDate()).collect(Collectors.toList());


        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_PDF);
        Utils.writePdf(FILE_NAME,list);
        byte[]contents=Utils.getFileAsByteArray(FILE_NAME);
        headers.setContentDispositionFormData(FILE_NAME, FILE_NAME);
        headers.setCacheControl("must-revalidate, post-check=0, pre-check=0");
        ResponseEntity<byte[]> response = new ResponseEntity<>(contents, headers, HttpStatus.OK);
        return response;
    }



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
        System.out.println(reservation.getDate());
        return deskReservationService.save(reservation);
    }

    //read all reservations
    @GetMapping("/getAllForAll")
    public List getAllReservationsForAllUser() throws JsonProcessingException {
        return deskReservationService.findAllReservations();
    }

    //read all reservations for current user
    @GetMapping("/getAllForOne/{account}")
    public List getAllReservationsForOneUser(@PathVariable String account) throws JsonProcessingException {
        return deskReservationService.findAllByUserId(account);
    }

    //update reservation
    @PutMapping("{id}")
    public ResponseEntity<DeskReservation> updateReservation(@PathVariable Long id, @RequestBody DeskReservation reservation) throws JsonProcessingException {
        DeskReservation updatedReservation = deskReservationService.findById(reservation.getReservationId())
                .orElseThrow();

        Desk desk = deskService.findById(id).orElseThrow();

        updatedReservation.setDate(reservation.getDate());

        updatedReservation.setDesk(desk);

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
