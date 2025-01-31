//add event listener to buttons
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    alert("button clicked");
  });
});
//add event listener to form submissin
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector('input[type="text"]').value;
  const message = document.querySelector("textarea").value;
  console.log("Name:${name}, Email:${email}, Message:${message}");
});
//add event listener to expandable images
document.querySelectorAll("expandable-image");
