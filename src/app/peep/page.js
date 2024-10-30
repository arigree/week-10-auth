"use client";
import { useState} from 'react';



export default function PeepPage(){
    const [peepName, setPeepName] = useState("");

    function changePeepName(e){
        setPeepName(e.currentTarget.value);
    }
    function goToPeep(){
        console.log(peepName)
    }
    return(
        <main>
            <h1>Peeps</h1>
            <input value={peepName} onChange={changePeepName}></input>
            <button>Go to Peep!</button>
        </main>
    )
}