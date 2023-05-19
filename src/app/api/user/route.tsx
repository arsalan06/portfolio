import { NextApiRequest } from "next";
import UserModel from "@/app/models/UserModel";
import {connect} from "@/util/mongoos";
import { NextResponse } from "next/server";
import { data } from "autoprefixer";
export async function GET(req: NextApiRequest) {
    try {
        // console.log("i am in get request");
        // const body = await request.json();
        await connect();
        
       const user = await UserModel.find();

        return NextResponse.json({
            message:"signup  successfully!",
            data:user
        }, {
            status: 200
        })

    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}
export async function POST(request: Request) {
    try {
        console.log("i am in get request");
        const body = await request.json();
        await connect();
        
        console.log(body);
        await UserModel.create(body);

        return NextResponse.json({
            message:"Message sent successfully!"
        }, {
            status: 200
        })

    }catch (error) {
        console.log(error)
        return NextResponse.json(
            { message: "Server error, please try again!", error},
            { status: 500 }
        )
    }
//   const body = await request.json();
//   console.log(body);
//   connect();
//   const users = UserModel;

//   const allUsers = await users.create(body);

  // new Response("skjcdsc")
}
