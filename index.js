function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let dateElement = losAngelesElement.querySelector(".date");
    let timeElement = losAngelesElement.querySelector(".time");
    let time = moment().tz("America/Los_Angeles");

    dateElement.innerHTML = time.format("MMMM Do YYYY");
    timeElement.innerHTML = time.format("h:mm:ss [<small>]A[</small>]");
  }

  // Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let dateElement = parisElement.querySelector(".date");
    let timeElement = parisElement.querySelector(".time");
    let time = moment().tz("Europe/Paris");

    dateElement.innerHTML = time.format("MMMM Do YYYY");
    timeElement.innerHTML = time.format("h:mm:ss [<small>]A[</small>]");
  }

  // Tokyo (new 3rd city ✅)
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let dateElement = tokyoElement.querySelector(".date");
    let timeElement = tokyoElement.querySelector(".time");
    let time = moment().tz("Asia/Tokyo");

    dateElement.innerHTML = time.format("MMMM Do YYYY");
    timeElement.innerHTML = time.format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (!cityTimeZone) return;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
    </div>
    <a href="index.html">⬅ Back to homepage</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
