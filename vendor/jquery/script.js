const star = document.querySelectorAll(".star i");
console.log(star); 

//loop 
star.forEach((star, index1) =>{
    star.addEventListener("click", () => {
        console.log("clicked");
    })
})