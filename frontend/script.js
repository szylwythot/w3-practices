function loadEvent(eventObject){
    // console.log(eventObject);
    // const //dont want to change its value
    // let // wanna change the value
    const rootElement = document.getElementById("root");
    // console.dir(document);
    // console.dir(rootElement); //this way in every browser it will be shown on the Console log the log() isnot

    const listOfSectionElements = document.querySelectorAll("section"); //the parameter shuold be like a css selector
    console.log(listOfSectionElements);

    rootElement.classList.add("newClass");

    let anchors = ""; //
    for (const sectionElement of listOfSectionElements) {
        // sectionElement.classList.add("newClass");
        // anchors = anchors + `<a> ${ sectionElement.id } </a>`; // `` this is the multiple line string, ${} template literal
        anchors += `<a href="#${ sectionElement.id }"> ${ sectionElement.id } </a>`;
    }
    console.log(anchors);
    rootElement.insertAdjacentHTML("afterbegin", `<header>${anchors}</header>`); // afterbegin a legelső elemek elé kerül

    // listOfSectionElements[0].classList.add("newClass");
    // listOfSectionElements[1].classList.add("newClass");
    // listOfSectionElements[2].classList.add("newClass");
    // listOfSectionElements[3].classList.add("newClass");

    console.dir(rootElement);
}

window.addEventListener("load", loadEvent);