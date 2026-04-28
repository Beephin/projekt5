const btns = document.querySelectorAll(".btn, .btn-valg");
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
            console.log("1 was click");
            stages[1].classList.remove("active");
            stages[2].classList.add("active");  
        break;
        case "2":
            console.log("2 was click");
            stages[1].classList.remove("active");
            stages[3].classList.add("active");  
        break;
        case "3":
            console.log("3 was click");
            stages[1].classList.remove("active");
            stages[4].classList.add("active");  
        break;
        case "start forfra":
            console.log("Forfra was click");
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