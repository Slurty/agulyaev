<script>
const timeAnimationOut = 500;
const fadeLinks = document.querySelectorAll('.js-fade-link');

if (fadeLinks && fadeLinks.length) {

  fadeLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const fadePage = document.querySelector('[data-fade-page]');
      fadePage.classList.add('active');

      setTimeout(() => {
        const target = link.getAttribute('target');
        const url = link.getAttribute('href');

        console.log(link)
        if (url) {
          if (target === '_blank') {
            window.open(url, target);
          } else {
            window.location = url;
          }
        }
      }, timeAnimationOut);

      setTimeout(() => {
        fadePage.classList.remove('active');
      }, 700);
    });
  });
}

const timeAnimationIn = 500;
  const fadePage = document.querySelector('[data-fade-page]');

  setTimeout(() => {
    fadePage.classList.remove('active');
  }, timeAnimationIn);
</script>



<script src="https://unpkg.com/lenis@1.0.45/dist/lenis.min.js"></script>

<script>
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// lenis scroll to anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    lenis.scrollTo(this.getAttribute('href'))
  });
})
</script>
