{"filter":false,"title":"maps.js","tooltip":"/assets/js/maps.js","undoManager":{"mark":1,"position":1,"stack":[[{"start":{"row":0,"column":0},"end":{"row":26,"column":9},"action":"insert","lines":["function initMap() {","            var map = new google.maps.Map(document.getElementById(\"map\"), {","                zoom: 3,","                center: {","                    lat: 46.619261,","                    lng: -33.134766","                }","            });","","            var labels = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";","","            var locations = [","                { lat: 40.785091, lng: -73.968285 }, ","                { lat: 41.084045, lng: -73.874245 }, ","                { lat: 40.754932, lng: -73.984016 }","            ];","","            var markers = locations.map(function(location, i) {","                return new google.maps.Marker({","                    position: location,","                    label: labels[i % labels.length]","                });","            });","","","            var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });","        }"],"id":1}],[{"start":{"row":1,"column":4},"end":{"row":1,"column":12},"action":"remove","lines":["        "],"id":2},{"start":{"row":2,"column":8},"end":{"row":2,"column":16},"action":"remove","lines":["        "]},{"start":{"row":3,"column":0},"end":{"row":3,"column":6},"action":"remove","lines":["      "]},{"start":{"row":3,"column":8},"end":{"row":3,"column":10},"action":"remove","lines":["  "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":8},"action":"remove","lines":["        "]},{"start":{"row":5,"column":0},"end":{"row":5,"column":1},"action":"remove","lines":[" "]},{"start":{"row":5,"column":12},"end":{"row":5,"column":19},"action":"remove","lines":["       "]},{"start":{"row":6,"column":0},"end":{"row":6,"column":3},"action":"remove","lines":["   "]},{"start":{"row":6,"column":8},"end":{"row":6,"column":13},"action":"remove","lines":["     "]},{"start":{"row":7,"column":4},"end":{"row":7,"column":12},"action":"remove","lines":["        "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":8},"action":"remove","lines":["        "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":8},"action":"remove","lines":["        "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":8},"action":"remove","lines":["        "]},{"start":{"row":12,"column":44},"end":{"row":12,"column":45},"action":"remove","lines":[" "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":5},"action":"remove","lines":["     "]},{"start":{"row":13,"column":8},"end":{"row":13,"column":11},"action":"remove","lines":["   "]},{"start":{"row":13,"column":44},"end":{"row":13,"column":45},"action":"remove","lines":[" "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":7},"action":"remove","lines":["       "]},{"start":{"row":14,"column":8},"end":{"row":14,"column":9},"action":"remove","lines":[" "]},{"start":{"row":15,"column":4},"end":{"row":15,"column":12},"action":"remove","lines":["        "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":8},"action":"remove","lines":["        "]},{"start":{"row":18,"column":8},"end":{"row":18,"column":16},"action":"remove","lines":["        "]},{"start":{"row":19,"column":0},"end":{"row":19,"column":7},"action":"remove","lines":["       "]},{"start":{"row":19,"column":12},"end":{"row":19,"column":13},"action":"remove","lines":[" "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":8},"action":"remove","lines":["        "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":8},"action":"remove","lines":["        "]},{"start":{"row":22,"column":4},"end":{"row":22,"column":12},"action":"remove","lines":["        "]},{"start":{"row":25,"column":0},"end":{"row":25,"column":8},"action":"remove","lines":["        "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":8},"action":"remove","lines":["        "]},{"start":{"row":26,"column":1},"end":{"row":27,"column":0},"action":"insert","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":3,"column":17},"end":{"row":3,"column":17},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1562164515373,"hash":"b628ff89ac8487deaff735df329744a53024daf7"}