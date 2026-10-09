const base_url="https://api.frankfurter.dev/v2/rate/USD/INR"
const dropdown=document.querySelectorAll(".dropdown select");

for(let select of dropdows){
    for(code in countryList){
    console.log(Code,countryList[code]);
    newOption.innerText=currcode;
    newOption.value=currcode;
    
    select.append(newOption);
    //after thati html country option delete
}
}