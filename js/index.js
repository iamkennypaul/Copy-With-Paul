// HOME SECTION

export function swiper() {
  // Swiper JS Code
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

export function navHide() {
  // Navigation Bar Hide Appear
  $(document).ready(function () {
    let backScroll = window.scrollY;

    window.onscroll = function () {
      var currentScroll = window.scrollY;
      if (backScroll > currentScroll) {
        // if you scroll up, show the total height of the navbar
        document.getElementById("navbarku").style.top = "0";
      } else {
        // if you scroll down, don't make the navbar show
        document.getElementById("navbarku").style.top = "-100px";
      }
      backScroll = currentScroll;
    };
  });
}

export function heroHover() {
  // hero section
  const heroBtn = document.querySelector(".hero-btn");

  heroBtn.addEventListener("mouseover", changeHover);
  heroBtn.addEventListener("mouseout", changeBack);

  function changeHover() {
    heroBtn.style.color = "#fff";
    heroBtn.style.backgroundColor = "#000";
    heroBtn.style.transition = "all 1s";
  }

  function changeBack() {
    heroBtn.style.color = "#000";
    heroBtn.style.backgroundColor = "#fff";
    heroBtn.style.transition = "all 1s";
  }
}

export function scrollTop() {
  // scroll Top Button
  const scrollBtn = document.querySelector(".scrollTop");

  scrollBtn.addEventListener("mouseover", changeScroll);
  scrollBtn.addEventListener("mouseout", changeScrollBack);

  function changeScroll() {
    scrollBtn.style.color = "#fff";
    scrollBtn.style.backgroundColor = "rgba(181, 166, 66, 0.7)";
    scrollBtn.style.transition = "all .3s";
  }

  function changeScrollBack() {
    scrollBtn.style.color = "#000";
    scrollBtn.style.backgroundColor = "#fff";
    scrollBtn.style.transition = "all .3s";
  }
}

export function introEffect() {
  // Intro Effect
  function scrollAppear() {
    var introText = document.querySelector(".intro-text");
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (introPosition < screenPosition) {
      introText.classList.add("intro-appear");
    }
  }

  window.addEventListener("scroll", scrollAppear);
}

export function cardBtnHover() {
  // card buttons hover effect
  const cardBtn = document.getElementsByClassName("blogDiv-btn"); // cardBtn is an array so we have to loop through it
  for (let i = 0; i < cardBtn.length; i++) {
    cardBtn[i].addEventListener("mouseover", changeCardBtn);
    cardBtn[i].addEventListener("mouseout", changeCardBack);

    function changeCardBtn() {
      cardBtn[i].style.color = "#fff";
      cardBtn[i].style.backgroundColor = "#B5A642";
      cardBtn[i].style.border = "1px solid white";
      cardBtn[i].style.transition = "all 1s";
    }

    function changeCardBack() {
      cardBtn[i].style.color = "#000";
      cardBtn[i].style.backgroundColor = "#fff";
      cardBtn[i].style.border = "1px solid #777";
      cardBtn[i].style.transition = "all 1s";
    }
  }
}

export function fBtnHover() {
  // footer social links
  const socialLinks = document.getElementsByClassName("social-links");
  for (let i = 0; i < socialLinks.length; i++) {
    socialLinks[i].addEventListener("mouseover", changeSocial);
    socialLinks[i].addEventListener("mouseout", changeSocialBack);

    function changeSocial() {
      socialLinks[i].style.borderColor = "gold";
      socialLinks[i].style.transform = "scale(1.1)";
      socialLinks[i].style.transition = "0.6s";
    }

    function changeSocialBack() {
      socialLinks[i].style.borderColor = "rgba(128, 128, 128, 0.2)";
      socialLinks[i].style.transform = "scale(1)";
      socialLinks[i].style.transition = "0.6s";
    }
  }
}

export function scrollAni() {
  // scroll Top animation
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 1000) {
        $("i").css({
          opacity: "1",
          "pointer-events": "auto",
        });
      } else {
        $("i").css({
          opacity: "0",
          "pointer-events": "none",
        });
      }
    });
    $("i").click(function () {
      $("html").animate(
        {
          scrollTop: 0,
        },
        500
      );
    });
  });
}

