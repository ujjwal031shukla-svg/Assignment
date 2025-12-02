document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;
  const inputs = document.querySelectorAll("#registrationForm input, #registrationForm select");

  inputs.forEach(input => {
    const errorMsg = input.nextElementSibling;
    errorMsg.textContent = "";
    input.classList.remove("error-input");

    if (!input.checkValidity()) {
      isValid = false;
      input.classList.add("error-input");
      errorMsg.textContent = "Please enter a valid value.";
    }
  });

  if (isValid) {
    // Store data temporarily for use on next page
    const formData = {
      name: document.getElementById("name").value,
      fatherName: document.getElementById("fatherName").value,
      age: document.getElementById("age").value,
      gender: document.getElementById("gender").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      aadhar: document.getElementById("aadhar").value
    };

    sessionStorage.setItem("farmerRegistration", JSON.stringify(formData));

    window.location.href = "location.html";
  }
});
