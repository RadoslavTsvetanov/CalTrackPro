import Image from "next/image";
import Link from "next/link";
import React,{useEffect} from "react";
import {useCookies} from 'react-cookie'
import { useRouter } from "next/router";
export default function Pfp(){
    const [cookies,setCookie] = useCookies(['name']);
    const router = useRouter();
    useEffect(() => {
        console.log(cookies.name);
    })
    return (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        <Link href = "http://localhost:3000/home/user"><Image src="" alt = {cookies.name}/></Link>
    )
}