export function cookie() {
  // Cookie Javascript
  const cookieBox = document.querySelector(".wrapper-cookie"),
    acceptBtn = cookieBox.querySelector(".buttons button");

  acceptBtn.addEventListener("click", () => {
    cookieBox.classList.remove("active");
    // after we remove the "active class", we add some data to the function
    // setting cookie for the month, after 1 month cookie will be expired automatically
    document.cookie = "CookieBy=Neuron; max-age=" + 60 * 60 * 24 * 30;
    if (document.cookie) {
      // if the above cookie is set
      cookieBox.classList.remove("active");
    } else {
      alert("Cookies can't be set!"); // if cookie can't be set the error alert will show
    }
  });

  setTimeout(() => {
    if (!document.cookie) {
      // if the above cookie is set
      cookieBox.classList.add("active");
    }
  }, 2000);
}

export function signUp() {
  const form = document.querySelector("form"),
    emailField = form.querySelector(".email-field"),
    emailInput = emailField.querySelector(".email"),
    passField = form.querySelector(".create-password"),
    passInput = passField.querySelector(".password"),
    cPassField = form.querySelector(".confirm-password"),
    cPassInput = cPassField.querySelector(".cPassword");

  // Email Validtion
  function checkEmail() {
    const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emaiPattern)) {
      return emailField.classList.add("invalid"); //adding invalid class if email value do not mathced with email pattern
    }
    emailField.classList.remove("invalid"); //removing invalid class if email value matched with emaiPattern
  }

  // Hide and show password
  const eyeIcons = document.querySelectorAll(".show-hide");

  eyeIcons.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
      const pInput = eyeIcon.parentElement.querySelector("input"); //getting parent element of eye icon and selecting the password input
      if (pInput.type === "password") {
        eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
        return (pInput.type = "text");
      }
      eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
      pInput.type = "password";
    });
  });

  // Password Validation
  function createPass() {
    const passPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passInput.value.match(passPattern)) {
      return passField.classList.add("invalid"); //adding invalid class if password input value do not match with passPattern
    }
    passField.classList.remove("invalid"); //removing invalid class if password input value matched with passPattern
  }

  // Confirm Password Validtion
  function confirmPass() {
    if (passInput.value !== cPassInput.value || cPassInput.value === "") {
      return cPassField.classList.add("invalid");
    }
    cPassField.classList.remove("invalid");
  }

  // Calling Funtion on Form Sumbit
  form.addEventListener("submit", (e) => {
    e.preventDefault(); //preventing form submitting
    checkEmail();
    createPass();
    confirmPass();

    //calling function on key up
    emailInput.addEventListener("keyup", checkEmail);
    passInput.addEventListener("keyup", createPass);
    cPassInput.addEventListener("keyup", confirmPass);

    if (
      !emailField.classList.contains("invalid") &&
      !passField.classList.contains("invalid") &&
      !cPassField.classList.contains("invalid")
    ) {
      location.href = form.getAttribute("action");
    }
  });
}

export function logIn() {
  const toggle = document.querySelector(".toggle"),
    input = document.querySelector(".password");

  toggle.addEventListener("click", () => {
    if (input.type === "password") {
      input.type = "text";
      toggle.classList.replace("fa-eye-slash", "fa-eye");
    } else {
      input.type = "password";
      toggle.classList.replace("fa-eye", "fa-eye-slash");
    }
  });
}

export function multiText() {
  const txts = document.querySelector(".animate-text").children,
    txtsLen = txts.length;
  let index = 0;
  const textInTimer = 3000,
    textOutTimer = 2800;

  function animateText() {
    for (let i = 0; i < txtsLen; i++) {
      txts[i].classList.remove("text-in", "text-out");
    }
    txts[index].classList.add("text-in");

    setTimeout(function () {
      txts[index].classList.add("text-out");
    }, textOutTimer);

    setTimeout(function () {
      if (index == txtsLen - 1) {
        index = 0;
      } else {
        index++;
      }
      animateText();
    }, textInTimer);
  }

  window.onload = animateText;
}

// About SECTION
export function multiTexts() {
  const text = document.querySelector(".sec-text");

  const textLoad = () => {
    setTimeout(() => {
      text.textContent = "Freelancer";
    }, 0);
    setTimeout(() => {
      text.textContent = "Blogger";
    }, 4000);
    setTimeout(() => {
      text.textContent = "Youtuber";
    }, 8000);
  };
}

// FAQ SECTION
export function faqAcc() {
  let li = document.querySelectorAll(".faq-text li");
  for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", (e) => {
      let clickedLi;
      if (e.target.classList.contains("question-arrow")) {
        clickedLi = e.target.parentElement;
      } else {
        clickedLi = e.target.parentElement.parentElement;
      }
      clickedLi.classList.toggle("showAnswer");
    });
  }
}
