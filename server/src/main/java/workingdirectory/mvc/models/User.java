package workingdirectory.mvc.models;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name="users")
public class User {
    @Column(columnDefinition = "boolean default false", name="anonym_reservations")
    boolean anonymReservations;

    @NotNull
    @Column(name = "first_name")
    String firstName;

    @NotNull
    @Column(name = "last_name")
    String lastName;

    @Id
    @NotNull
    @Column(name = "account")
    String account;

    @NotNull
    @Column(name = "role")
    String role;

    @OneToMany(mappedBy = "user")
    List<DeskReservation> reservations;
}
