import {useCookies} from 'react-cookie'
export function SetCookieHandler(name:string){
    const [cookies,setCookie] = useCookies();
    setCookie('name',name,{
        path:'/',
        maxAge: 30 * 24 * 60 * 60
    })
}
export function RetrieveCookie(){
    const [cookies,setCookie] = useCookies(['name']);
    return cookies;
}