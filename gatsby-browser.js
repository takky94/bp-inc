exports.onClientEntry = () => {
  console.log("We've started!");
  // ここにローディング処理
};

exports.onRouteUpdate = ({ location }) => {
  animationBox();
};

const animationBox = () => {
  const targets = document.querySelectorAll('.work__box');
  const options = {
    root: null,
    rootMargin: '-10% 0px',
    threshold: 0,
  };
  const doWhenIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('work__box--shown');
      }
    });
  };
  const observer = new IntersectionObserver(doWhenIntersect, options);
  targets.forEach((target) => {
    observer.observe(target);
  });
};
