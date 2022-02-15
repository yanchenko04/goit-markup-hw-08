(() => {
  const openMenuBtn = document.querySelector("[data-menu-open]");
  const closeMenuBtn = document.querySelector("[data-menu-close]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const body = document.querySelector("body");

  openMenuBtn.addEventListener("click", toggleMenu );
  closeMenuBtn.addEventListener("click", toggleMenu );
  
  
  function toggleMenu(){
      mobileMenuRef.classList.toggle("is-open");
      body.classList.toggle("no-scroll");
      }
  
})()