const linkButton = document.querySelectorAll(".icons,.share-icon");

linkButton.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const getLink = e.target.parentElement.getAttribute("href");
    const copyLinkToClipBoard = navigator.clipboard.writeText(getLink);

    alert("Your link copied to clipboard");
  })
})
