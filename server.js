const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

//<--------------------Dot Config-------------------------->
dotenv.config();

//<--------------Mongodb Connection--------------------------->
connectDB();

// <------------------Rest Object------------------>
const app = express();

//<-----------------Middle Wares------------------------>
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// <------------------Route------------------------->
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
// <------------------Port------------------------->
const PORT = process.env.PORT || 8080;

// <------------------Listen------------------------->
app.listen(PORT, () => {
    console.log(
      `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
        .bgBlue.white
    );
  });