// Code EyesOnMe Component Here
import React from "react";
function EyesOnMe(){

    const handleFocus=()=>{
        console.log("Good!");
    }
    const handleBlur=()=>{
        console.log("Hey! Eyes On Me!")
    }
    return (
        <button onFocus={handleFocus} onBlur={handleBlur}>Eyes On Me</button>
    )
}
export default EyesOnMe;