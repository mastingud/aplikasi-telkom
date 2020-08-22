 var map = L.map("mapid").setView([-6.3288216, 106.8532384], 14);
L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ["a", "b", "c"],
}).addTo(map);
 L.marker([-6.3288216, 106.8532384]).addTo(map);