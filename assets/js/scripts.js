const sideNavBtn = document.querySelector(".side-nav-btn");
const sideNavcloseBtn = document.querySelector(".side-nav-close-btn");
const sideNav = document.querySelector(".side-nav");
// const background = document.querySelector(".background");
const sticky = document.querySelector("header");
const categoriesSec = document.querySelector(".categories-sec");

window.onscroll = () => {
  if (this.scrollY > 100) {
    sticky.classList.add("sticky");
  } else {
    sticky.classList.remove("sticky");
  }
};

if (sideNav) {
  sideNavBtn.addEventListener("click", () => {
    sideNavBtn.classList.toggle("active");
    sideNav.classList.toggle("active");
    // background.classList.toggle("active");
  });

  sideNavcloseBtn.addEventListener("click", () => {
    sideNavBtn.classList.remove("active");
    sideNav.classList.remove("active");
    // background.classList.remove("active");
  });

  // background.addEventListener("click", () => {
  //   sideNavBtn.classList.remove("active");
  //   sideNav.classList.remove("active");
  //   background.classList.remove("active");
  // });
}

const customButtons = document.querySelectorAll(".custom-button");
const bobble = document.querySelectorAll(".bob");

if (customButtons[0] !== undefined || customButtons[0] !== null) {
  customButtons.forEach((customButton, idx) => {
    customButton.addEventListener("click", (e) => {
      let x = e.offsetX;
      let y = e.offsetY;

      console.log(e);

      bobble[idx].style.left = `${x}px`;
      bobble[idx].style.top = `${y}px`;

      bobble[idx].classList.add("active");

      setTimeout(() => {
        bobble[idx].classList.remove("active");
      }, 1000);
    });
  });
}

const faqBtns = document.querySelectorAll(".faq-btn");
const faqBtnImg = document.querySelectorAll(".faq-btn-img");
const faqBtnDesc = document.querySelectorAll(".faq-btn-desc");

if (faqBtns[0] !== undefined || faqBtns[0] !== null) {
  faqBtns.forEach((faqBtn, idx) => {
    faqBtn.addEventListener("click", () => {
      faqBtnImg[idx].classList.toggle("active");
      faqBtnDesc[idx].classList.toggle("active");
    });
  });
}

const moreImageBtn = document.querySelector("#more-images-btn");
const moreImagePopup = document.querySelector(".vendor-more-images");
const moreImageClose = document.querySelector(".close-more-images-btn");
const moreImageBg = document.querySelector(".more-images-bg");

if (moreImageBtn) {
  moreImageBtn.addEventListener("click", () => {
    moreImagePopup.classList.add("active");
  });

  moreImageClose.addEventListener("click", () => {
    moreImagePopup.classList.remove("active");
  });

  moreImageBg.addEventListener("click", () => {
    moreImagePopup.classList.remove("active");
  });
}

// wizard form
const inputGroups = document.querySelectorAll(".input-groups");

if (inputGroups[0] !== undefined) {
  const innerGroup = document.querySelector(".inner-group");
  const nextBtn = document.querySelectorAll("#next-btn");
  const prevBtn = document.querySelectorAll("#prev-btn");
  let dividedValue = [];
  let listOfValue = [];
  let lastValue = 0;

  inputGroups.forEach((inputGroup, idx) => {
    innerGroup.style.width = `${idx + 1}00%`;

    let length = idx + 1;
    let divide = 100 / length;

    listOfValue[idx] = divide;
  });

  lastValue = listOfValue.slice(-1).pop();

  dividedValue[0] = 0;

  for (let i = 0; i < inputGroups.length; i++) {
    dividedValue[i + 1] = dividedValue[i] + lastValue;

    let target = inputGroups[i].getAttribute("id");

    const removeAttribute = () => {
      inputGroups[i].setAttribute("id", "");

      setErrorEmail(null);
      setErrorContactNumber(null);
      setErrorPanNumber(null);
    };

    if (target === "errorOccered") {
      innerGroup.style.transform = `translateX(-${dividedValue[i]}%)`;

      setTimeout(removeAttribute, 3000);
    }
  }

  nextBtn.forEach((nBtn, idx) => {
    let newIdx = idx + 1;
    nBtn.addEventListener("click", (e) => {
      e.preventDefault();
      innerGroup.style.transform = `translateX(-${dividedValue[newIdx]}%)`;
    });
  });

  prevBtn.forEach((pBtn, idx) => {
    pBtn.addEventListener("click", (e) => {
      e.preventDefault();
      innerGroup.style.transform = `translateX(-${dividedValue[idx]}%)`;
    });
  });
}

let formInputLabels = document.querySelectorAll(".form-input-label");
let line = document.querySelectorAll(".line");

const getData = (data) => {
  formInputLabels.forEach((formInputLabel, idx) => {
    let dataAttributeName = data.getAttribute("name");
    let labelAttributeName = formInputLabel.getAttribute("for");

    if (dataAttributeName === labelAttributeName) {
      if (data.getAttribute("name") === dataAttributeName) {
        if (data.value.length) {
          formInputLabel.classList.add("shrink");
          if (line[0]) {
            line[idx].classList.add("shrink");
          }
        } else {
          formInputLabel.classList.remove("shrink");
          if (line[0]) {
            line[idx].classList.remove("shrink");
          }
        }
      }
    }
  });
};

let valueDisplays = document.querySelectorAll(".num");
let interval = 6000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

let contactButton = document.querySelector(".contact-button");
let contactPopup = document.querySelector(".contact-popup");

if (contactButton) {
  contactButton.addEventListener("click", () => {
    contactButton.classList.toggle("active");
    contactPopup.classList.toggle("active");
  });
}

const hiddenImageSec = document.querySelector(".hidden-image");
const bgForClose = document.querySelector(".bg-for-close");
const imageCloseBtn = document.querySelector("#imageCloseBtn");
const hiddenImage = document.querySelector(".hidden-image img");
const images = document.querySelectorAll(".clickToView");

if (hiddenImageSec) {
  images.forEach((image) => {
    image.addEventListener("click", () => {
      const imageUrl = image.getAttribute("src");

      hiddenImage.setAttribute("src", imageUrl);

      hiddenImageSec.classList.add("active");
    });
  });

  imageCloseBtn.addEventListener("click", () => {
    hiddenImageSec.classList.remove("active");
    console.log("hello");
  });

  bgForClose.addEventListener("click", () => {
    hiddenImageSec.classList.remove("active");
  });
}

// Hignlight Link
const navLink = document.querySelectorAll(".navLinkBtn");
const pathname = location.pathname;

let filterPathname = pathname;
filterPathname = filterPathname.replace(/.html/, "");
filterPathname = filterPathname.replace("/", "");

// filterPathname = filterPathname.replace("{% url '", "");
// filterPathname = filterPathname.replace("' %}", "");

navLink.forEach((link, idx) => {
  let url = link.getAttribute("href");
  // filterUrl = url.replace("{% url '", "");
  // filterUrl = url.replace("' %}", "");
  filterUrl = url.replace(".html", "");
  // filterUrl = url.replace("/", "");

  if (filterPathname === filterUrl) {
    if (`${filterUrl}.html` === url) {
      link.classList.add("active");
    }
  }
});
