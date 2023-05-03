import {useCookies} from 'react-cookie'
import React from 'react'
export default function Comp(){
    const [cookies,setCookie] = useCookies(['name']);
    React.useEffect(() => {
        console.log(cookies.name);
    })
    return (
        <div>hi</div>
    )
}