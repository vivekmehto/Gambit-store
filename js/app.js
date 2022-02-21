const filterBtn = document.getElementById("filter-btn");
const filterList = document.querySelector(".filter-list-toggle");

filterBtn.addEventListener("click", () => {
  if (filterList.style.display === "none") {
    filterList.style.display = "block";
  } else {
    filterList.style.display = "none";
  }
});
