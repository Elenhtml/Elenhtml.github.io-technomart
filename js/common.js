var slide_button_back = document.querySelector(".main-slider-button-back");
var slide_button_next = document.querySelector(".main-slider-button-next");
var perforators = document.querySelector(".perforators");
var drills = document.querySelector(".drills");
var slide_button_circle_left = document.querySelector(".slide-btn.active");
var slide_button_circle_right = document.querySelector(".slide-btn.dril");

var buttons_buy = document.querySelectorAll(".button-buy");
var modal_message = document.querySelector(".modal-message");
var modal_message_close = document.querySelector(".modal-message-close");

var button_write_us = document.querySelector(".button-write-us");
var write_us = document.querySelector(".modal-write-us");
if (write_us) {
  var modal_write_us_close = write_us.querySelector(".modal-write-us-close");
  var form = write_us.querySelector("form");
  var username = write_us.querySelector("[name=name]");
  var e_mail = write_us.querySelector("[name=e-mail]");
  var userletter = write_us.querySelector("[name=letter]");
  var storage_username = localStorage.getItem("username");
  var storage_e_mail = localStorage.getItem("e_mail");
}

var button_map = document.querySelector(".small-map");
var modal_map = document.querySelector(".modal-map");
if (modal_map) {
  var no_map = document.querySelector(".modal-map-close");
}

slide_button_circle_left.addEventListener("click", function() {
  slide_button_circle_left.classList.add("circle-active");
  slide_button_circle_right.classList.remove("circle-active");
  perforators.classList.add("active-slide");
  drills.classList.remove("active-slide");
});

slide_button_circle_right.addEventListener("click", function() {
  slide_button_circle_right.classList.add("circle-active");
  slide_button_circle_left.classList.remove("circle-active");
  perforators.classList.add("active-slide");
  drills.classList.remove("active-slide");
});

slide_button_back.addEventListener("click", function() {
  slide_button_back.classList.add("circle-active");
  slide_button_next.classList.remove("circle-active");
  perforators.classList.add("active-slide");
  drills.classList.remove("active-slide");
});

slide_button_arrow_right.addEventListener("click", function() {
  slide_button_circle_right.classList.add("circle-active");
  slide_button_circle_left.classList.remove("circle-active");
  drills.classList.add("active-slide");
  perforators.classList.remove("active-slide");
});

buttons_buy.forEach(function(button) {
  button.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_message.classList.add("modal-message-show");
  });
});

modal_message_close.addEventListener("click", function() {
  modal_message.classList.remove("modal-message-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal_message.classList.contains("modal-message-show")) {
      modal_message.classList.remove("modal-message-show");
    }
  }
});

if (write_us) {
  button_write_us.addEventListener("click", function (evt) {
    evt.preventDefault();
    write_us.classList.add("modal-write-us-show");

    if (storage_username && storage_e_mail) {
      username.value = storage_username;
      e_mail.value = storage_e_mail;
      userletter.focus();
    } else {
      username.focus();
    }
  });

  modal_write_us_close.addEventListener("click", function(evt) {
    evt.preventDefault();
    write_us.classList.remove("modal-write-us-show");
    write_us.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!username.value || !e_mail.value || !userletter.value) {
      evt.preventDefault();
      write_us.classList.add("modal-error");
    } else {
      localStorage.setItem("username", username.value);
      localStorage.setItem("e_mail", e_mail.value);
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (write_us.classList.contains("modal-write-us-show")) {
        write_us.classList.remove("modal-write-us-show");
        write_us.classList.remove("modal-error");
      }
    }
  });
}

if (modal_map) {
  button_map.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal_map.classList.add("modal-map-show");
  });

  no_map.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_map.classList.remove("modal-map-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modal_map.classList.contains("modal-map-show")) {
        modal_map.classList.remove("modal-map-show");
      }
    }
  });
}
