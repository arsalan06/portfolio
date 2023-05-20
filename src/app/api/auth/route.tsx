import { NextApiRequest } from "next";
import UserModel from "@/app/models/UserModel";
import { connect } from "@/util/mongoos";
import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken");
const signToken = (id: string) => {
  // console.log("signToken");
  // console.log("signToken");
  const setId = id.toString();
  // console.log(setId);
  return jwt.sign({ setId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
export async function POST(request: Request) {
  const body = await request.json();
  await connect();

  const { email, password } = body;
  console.log(body);
  try {
    if (!email || !password) {
      console.log("please provide email or password");
    } else if (email && password) {
      const user = await UserModel.findOne({ email }).select("+password");
      // console.log(user);
      const correct = await user.correctPassword(password, user.password);
      if (user == null || user == undefined || !correct) {
        console.log("please provide valid email or password");
      } else {
        const token = signToken(user._id);
        delete user.password;
        return NextResponse.json({
          message: "Login successfully!",
          token: token,
          user,
        });
      }
    }
    // res.status(200).json(products);
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "Server error, please try again!" },
      { status: 500 }
    );
  }
  //   const body = await request.json();
  //   console.log(body);
  //   connect();
  //   const users = UserModel;

  //   const allUsers = await users.create(body);

  // new Response("skjcdsc")
}
