const express = require("express");
const {
  createContact,
  fetchContact,
  listContacts,
} = require("../controllers/contact.controller");
const contactRouter = express.Router();

contactRouter
  .post("/create", createContact)
  .get("/getone/:id", fetchContact)
  .get("/getall", listContacts);

module.exports = contactRouter