tailwind.config = {
  darkMode: "class",
};

document.getElementById("switch-button").addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
