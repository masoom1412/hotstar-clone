let movies = [
    {
      name: "Doctor Strange: Multiverse of Madness",
      des: "Doctor Strange in the Multiverse of Madness is a 2022 American superhero film based on Marvel Comics featuring the character Doctor Strange.",
      image: "./images/ds.webp",
    },
    {
      name: "falcon and the winter soldier",
      des: "Following the events of 'Avengers: Endgame,' Sam Wilson/Falcon and Bucky Barnes/Winter Soldier team up in a global adventure that tests their abilities and their patience.",
      image: "./images/pic 3.jpeg",
    },
    {
      name: "WandaVision",
      des: "WandaVision is an American television miniseries created by Jac Schaeffer for the streaming service Disney+, based on Marvel Comics featuring the characters wanda and vision.",
      image: "./images/wv.PNG",
    },
  
    {
      name: "Frozen II",
      des: "Set three years after the events of the first film, Frozen II follows sisters Anna and Elsa, and their companions Kristoff, Sven, and Olaf.",
      image: "./images/pic 4.jpg",
    },
  
    {
      name: "Lightyear",
      des: "The story of Buzz Lightyear and his adventures to infinity and beyond, released in 2022.",
      image: "./images/pic 28.jpeg",
    },
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0; 
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  

    let slide = document.createElement("div");
    let imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
  
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
 
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);
  

  
  const videoCards = document.querySelectorAll(".video-card");
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  

  
  let cardContainers = document.querySelectorAll(".card-container");
  let preBtns = document.querySelectorAll(".back-btn");
  let nxtBtns = document.querySelectorAll(".fwd-btn");
  
  function scrollLeft(container) {
    container.scrollLeft -= container.clientWidth;
  }
  
 
  function scrollRight(container) {
    container.scrollLeft += container.clientWidth;
  }
  
  preBtns.forEach((preBtn, index) => {
    preBtn.addEventListener("click", () => {
      scrollLeft(cardContainers[index]);
    });
  });
  
  nxtBtns.forEach((nxtBtn, index) => {
    nxtBtn.addEventListener("click", () => {
      scrollRight(cardContainers[index]);
    });
  });