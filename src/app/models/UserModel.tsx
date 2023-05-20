import { models, model, Schema } from "mongoose";
const validator = require("validator");
const bcrypt = require("bcryptjs");
const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, "please tell us your name"],
  },
  email: {
    type: String,
    required: [true, "Please tell us your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "please provide valid email"],
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
    minlength: 8,
  },
  confirmPassword: {
    type: String,
    required: [true, "please provide a password"],
    minlength: 8,
    select: false,
  },
  skill: {
    type: Array,
    required: [true, "please provide a password"],
    default: [],
  },
  about: {
    type: String,
    required: [true, "please provide info about you"],
  },
//   socialLinks: [{}],
});
UserSchema.pre('save', async function (next) {
  // if (this.isModified('password') || this.isNew) {
     console.log("in password check fun")
     console.log(this.password)
     console.log(this.confirmPassword)
    if (this.password !== this.confirmPassword) {
      throw new Error('Password and Confirm Password do not match');
    }
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
  // }
  this.confirmPassword = undefined;

  next();
});
UserSchema.methods.correctPassword = async function (
  candidatePassword:string,
  userPassword:string
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
const UserModel = models.User || model("User", UserSchema);

export default UserModel;
