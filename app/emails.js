import { send } from "emailjs-com";
import { emails } from "./emailVars";

const emailForm = (() => {
  const emailItput = document.querySelector(".form__input");
  const emailText = document.querySelector(".form__text");
  const emailBtn = document.querySelector(".form__submit-btn");
  const form = document.querySelector(".form");

  let email = "";
  let text = "";

  form.addEventListener("submit", e => {
    e.preventDefault();
    email = emailItput.value;
    text = emailText.value;

    if (email.length && text.length) {
      emailBtn.innerHTML = "Sending...";
      send(
        emails.service,
        emails.template,
        { name: email, notes: text },
        emails.user
      ).then(
        res => {
          emailBtn.innerHTML = "Done!";
          emailText.value = "";
          emailItput.value = "";
        },
        err => {
          console.log(err);
        }
      );
    }
  });
})();
