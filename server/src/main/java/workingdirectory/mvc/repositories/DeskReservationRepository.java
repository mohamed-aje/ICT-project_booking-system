package workingdirectory.mvc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import workingdirectory.mvc.models.DeskReservation;

public interface DeskReservationRepository extends JpaRepository<DeskReservation, Long> {
}
