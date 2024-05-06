import React, { useState } from "react";
import { useEffect } from "react";

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/vaibhav-chittora')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data)
            })


    }, [])

    return (
       
            <div className="text-white p-5 text-4xl bg-gray-600">Git-hub Followers - {data.followers}
                <img src={data.avatar_url} alt="" width={250}
                />
            </div>
     


    )
}

export default Github;