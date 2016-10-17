var locations = {
  outsideVJC: { lat: 1.3065322, lng: 103.9207787 },
  insideVJC: { lat: 1.306611, lng: 103.9207418 }
};

var panoramas = {
  outsideVJC: undefined,
  insideVJC: generatePanorama({
    name: 'insideVJC',
    description: 'Victoria Junior College',
    links: [{
      heading: 70,
      description: 'Exit',
      pano: 'outsideVJC'
    }],
    tiles: {
      // tileSize: [1024, 512],
      // worldSize: [2048, 1024],
      // centerHeading: 105,
      // getTileUrl: function(pano, zoom, tileX, tileY) {
      //   return 'https://developers.google.com/maps/documentation/javascript/examples/full/images/' +
      //       'panoReception1024-' + zoom + '-' + tileX + '-' + tileY + '.jpg';
      // }
      tileSize: [1600, 800],
      worldSize: [1600, 800],
      centerHeading: 105,
      getTileUrl: function(pano, zoom, tileX, tileY) {
        return './test.jpg';
      }
    }
  })
};

var extraLinks = {
  outsideVJC: {
    description: 'VJC',
    heading: -110,
    pano: 'insideVJC'
  },
  insideVJC: undefined
};

var panoramaList = Object.keys(panoramas);

function generatePanorama(pano) {
  return function() {
    pano.links.forEach(function(pano) {
      pano.pano = panoramas[pano.pano].location.pano;
    });
    pano.tiles.tileSize = new google.maps.Size(pano.tiles.tileSize[0] || 1024, pano.tiles.tileSize[1] || 512);
    pano.tiles.worldSize = new google.maps.Size(pano.tiles.worldSize[0] || 2048, pano.tiles.worldSize[1] || 1024);

    return {
      location: {
        pano: pano.name,
        description: pano.description,
        latLng: new google.maps.LatLng(locations[name])
      },
      links: pano.links,
      copyright: 'Imagery © 2016 VJC Makers’ Club',
      tiles: pano.tiles
    };
  }
}

function initPanorama() {
  panoramaList.forEach(function(key) {
    var pano = panoramas[key];
    if (typeof pano == 'function') {
      panoramas[key] = pano();
    }
  });

  panorama = new google.maps.StreetViewPanorama(
    document.getElementById('street-view'),
    {
      pano: panoramas.outsideVJC.location.pano,
      // Register a provider for our custom panorama.
      panoProvider: function(pano) {
        return panoramas[pano];
      }
    }
  );

  // Add a link to our custom panorama from outside VJC.
  panorama.addListener('links_changed', function() {
    var currentPano = panorama.getPano();
    var panoName = panoramaList.reduce(function(result, name) {
      return result || (currentPano == panoramas[name].location.pano && name);
    }, undefined);

    if (extraLinks[panoName]) {
      panorama.getLinks().push(extraLinks[panoName]);
    }
  });
}

function initialize() {
  // Use the Street View service to find a pano ID on Pirrama Rd, outside VJC.
  var streetView = new google.maps.StreetViewService;
  streetView.getPanorama(
    { location: locations.outsideVJC },
    function(result, status) {
      if (status == 'OK') {
        panoramas.outsideVJC = result;
        initPanorama();
      }
    }
  );
}
