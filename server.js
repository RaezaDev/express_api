const express = require("express");
const cors = require("cors");
const db = require("./APP/models");

const app = express();
const corsOption = {
  origin: "*",
};

//register cors middleware

app.use(cors(corsOption));
app.use(express.json());

// konek ke database
db.mongoose.connect(db.url);

db.mongoose
  .connect(db.url)
  .then(() => console.log("Database Terkoneksi"))
  .catch((err) => {
    console.log(`gagal konek ${err.message}`);
    process.exit();
  });

//memanggil routes mahasiswa
require("./APP/routes/mahasiswa.routes")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
