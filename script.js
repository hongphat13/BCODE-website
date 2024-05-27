$(function () {
  const section = document.getElementById("top-content");
  const navMenu = $("#nav-menu");
  const headerElem = $("header");

  $("#testimonials-slider").slick({
    infinte: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<a href="#" class="slick-arrow slick-prev"><</a>',
    nextArrow: '<a href="#" class="slick-arrow slick-next">></a>',
  });

  $("#nav-toggle").on("click", () => {
    navMenu.css("right", "0");
  });

  $("#close-flyout").on("click", () => {
    navMenu.css("right", "-100%");
  });

  $(document).on("click", (e) => {
    let target = $(e.target);
    if (target.closest("#nav-toggle").length > 0) {
      return false;
    }
    navMenu.css("right", "-100%");
  });

  $("#main-container").scroll(() => {
    const scrollTop = $("#main-container").scrollTop();

    if (scrollTop > 0) {
      headerElem.css("background", "rgba(180, 180, 180, 0.9)");
    } else {
      headerElem.css("background", "transparent");
    }

    headerElem.css(
      scrollTop >= 200
        ? { padding: "0.1rem 0", "box-shadow": "0 -2px 10px 1px #999" }
        : { padding: "0.8rem 0", "box-shadow": "none" }
    );
  });

  $("#main-container").trigger("scroll");

  const images = [
    'url("pic/pexels-binyaminmellish-1396122.jpg")',
    'url("pic/pexels-binyaminmellish-1396132.jpg")',
    'url("pic/pexels-binyaminmellish-106399 (1).jpg")',
    'url("pic/pexels-expect-best-79873-323780.jpg")',
  ];

  var imageNo = 0;

  function topBgImgCarousel() {
    section.style.backgroundImage = images[imageNo];
    imageNo++;

    if (imageNo >= 4) {
      imageNo = 0;
    }
  }
  setInterval(topBgImgCarousel, 4500);
});

document.addEventListener("DOMContentLoaded", () => {
  const phongIcon = document.querySelector('.service[data-target="phong"]');
  const dichvuIcon = document.querySelector('.service[data-target="dichvu"]');
  const phongModal = document.getElementById("phong-modal");
  const dichvuModal = document.getElementById("dichvu-modal");
  const closeBtns = document.querySelectorAll(".close");

  phongIcon.addEventListener("click", () => {
    phongModal.style.display = "block";
  });

  dichvuIcon.addEventListener("click", () => {
    dichvuModal.style.display = "block";
  });

  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      phongModal.style.display = "none";
      dichvuModal.style.display = "none";
    });
  });

  window.addEventListener("click", (event) => {
    if (event.target === phongModal || event.target === dichvuModal) {
      phongModal.style.display = "none";
      dichvuModal.style.display = "none";
    }
  });
});
