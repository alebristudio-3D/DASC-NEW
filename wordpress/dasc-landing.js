(function () {
  var form = document.getElementById("dasc-whatsapp-form");

  if (!form) {
    return;
  }

  var whatsappNumber = "5212223606438";

  function setError(field, message) {
    var error = form.querySelector('[data-error-for="' + field + '"]');
    if (error) {
      error.textContent = message;
    }
  }

  function clearErrors() {
    var errors = form.querySelectorAll(".dasc-form__error");
    for (var i = 0; i < errors.length; i += 1) {
      errors[i].textContent = "";
    }
  }

  function isValidPhone(value) {
    var clean = value.replace(/[^\d]/g, "");
    return clean.length >= 10;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors();

    var name = (form.querySelector('[name="name"]') || {}).value || "";
    var phone = (form.querySelector('[name="phone"]') || {}).value || "";
    var interest = (form.querySelector('[name="interest"]') || {}).value || "";

    name = name.trim();
    phone = phone.trim();
    interest = interest.trim();

    var hasError = false;

    if (!name) {
      setError("name", "Escribe tu nombre.");
      hasError = true;
    }

    if (!phone) {
      setError("phone", "Escribe tu número de WhatsApp.");
      hasError = true;
    } else if (!isValidPhone(phone)) {
      setError("phone", "Ingresa un número válido.");
      hasError = true;
    }

    if (!interest) {
      setError("interest", "Selecciona tu interés principal.");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    var message = [
      "Hola, quiero información sobre DASC.",
      "Mi nombre es " + name + ".",
      "Mi WhatsApp es " + phone + ".",
      "Me interesa " + interest + ".",
      "Quiero saber cómo funciona la modalidad HyFlex y cuál podría ser mi siguiente paso."
    ].join(" ");

    window.open(
      "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message),
      "_blank",
      "noopener,noreferrer"
    );
  });
})();
