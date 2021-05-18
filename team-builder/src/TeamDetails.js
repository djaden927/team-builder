import React, { useState } from "react";

export default function TeamDetails(props){
    const {name, role} = props;

    return(
        <div>
            <h3>{name}, {role}</h3>
        </div>
    )
}