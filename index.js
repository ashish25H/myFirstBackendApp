const express = require("express");
const format = require("date-format");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(200).send(`Hello word!`);
});



app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    username: "Tony Stark",
    folowers: 40,
    follows: 1000,
    date: format.asString("yyyy-mm-dd hh:mm:ss", new Date()),
  };

  res.status(200).json(instaSocial);
});

app.get("/api/v1/facebook", (req, res) => {
  const facebookuser = {
    username: "Thor",
    folowers: 50,
    follows: 500,
    date: format.asString("dd-mm-yyyy", new Date()),
  };

  res.status(200).json(facebookuser);
});

app.get("/api/v1/linkedin", (req, res) => {
  const linkedinUser = {
    username: "Caption",
    folowers: 90,
    follows: 600,
    date: format.asString("dd-mm-yyyy", new Date()),
  };
  res.status(200).json(linkedinUser);
});


app.get("/api/v1/:token/:id", (req, res) => {
    res.status(200).json({ pram: req.params.token,id:req.params.id });
  });

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
