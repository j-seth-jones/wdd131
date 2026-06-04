const form = document.querySelector("#ticketForm");
const studentOrGuest = document.querySelector("#studentOrGuest");
const notesContainer = document.querySelector("#notesContainer");
const codeContainer = document.querySelector("#codeContainer");
const notes = document.querySelector("#notes");
const codenotes = document.querySelector("#codenotes");
const output = document.querySelector("#output");

function updateNotesField() {
  const value = studentOrGuest.value;

  // Show the correct input container based on student or guest selection
  if (value === "student") {
    notesContainer.hidden = false;
    codeContainer.hidden = true;
    notes.required = true;
    codenotes.required = false;
  } else if (value === "guest") {
    notesContainer.hidden = true;
    codeContainer.hidden = false;
    notes.required = false;
    codenotes.required = true;
  } else {
    notesContainer.hidden = true;
    codeContainer.hidden = true;
    notes.required = false;
    codenotes.required = false;
  }
}

studentOrGuest.addEventListener("change", updateNotesField);
updateNotesField();


function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.studentOrGuest.value;
  const eventDate = form.eventDate.value;
  const note = form.notes.value.trim();
  const guestCode = form.codenotes.value.trim();

  // Student Verification (Must be 9 number)
  if (type === "student" && (note.length !== 9)) {
    output.textContent = "Student I# must be exactly a 9-digit number. Please try again.";
    return;
  }
  
  // Guest Verification (Must be EVENT131)
  if (type === "guest" && guestCode !== "EVENT131") {
    output.textContent = "Access Code is invalid. Please try again.";
    return;
  }

  // Past date Verification
  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  // Ticket Information 
  output.innerHTML = `
  <h2>Ticket Information</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Event Date: ${eventDate}</p>
  <p>Registration Type: ${type === "student" ? "Student (I#: " + note + ")" : "Guest"}</p>
  `;

  form.reset();
  updateNotesField();
});