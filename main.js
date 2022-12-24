const nav=document.querySelector('nav');
const ul=document.querySelector('nav ul');
const lightbtn=document.querySelector('.sun');


//appearence effect
const observer = new IntersectionObserver((entries) =>{
   entries.forEach((entry) => {
           if (entry.isIntersecting){
            entry.target.classList.add('show');
           }
           else{
            entry.target.classList.remove('show');
           }
   });
});

const hiddenelements=document.querySelectorAll('.effect');
hiddenelements.forEach((el) => observer.observe(el));



//nav effect
document.addEventListener("scroll",function (){
    let current = "";
    if (scrollY >= 70) {
       nav.classList.add("active-nav");
       ul.classList.add("active");
    }
    else {nav.classList.remove("active-nav");
          ul.classList.remove("active");        
}
})

//scroll to the top button
const showOnPx = 900;
const backToTopButton = document.querySelector(".scroll-up-button")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("caché")
  } else {
    backToTopButton.classList.add("caché")
  }
})
backToTopButton.addEventListener("click", function (){
   document.body.scrollIntoView({
    behavior: "smooth",
  });
})




//light mode
lightbtn.addEventListener("click",function () {
       document.body.classList.toggle("light-mode");
       if(document.body.classList.contains('light-mode')){
        lightbtn.src='./assets/images/icons8-new-moon-48.png'
       }
       else{
        lightbtn.src='./assets/images/icons8-summer-48.png'
       }
    
})



//collapsibles
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("activee");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });

}


//pop up
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector(".donate");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//menu
const items=document.querySelector('nav ul');
const navbutton=document.querySelector('.menu');
const ligne1=document.querySelector('.ligne1');
const ligne2=document.querySelector('.ligne2');
const ligne3=document.querySelector('.ligne3');
navbutton.addEventListener("click",function (){
    items.classList.toggle("active-ligne");
    ligne1.classList.toggle("active-ligne1");
    ligne2.classList.toggle("active-ligne2");
    ligne3.classList.toggle("active-ligne3");
})
