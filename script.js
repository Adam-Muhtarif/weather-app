function initWeather() {
  document.getElementById("location").textContent = "Unknown City";
  document.querySelector(".desc").textContent = "No Information Available";
  document.querySelector(".c").textContent = "Error";
}
initWeather();

document.querySelector(".btn").addEventListener("click", () => {
  console.log(document.getElementById("search").value);

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${
      document.getElementById("search").value
    }&appid=2765900c2cb0b5190b3a05f4dd4b8fb6`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById("location").textContent = data.name;
      document.querySelector(".desc").textContent = data.weather[0].description;
      document.querySelector(".c").textContent = data.main.temp;
    })
    .catch((reason) => {
      console.log(reason);
      initWeather();
    });
});
