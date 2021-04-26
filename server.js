const express = require("express"),
  app = express(),
  multer = require("multer"),
  path = require("path");

// cria uma instância do middleware configurada
// destination: lida com o destino
// filenane: permite definir o nome do arquivo gravado
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // error first callback
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // error first callback
    // cria arquivo com nome e data
    // cb(null, file.fieldname + "-" + Date.now());
    // cb(
    //   null,
    //   `${file.fieldname}-${Date.now()}.${path.extname(file.originalname)}`
    // );
    // salvando com o mesmo nome do arquivo
    cb(null, file.originalname);
  },
});

// const upload = multer({ dest: "uploads/" });
// utiliza a storage para configurar a instância do multer
const upload = multer({ storage });

app.use(express.static("public"));

app.post("/file/upload", upload.single("file"), (req, res) =>
  res.send("<h2>Upload realizado com sucesso</h2>")
);

app.listen(3003, () => console.log("App na porta 3003"));
