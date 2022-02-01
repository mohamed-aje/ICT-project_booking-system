package workingdirectory.mvc.models;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name="desk_reservations")
public class DeskReservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reservation_id")
    Long reservationId;

    @CreationTimestamp
    LocalDateTime createTimeStamp;

    @UpdateTimestamp
    LocalDateTime updateTimeStamp;

    @NotNull
    @JsonFormat(pattern="yyyy-MM-dd")
    @Column(name = "date_from")
    Date dateFrom;

    @NotNull
    @JsonFormat(pattern="yyyy-MM-dd")
    @Column(name = "date_to")
    Date dateTo;


   // @NotNull
    //@Column(name = "desk_id")
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="desk_Id", nullable=false)
    Desk desk;

    @Column(name = "first_name")
    String firstName;

    @Column(name = "last_name")
    String lastName;


}
