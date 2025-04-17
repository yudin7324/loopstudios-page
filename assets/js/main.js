document.addEventListener('DOMContentLoaded', () => {
  const selectors = {
    NAV: '.js-nav',
    BURGER: '.js-burger',
  };
  const classes = {
    ACTIVE: 'active',
  }

  const nav = document.querySelector(selectors.NAV);
  const burger = document.querySelector(selectors.BURGER);

  if(!nav || !burger) {
    return;
  }

  burger.addEventListener('click', toggleNav);

  function toggleNav() {
    if(nav.classList.contains(classes.ACTIVE)) {
      nav.classList.remove(classes.ACTIVE);
      burger.classList.remove(classes.ACTIVE);
    } else {
      nav.classList.add(classes.ACTIVE);
      burger.classList.add(classes.ACTIVE);
    }
  }
});
