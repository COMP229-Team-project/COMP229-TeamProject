import Mongoose, { PassportLocalSchema } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

// Create mongoose schema
const Schema = Mongoose.Schema;

//configure schema to interface with user collection
const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
      minlength: 2,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
      minlength: 2,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      minlength: 2,
    },
  },
  {
    collection: "Users",
    timestamps: true,
  }
);

//add passports local strategy functionality to the UserSchema
UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

//cast UserSchema as PassportLocalSchema
const UserModel = Mongoose.model("Users", UserSchema as PassportLocalSchema);

//declare a custom data type in the global namespace
declare global {
  export type UserDocument = Mongoose.Document & {
    _id: String;
    firstName: String;
    lastName: String;
    email: String;
  };
}
export default UserModel;
