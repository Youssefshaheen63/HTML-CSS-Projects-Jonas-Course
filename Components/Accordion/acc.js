const icons = document.querySelectorAll(".icon");

icons.forEach((icon) => {
  icon.addEventListener("click", function (e) {
    // console.log(e.target.closest(".item"));
    // if (!e.target.closest(".item").classList.contains("open")) {
    //   e.target.closest(".item").classList.add("open");
    // } else {
    //   e.target.closest(".item").classList.remove("open");
    // }
    e.target.closest(".item").classList.toggle("open");
  });
});
