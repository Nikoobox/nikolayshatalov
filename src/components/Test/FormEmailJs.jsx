import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Checkbox from "rc-checkbox";

const FormEmailJs = () => {
  const form = useRef();
  const [isMaterial1, setIsMaterial1] = useState(false);
  const [isMaterial2, setIsMaterial2] = useState(false);
  //   console.log("process", process.env);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        style={{ display: "flex", flexDirection: "column", padding: "16px" }}
      >
        <div>Warranty</div>

        <div>Owner Infirmation</div>

        <label>Name</label>
        <input type="text" name="user_name" />

        <label>Address</label>
        <input type="text" name="user_address" />

        <label>City</label>
        <input type="text" name="user_city" />

        <label>State</label>
        <input type="text" name="user_state" />

        <label>Zip Code</label>
        <input type="number" name="user_zip" />

        <label>Country</label>
        <input type="text" name="user_country" />

        <label>Email</label>
        <input type="phone" name="user_email" />

        <label>Phone</label>
        <input type="tel" name="user_phone" />

        {/* <div>Installation Contractor</div>
        <label>Company Name</label>
        <input type="text" name="user_company_name" />

        <label>Address</label>
        <input type="text" name="user_company_address" />

        <label>City</label>
        <input type="text" name="user_company_city" />

        <label>State</label>
        <input type="text" name="user_company_state" />

        <label>Zip Code</label>
        <input type="number" name="user_company_zip" />

        <label>Country</label>
        <input type="text" name="user_company_country" />

        <label>Email</label>
        <input type="phone" name="user_company_email" />

        <label>Phone</label>
        <input type="tel" name="user_company_phone" /> */}

        <label>Steps Type:</label>

        <label className="checkbox-box" style={{ display: "flex" }}>
          {/* <div className="box"> */}
          <Checkbox
            checked={isMaterial1}
            type="checkbox"
            value="Yes"
            name="user_stadium_steps"
            onChange={(event) => setIsMaterial1(event.target.checked)}
          />
          {/* </div> */}
          <div className="material-name">Stadium Steps</div>
        </label>

        <label className="checkbox-box" style={{ display: "flex" }}>
          {/* <div className="box"> */}
          <Checkbox
            checked={isMaterial2}
            type="checkbox"
            value="Yes"
            name="user_corner_steps"
            onChange={(event) => setIsMaterial2(event.target.checked)}
          />
          {/* </div> */}
          <div className="material-name">Corner Steps</div>
        </label>

        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default FormEmailJs;
