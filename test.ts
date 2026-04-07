/* /////////////////////////////////////////
 */
// 1. MouseEvent - Ändra färg baserat på musens position
const boxen = document.getElementById("boxen") as HTMLDivElement;

boxen.addEventListener("mousemove", (event: MouseEvent) => {
  const x = event.offsetX;
  const y = event.offsetY;

  boxen.style.backgroundColor = `rgb(${x}, ${y}, 150)`;
  boxen.innerText = `X: ${x}, Y: ${y}`;
});

// 2. KeyboardEvent - Reagera på vad användaren skriver

const input = document.getElementById("key-input") as HTMLInputElement;
const feedback = document.getElementById("feedback") as HTMLParagraphElement;

input.addEventListener("keydown", (event: KeyboardEvent) => {
  feedback.innerText = `Du tryckte på: ${event.key}`;
});

const toggleBtn = document.getElementById("toggle-btn") as HTMLButtonElement;

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const currentBg = document.body.style.backgroundColor;
    document.body.style.backgroundColor =
      currentBg === "antiquewhite" ? "white" : "antiquewhite";
  });
}

const title = document.getElementById("main-title") as HTMLHeadElement;
const box = document.getElementById("color-box") as HTMLDivElement;
const button = document.getElementById("change-btn") as HTMLButtonElement;

button.addEventListener("click", () => {
  title.innerText = "TypeScript har tagit över!";
  box.style.backgroundColor = "lightblue";
  box.innerText = "färgen har ändrats!";
});

/* ///////////////////////////////// */
