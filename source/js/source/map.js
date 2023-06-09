const SHOP__LOCATION = {
  lat: 59.96831,
  lng: 30.31748,
  title: 'Drink2Go'
};

const getMap = () => {
  const map = L.map('map', { scrollWheelZoom: false })
  .setView({
    lat: SHOP__LOCATION.lat,
    lng: SHOP__LOCATION.lng,
  }, 20)
  ;

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: 'img/marker.svg',
    iconSize: [38, 50],
    iconAnchor: [17.5, 50]
  })

  const marker = L.marker(
    {
      lat: SHOP__LOCATION.lat,
      lng: SHOP__LOCATION.lng,
    },
    {
      icon: mainPinIcon
    }
  )

  marker.addTo(map).bindPopup(SHOP__LOCATION.title);
}

getMap();

export { getMap };
