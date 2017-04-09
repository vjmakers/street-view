

var locations = {
  outsideVJC: { lat: 1.3065322, lng: 103.9207787 },
  // Apparently locations are not needed.
  //005:  { lat: 1.306611, lng: 103.9207418 },
  //006: { lat: 1.306402, lng: 103.9207328 }
};


var panoramas = {
  outsideVJC: undefined,

  
  P005: {
    description: 'Victoria Junior College - P005',
    links: [
      [ 'outsideVJC', 180],
      [ 'P006', 280]
    ],
    centerHeading: 70,
    tileUrl: './images/005.jpg'
  },

  P006: {
    description: 'Victoria Junior College - P006',
    links: [
      [ 'P005', 50,],
      [ 'P007', 250]
    ],
    centerHeading: 80,
    tileUrl: './images/006.jpg'
  },

  P007: {
    description: 'Victoria Junior College - P007',
    links: [
      [ 'P006', 120],
      [ 'P008', 210]
    ],
    centerHeading: 30,
    tileUrl: './images/007.jpg'
  },

  P008: {
    description: 'Victoria Junior College - P008',
    links: [
      [ 'P007', 75],
      [ 'P009', -125]
    ],
    centerHeading: -30,
    tileUrl: './images/008.jpg'
  },

  P009: {
    description: 'Victoria Junior College - P009',
    links: [
      [ 'P008', 185],
      [ 'P010', -85]
    ],
    centerHeading: 40,
    tileUrl: './images/009.jpg'
  },

  P010: {
    description: 'Victoria Junior College - P010',
    links: [
      [ 'P009', 100],
      [ 'P011', -90]
    ],
    centerHeading: 230,
    tileUrl: './images/010.jpg'
  },

  P011: {
    description: 'Victoria Junior College - P011',
    links: [
      [ 'P010', -25]
    ],
    centerHeading: 30,
    tileUrl: './images/011.jpg'
  }
  



};

var startingLink = {
  pano: 'P005',
  heading: -110,
  description: 'VJC'
};

//Hi
