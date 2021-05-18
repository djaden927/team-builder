import React, { useState } from "react";
import TeamDetails from "./TeamDetails";

export default function Team(props){
    const {details} = props;
    console.log(details)
    return(
        <div>
            <h1>{details.team}</h1>
            <TeamDetails name={details.name} role={details.role}/>
        </div>
    )
}