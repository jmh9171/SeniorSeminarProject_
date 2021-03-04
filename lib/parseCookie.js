import Cookie from "cookie";

export default function parseCookies(req){
    return Cookie.parse(req ? req.headers.Cookie || "" : document.cookie);
}