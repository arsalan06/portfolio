
import {UserModel, projectModal} from "@/app/models/UserModel";
import {connect} from "@/util/mongoos";
import { NextResponse } from "next/server";
import { data } from "autoprefixer";
import { NextApiRequest } from "next";
export async function GET(req: NextApiRequest) {
    try {
       const url = new URL(`${req.url}`)
       const name = url.searchParams.get("name")
        await connect();
        
       const user = await UserModel.findOne({name:name});
        delete user.password
        return NextResponse.json({
            message:"User  successfully!",
            data:user
        }, {
            status: 200
        })

    }catch (e) {
        console.log(e)
        return NextResponse.json(
            { message: e },
            { status: 500 }
        )
    }
}
export async function POST(request: Request) {
    try {
        console.log("i am in get request");
        // console.log(request);
        const body = await request.json();
        await connect();
        console.log(body)
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
