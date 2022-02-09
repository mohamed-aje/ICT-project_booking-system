package workingdirectory.mvc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import workingdirectory.mvc.models.User;

import javax.transaction.Transactional;

public interface UserRepository extends JpaRepository<User, String> {

}
