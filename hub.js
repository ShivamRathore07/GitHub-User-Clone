import header from "./components/header.js"
let head = document.getElementById("header")
head.innerHTML = header();

//  let api = "https://api.github.com/users/ShivamRathore07/repos"

let input_box = document.getElementById("search-input")
input_box.addEventListener("keypress",()=>{
    getData(event)
})

const getData = async (event) =>{
    try {
        if(event.code === "Enter"){

        let input = input_box.value
        let res = await fetch(`https://api.github.com/users/${input}/repos`);
        let data = await res.json()
         
        console.log(data)
        displayData(data)
        
        }
        
    } catch (error) {
      console.log(error)  
    }

}
const displayData = (data) =>{
     
    document.getElementById("box1").innerHTML=""

    data.map(function(elem){
     let img = document.getElementById("pro_pic")
     img.src= elem.owner.avatar_url

     let name = document.getElementById("name")
     name.innerText = elem.owner.login   
    
    let div = document.createElement("div")
    div.setAttribute("id","result2")
    
    let imge = document.getElementById("profile-img")
    imge.src = elem.owner.avatar_url;

    
    let h4 = document.createElement("h4")
    h4.innerText=elem.full_name
    h4.style.color="teal"

    let p = document.createElement("p")
    p.innerText = elem.created_at

    let p1 = document.createElement("p")
    p1.innerText = elem.description

    let a = document.createElement("a")
    a.href = elem.html_url


      a.append(h4)
      div.append(a,p1,p)
      
    
    document.getElementById("box1").append(div)


    
})
}