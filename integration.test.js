import axios from "axios";

const osloCoordinates = {
  latitude: 59.911491,
  longitude: 10.757933
};

test("Request api.met.no and get 200 status", () => {
  expect.assertions(1);
  return axios
    .get(
      "https://api.met.no/weatherapi/locationforecast/1.9/?lat=60.10&lon=9.58"
    )
    .then(response => expect(response.status).toBe(200));
});
