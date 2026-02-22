function toggleMenu(){
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

const carousels = document.querySelectorAll(".carousel");

carousels.forEach(carousel=>{
  let index=0;
  const images=carousel.querySelectorAll("img");

  setInterval(()=>{
    images[index].classList.remove("active");
    index=(index+1)%images.length;
    images[index].classList.add("active");
  },4000);
});