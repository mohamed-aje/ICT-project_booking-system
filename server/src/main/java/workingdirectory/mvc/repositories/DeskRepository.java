package workingdirectory.mvc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import workingdirectory.mvc.models.Desk;


public interface DeskRepository extends JpaRepository<Desk, Long> {
}
