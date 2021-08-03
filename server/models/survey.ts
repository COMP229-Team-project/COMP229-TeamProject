import Mongoose from "mongoose";

//shorthand for mongoose schema
const Schema = Mongoose.Schema;

//configure schema to interface with survey collection
const SurveySchema = new Schema(
  {
    title: String,
    description: String,
    avatar: String,
    questions: [],
    responses: [],
    startDate: Date,
    endDate: Date,
    creatorId: String,
  },
  {
    collection: "surveys",
    timestamps: true,
  }
);

const SurveyModel = Mongoose.model("Surveys", SurveySchema);

export default SurveyModel;
// {
//   question1: String,
//   answer1: String,
//   answer2: String,
//   answer3: String,
//   answer4: String,
// },
// {
//   question2: String,
//   answer1: String,
//   answer2: String,
//   answer3: String,
//   answer4: String,
// },
// {
//   question3: String,
//   answer1: String,
//   answer2: String,
//   answer3: String,
//   answer4: String,
// },
// {
//   question4: String,
//   answer1: String,
//   answer2: String,
//   answer3: String,
//   answer4: String,
// },
