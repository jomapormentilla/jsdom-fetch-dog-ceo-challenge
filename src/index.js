console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", function(e){
    // fetch(imgUrl).then(response => response.json()).then(json => {
    //     json["message"].map((res)=>{
    //         let img = document.createElement("img")
    //         img.src = res
    //         document.querySelector("div#dog-image-container").append(img)
    //     })
    // })
})

const output = function( obj ){
    Object.keys(obj).forEach(function(res){
        let li = document.createElement("li")
        li.innerText = res
        document.querySelector("ul#dog-breeds").append(li)
        li.addEventListener("click", function(e){
            this.style.color = "red"
        })
    })
}

let response
fetch(breedUrl).then(response => response.json()).then(json => {
    response = json.message
    output( response )
})

const dropdown = document.getElementById("breed-dropdown")
dropdown.addEventListener("change", function(e){
    document.querySelectorAll("ul#dog-breeds li").forEach((li) => {li.remove()})
    if (this.value === "a") {
        filtered("a")
    } else if (this.value === "b") {
        filtered("b")
    } else if (this.value === "c") {
        filtered("c")
    } else if (this.value === "d") {
        filtered("d")
    }
})

const filtered = function( letter ) {
    Object.keys(response).forEach(function(res){
        if (res[0] == letter){
            let li = document.createElement("li")
            li.innerText = res
            document.querySelector("ul#dog-breeds").append(li)
        }
    })
}