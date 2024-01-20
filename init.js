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
    profession: "Software Engineer",
    image: "john_doe.jpg",
    description: "Experienced software engineer with a passion for building innovative solutions.",
    education: "Bachelor's in Computer Science",
    technologies: "JavaScript, React, Node.js, MongoDB",
    works: [
      {
        title: "Project A",
        image: "project_a_screenshot.jpg",
        description:
          "Developed a web application using React and Node.js. Implemented features such as user authentication and real-time updates.",
      },
      {
        title: "Project B",
        image: "project_b_screenshot.jpg",
        description: "Led a team to create a mobile app using React Native. Integrated with external APIs for data retrieval.",
      },
    ],
  },
  // Repeat similar documents for a total of 10
  // ...

  {
    name: "Jane Smith",
    profession: "Data Scientist",
    image: "jane_smith.jpg",
    description: "Data scientist with a focus on machine learning and predictive analytics.",
    education: "Master's in Data Science",
    technologies: "Python, TensorFlow, scikit-learn, SQL",
    works: [
      {
        title: "Data Analysis Project",
        image: "data_analysis_project.jpg",
        description:
          "Conducted in-depth data analysis on a large dataset to identify patterns and trends. Presented findings to the executive team.",
      },
      {
        title: "Machine Learning Model",
        image: "ml_model_screenshot.jpg",
        description:
          "Developed a machine learning model for predicting customer churn, resulting in a 20% reduction in customer attrition.",
      },
    ],
  },
  // Repeat similar documents for a total of 10
  // ...
  {
    name: "John Doe",
    profession: "Software Engineer",
    image: "john_doe.jpg",
    description: "Experienced software engineer with a passion for building innovative solutions.",
    education: "Bachelor's in Computer Science",
    technologies: "JavaScript, React, Node.js, MongoDB",
    works: [
      {
        title: "Project A",
        image: "project_a_screenshot.jpg",
        description:
          "Developed a web application using React and Node.js. Implemented features such as user authentication and real-time updates.",
      },
      {
        title: "Project B",
        image: "project_b_screenshot.jpg",
        description: "Led a team to create a mobile app using React Native. Integrated with external APIs for data retrieval.",
      },
    ],
  },
  // Repeat similar documents for a total of 10
  // ...

  {
    name: "Jane Smith",
    profession: "Data Scientist",
    image: "jane_smith.jpg",
    description: "Data scientist with a focus on machine learning and predictive analytics.",
    education: "Master's in Data Science",
    technologies: "Python, TensorFlow, scikit-learn, SQL",
    works: [
      {
        title: "Data Analysis Project",
        image: "data_analysis_project.jpg",
        description:
          "Conducted in-depth data analysis on a large dataset to identify patterns and trends. Presented findings to the executive team.",
      },
      {
        title: "Machine Learning Model",
        image: "ml_model_screenshot.jpg",
        description:
          "Developed a machine learning model for predicting customer churn, resulting in a 20% reduction in customer attrition.",
      },
    ],
  },
  // Repeat similar documents for a total of 10
  // ...
  {
    name: "John Doe",
    profession: "Software Engineer",
    image: "john_doe.jpg",
    description: "Experienced software engineer with a passion for building innovative solutions.",
    education: "Bachelor's in Computer Science",
    technologies: "JavaScript, React, Node.js, MongoDB",
    works: [
      {
        title: "Project A",
        image: "project_a_screenshot.jpg",
        description:
          "Developed a web application using React and Node.js. Implemented features such as user authentication and real-time updates.",
      },
      {
        title: "Project B",
        image: "project_b_screenshot.jpg",
        description: "Led a team to create a mobile app using React Native. Integrated with external APIs for data retrieval.",
      },
    ],
  },
  // Repeat similar documents for a total of 10
  // ...

  {
    name: "Jane Smith",
    profession: "Data Scientist",
    image: "jane_smith.jpg",
    description: "Data scientist with a focus on machine learning and predictive analytics.",
    education: "Master's in Data Science",
    technologies: "Python, TensorFlow, scikit-learn, SQL",
    works: [
      {
        title: "Data Analysis Project",
        image: "data_analysis_project.jpg",
        description:
          "Conducted in-depth data analysis on a large dataset to identify patterns and trends. Presented findings to the executive team.",
      },
      {
        title: "Machine Learning Model",
        image: "ml_model_screenshot.jpg",
        description:
          "Developed a machine learning model for predicting customer churn, resulting in a 20% reduction in customer attrition.",
      },
    ],
  },
  // Repeat similar documents for a total of 10
  // ...
];

const atlasUrl =
  "mongodb+srv://maneeshvermama1990:G67AzB4dT8UnY2Q7@portfolio-internship.zxfzixk.mongodb.net/?retryWrites=true&w=majority";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(atlasUrl);
  await Member.deleteMany({})
    .then(() => console.log("members deleted"))
    .catch((err) => console.log(err));
  await Member.insertMany(sampleMembers)
    .then((docs) => {
      console.log(`${docs.length} members inserted`);
    })
    .catch((err) => {
      console.error(err);
    });
}

// Insert sample data into MongoDB
