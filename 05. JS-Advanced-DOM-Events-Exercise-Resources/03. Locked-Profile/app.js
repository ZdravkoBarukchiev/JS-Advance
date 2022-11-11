function lockedProfile() {
  let buttons = Array.from(
    document.querySelectorAll(".profile button")
  ).forEach((b) => b.addEventListener("click", toggle));
  

  function toggle(e) {
    let profile = e.target.parentElement;
    const isActive = profile.querySelector(
      'input[type="radio"][value="unlock"]'
    ).checked;
    if (isActive) {
      let infoDiv = profile.querySelector("div");
      if (e.target.textContent == "Show more") {
        infoDiv.style.display = "block";
        e.target.textContent = "Hide it";
      } else {
        infoDiv.style.display = "";
        e.target.textContent = "Show more";
      }
    }
  }
}
