import axios from "axios";
const RESERVATIONS_REST_API_URL = "http://localhost:8080";

class ReservationService {
  getAllDesks = async () => {
    //console.log("get desks");
    let response;
    try {
      response = await axios.get(RESERVATIONS_REST_API_URL + "/desk/getall");
    } catch (error) {
      console.log(error);
    }
    return response.data;
  };

  saveReservation = async (id, name, selectedDate) => {
    const firstName = name[0];
    const lastName = name[1];
    const date = selectedDate.toLocaleDateString();
    const reservationData = { date, firstName, lastName };
    let response;
    try {
      response = await axios.post(
        RESERVATIONS_REST_API_URL + "/reservations/" + id,
        reservationData
      );
    } catch (error) {
      console.log(error);
    }
    //console.log("get desks");
    return response.data;
  };
}

export default new ReservationService();
