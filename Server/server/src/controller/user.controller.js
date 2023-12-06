const express = require("express");
const router = express.Router();

const EventUser = require("../model/user.modal.js");

router.post("/event-user-register", (req, res) => {
  const { name, rollNo, department, college, phoneNo, email } = req.body;
  console.log("Data from Front-End: ", req.body);
  EventUser.findOne({ email: email })
    .then((user) => {
      if (user) {
        res.send({ message: "User already registered" });
      } else {
        const newUser = new EventUser({
          name,
          rollNo,
          department,
          college,
          phoneNo,
          email
        });
        newUser
          .save()
          .then(() => {
            res.send({ message: "Successfully registered" });
          })
          .catch((err) => {
            console.log(err);
            res.send({ message: "An error occurred" });
          });
      }
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "An error occurred" });
    });
});

router.get("/get-event-users", (req, res) => {
  EventUser.find({})
    .sort({ name: 1 }) // Sort by name in ascending order
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "An error occurred" });
    });
});

module.exports = router;
