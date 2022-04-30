
async function retrieveImage(){
    const max = 49;
    let n = Math.floor(Math.random() * max)
    const resp = await fetch("/")
    const body = await resp.json()

    if(resp.ok){
        return body
    }
    console.log("Erro with Api")
}

const Api = {retrieveImage}
export default Api