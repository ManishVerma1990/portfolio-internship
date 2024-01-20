const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

const atlasUrl =
  "mongodb+srv://maneeshvermama1990:G67AzB4dT8UnY2Q7@portfolio-internship.zxfzixk.mongodb.net/?retryWrites=true&w=majority";
async function main() {
  //await mongoose.connect("mongodb://127.0.0.1:27017/portfolio-internship");
  await mongoose.connect(atlasUrl);
}

main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));

app.listen("8080", () => {
  console.log("app is listening to port 8080");
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/about", async (req, res) => {
  const data = await Member.find();
  res.render("about.ejs", { data });
});

app.get("/member/:id", async (req, res) => {
  let { id } = req.params;
  let member = await Member.findById(id);
  console.log(member.works);
  res.render("member.ejs", { member });
});

const memberSchema = new mongoose.Schema({
  name: String,
  profession: String,
  image: String,
  description: String,
  education: String,
  technologies: String,
  works: [
    {
      title: String,
      image: String,
      description: String,
    },
  ],
});

const Member = mongoose.model("member", memberSchema);
