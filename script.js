const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      entry.target.classList.add('animation-fadein');
      return;
    }

    entry.target.classList.remove('animation-fadein');
  
  });
});

for (element of document.getElementsByClassName("fadein")) {
  observer.observe(element);
}

let prevScrollpos = wwindow.scrollY;
let prevScrollposSmooth = window.scrollY + 50;

const elementHeader = document.getElementById("header");
setTimeout(() => {
  window.onscroll = () => {
    const currentScrollPos = window.scrollY;
  
    if (prevScrollpos >= currentScrollPos) {
      elementHeader.classList.remove("header-hide");
      elementHeader.classList.add("header-show");
      document.getElementById("menu-list").classList.remove("header-hide");
  
      prevScrollposSmooth = currentScrollPos + 100;
      
    } else if(prevScrollposSmooth < currentScrollPos) {
      elementHeader.classList.add("header-hide");
      elementHeader.classList.remove("header-show");
  
      document.getElementById("menu-list").classList.add("header-hide");
  
      prevScrollposSmooth = currentScrollPos;
      closeDropDownMenu();
    } else {
      closeDropDownMenu();
    }
    prevScrollpos = currentScrollPos;
  }
}, 1000)
window.onclick = function(event) {
  if ((!event.target.matches('#menu-toggle') && 
  !event.target.matches('.menu-button'))) {
    closeDropDownMenu();
  }
}
document.addEventListener("touchend", (event) => {
  if ((!event.target.matches('#menu-toggle') && 
  !event.target.matches('.menu-button'))) {
    closeDropDownMenu();
  }
})

function workSelectedButton(pNumber) {
  for (const li of document.querySelectorAll('#ex-list>li')) {
    li.classList.remove('ex-item-active');
}
document.getElementById("ex-list-" +pNumber).classList.add('ex-item-active');

showWorkText(pNumber);
}
function showWorkText(pNumber) {
  for (let i = 1; i <= 4; i++) {
    document.getElementById("ex-work-item-" + i).style.display = "none";
  }
  document.getElementById("ex-work-item-" + pNumber).style.display = "block";
}
function closeDropDownMenu() {
  document.getElementById("menu-toggle").checked = false;
}
function showHeader() {
  if(elementHeader.classList.contains("header-hide")) {
    elementHeader.classList.remove("header-hide");
    elementHeader.classList.add("header-show");
  }
}

