// Dark Mode
document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
document.getElementById("increase").addEventListener("click", () => {
  count++;
  document.getElementById("counter").textContent = count;
});
document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  document.getElementById("counter").textContent = count;
});

// FAQ Toggle
document.getElementById("faqBtn").addEventListener("click", () => {
  document.getElementById("faqAnswer").classList.toggle("hidden");
});

// Tabs
const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.add("hidden"));
    
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.remove("hidden");
  });
});
