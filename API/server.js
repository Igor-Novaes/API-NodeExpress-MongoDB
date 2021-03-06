const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));


app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));

//definir uma rota get simples para teste

app.get("/", (req, res) => {
  res.json({ message: "Aplicação iniciada" });
});

require("./routes/tutorial_routes")(app);

//setar porta e criar requisiçoes de entrada

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server esta na porta: ${PORT}.`);
});

const db = require("./models");

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });