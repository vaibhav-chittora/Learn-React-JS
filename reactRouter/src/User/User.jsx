import React from "react";
import { useParams } from "react-router-dom";



function User(){

    const {id} = useParams()
    return(
        <>
        <div className="p-3 text-3xl bg-gray-500 text-white"> User Page by  - {id} </div>
        </>
    )
}

export default User