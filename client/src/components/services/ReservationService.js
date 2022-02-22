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

  getReservationInfoUserId = async (email) => {
    console.log(email);
    let response;
    try {
      response = await axios.get(
        RESERVATIONS_REST_API_URL + "/reservations/getAllForOne/" + email
      );
    } catch (error) {
      console.log(error);
    }
    return response.data;
  };

  saveReservation = async (id, selectedDate, email) => {
    // const firstName = name[0];
    // const lastName = name[1];
    const date = selectedDate.toLocaleDateString();
    console.log(email);
    // const reservationData = { date, firstName, lastName };
    const reservationData = { date, email };
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

  deleteReservation = async (id) => {
    let response;
    try {
      response = await axios.delete(
        RESERVATIONS_REST_API_URL + "/reservations/" + id
      );
    } catch (error) {
      console.log(error);
    }
    return response.data;
  };
}

export default new ReservationService();
