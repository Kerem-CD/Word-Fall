document.addEventListener('DOMContentLoaded', () => {
    //? Get all elements with class 'interactive'
    const activities = document.getElementsByClassName('interactive');

    //* Loop through the interactive elements
    for (let i = 0; i < activities.length; i++) {
        //! Add click event listener to each interactive element
        activities[i].addEventListener('click', () => {
            //* Add 'selected' class to the clicked element
            activities[i].classList.add('selected');
            // Log the id of the clicked element to the console
            console.log(activities[i].id);
            
            
            //* Loop through all interactive elements again
            for (let j = 0; j < activities.length; j++) {
                //! Remove 'selected' class from all elements except the clicked one
                if (activities[j] != activities[i]) {
                    activities[j].classList.remove('selected');
                }
            }
        })
    }
    //* Add click event listener to the submit button
    document.getElementById('submit').addEventListener('click', () => {
        //* Get the value of the name input
        const name = document.getElementById('name').value;
        //* Get the value of the time input
        const time = document.getElementById('time').value*1000;
        //* Get the value of the score input
        const score = document.getElementById('score').value;
        //* Get the value of the id input
        const id = document.getElementById('number').value;
        //* Get the templateId id
        const templateId = document.getElementsByClassName('selected')[0].id
        //* Create a new object with the input values
        const obj = {
            name: name,
            time: time,
            score: score,
            templateId: templateId,
            activityId: id

        }
        //* Fetch the api endpoint
        fetch('/api/addentry', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        }).then((res) => {
            location.href = "https://wordwall.net/resource/" + id;
        })
    })
})