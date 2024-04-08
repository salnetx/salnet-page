import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request) {
  // Do whatever you want
  return NextResponse.json([
    { 
        id: 1,
        name: "Hello World",
        link: "https://xintent.salnet.xyz",

     },
     { 
        id: 2,
        name: "mama",
        link: "https://xintent.salnet.xyz",

     },


  ], { status: 200 });
}
