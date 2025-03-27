import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({Message:"This is users info!!"})
}
