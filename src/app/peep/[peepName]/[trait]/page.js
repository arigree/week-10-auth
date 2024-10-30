"use client";
export default function PeepTrait({ params }){
    console.log(params)
    return(
        <main>
            <h1>Peep Traits for {params.peepName}</h1>
            <p>{params.trait}</p>
        </main>
    )
}