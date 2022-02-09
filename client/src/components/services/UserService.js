import axios from "axios";
import { resolvePath } from "react-router-dom";
const RESERVATIONS_REST_API_URL = "http://localhost:8080";

class UserService {
  getUser = async (email) => {
    let response;
    try {
      response = await axios.get(RESERVATIONS_REST_API_URL + "/user/" + email);
    } catch (error) {
      console.log(error);
    }
    return response.data;
  };

  saveAnonymitySetting = async (email, isAnonym) => {
    let response;
    try {
      response = await axios.put(RESERVATIONS_REST_API_URL + "/user/" + email, {
        anonymReservations: isAnonym,
      });
    } catch (error) {
      console.log(error);
    }
    return response.data;
  };
}
export default new UserService();
