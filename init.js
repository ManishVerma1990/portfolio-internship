const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: String,
  image: String,
  profession: String,
  description: String,
  works: [
    {
      title: String,
      image: String,
      description: String,
    },
  ],
});

const Member = mongoose.model("Member", memberSchema);

// Sample data
const sampleMembers = [
  {
    name: "John Doe",
    profession: "Graphic Designer",
    image: "sampleimg.jpg",
    description: "Experienced graphic designer with a passion for creative design.",
    works: [
      {
        title: "Logo Design",
        image: "logo1.jpg",
        description: "Created a unique and memorable logo for a client.",
      },
      {
        title: "Print Media",
        image: "print1.jpg",
        description: "Designed engaging print materials for various campaigns.",
      },
    ],
  },
  {
    name: "Jane Smith",
    profession: "Web Developer",
    image: "sampleimg.jpg",
    description: "Front-end web developer specializing in responsive and user-friendly websites.",
    works: [
      {
        title: "Portfolio Website",
        image: "website1.png",
        description: "Built a personal portfolio website showcasing skills and projects.",
      },
      {
        title: "E-commerce Site",
        image: "website2.png",
        description: "Developed an e-commerce website with secure payment integration.",
      },
    ],
  },
  // Add more sample data as needed
];
const atlasUrl = "mongodb+srv://maneeshvermama1990:G67AzB4dT8UnY2Q7@portfolio-internship.zxfzixk.mongodb.net/?retryWrites=true&w=majority";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(atlasUrl);
}

// Insert sample data into MongoDB
Member.deleteMany({})
  .then(() => console.log("members deleted"))
  .catch((err) => console.log(err));
Member.insertMany(sampleMembers)
  .then((docs) => {
    console.log(`${docs.length} members inserted`);
  })
  .catch((err) => {
    console.error(err);
  });
