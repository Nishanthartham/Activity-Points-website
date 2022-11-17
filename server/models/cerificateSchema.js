import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
  // `socialMediaHandles` is a map whose values are strings. A map's
  // keys are always strings. You specify the type of values using `of`.
  activity: {
    type: Map,
    of: [String],
    // unique: true,
  },
});

export const Certificates = mongoose.model("Certificates", certificateSchema);
// Map { 'hackathon' => ['vkarpov15'], 'twitter' => ['@code_barbarian'],username }
//   console.log(new User({
//     socialMediaHandles: {
//       github: 'vkarpov15',
//       twitter: '@code_barbarian'
//     }
//   }).socialMediaHandles);
