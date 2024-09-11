var slider = tns({
  container: ".testimonial-content",
  items: 2,
  slideBy: 1,
  autoplay: true,
  loop: true,
  autoplayResetOnVisibility: false,
  autoplayButtonOutput: false,
  autoplay: true,
  nav: false,
  gutter: 30,
  mouseDrag: true,
  controls: false,
  responsive: {
    0: {
      items: 1,
    },
    900: {
      items: 2,
    },
  },
});

var slider = tns({
  container: ".client-content",
  items: 6,
  slideBy: 1,
  loop: true,
  controls: false,
  autoplayResetOnVisibility: false,
  autoplayButtonOutput: false,
  autoplay: true,

  nav: false,
  gutter: 30,
  mouseDrag: true,
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 3,
    },
    900: {
      items: 6,
    },
  },
});

function Filtering() {
  let buttons = document.querySelectorAll(".project-control button");
  let blocks = document.querySelectorAll(".project-card");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      blocks.forEach((block) => {
        block.classList.remove("active");
        block.style.transform = `scale(0)`;
        block.style.opacity = `0`;
        block.style.visibility = `hidden`;
        block.style.width = `0`;
        block.style.marginLeft = `0`;
        block.style.marginRight = `0`;
        block.style.height = `0`;
      });

      blocks.forEach((blk) => {
        if (e.target.dataset.menu == blk.dataset.menu) {
          blk.classList.add("active");
          blk.style.transform = `scale(1)`;
          blk.style.opacity = `1`;
          blk.style.visibility = `visible`;
          blk.style.width = `100%`;
          blk.style.marginLeft = `5px`;
          blk.style.marginRight = `5px`;
          blk.style.height = `190px`;
        }
      });
      if (e.target.dataset.menu == "all") {
        blocks.forEach((block) => {
          block.classList.add("active");
          block.style.transform = `scale(1)`;
          block.style.opacity = `1`;
          block.style.visibility = `visible`;
          block.style.width = `100%`;
          block.style.marginLeft = `5px`;
          block.style.marginRight = `5px`;
          block.style.height = `190px`;
        });
      }
    });
  });
}
Filtering();
