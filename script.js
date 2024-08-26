document.querySelector(".plus").addEventListener("click", function () {
  let title = prompt("Please enter the task name");
  let time = prompt("Enter the time when you want to start it (e.g., 9.00 PM)");
  let date = prompt("Enter the date (e.g., 25/8/2024)");
  let day = prompt("Enter the day when you want to complete it (e.g., Sunday)");

  addTask(title, time, date, day);

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
});
