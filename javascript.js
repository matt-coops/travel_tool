"use strict";

const topBar = document.querySelector("#top-bar");
const calendarContainer = document.querySelector("#calendar-container");
const newTripBtn = document.querySelector("#new-trip-btn");
const newTripModal = document.querySelector("#new-trip-modal");

let duration = 0;

const picker = new easepick.create({
  element: document.querySelector("#datepicker"),
  css: ["https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"],
  zIndex: 10,
  format: "DD MMM YYYY",
  inline: false,
  AmpPlugin: {
    dropdown: {
      months: true,
      years: true,
      minYear: 2023,
      maxYear: 2033,
    },
    resetButton: true,
    darkMode: false,
  },
  plugins: ["AmpPlugin", "RangePlugin"],
  setup(picker) {
    picker.on("select", (e) => {
      duration = (e.detail.end - e.detail.start) / 1000 / 60 / 60 / 24;
      document.querySelector(
        ".duration"
      ).textContent = `Duration: ${duration} days`;
    });
  },
});

newTripBtn.addEventListener("click", function () {
  newTripModal.classList.remove("hidden");
  topBar.classList.add("hidden");
});

newTripModal
  .querySelector(".btn-modal-close")
  .addEventListener("click", function () {
    newTripModal.classList.add("hidden");
  });

newTripModal
  .querySelector(".btn-modal-create")
  .addEventListener("click", function () {
    calendarContainer.classList.remove("hidden");
  });

// const projectObject = {
//   Name: "name",
//   Dates: { start: "start", end: "end" },
//   Duration: "duration",
//   Days: [{}],
// };
