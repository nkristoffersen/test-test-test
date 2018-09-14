import axios from "axios";
import convert from "xml-js";

axios
  .get("https://api.met.no/weatherapi/locationforecast/1.9/?lat=60.10&lon=9.58")
  .then(response =>
    console.log(convert.xml2json(response.data, { compact: false, spaces: 2 }))
  );

test("Request api.met.no and get 200 status", () => {
  expect.assertions(1);
  return axios
    .get(
      "https://api.met.no/weatherapi/locationforecast/1.9/?lat=60.10&lon=9.58"
    )
    .then(response => expect(response.status).toBe(200));
});
