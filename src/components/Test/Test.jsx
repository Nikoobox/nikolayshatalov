import React from "react";
import FormEmailJs from "./FormEmailJs";
import "./test.scss";

const Test = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");
  // const [isFilled, setIsFilled] = useState(false);

  // useEffect(() => {
  //   if (name !== "" && email !== "" && message !== "" && subject !== "") {
  //     setIsFilled(true);
  //   } else {
  //     setIsFilled(false);
  //   }
  // }, [name, email, message, subject]);

  return (
    <div className="test-container">
      <div className="test-wrapper">
        {/* <div className="form-box">
          <form
            name="contact_version0"
            method="post"
            data-netlify="true"
            onSubmit="submit"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact_version0" />
            <div hidden>
              <input name="bot-field" />
            </div>

            <input
              className="input-field"
              type="text"
              name="Name"
              placeholder="Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="border-bottom" />

            <input
              className="input-field"
              type="email"
              name="Email"
              value={email}
              placeholder="Example@email.com*"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="border-bottom" />

            <input
              className="input-field"
              type="text"
              name="Subject"
              placeholder="Subject*"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <div className="border-bottom" />

            <textarea
              name="Message"
              rows="4"
              placeholder="Message*"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="border-bottom" />

            <button type="submit">
              <div className="text">SEND</div>
            </button>
          </form>
        </div>
        <br /> */}
        <FormEmailJs />
      </div>
    </div>
  );
};

export default Test;
