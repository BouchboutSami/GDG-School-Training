// <i class="minus circle icon"></i>
// <i class="plus circle icon"></i>
// body > div > div.container > div.FAQ > div:nth-child(1) > div.question > i
const items = document.querySelectorAll("i");
const answers = document.querySelectorAll(".answer");

items.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    // icon

    for (let i = 0; i < items.length; i++) {
      if (i == index) {
        items[i].classList.remove("plus");
        items[i].classList.add("minus");
        answers[i].style.display = "flex";
      } else {
        items[i].classList.add("plus");
        items[i].classList.remove("minus");
        answers[i].style.display = "none";
      }
    }
  });
});
