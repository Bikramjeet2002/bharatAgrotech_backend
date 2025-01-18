const contactModel = require("../models/contact.model");
const mailSender = require("../utils/mailer");

const createContact = async (req, res) => {
  try {
    const data = req.body;

    const mailOptions = mailSender.mailOptions(data);

    await mailSender.mailSend(mailOptions);

    const contact = await contactModel.create(data);

    return res.status(201).json({
      message: "mail send",
      success: true,
      details: contact,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message || "something went wrong",
      success: false,
    });
  }
};

const listContacts = async (req, res) => {
  try {
    const contact = await contactModel.find();

    return res.status(200).json({
      message: "successfully listed",
      success: true,
      details: contact,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message || "something went wrong",
      success: false,
    });
  }
};

const fetchContact = async (req, res) => {
  try {
    const { id } = req.params;

    const contact = await contactModel.findOne({ _id: id });

    return res.status(200).json({
      message: "successfully fetched",
      success: true,
      details: contact,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message || "something went wrong",
      success: false,
    });
  }
};

module.exports = {
  createContact,
  listContacts,
  fetchContact,
};
