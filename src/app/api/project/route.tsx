import { NextApiRequest } from "next";
import {UserModel, projectModal} from "@/app/models/UserModel";
import {connect} from "@/util/mongoos";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
    try {
        console.log("i am in get request");
        // console.log(request);
        const body = await request.json();
        await connect();
        const newProject=await projectModal.create(body);
        console.log(body)

        console.log("new project here")
        // console.log(newProject)

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