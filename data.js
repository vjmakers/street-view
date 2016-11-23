var locations = {
  outsideVJC: { lat: 1.3065322, lng: 103.9207787 },
  // Apparently locations are not needed.
  entrance:  { lat: 1.306611, lng: 103.9207418 },
  garden: { lat: 1.306402, lng: 103.9207328 }
};

var panoramas = {
  outsideVJC: undefined,

  entrance: {
    description: 'Victoria Junior College - Entrance',
    links: [
      [ 'outsideVJC', 70, 'Outside VJC' ],
      [ 'concourse', 225, 'Concourse' ]
    ],
    centerHeading: -55,
    tileUrl: './images/entrance.jpg'
  },

  concourse: {
    description: 'Victoria Junior College - Concourse',
    links: [
      [ 'entrance', 220, 'Entrance' ],
      [ 'garden', 340, 'Garden' ]
    ],
    centerHeading: 80,
    tileUrl: './images/concourse.jpg'
  },

  garden: {
    description: 'Victoria Junior College - Garden',
    links: [
      [ 'concourse', -30, 'Concourse' ],
      [ 'outsidePT', 120, 'Outside the Performance Theatre' ]
    ],
    centerHeading: -105,
    tileUrl: './images/garden.jpg'
  },

  outsidePT: {
    description: 'Victoria Junior College - Outside the Performance Theatre',
    links: [
      [ 'garden', 115, 'Garden' ]
    ],
    centerHeading: -80,
    tileUrl: './images/outside_pt.jpg'
  }
};

var startingLink = {
  pano: 'entrance',
  heading: -110,
  description: 'VJC'
};

//Hi
