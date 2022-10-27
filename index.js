// const PORT = 8000;
// const express = require("express");
// const cors = require("cors");

// require("dotenv").config();

// const app = express();

// const YOUR_SERVICE_ID = "service_sgwdbef";
// const YOUR_TEMPLATE_ID = "template_vzu1n64";
// const YOUR_PUBLIC_KEY = "J-c-tyI5DgxjBppyu";

// app.get("/", (req, res) => {
//   res.json("hola!");
// });

// app.get("/sendWarrantyEmail", (req, res) => {
//   console.log("req", req);
//   const data = {
//     service_id: YOUR_SERVICE_ID,
//     template_id: YOUR_TEMPLATE_ID,
//     user_id: YOUR_PUBLIC_KEY,
//     template_params: {
//       user_name: "Billy",
//     },
//   };

//   fetch(`https://api.emailjs.com/api/v1.0/email/send`, {
//     type: "POST",
//     data: JSON.stringify(data),
//     contentType: "application/json",
//   })
//     .then((response) => {
//       console.log("BE response is : ", response);
//       return response.text();
//     })
//     .then((body) => {
//       console.log("BE body is : ", body);
//       const results = JSON.parse(body);
//       res.send(results); // sends to frontend
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.listen(PORT, () => {
//   console.log(`Backend(server) is running on ${PORT}`);
// });
