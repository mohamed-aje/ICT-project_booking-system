package workingdirectory.mvc.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import workingdirectory.mvc.models.DeskReservation;
import workingdirectory.mvc.models.User;

import java.util.List;
@Repository
public interface DeskReservationRepository extends JpaRepository<DeskReservation, Long> {

    @Query(value = "select new workingdirectory.mvc.models.UserReservationsInfo(r.desk.deskId, r, r.user.firstName, r.user.lastName, r.user.anonymReservations) " +
            "from DeskReservation r " +
            "where r.user.account=:account")
    List findAllByUserId(String account);
}
