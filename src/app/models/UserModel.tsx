import { models, model, Schema } from "mongoose";

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  skill: {
    type: Array,
    required: true,
    default: [],
  },
  about: {
    type: String,
    required: true,
  },
//   socialLinks: [{}],
});
console.log("i am in model");
const UserModel = models.User || model("User", UserSchema);

export default UserModel;
