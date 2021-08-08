import React from "react";
import { useState, useEffect } from "react";


const Sandbox = () => {
    const lifeCycleMethods = () => {
        //mount part
        console.log("component mounts")
        return () => {
            //unmount part
            alert("GOODBYE")
        }
    }
    useEffect(lifeCycleMethods,[])
    return(
        <div>
            SANDBOX
        </div>
    )
}

export default Sandbox;