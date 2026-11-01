// Replace this address with the official company email before publishing.
const COMPANY_EMAIL = "hello@yourdomain.co.za";
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("enquiry-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent("Website enquiry - " + data.get("service"));
  const body = encodeURIComponent(
    "Name: " + data.get("name") + "\nEmail: " + data.get("email") +
    "\nService: " + data.get("service") + "\n\nMessage:\n" + data.get("message")
  );
  if (COMPANY_EMAIL === "hello@yourdomain.co.za") {
    document.getElementById("form-status").textContent =
      "Please update COMPANY_EMAIL in script.js to your official company email before publishing.";
    return;
  }
  window.location.href = "mailto:" + COMPANY_EMAIL + "?subject=" + subject + "&body=" + body;
});