// Creating the Ordered List function
function myList() {

    // Defining the list of links
    const links = [
        {
            label: "Week 1 - Notes",
            url: "week1/wk01_notes.html"
        },
        {
            label:  "Week 1 - Doing Stuff",
            url: "week1/story_editor.html"
        },
        {
            label: "Week 2 - Notes",
            url: "week2/wk02_notes.html"
        },
        {
            label: "Week 2 - Team Assignment",
            url: "week2/teamwork2.html"
        },
        {
            label: "Week 3 - Notes",
            url: "week3/wk03_notes.html"
        },
        {
            label: "Week 3 - Teamwork Assignment",
            url: "week3/teamwork3.html"
        },
        {
            label: "Week 3 - JavaScript30 - Day 1 Lesson - JS Drum Kit",
            url: "week3/javascript30/day1/index.html"
        },
        {
            label: "Week 3 - JavaScript30 - Day 2 Lesson - Clock",
            url: "week3/javascript30/day2/clock.html"
        },
        {
            label: "Week 3 - JavaScript30 - Day 3 Lesson - CSS Variables & JS",
            url: "week3/javascript30/day3/variables.html"
        },
        {
            label: "Week 3 - JavaScript30 - Day 4 Lesson - Array Cardio Day 1",
            url: "week3/javascript30/day4/cardio.html"
        },
        {
            label: "Week 4 - Notes",
            url: "week4/wk04_notes.html"
        },
        {
            label: "Week 4 - Team Assignment - Tic Tac Toe",
            url: "week4/youtube_lesson/index.html"
        },
        {
            label: "Week 5 - Notes",
            url: "week5/wk05_notes.html"
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
