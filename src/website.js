//create hidden sidebar
//sidebar will be hidden and activated by a menu btn
//all todos will go into the default project and will have no priority, until edited by more curious users  
   //current project
    //add project btn

   


function createSidebar(){
    const sidebar = document.createElement("sidebar")
    sidebar.classList.add("sidebar","hidden")

    return sidebar
}    

//create <main>
    
function createMain(){
    const main = document.createElement("main")

        //input: New todo 
        //btn add todo
        //list of todos 

    return main    
}



//create footer
function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
  
    const copyright = document.createElement("p");
    copyright.textContent = `Made with 💚 in Joinville, Brazil.`;
  
    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/DioLemos";
  
    const githubIcon = document.createElement("i");
    githubIcon.classList.add("fa-brands");
    githubIcon.classList.add("fa-github");
  
    githubLink.appendChild(githubIcon);
    footer.appendChild(copyright);
    footer.appendChild(githubLink);
  
    return footer;
  }


//loadApp
function loadApp(){
    const body = document.body 
    body.appendChild(createSidebar())
    body.appendChild(createMain())
    body.appendChild(createFooter())

}    