var locations = {
  outsideVJC: { lat: 1.3065322, lng: 103.9207787 },
  // Apparently locations are not needed.
  entrance:  { lat: 1.306611, lng: 103.9207418 },
  garden: { lat: 1.306402, lng: 103.9207328 }
};

var panoramas = {
  outsideVJC: undefined,
  entrance: generatePanorama({
    name: 'entrance',
    description: 'Victoria Junior College - Entrance',
    links: [{
      heading: 70,
      description: 'Exit',
      pano: 'outsideVJC'
    }, {
      description: 'Concourse',
      heading: -60,
      pano : 'concourse'
    }],
    tiles: {
      tileSize: [1600, 800],
      worldSize: [1600, 800]
    },
    centerHeading: 105,
    tileUrl: './images/test.jpg'
  }),
  concourse: generatePanorama({
    name: 'concourse',
    description: 'Victoria Junior College - Concourse',
    links: [{
      heading: 40,
      description: 'Back',
      pano: 'entrance'
    }, {
      description: 'Garden',
      heading: 160,
      pano : 'garden'
    }],
    centerHeading: -100,
    tileUrl: './images/concourse.jpg'
  }),
  garden: generatePanorama({
    name: 'garden',
    description: 'Victoria Junior College - Garden',
    links: [{
      heading: 20,
      description: 'Back',
      pano: 'concourse'
    }, {
      description: 'PT',
      heading: 160,
      pano : 'outsidePT'
    }],
    centerHeading: -80,
    tileUrl: './images/garden.jpg'
  }),
  outsidePT: generatePanorama({
    name: 'outsidePT',
    description: 'Victoria Junior College - Outside the Performance Theatre',
    links: [{
      heading: 80,
      description: 'Back',
      pano: 'garden'
    }],
    centerHeading: -80,
    tileUrl: './images/outside_pt.jpg'
  })
};

var extraLinks = {
  outsideVJC: {
    description: 'VJC',
    heading: -110,
    pano: 'entrance'
  }
};

var panoramaList = Object.keys(panoramas);

function generatePanorama(pano) {
  return function() {
    pano.links.forEach(function(pano) {
      if (panoramas[pano.pano] && panoramas[pano.pano].location) {
        pano.pano = panoramas[pano.pano].location.pano;
      }
    });
    pano.tiles || (pano.tiles = {});
    pano.tiles.centerHeading = pano.centerHeading;
    pano.tiles.getTileUrl = pano.getTileUrl || function() {
      return pano.tileUrl;
    };
    pano.tiles.tileSize = pano.tiles.tileSize
      ? new google.maps.Size(pano.tiles.tileSize[0], pano.tiles.tileSize[1])
      : new google.maps.Size(3000, 1500);
    pano.tiles.worldSize = pano.tiles.worldSize
      ? new google.maps.Size(pano.tiles.worldSize[0], pano.tiles.worldSize[1])
      : new google.maps.Size(3000, 1500);

    return {
      location: {
        pano: pano.name,
        description: pano.description,
        // Apparently locations are not needed.
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

  panorama.setPov({
    heading: -100,
    pitch: 0
  });

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
  // Use the Street View service to find a pano ID outside VJC.
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
