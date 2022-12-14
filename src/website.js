

//all todos will go into the default project and will have no priority, until edited by more curious users  
   //current project
    //add project btn

   

//create hidden sidebar
//sidebar will be hidden and activated by a menu btn
function createSidebar(){
    const sidebar = document.createElement("sidebar")
    sidebar.id ="sidebar"

    //project list
    const listContainer = document.createElement("div")
    listContainer.classList.add("ProjectListContainer")
    const list = document.createElement("ul");
    list.classList.add("projectList")
    listContainer.appendChild(list)
    
    //placeholder code to be replace by loadlist function
    const firstLi = document.createElement("li")
    const listText = document.createElement("p")
    listText.textContent = "Default Project"
    firstLi.appendChild(listText)
    list.appendChild(firstLi)
    sidebar.appendChild(listContainer)

    //close btn
    const closeBtn = document.createElement("button")
    closeBtn.id = "closeBtn"
    closeBtn.textContent = "x"

    sidebar.appendChild(closeBtn)

    //add project btn


    return sidebar
}    

//create <main>
    
function createMain(){

    
    const main = document.createElement("main")

        //input: New todo 
    const form = document.createElement("div")
    form.classList.add("input-section")

    const input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("placeholder", "..Walk the dog" )
    input.classList.add("input")
    form.appendChild(input)
        //btn add todo
    const button = document.createElement("button")
    button.classList.add("btn")
    button.textContent = "Add todo"

        //list of todos 
        const listContainer = document.createElement("div")
        listContainer.classList.add("todoListContainer")
        const list = document.createElement("ul");
        list.classList.add("todoList")
        listContainer.appendChild(list)
        const firstLi = document.createElement("li")
        const listText = document.createElement("p")
        listText.textContent = "Default todo"
        firstLi.appendChild(listText)
        list.appendChild(firstLi)

        // menubtn
        const menuBtn = document.createElement("button")
        menuBtn.classList.add("openBtn")

main.appendChild(menuBtn)        
main.appendChild(form)
main.appendChild(button)
main.appendChild(listContainer)
    return main    
}



//create footer
function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
  
    const copyright = document.createElement("p");
    copyright.textContent = `Made with ???? in Joinville, Brazil.`;
  
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
export default function loadApp(){
    const body = document.body 
    body.appendChild(createSidebar())
    body.appendChild(createMain())
    body.appendChild(createFooter())

}    