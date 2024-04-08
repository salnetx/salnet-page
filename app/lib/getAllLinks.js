const getAllLinks = async ()=>{
    const result = await fetch(
        "http://localhost:3000/api"
    )
    return result.json()
}
export default getAllLinks;