// Slider
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});
/*
// ANIMACIONES WOW
function wowAnimationFunctions() {
  // PORTADA WOW
  var portada = $("#portada.title-img");
  portada.find("h1, h2, h3, h4, h5, h6, a, p").addClass("wow fadeInUp");
  portada.find("picture, .bg-shadow").addClass("wow fadeIn");
  // SECTIONS WOW
  var htmlsection = $("section");
  htmlsection
    .find(
      "h1, h2, h3, h4, h5, h6, p, a, li, img, input, textarea, button, .button, label, table, table th, table td, .collapsable-container, .sub-item, .custom-select, iframe",
      "#map"
    )
    .addClass("wow fadeInUp");
  htmlsection.find(".no-wow, #map *").removeClass("wow");
  // htmlsection.find('.line').addClass('wow fadeIn')

  // FOOTER WOW
  // var footer = $('footer')
  // footer.find('h1, h2, h3, h4, h5, h6, p, a, img').addClass('wow fadeInUp')

  // GENERAL WOW DELAYS
  portada.each(function () {
    i = 1;
    $(this)
      .find(".wow")
      .each(function () {
        var wowDelay = (0.5 * i).toFixed(2);
        $(this).attr("data-wow-delay", wowDelay + "s");
        i++;
      });
  });

  // IF MOBILE WOW DELAYS
  // if (!isMobile) {

  // portada.each(function () {
  //     i = 1
  //     $(this).find('.wow').each(function () {
  //         var wowDelay = (0.2 * i).toFixed(2)
  //         if (wowDelay > 0.9) {
  //             wowDelay = 0.3
  //         } else {}
  //         i++
  //         $(this).attr('data-wow-delay', wowDelay + 's')
  //     })
  // })

  // htmlsection.each(function () {
  //     i = 1
  //     $(this).find('.wow').each(function () {
  //         var wowDelay = (0.2 * i).toFixed(2)
  //         if (wowDelay > 0.9) {
  //             wowDelay = 0.3
  //         } else {}
  //         i++
  //         $(this).attr('data-wow-delay', wowDelay + 's')
  //     })
  // })

  htmlsection.each(function () {
    i = 1;
    $(this)
      .find(".sub-item.wow")
      .each(function () {
        if (wowDelay > 1) {
          wowDelay = 0;
        }
        var wowDelay = (0.3 + 0.04 * i).toFixed(2);
        $(this).attr("data-wow-delay", wowDelay + "s");
        i++;
      });
  });

  // footer.each(function () {
  //     i = 1
  //     $(this).find('.wow').each(function () {
  //         var wowDelay = (0.03 * i).toFixed(2)
  //         $(this).attr('data-wow-delay', wowDelay + 's')
  //         i++
  //     })
  // })
  // } else {
  //     $('.wow.fadeIn').attr('data-wow-delay', '0.7s')
  // }

  // WOW INIT
  var wowContainer;
  var wowOffset;
  if (!isMobile) {
    var wowContainer = "window";
    var wowOffset = 0;
  } else {
    var wowContainer = "#wrapper";
    var wowOffset = 0;
  }

  var wow = new WOW({
    scrollContainer: wowContainer,
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: wowOffset, // default
    mobile: true, // default
    live: true, // default
  });
  wow.init();
}
*/

// Google maps
function initMap() {
  const zoom = 17;

  const src = "../assets/icons/marker.svg";
  const lat = "-34.55151658047298";
  const lng = "-58.45511878528068";
  const url = "https://goo.gl/maps/QJ6FPPMYhuJdxL6u5";
  const center = {
    lat: parseFloat(lat),
    lng: parseFloat(lng),
  };
  const bounds = new google.maps.LatLngBounds();
  const map = new google.maps.Map(document.getElementById("map"), {
    styles,
    zoom,
    center,
    gestureHandling: "cooperative",
    disableDefaultUI: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: true,
  });

  const latLng = new google.maps.LatLng(lat, lng);
  const marker = new google.maps.Marker({
    position: latLng,
    map,
    icon: src,
  });

  google.maps.event.addListener(marker, "click", function () {
    window.open(url);
  });

  bounds.extend(latLng);

  // Marker to fit zoom
  map.panTo(center);
}

const styles = [
  {
    featureType: "all",
    elementType: "geometry.fill",
    stylers: [
      {
        weight: "2.00",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#9c9c9c",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        color: "#f2f2f2",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#d9e0d4",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [
      {
        visibility: "on",
      },
      {
        saturation: "0",
      },
      {
        lightness: "25",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#d9e0d4",
      },
    ],
  },
  {
    featureType: "poi.sports_complex",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#d9e0d4",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: 45,
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#7b7b7b",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#46bcec",
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        lightness: "0",
      },
      {
        color: "#abb5a0",
      },
      {
        saturation: "0",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#070707",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
];
