package workingdirectory.mvc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import workingdirectory.mvc.models.DeskReservation;

public interface DeskRepository extends JpaRepository<DeskReservation, Long> {
}
