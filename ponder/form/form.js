// Grab the form element from the DOM, print it out

const form = document.querySelector("#fsyForm");

console.log(form);

// Create an event listener on the form
// calls a function when "submit"

form.addEventListener("submit", event => {
    event.preventDefault();
    console.log(event);

    const firstName = form.firstName.value;
    console.log(firstName);

    //retrieve the last name, email print to console
    
    const lastName = form.lastName.value;
    console.log(lastName);

    const campuses = form.campus;
    console.log(campuses);

    const email = form.email.value;
    console.log(email);
    
})