function loadEvent(eventObject){

    const rootElement = document.getElementById("root");

    const listOfSectionElements = document.querySelectorAll("section"); //the parameter shuold be like a css selector
    console.log(listOfSectionElements);

    rootElement.classList.add("newClass");

    let anchors = "";
    for (const sectionElement of listOfSectionElements) {
        if(sectionElement.getAttribute("data-show")){
            anchors += `<a href="#${ sectionElement.id }"> ${ sectionElement.getAttribute("data-title") } </a>`;
        }
    }
    console.log(anchors);
    rootElement.insertAdjacentHTML("afterbegin", `<header>${anchors}</header>`); // afterbegin a legelső elemek elé kerül

    console.dir(rootElement);
}

window.addEventListener("load", loadEvent);