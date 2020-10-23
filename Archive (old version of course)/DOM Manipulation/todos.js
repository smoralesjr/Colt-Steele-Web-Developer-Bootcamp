var lis = document.querySelectorAll("li");


for (let count = 0; count < lis.length; count++) {
  lis[count].addEventListener("mouseover", function() {
    this.classList.add("selected");
  });
  lis[count].addEventListener("mouseout", function() {
    this.classList.remove("selected");
  });

  lis[count].addEventListener("click", function() {
    this.classList.toggle("done");
  });
}