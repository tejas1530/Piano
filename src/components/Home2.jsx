import React from "react";
import { Addcolors } from "./Addcolors";
import { Bulb } from "./Bulb";
import { Bulbmodern } from "./Bulbmodern";
import { Animals } from "./Animals";
export const Home2 = () => {
    return (
        <React.Fragment>
            <Bulbmodern />  
            <Addcolors />
            <Bulb />
            <Animals/>
        </React.Fragment>
    )
}