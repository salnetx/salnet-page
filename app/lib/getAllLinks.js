const getAllLinks = async()=>{
    const  result = await fetch('http://www.salnet.xyz/api')
    return result.json()
}

export default getAllLinks;