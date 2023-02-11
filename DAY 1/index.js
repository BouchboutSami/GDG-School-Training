var listA = document.querySelectorAll(".navlink");
console.log(listA.length);
listA.forEach(function (item) {
  item.addEventListener("click", function () {
    listA.forEach(function (it) {
      it.classList.remove("active");
    });
    item.classList.add("active");
  });
});
