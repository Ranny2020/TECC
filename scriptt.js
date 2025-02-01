// JavaScript for handling likes and comments
let likeCount = 0;

document.getElementById("likeButton").addEventListener("click", function () {
  likeCount++;
  document.getElementById("likeCount").innerText = likeCount;
});

document.getElementById("commentButton").addEventListener("click", function () {
  const commentInput = document.getElementById("commentInput");
  const commentText = commentInput.value;
  if (commentText) {
    const commentElement = document.createElement("div");
    commentElement.className = "comment";
    commentElement.innerText = commentText;
    document.getElementById("commentsList").appendChild(commentElement);
    commentInput.value = ""; // Clear the input
  }
});

// Image upload functionality
document.getElementById("uploadButton").addEventListener("click", function () {
  const fileInput = document.getElementById("imageUpload");
  const files = fileInput.files;

  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imgContainer = document.createElement("div");
      imgContainer.style.width = "150px";
      imgContainer.style.display = "inline-block";
      imgContainer.style.margin = "10px";
      imgContainer.innerHTML = `<img src="${e.target.result}" style="width: 100%; height: auto;"/>`;
      document.getElementById("uploadedImages").appendChild(imgContainer);
    };
    reader.readAsDataURL(files[i]);
  }
});
