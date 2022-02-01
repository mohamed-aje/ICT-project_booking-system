package workingdirectory.mvc.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name="desks")
public class Desk {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "desk_id")
    Long deskId;
    @Column(name = "floar")
    Integer floar;

    @OneToMany(mappedBy="desk")
    List<DeskReservation> reservations;

}
