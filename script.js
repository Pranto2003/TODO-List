document.querySelector(".plus").addEventListener("click", function () {
  document.getElementById("taskForm").style.display = "block";
});

document.getElementById("newTaskForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get values from the form inputs
  let title = document.getElementById("taskTitle").value;
  let time = document.getElementById("taskTime").value;
  let date = document.getElementById("taskDate").value;
  let day = document.getElementById("taskDay").value;

  // Call the function to add the task card
  addTask(title, time, date, day);

  // Reset form and hide it
  document.getElementById("newTaskForm").reset();
  document.getElementById("taskForm").style.display = "none";
});

function addTask(title, time, date, day) {
  let html = `
    <div class="task">
      <div class="title">
        <h2>${title}</h2>
      </div>
      <div class="info">
        <div class="time">
          <h4>${time}</h4>
        </div>
        <div class="date">
          <h4>${date}</h4>
        </div>
        <div class="day">
          <h4>${day}</h4>
        </div>
      </div>
    </div>`;

  document.querySelector(".content").innerHTML += html;
}
