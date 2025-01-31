function showMore(exhibitId) {
  const moreInfo = document.getElementById(exhibitId);
  if (moreInfo.style.display === "none") {
    moreInfo.style.display = "block";
  } else {
    moreInfo.style.display = "none";
  }
}
