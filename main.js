const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

if (!(menuToggle instanceof HTMLButtonElement) || !(siteNav instanceof HTMLElement)) {
  throw new Error("No se pudo inicializar la navegación.");
}

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menú");
  siteNav.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Abrir menú" : "Cerrar menú");
  siteNav.classList.toggle("is-open", !isExpanded);
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    menuToggle.focus();
  }
});

const year = document.querySelector("#current-year");
if (!(year instanceof HTMLElement)) {
  throw new Error("No se encontró el elemento del año.");
}
year.textContent = String(new Date().getFullYear());

const clock = document.querySelector(".analog-clock");
const hourHand = document.querySelector(".clock-hand--hour");
const minuteHand = document.querySelector(".clock-hand--minute");
const secondHand = document.querySelector(".clock-hand--second");

if (
  !(clock instanceof HTMLElement) ||
  !(hourHand instanceof HTMLElement) ||
  !(minuteHand instanceof HTMLElement) ||
  !(secondHand instanceof HTMLElement)
) {
  throw new Error("No se pudo inicializar el reloj analógico.");
}

function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;

  hourHand.style.transform = `translateX(-50%) rotate(${hours * 30 + minutes * 0.5}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minutes * 6 + seconds * 0.1}deg)`;
  secondHand.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;
  clock.setAttribute(
    "aria-label",
    `Hora local: ${now.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })}`,
  );
}

updateClock();
window.setInterval(updateClock, 1000);











