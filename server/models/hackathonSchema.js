import mongoose from "mongoose";
const user = new mongoose.Schema(
  {
    name: { type: [String], required: true },
    username: { type: String, required: true },
  },
  { collection: "hackathonData" }
);

export const Hackathon = mongoose.model("Hackathon", user);

const user1 = new mongoose.Schema(
  {
    name: { type: [String], required: true },
    username: { type: String, required: true },
  },
  { collection: "internshipData" }
);

export const Internship = mongoose.model("Internship", user1);

const user2 = new mongoose.Schema(
  {
    name: { type: [String], required: true },
    username: { type: String, required: true },
  },
  { collection: "eightWeekCourseData" }
);

export const course_eight = mongoose.model("course_eight", user2);

const user3 = new mongoose.Schema(
  {
    name: { type: [String], required: true },
    username: { type: String, required: true },
  },
  { collection: "tweleveWeekCourseData" }
);

export const course_tweleve = mongoose.model("course_tweleve", user3);
