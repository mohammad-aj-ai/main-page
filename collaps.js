if(window.innerWidth < 1200){
    var i = document.getElementById("secaond-nav").style.display = "block";
}
else{
    var i = document.getElementById("secaond-nav").style.display = "none";
}

function coll()
{
    var displyBlockPosts = 0;
    var i = 1;
    document.querySelectorAll(".post-cont").forEach(element => {
        if(window.getComputedStyle(element).display == "none"){
            element.style.display = "flex";
            displyBlockPosts++;
        }
    });;
    document.getElementById('show').innerHTML = "نمایش کمتر";
    if(displyBlockPosts == 0){
        document.querySelectorAll(".post-cont").forEach(element => {
            if(window.getComputedStyle(element).display == "flex"
            && i > 8){
                element.style.display = "none";
            }
            i++;
        });;
        document.getElementById('show').innerHTML = "نمایش بیشتر";
    }
    
}
window.addEventListener("resize", function(){
    if(window.innerWidth < 1200){
        document.getElementById("secaond-nav").style.display = "block";
    }
    else{
        document.getElementById("secaond-nav").style.display = "none";
         document.querySelector(".aside").style.display = "none";
    }
  });
function menuOpener()
{
    var aside = document.querySelector(".aside");
    if(window.getComputedStyle(aside).display === "none"){
        aside.style.display = "block";
        document.getElementById("burger-btn").style.transform = 'rotate('+ 180 +'deg)';
    }
    else{
        aside.style.display = "none";
        document.getElementById("burger-btn").style.transform = 'rotate('+ 0 +'deg)';
    }
    document.getElementById("burger-btn").style.transition = "0.5s";
    aside.style.transition = "0.5s";
    
}
