module.exports = (app) => {
  const mahasiswa = require("../controllers/mahasiswa.controllers");
  const r = require("express").Router();

  r.get("/", mahasiswa.findAll);
  r.get("/:id", mahasiswa.show);
  r.post("/", mahasiswa.create);
  r.put("/:id", mahasiswa.update);
  r.delete("/:id", mahasiswa.delete);

  app.use("/mahasiswa", r);

  //GET localhost:8000/mahasiswa
};
