const btns = document.querySelectorAll(".btn");
const stages = document.querySelectorAll(".stage");

const nextStage = (e) => {
    // console.log("Clicked");
    console.log(e.target.textContent);
    switch(e.target.textContent) {
        case "Åben mail": 
            console.log("Start was click");
            stages[0].classList.remove("active");
            stages[1].classList.add("active");
        break;
        case "1":
            stages[1].classList.remove("active");
            stages[2].classList.add("active");  
        break;
        case "2":
            stages[1].classList.remove("active");
            stages[3].classList.add("active");  
        break;
        case "3":
            stages[1].classList.remove("active");
            stages[4].classList.add("active");  
        break;
        case "start forfra":
            stages[2].classList.remove("active");
            stages[3].classList.remove("active");
            stages[4].classList.remove("active");
            stages[0].classList.add("active");
        break;
        default: console.log("Don't know");
    }
}

for (const btn of btns) {
    btn.addEventListener("click", nextStage);
}