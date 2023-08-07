const express = require("express");

// <------------------Rest Object------------------>
const app = express();

// <------------------Route------------------------->
app.use("/api/v1/test", require("./routes/testRoutes"));

// <------------------Port------------------------->
const PORT = 8080;

// <------------------Listen------------------------->
app.listen(PORT, () => {
    console.log("Node Server Running");
});