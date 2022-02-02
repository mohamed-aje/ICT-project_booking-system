import axios from "axios";
const RESERVATIONS_REST_API_URL = "http://localhost:8080/desk/getall";

class ReservationService {
  getAllDesks = async () => {
    //console.log("get desks");
    return await axios.get(RESERVATIONS_REST_API_URL);
  };
}

export default new ReservationService();
