"use client";
import { useState} from 'react';
import { useRouter } from 'next/compat/router';



export default function PeepPage(){
    const [peepName, setPeepName] = useState("");
    const router = useRouter();

    function changePeepName(e){
        setPeepName(e.currentTarget.value);
    }
    function goToPeep(){
        router.push(`/peeps/${peepName}`);
        
    }
    return(
        <main>
            <h1>Peeps</h1>
            <input value={peepName} onChange={changePeepName}></input>
            <button>Go to Peep!</button>
        </main>
    )
}