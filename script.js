const portal = document.getElementById("portal");
const memoryCard = document.getElementById("memoryCard");
const closeCard = document.getElementById("closeCard");

portal.addEventListener("click", () => {
  memoryCard.hidden = false;
  portal.setAttribute("aria-expanded", "true");
  portal.classList.add("portal-open");
  memoryCard.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

closeCard.addEventListener("click", () => {
  memoryCard.hidden = true;
  portal.setAttribute("aria-expanded", "false");
  portal.classList.remove("portal-open");
});