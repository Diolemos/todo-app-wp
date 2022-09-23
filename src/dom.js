
export default function d(){
 const openBtn = document.getElementsByClassName("openBtn")
 const closeBtn = document.getElementById("closeBtn")
  
  function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.querySelector("body").style.marginLeft = "250px";
  }
  
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.querySelector("body").style.marginLeft= "0";
}

openBtn[0].addEventListener("click", openNav)
console.log("test")

closeBtn.addEventListener("click", closeNav)

}


