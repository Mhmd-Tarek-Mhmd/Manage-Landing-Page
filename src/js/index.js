function navToggler(e) {
  const linksWrapper = e.target.nextElementSibling;
  console.log(linksWrapper);

  linksWrapper.classList.toggle("opened");
  if (linksWrapper.classList.contains("opened")) {
    e.target.firstElementChild.src = "images/icons/icon-close.svg";
    document.body.style.overflow = "hidden";
    e.target.ariaLabel = "Hide links";
  } else {
    e.target.firstElementChild.src = "images/icons/icon-hamburger.svg";
    document.body.style.overflow = "auto";
    e.target.ariaLabel = "Show links";
  }
}

function validate(e) {
  e.preventDefault();

  if (!e.target.checkValidity()) {
    e.target.classList.add("error");
  } else {
    e.target.classList.remove("error");
    e.target.submit();
  }
}

(function slider() {
  const Modal = {
    currentSlide: 2,
  };

  const Controller = {
    getCurrentSlide: () => Modal.currentSlide,
    setCurrentSlide: (i) => (Modal.currentSlide = i),

    init: function () {
      Views.init();
    },
  };

  const Views = {
    init: function () {
      const $ = document.querySelector.bind(document);
      const $$ = document.querySelectorAll.bind(document);
      const { setCurrentSlide, getCurrentSlide } = Controller;

      $(".slider").style.setProperty("--n", $(".slides").childElementCount);
      $$(".dots button").forEach((btn) => {
        btn.onclick = (e) => {
          setCurrentSlide(e.target.ariaLabel.split(" ")[1]);

          Helpers.addActive(
            $(".slider .slide.active"),
            $$(".slider .slide")[getCurrentSlide() - 1]
          );
          Helpers.addActive(
            $(".dots button.active"),
            $$(".dots button")[getCurrentSlide() - 1]
          );
        };
      });
    },

    render: function () {},
  };

  const Helpers = {
    addActive: function (prevEle, ele) {
      prevEle.classList.remove("active");
      ele.classList.add("active");
    },
  };

  Controller.init();
})();
