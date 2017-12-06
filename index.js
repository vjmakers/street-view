var panorama;
var panoramaData = {};
var panoramaList = Object.keys(panoramas);

function generatePanorama(pano, name) {
  var links = pano.links.map(function(link) {
    link = { pano: link[0], heading: link[1], description: link[2]};

    if (panoramaData[link.pano] && panoramaData[link.pano].location) {
      link.pano = panoramaData[link.pano].location.pano;
    }

    return link;
  });

  var tiles = pano.tiles || (pano.tiles = {});
  tiles.centerHeading = pano.centerHeading;
  tiles.getTileUrl = pano.getTileUrl || function() {
    return pano.tileUrl ;
  };
  tiles.tileSize = tiles.tileSize
    ? new google.maps.Size(pano.tiles.tileSize[0], pano.tiles.tileSize[1])
    : new google.maps.Size(3000, 1500);
  tiles.worldSize = tiles.worldSize
    ? new google.maps.Size(pano.tiles.worldSize[0], pano.tiles.worldSize[1])
    : new google.maps.Size(3000, 1500);

  return {
    location: {
      pano: name,
      description: pano.description,
      // Apparently locations are not needed.
      latLng: new google.maps.LatLng(locations[name])
    },
    links: links,
    copyright: 'Imagery © 2016 VJC Makers’ Club',
    tiles: tiles
  };
}

function resetPOV() {
  panorama.setPov({
    heading: -100,
    pitch: 5,
    zoom: 0
  });
}

function initPanoramas() {
  panoramaList.forEach(function(key) {
    var pano = panoramas[key];
    if (pano) {
      pano = generatePanorama(pano, key);
    }
    panoramaData[key] = pano || panoramaData[key];
  });
}

function initStreetView() {
  panorama = new google.maps.StreetViewPanorama(
    document.getElementById('street-view'),
    {

      pano: panoramaData.outsideVJC.location.pano,

      // Register a provider for our custom panorama.
      panoProvider: function(pano) {
        return panoramaData[pano];
      }
    }
  );

  resetPOV();
  panorama.addListener('pano_changed', resetPOV);

  // Add a link to our custom panorama from outside VJC.
  panorama.addListener('links_changed', function() {
    var currentPano = panorama.getPano();
    var panoName = panoramaList.reduce(function(result, name) {
      return result || (currentPano == panoramaData[name].location.pano && name);
    }, undefined);

    if (!panoramaData[panoName] || panoName == 'outsideVJC') {
      panorama.getLinks().push(startingLink);
    }
  });
}

function start() {
  // Use the Street View service to find a pano ID outside VJC.
  var streetView = new google.maps.StreetViewService;
  streetView.getPanorama(
    { location: locations.outsideVJC },
    function(result, status) {
      if (status == 'OK') {
        panoramaData.outsideVJC = result;
        initPanoramas();
        initStreetView();
      }
    }
  );
}
