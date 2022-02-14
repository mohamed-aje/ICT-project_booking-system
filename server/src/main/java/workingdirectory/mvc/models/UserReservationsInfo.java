package workingdirectory.mvc.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserReservationsInfo {
    private long deskId;
    private Object reservation;
    private String firstName;
    private String lastName;
    private boolean isAnonym;
}
