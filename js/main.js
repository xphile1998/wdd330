// Creating the Ordered List function
function myList() {

    // Defining the list of links
    const links = [
        {
            label:  "Week 1 - Doing Stuff",
            url: "week1/story_editor.html"
        },
        {
            label: "Week 1 - Notes",
            url: "week1/notes.html"
        }
    ]

    links.forEach(v => {
        let li = document.createElement("li");

        let a = document.createElement("a");

        let text = document.createTextNode(v.label);

        a.appendChild(text);
        a.setAttribute("href", v.url);
        li.appendChild(a);
        let list = document.getElementById("mainIndex");

        list.appendChild(li);
    })
}

myList();
