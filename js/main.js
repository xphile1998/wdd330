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
        },
        {
            label: "Week 5 - Team Assignment - Great Hikes",
            url: 'week5/hiking/hiking-team/index.html'
        },
        {
            label: "Week 6 - Notes",
            url: "week6/wk06_notes.html"
        }, 
        {
            label: "Week 6 - ToDo List Assignment",
            url: "week6/todo-list/index.html"
        },
        {
            label: "Week 7 - Notes",
            url: "week7/w07_notes.html"
        },
        {
            label: "Week 7 - Team Activity",
            url: "week7/team_activity_mine/hiking-complete.html"
        },
        {
            label: "Week 8 - Notes",
            url: "week8/wk08_notes.html"
        },
        {
            label: "Week 8 - Team Activity",
            url: "week8/team_activity/index.html"
        },
        {
            label: "Week 9 - Notes",
            url:"week9/wk09_notes.html"
        },
        {
            label: "Week 9 - Parcel Folder Download & Installation",
            url: "week9/parcel"
        },
        {
            label: "Week 9 - Team Activity",
            url: "week9/team-activity/index-FINISHED.html"
        },
        {
            label: "Week 10 - Notes",
            url: "week10/wk10_notes.html"
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
