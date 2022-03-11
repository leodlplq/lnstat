import { useParams } from "react-router-dom";
import React from "react";



export default function Match(){
    let { slug } = useParams()


    return (
        <div>
            A match {slug}
        </div>
    )
}