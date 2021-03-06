// const sections = document.querySelectorAll('.section');
// const secBtns = document.querySelectorAll('.controls');
// const secBtn = document.querySelectorAll('.control');
// const allSections = document.querySelectorAll('.main-content');

// function PageTransitions() {
//     //Button click active class
//     for(let i = 0; i < secBtn.length; i++){
//         secBtn[i].addEventListener('click', function(){
//             let currentBtn = document.querySelectorAll('.active-btn');
//             currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
//             this.className += 'active-btn';
//         })
//     }

//     //sections active class
//     allSections.addEventListener('click', (e) =>{
//         const id = e.target.dateset.id;
//         if(id){
//             //remove selected from the other buttons
//             secBtns.forEach((btn)=>{
//                 btn.classList.remove('active');
//             })
//             e.target.classList.add('active');

//             //hide other sections
//             sections.forEach((section)=>{
//                 section.classList.remove('active');
//             })

//             const element = document.getElementById(id);
//             element.classList.add('active');
//         }
//     })
// }

// PageTransitions();

(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();