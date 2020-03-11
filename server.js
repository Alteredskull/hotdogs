const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3005;

const app = express();
// Sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [
  {
    name: "Yoda",
    number: "9191234567",
    email: "yeet@gmail.com",
    uniqueID: 123
  }
];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reservation", (req, res) => {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/table", (req, res) => {
  res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/api/waitlist", (req, res) => {
res.json(reservations);
});

app.post("/api/reservations", (req, res) => {
  const newReservation = req.body;

  newReservation.routeName = req.body.name.split(" ").join("").toLowerCase();

  reservations.push(newReservation);

  res.json(newReservation);
});

app.listen(PORT, () => {
  console.log(`Server is listening port: ${PORT}`);
});
