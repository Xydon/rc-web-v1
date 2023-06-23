import React from "react";
import Benefits from "./comp/benefits";
import Input from "./comp/formInput";
import GoogleSignIn from "./comp/googleSignIn"
export interface RIsignup {}


export namespace PIsignup {}

export default function signup(props: RIsignup) {
  return (
    <div className="container h-full border-yellow-500 border-4">
        <div className="navbar border-4 border-red-500">
        navbar
        </div>

        <div className="innerContainer border-4 border-gray-500 pl-48 pt-16">
            <div className="rower flex flex-row">

                {/* // box 1 */}
                <div className="box ml-5 flex flex-col p-10 h-fit">
                    <div>
                        <div className="header text-left">
                            <div className="text-3xl font-semibold" >Fuel the Zeal</div>
                            <div className="text-base font-normal mt-2">Become the part of Research Community Today!</div>
                        </div>
                    
                        <div className="benefits flex flex-col text-left mt-5">
                            <Benefits content = "get access to Research Community Knowledge Drive"/>
                            <Benefits content="Become a member of the community"/>
                            <Benefits content="Get the latest news and notifications"/>
                        </div>
                    </div>
                </div>

                {/* box 2 */}
                <div className="box ml-10 border-2 w-2/5 p-10 h-fit rounded-3xl border-slate-300">
                    <div>
                        <div className="signingup flex justify-between">
                            <div className="text-2xl font-semibold">Sign Up</div>
                            <div className=" border-2 rounded-3xl border-slate-300 p-2 text-xs font-semibold">benefits of creating an account</div>
                        </div>
                        
                        <div className="options flex flex-col mt-5">
                            <Input placeholder="username"/>
                            <Input placeholder="email address"/>
                            <Input placeholder="password"/>
                        </div>

                        <div>
                        <GoogleSignIn/>
                        </div>

                        <div className="google text-left mt-5 bg-blue-500 text-center rounded-xl p-2">
                            <button className="w-full">
                                create account
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}
