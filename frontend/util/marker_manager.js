export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    benches.forEach(bench => {
      if (!this.markers[bench.id]) {
        this.createMarkerFromBench(bench);
      }
    });
  }

  createMarkerFromBench(bench) {
    const myLatLng = new google.maps.LatLng(bench.lat, bench.lng);
    const marker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      benchId: bench.id
    });

    marker.setMap(this.map);
  }
}
