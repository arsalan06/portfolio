import mongoose,{ models, model, Schema } from "mongoose";
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
const ProjectSchema: Schema = new Schema({
  projectName: {
    type: String,
    required: [true, "please tell us Project name"],
  },
  projectDesc:{
    type:String,
    required: [true, "project description is reqiured"],
   } ,
  projectImages:{
    type:Array,
    required: [true, "Project Images is required"],
  },
  projectTech:{
    type:Array,
    required: [true, "Project tech is required"],
  },
  projectDeveloper:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});
const TokenSchema:Schema=new Schema({
  token:{
    type:String,
    required: true
  },
  tokenExp:{
    type:String,
    required: true
  },
  tokenUser:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})
UserSchema.pre('save', async function (next) {
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
const projectModal = models.Project || model("Project", ProjectSchema);
const tokenModal = models.Token || model("Token", TokenSchema);

export  {UserModel, projectModal, tokenModal};
