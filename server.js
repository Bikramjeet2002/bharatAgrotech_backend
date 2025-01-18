const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const contactRouter = require("./routes/contact.routes");
const connectDb = require("./config/db.config");

const app = express();

//database connection
connectDb();

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_PATH,
    credentials: true,
  })
);

app.use("/contact", contactRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running at PORT: ${PORT}`);
});
