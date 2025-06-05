// Loading animation
let percent = 0;
const loading = setInterval(() => {
  percent++;
  document.getElementById("loading-percentage").textContent = percent + "%";
  if (percent >= 100) {
    clearInterval(loading);
    document.getElementById("loading-screen").style.display = "none";
    showScreen("start-screen");
  }
}, 30);

// Fungsi menampilkan 1 screen dan menyembunyikan lainnya dengan transisi
function showScreen(id) {
  const screens = document.querySelectorAll(".screen");

  screens.forEach(screen => {
    if (screen.classList.contains("show")) {
      screen.classList.remove("show");
      setTimeout(() => screen.classList.add("hidden"), 1000); // delay tunggu transisi
    }
  });

  const nextScreen = document.getElementById(id);
  nextScreen.classList.remove("hidden");
  setTimeout(() => nextScreen.classList.add("show"), 50);
}

// Tombol "Mulai"
document.getElementById("start-btn").addEventListener("click", () => {
  const music = document.getElementById("bg-music");
  if (music) music.play();

  currentScreenIndex = 0;
  showScreen(screens[currentScreenIndex]);
});

// Tombol "Next"
const screens = ["part-kenangan", "part-ucapan", "part-harapan", "part-akhir"];
let currentScreenIndex = 0;

document.querySelectorAll(".next-btn").forEach(button => {
  button.addEventListener("click", () => {
    currentScreenIndex++;
    if (currentScreenIndex < screens.length) {
      showScreen(screens[currentScreenIndex]);
    }
  });
});
