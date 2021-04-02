mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9za3IyIiwiYSI6ImNrbXpvMXFxdjBmbHgybm9lcGE4bzN0OGcifQ.nM6iLX7obvu4FfMwhOSSJw";
let map = new mapboxgl.Map({
  container: "mapa", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: [-12.0453, -77], // starting position [lng, lat]
  zoom: 1 // starting zoom
});
