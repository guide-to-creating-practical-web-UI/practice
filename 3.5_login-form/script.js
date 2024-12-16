const isEmail = (email) => {
  const [id, domain] = email.split("@");

  if (!id || !domain) return false;

  if (id.length < 1 || domain.length < 1) return false;

  const domainParts = domain.split(".");

  if (domainParts.length < 2) return false;

  return true;
};

const idInput = document.getElementById("id-input");

idInput.addEventListener("input", (e) => {
  const value = e.target.value;

  if (isEmail(value)) {
    document
      .getElementById("id-input-error-message")
      .classList.add("display-none");
  } else {
    document
      .getElementById("id-input-error-message")
      .classList.remove("display-none");
  }
});
