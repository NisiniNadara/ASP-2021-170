function toggleDetails() {
    // Get the elements by their IDs
    var moreInfo = document.getElementById("moreInfo");
    var learnMoreButton = document.getElementById("learnMoreButton");
    var showLessButton = document.getElementById("showLessButton");

    // Check if the moreInfo section is currently displayed
    if (moreInfo.style.display === "none") {
        // Display the moreInfo section and the Show Less button
        moreInfo.style.display = "block";
        learnMoreButton.style.display = "none";
        showLessButton.style.display = "block";
    } else {
        // Hide the moreInfo section and the Show Less button
        moreInfo.style.display = "none";
        learnMoreButton.style.display = "block";
        showLessButton.style.display = "none";
    }
}