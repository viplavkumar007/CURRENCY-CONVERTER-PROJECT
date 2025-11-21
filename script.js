//Currency Converter project using The concepts that I have learned so far
const baseUrl="https://hexarate.paikama.co/api/rates/latest/USD?target=INR"
const fimg=document.querySelector("#fimg");
const timg=document.querySelector("#timg")
const amt=document.querySelector("#amt")
const ca=document.querySelector("#ca")
const btn=document.querySelector("#btn")
const fcurrency=document.querySelector(".from select")
const tcurrency=document.querySelector(".to select")

const dropdowns=document.querySelectorAll(".dropdown select");
for(let select of dropdowns){
    for (currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        select.append(newOption)

    };
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target)
        console.log(evt.target,"I am target")
    })
};
const updateFlag=(element)=>{
    console.log(element)
    let currCode=element.value;
    let countryCode=countryList[currCode]
    console.log(countryCode)
    if(currCode==="eur"){
        countryCode="GB"
    }
    else if(currCode==="inr"){
        countryCode="IN"
    }
    else if(currCode==="usd"){
        countryCode="US"
    }
    newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
    console.log(element,"I am element")
    console.log(element.parentElement,"I am parent")
};
btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    let amount=amt.value;
    if(amount.value="" ||amount<1 ||amount===0)
        amt.value=1
    url=`https://hexarate.paikama.co/api/rates/latest/${fcurrency.value}?target=${tcurrency.value}`;
    console.log(fcurrency.value,tcurrency.value)
    let response=await fetch(url);
    let ans=await response.json()
    console.log(ans)
    finalAns=(ans.data.mid)*amt.value;
    ca.innerText=finalAns


});

