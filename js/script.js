const viewSiteInDevices = () => {
  const theURL = document.getElementById("theurl").value;
  console.log(`The URL is: ${theURL}`);

  //set the urls
  document.getElementById("device-desktop").src = theURL;
  document.getElementById("device-tablet").src = theURL;
  document.getElementById("device-smartphone").src = theURL;
}

const saveScreenshotDesktop = () => {
  html2canvas(
    document.querySelector("#device-desktop"),
    {
      "allowTaint" : true
    }
  ).then(canvas => {
    document.body.appendChild(canvas)
  });
}



document.getElementById("btnViewDevices").addEventListener("click", viewSiteInDevices);
document.getElementById("theurl").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    viewSiteInDevices();
  }
});

