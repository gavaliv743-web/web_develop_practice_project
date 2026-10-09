const URL="https://mcp.aimlapi.com/mcp";


const getfacts=async()=>{
    console.log("Geting /fetching data:-")
    let response= await fetch(URL);
    console.log(response);
    //json format
    let data=await response.json();
    console.log(data);
}
