import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ClipLoader } from "react-spinners";
import { useSnackbar } from "react-simple-snackbar";
import { IoPaperPlaneOutline } from "react-icons/io5";

const ContactFormWithEmailJs = () => {
  const [isErrorWhenFormSent, setIsErrorWhenFormSent] = useState(false);
  const options = {
    position: "bottom-center",
    style: {
      backgroundColor: isErrorWhenFormSent ? "#f44336" : "#388e3c",
    },
  };
  const form = useRef();
  const [openSnackbar] = useSnackbar(options);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [isFilledForm, setIsFilledForm] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (
      userName !== "" &&
      userEmail !== "" &&
      subject !== "" &&
      message !== ""
    ) {
      setIsFilledForm(true);
    } else {
      setIsFilledForm(false);
    }
  }, [userName, userEmail, subject, message]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

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
          clearForm();
          setIsSending(false);
          setIsErrorWhenFormSent(false);

          openSnackbar("Success! Your message was sent to Nikolay");
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
          setIsErrorWhenFormSent(true);
          openSnackbar("Error. Please try again...");
        }
      );
  };

  const clearForm = () => {
    setUserName("");
    setUserEmail("");
    setSubject("");
    setMessage("");
  };

  const getButtonText = () =>
    isSending ? (
      <ClipLoader color="white" size={28.8} />
    ) : (
      <>
        Send <IoPaperPlaneOutline style={{ marginLeft: "4px" }} />
      </>
    );

  const buttonClassName = `contact-button ${isFilledForm ? "active-btn" : ""}`;

  return (
    <div className="form-container">
      <div className="form-box">
        <div className="lets-connect">Say Hi</div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <input
              type="text"
              name="user_name"
              className="form-control first"
              placeholder="Name*"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              name="user_email"
              className="form-control"
              placeholder="Email@example.com*"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <input
              type="text"
              name="subject"
              className="form-control"
              placeholder="Subject*"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="form">
            <textarea
              name="message"
              className="form-control last"
              cols="30"
              rows="7"
              placeholder="Message*"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group contact-button-box">
            <button
              disabled={isFilledForm ? false : true}
              className={buttonClassName}
              type="submit"
              value="Send"
            >
              {getButtonText()}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormWithEmailJs;
