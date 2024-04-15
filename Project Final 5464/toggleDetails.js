function toggleDetails() {
    var moreInfo = document.getElementById("moreInfo");
    var learnMoreButton = document.getElementById("learnMoreButton");
    var showLessButton = document.getElementById("showLessButton");

    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
        learnMoreButton.style.display = "none";
        showLessButton.style.display = "block";
    } else {
        moreInfo.style.display = "none";
        learnMoreButton.style.display = "block";
        showLessButton.style.display = "none";
    }
}
