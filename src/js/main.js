const $ = require("jquery");

$(function() {
  // Когда страница загрузится
  $(".navigation__link").each(function() {
    // получаем все нужные нам ссылки
    var location = window.location.href; // получаем адрес страницы
    var link = this.href; // получаем адрес ссылки

    if (location == link) {
      $(".navigation__link").removeClass("active"); // удаляем класс у остальных ссылок
      $(this).addClass("active"); //добавляем класс
    }
  });
});

window.initMap = () => {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.868135, lng: -111.76204 },
    zoom: 15,
    zoomControl: false,
    streetViewControl: false,
    styles: [
      {
        featureType: "administrative",
        elementType: "all",
        stylers: [
          {
            visibility: "on"
          },
          {
            lightness: 33
          }
        ]
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            color: "#f2e5d4"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#c5dac6"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels",
        stylers: [
          {
            visibility: "on"
          },
          {
            lightness: 20
          }
        ]
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          {
            lightness: 20
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#c5c6c6"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#e4d7c6"
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          {
            color: "#fbfaf7"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          {
            visibility: "on"
          },
          {
            color: "#acbcc9"
          }
        ]
      }
    ]
  });
  var marker = new google.maps.Marker({
    position: { lat: 34.869525, lng: -111.761098 },
    map: map
  });
};

var link = document.querySelector(".btn");

var popup = document.querySelector(".modal-search");

var form = popup.querySelector("form");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});