require("dotenv").config();
const app = require("./app");
const port = process.env.PORT || 5001;

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log("Listening on port " + port);
});
