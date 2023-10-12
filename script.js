const bottone1 = document.querySelector(".btn-primary");
const immagini = document.querySelectorAll("img.card-img-top");
const bottone2 = document.querySelector(".btn-secondary");
const bottoneEdit = document.querySelectorAll(".edit");
const tempo = document.querySelectorAll("small");

bottone1.addEventListener("click", function () {
  fetch("https://api.pexels.com/v1/search?query=kittens", {
    headers: {
      Authorization: "YfEUi2dTHxYOVJqcOX1dskGx64gRT0O6bCQLcBZ1cd4ZJ6vBSbBBUmA5",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella richiesta HTTP");
      }
    })
    .then((data) => {
      if (data.photos.length > 0) {
        immagini.forEach((img, i) => {
          img.src = data.photos[i].src.medium;
        });
        bottoneEdit.forEach((button) => {
          button.innerText = "Hide";
        });
        bottoneEdit.forEach((button, i) => {
          button.addEventListener("click", function (e) {
            const card = e.target.closest(".col-md-4");
            card.classList.add("d-none");
          });
        });
        tempo.forEach((small, i) => {
          small.innerText = data.photos[i].id;
        });
        console.log(data);
      }
    })
    .catch((error) => {
      console.error("Si è verificato un errore:", error);
    });
});

bottone2.addEventListener("click", function () {
  fetch("https://api.pexels.com/v1/search?query=dogs", {
    headers: {
      Authorization: "YfEUi2dTHxYOVJqcOX1dskGx64gRT0O6bCQLcBZ1cd4ZJ6vBSbBBUmA5",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella richiesta HTTP");
      }
    })
    .then((data) => {
      if (data.photos.length > 0) {
        immagini.forEach((img, index) => {
          img.src = data.photos[index].src.medium;
        });
        bottoneEdit.forEach((button) => {
          button.innerText = "Hide";
        });
        tempo.forEach((small, i) => {
          small.innerText = data.photos[i].id;
        });
        console.log(data);
      }
    })
    .catch((error) => {
      console.error("Si è verificato un errore:", error);
    });
});
