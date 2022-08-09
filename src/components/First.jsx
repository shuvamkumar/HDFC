import azadi from "../assets/azadi.png";
import logo from "../assets/logo.png";
import bg from "../assets/bg.png";
import { useState } from "react";
import axios from "axios";

const First = ({ setState, state }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [mail, setMail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name: name,
      Phone: phoneNumber,
      City: city,
      Mail: mail,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/df4ec95a-f14e-4f77-ac4f-8330dbdaa94c",
        data
      )
      .then((response) => {
        setName("");
        setPhoneNumber("");
        setCity("");
        setMail("");
        setState(3);
      });
  };
  return (
    <div className="first-container">
      <img src={azadi} alt="" className="azadi" />
      <img src={logo} alt="" className="logo" />
      {state === 1 ? (
        <>
          <p>
            Celebrate India's 75 Years of Independence with HDFC Bank by earning
            a badge of honour.
          </p>
          <button
            onClick={() => {
              setState(2);
            }}
          >
            My Heart Beats For India
          </button>
          <img src={bg} alt="" className="bg" />
        </>
      ) : (
        <>
          <form
            action=""
            autoComplete="off"
            className="form-container"
            onSubmit={handleSubmit}
          >
            {/* <label htmlFor="">Name</label> */}
            <input
              className="input-field"
              type="text"
              name=""
              placeholder="Full Name"
              id=""
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              required
            />
            {/* <label htmlFor="">Phone Number</label> */}
            <input
              type="number"
              name=""
              placeholder="Phone no."
              id=""
              required
              onChange={(e) => {
                {
                  if (e.target.value < 9999999999)
                    setPhoneNumber(e.target.value);
                }
              }}
              value={phoneNumber}
              className="input-field"
            />
            <input
              className="input-field"
              type="text"
              name=""
              placeholder="City"
              id=""
              required
              onChange={(e) => {
                setCity(e.target.value);
              }}
              value={city}
            />
            {/* <label htmlFor="">Email ID</label> */}
            <input
              type="email"
              className="input-field"
              name=""
              placeholder="Mail ID"
              id=""
              required
              onChange={(e) => {
                setMail(e.target.value);
              }}
              value={mail}
            />
            <div className="" style={{ marginTop: "1rem" }}>
              <input
                required
                type="checkbox"
                name="TC"
                id=""
                style={{
                  display: "inline",
                  margin: 0,
                  width: "fit-content",
                  marginRight: "0.5rem",
                }}
              />
              <label
                htmlFor="TC"
                style={{
                  display: "inline",
                }}
              >
                I agree to play the Quiz & have read the T&C**
              </label>
            </div>
            <div className="" style={{ margin: "1rem 0" }}>
              <input
                required
                type="checkbox"
                name="TC"
                id=""
                style={{
                  display: "inline",
                  margin: 0,
                  width: "fit-content",
                  marginRight: "0.5rem",
                }}
              />
              <label
                htmlFor="TC"
                style={{
                  display: "inline",
                }}
              >
                I agree to receive the Digital Poster by Mail & confirm the
                details shared to be correct.
              </label>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <button type="submit">My Heart Beats For India</button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default First;
