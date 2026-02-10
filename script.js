onload = () => {
    document.body.classList.remove("container");
  };

  const wrapper = document.querySelector(".wrapper");
  const openBtn = document.getElementById("openBtn");
  const nextBtn = document.getElementById("nextBtn");
  
  openBtn.addEventListener("click", () => {
    wrapper.classList.add("open");
    openBtn.style.display = "none";
    nextBtn.style.display = "inline-block";
  });
  
  nextBtn.addEventListener("click", () => {
    window.location.href = " https://iann0851.github.io/punya-kuina/";
  });
  
