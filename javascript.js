"use strict";

const projectBar = document.querySelector("#project-bar");
const calendarContainer = document.querySelector("#calendar-container");
const newProjectBtn = document.querySelector("#new-project-btn");
const newProjectModal = document.querySelector("#new-project-modal");

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

newProjectBtn.addEventListener("click", function () {
  newProjectModal.classList.remove("hidden");
  projectBar.classList.add("hidden");
});
