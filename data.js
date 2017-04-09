

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
      [ 'P010', 100],
      [ 'P016', -100]
    ],
    centerHeading: 30,
    tileUrl: './images/011.jpg'
  },

  P016: {
    description: 'Victoria Junior College - P016',
    links: [
      [ 'P011', 100],
      [ 'P017', -180],
      [ 'P018', 330]
    ],
    centerHeading: 70,
    tileUrl: './images/016.jpg'
  },

  P017: {
    description: 'Victoria Junior College - P017',
    links: [
      [ 'P016', 100]
    ],
    centerHeading: 80,
    tileUrl: './images/017.jpg'
  },

  P018: {
    description: 'Victoria Junior College - P018',
    links: [
      [ 'P017', 100],
      [ 'P019', 360]
    ],
    centerHeading: 80,
    tileUrl: './images/018.jpg'
  },

  P019: {
    description: 'Victoria Junior College - P019',
    links: [
      [ 'P020', 100],
      [ 'P018', -90]
    ],
    centerHeading: 80,
    tileUrl: './images/019.jpg'
  },

  P020: {
    description: 'Victoria Junior College - P020',
    links: [
      [ 'P019', 100],
      [ 'P026', -90]
    ],
    centerHeading: 80,
    tileUrl: './images/020.jpg'
  },

  P026: {
    description: 'Victoria Junior College - P026',
    links: [
      [ 'P020', 100],
      [ 'P027', -90]
    ],
    centerHeading: 80,
    tileUrl: './images/021.jpg'
  },

  P022: {
    description: 'Victoria Junior College - P022',
    links: [
      [ 'P021', 100],
      [ 'P023', -90]
    ],
    centerHeading: 80,
    tileUrl: './images/022.jpg'
  },

  P023: {
    description: 'Victoria Junior College - P023',
    links: [
      [ 'P022', 100],
      [ 'P024', -90]
    ],
    centerHeading: 80,
    tileUrl: './images/023.jpg'
  },
  
  

  
  



};

var startingLink = {
  pano: 'P011',
  heading: -110,
  description: 'VJC'
};

//Hi
