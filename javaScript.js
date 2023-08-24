let url = "https://catfact.ninja/fact";

async function getFact(){
    try{
        let res = await axios.get(url);
         return (res.data.fact);
        
    }catch(e){
        console.log("error is ",e);
    }
}


let btn = document.querySelector('button');
let para = document.querySelector('p');

btn.addEventListener('click', async ()=>{
    para.innerText = "Generating...."
    let fact = await getFact();
    para.innerText = fact;
})

// async function getFact(url){
//     try{let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);
//     }catch(e){
//         console.log("error is ",e);
//     }
//     console.log("finished!")
// }