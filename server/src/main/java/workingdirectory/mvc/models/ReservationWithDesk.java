package workingdirectory.mvc.models;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class ReservationWithDesk {
    private long desk_id;
    private Integer floor;
    private Object reservations;

}
