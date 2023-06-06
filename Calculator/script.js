let string = "";
let buttons = document.querySelectorAll(".button");
// 'forEach' can't be used on obejcts so they are converted to array by using 'Array.from'.
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "x") e.target.innerHTML = "*";
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector(".input").value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector(".input").value = string;
    } else {
      string += e.target.innerHTML;
      document.querySelector(".input").value = string;
    }
  });
});
