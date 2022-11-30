ymaps.ready(init);
function init() {
  const mapElem = document.querySelector('#map');
  const myMap = new ymaps.Map(
    "map",
    {
      center: [55.759897, 37.613388],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" }
    }
  );

  myMap.behaviors.disable('scrollZoom');

  const myPlacemark = new ymaps.Placemark(
    [55.759897, 37.61338],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "../img/svg/map-icon.svg",
      iconImageSize: [40, 40],
      iconImageOffset: [-20, -40],
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
}
