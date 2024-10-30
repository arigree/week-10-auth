"use client";

import Link from "next/link";

export default function PeepNamePage({ params }){
return(
    <main>
        <h1>Peep Name:</h1>
        <Link href={`/peep/${peepName}/hairColor`}>Hair Color</Link>
    </main>
)
}