
const url = 'https://randomuser.me/api/';
export default async function getUsers(){
    const req = await fetch(url)
    const res = await req.json();

    return res
}