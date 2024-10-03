"use strict";

const toggleSidebar = document.querySelector(".toggle-sidebar");
const sidebar = document.querySelector(".sidebar");

toggleSidebar.addEventListener("click", () => {
  const windowInnerWidth = window.innerWidth;

  sidebar.classList.toggle("hidden");

  if (windowInnerWidth < 720) {
    toggleSidebar.classList.add("toggle-sidebar-none");
  }
});

const sidebarClose = document.querySelector(".sidebar-close");

sidebarClose.addEventListener("click", () => {
  const windowInnerWidth = window.innerWidth;

  sidebar.classList.remove("hidden");

  if (windowInnerWidth < 720) {
    toggleSidebar.classList.remove("toggle-sidebar-none");
  }
});
