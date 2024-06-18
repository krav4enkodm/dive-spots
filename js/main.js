const sesimbraCoords = { lat: 38.4454, lng: -9.1029 };

const gardenGorgoniasMarker = {
  title: "Jardim das Gorgónias",
  position: {
    lat: 38.4347,
    lng: -9.0641,
  },
  images: ["/img/preview/pexels-eliannedipp-4696771.webp"],
};
const batelaoMarker = {
  title: "Batelão",
  position: { lat: 38.4341, lng: -9.1151 },
  images: ["/img/preview/pexels-pawelkalisinski-1076758.webp"],
};
const baleeiraMarker = {
  title: "Baleeira",
  position: { lat: 38.4164, lng: -9.1903 },
  images: ["/img/preview/pexels-richard-segal-732340-1618606.webp"],
};
const baiaDaArmacaoMarker = {
  title: "Baía da Armação",
  position: { lat: 38.4396, lng: -9.0605 },
  images: ["/img/preview/pexels-tomfisk-1125979.webp"],
};

const markerList = [
  gardenGorgoniasMarker,
  batelaoMarker,
  baleeiraMarker,
  baiaDaArmacaoMarker,
];

function initMap() {
  const map = L.map("map").setView(
    [sesimbraCoords.lat, sesimbraCoords.lng],
    13
  );

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  markerList.forEach((data) => {
    const { position, title, images } = data;
    const marker = L.marker([position.lat, position.lng]).addTo(map);
    marker.bindPopup(getInfoWindowContent(title, images));
  });
}

function getInfoWindowContent(title, images) {
  return `
    <h2>${title}</h2>
    <div>
      ${images.map((src) => `<img src="${src}" alt="Sea life" />`)}
    </div>
  `;
}

initMap();
