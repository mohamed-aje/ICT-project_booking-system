import axios from "axios";
const RESERVATIONS_REST_API_URL = "http://localhost:8080";

class ReservationService {
  getAllDesks = async () => {
    //console.log("get desks");
    return await axios.get(RESERVATIONS_REST_API_URL + "/desk/getall");
  };

  saveReservation = async (id, reservationData) => {
    //console.log("get desks");
    return await axios.post(
      RESERVATIONS_REST_API_URL + "/reservations/" + id,
      reservationData
    );
  };
}

export default new ReservationService();
