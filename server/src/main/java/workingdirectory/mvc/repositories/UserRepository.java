package workingdirectory.mvc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import workingdirectory.mvc.models.User;

public interface UserRepository extends JpaRepository<User, String> {
}
