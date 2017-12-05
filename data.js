// Apparently locations are not needed.
var locations = {
  outsideVJC: { lat: 1.3065322, lng: 103.9207787 },
};

// ---------------------------------------
// EDIT THIS TO START FROM A CHOSEN IMAGE.
// ---------------------------------------
var startingLink = {
  pano: 'P041',
  heading: -110,
  description: 'VJC'
};

var panoramas = {
  outsideVJC: undefined,

  P001: {
    description: 'Victoria Junior College - P001',
    links: [
      ['outsideVJC', 75],
      ['P002', 255]
    ],
    centerHeading: 240,
    tileUrl: './images/001.jpg'
  },
  
  P002: {
    description: 'Victoria Junior College - P002',
    links: [
      ['P003', 260],
      ['P001', 80]
    ],
    centerHeading: 255,
    tileUrl: './images/002.jpg'
  },

  P003: {
    description: 'Victoria Junior College - P003',
    links: [
      ['P004', 260],
      ['P002', 80]
    ],
    centerHeading: 190,
    tileUrl: './images/003.jpg'
  },

 P004: {
    description: 'Victoria Junior College - P004',
    links: [
      ['P005', -90],
      ['P003', 45]
    ],
    centerHeading: -20,
    tileUrl: './images/004.jpg'
  },

  P005: {
    description: 'Victoria Junior College - P005',
    links: [
      ['P004', 180],
      ['P006', -90],
      ['P037', 90],
      ['P036', 0]
    ],
    centerHeading: 80,
    tileUrl: './images/005.jpg'
  },

  P006: {
    description: 'Victoria Junior College - P006',
    links: [
      ['P005', 50,],
      ['P007', 250]
    ],
    centerHeading: 80,
    tileUrl: './images/006.jpg'
  },

  P007: {
    description: 'Victoria Junior College - P007',
    links: [
      ['P006', 120],
      ['P008', 210]
    ],
    centerHeading: 30,
    tileUrl: './images/007.jpg'
  },

  P008: {
    description: 'Victoria Junior College - P008',
    links: [
      ['P007', 75],
      ['P009', -125]
    ],
    centerHeading: -30,
    tileUrl: './images/008.jpg'
  },

  P009: {
    description: 'Victoria Junior College - P009',
    links: [
      ['P008', 185],
      ['P010', -85],
      ['P020', 5]
    ],
    centerHeading: 40,
    tileUrl: './images/009.jpg'
  },

  P010: {
    description: 'Victoria Junior College - P010',
    links: [
      ['P009', 100],
      ['P011', -90]
    ],
    centerHeading: 230,
    tileUrl: './images/010.jpg'
  },

  P011: {
    description: 'Victoria Junior College - P011',
    links: [
      ['P010', -20],
      ['P005', 70],
      ['P016', -110],
      ['P012', 160]
    ],
    centerHeading: 30,
    tileUrl: './images/011.jpg'
  },

  P012: {
    description: 'Victoria Junior College - P012',
    links: [
      ['P011', 80],
      ['P013', -55]
    ],
    centerHeading: 280,
    tileUrl: './images/012.jpg'
  },

  P013: {
    description: 'Victoria Junior College - P013',
    links: [
      ['P012', 35],
      ['P014', 260]
    ],
    centerHeading: 180,
    tileUrl: './images/013.jpg'
  },

  P014: {
    description: 'Victoria Junior College - P014',
    links: [
      ['P013', 75],
      ['P015', -105]
    ],
    centerHeading: 165,
    tileUrl: './images/014.jpg'
  },

  P015: {
    description: 'Victoria Junior College - P015',
    links: [
      ['P014', 80]
    ],
    centerHeading: 285,
    tileUrl: './images/015.jpg'
  },

  P016: {
    description: 'Victoria Junior College - P016',
    links: [
      ['P011', 70],
      ['P017', -200],
      ['P018', -20],
      ['P035', -110]
    ],
    centerHeading: 70,
    tileUrl: './images/016.jpg'
  },

  P017: {
    description: 'Victoria Junior College - P017',
    links: [
      ['P016', 80]
      
    ],
    centerHeading: 80,
    tileUrl: './images/017.jpg'
  },

  P018: {
    description: 'Victoria Junior College - P018',
    links: [
      ['P016', 70],
      ['P019', -110]

    ],
    centerHeading: 160,
    tileUrl: './images/018.jpg'
  },

  P019: {
    description: 'Victoria Junior College - P019',
    links: [
      ['P020', -130],
      ['P018', 60]
    ],
    centerHeading: 250,
    tileUrl: './images/019.jpg'
  },

  P020: {
    description: 'Victoria Junior College - P020',
    links: [
      ['P019', 150],
      ['P026', -110]
    ],
    centerHeading: 80,
    tileUrl: './images/020.jpg'
  },

  P022: {
    description: 'Victoria Junior College - P022',
    links: [
      ['P024', -104],
      ['P026', -14]
    ],
    centerHeading: 50,
    tileUrl: './images/022.jpg'
  },

  P024: {
    description: 'Victoria Junior College - P024',
    links: [
      ['P022', 80],
      ['P025', -100]
    ],
    centerHeading: 130,
    tileUrl: './images/024.jpg'
  },

  P025: {
    description: 'Victoria Junior College - P025',
    links: [
      ['P024', 75],
      ['P041', 255]
    ],
    centerHeading: -75,
    tileUrl: './images/025.jpg'
  },


  P026: {
    description: 'Victoria Junior College - P026',
    links: [
      ['P020', 70],
      ['P027', -110],
      ['P022', -20]
    ],
    centerHeading: 220,
    tileUrl: './images/026.jpg'
  },

  P027: {
    description: 'Victoria Junior College - P027',
    links: [
      ['P026', 65],
      ['P029', -115]
    ],
    centerHeading: 0,
    tileUrl: './images/027.jpg'
  },

  P029: {
    description: 'Victoria Junior College - P029',
    links: [
      ['P027', -100],
      ['P030', -30]
    ],
    centerHeading: 80,
    tileUrl: './images/029.jpg'
  },

  P030: {
    description: 'Victoria Junior College - P030',
    links: [
      ['P029', 90]

    ],
    centerHeading: 170,
    tileUrl: './images/030.jpg'
  },

  P033: {
    description: 'Victoria Junior College - P033',
    links: [
      ['P034', 80]
    ],
    centerHeading: -20,
    tileUrl: './images/033.jpg'
  },

  P034: {
    description: 'Victoria Junior College - P034',
    links: [
      ['P035', 70],
      ['P033', -110]
    ],
    centerHeading: 210,
    tileUrl: './images/034.jpg'
  },

  P035: {
    description: 'Victoria Junior College - P035',
    links: [
      ['P016', 70],
      ['P034', -110]
    ],
    centerHeading: 150,
    tileUrl: './images/035.jpg'
  },

  P036: {
    description: 'Victoria Junior College - P036',
    links: [
      
      ['P005', 50],
      ['P039', -12],
      ['P041', -75]
    ],
    centerHeading: 150,
    tileUrl: './images/036.jpg'
  },

  P037: {
    description: 'Victoria Junior College - P037',
    links: [
      ['P005', -90],
      ['P039', 0]
    ],
    centerHeading: -20,
    tileUrl: './images/037.jpg'
  },

  P039: {
    description: 'Victoria Junior College - P039',
    links: [
      ['P036', 70],
      ['P037', -20],
      ['P040', 160]
    ],
    centerHeading: 250,
    tileUrl: './images/039.jpg'
  },

  P040: {
    description: 'Victoria Junior College - P040',
    links: [
      ['P039', -10],
      ['P041', 170],
      ['P043', -100]
    ],
    centerHeading: 160,
    tileUrl: './images/040.jpg'
  },

  P041: {
    description: 'Victoria Junior College - P041',
    links: [
      ['P025', 0],
      ['P036', -60],
      ['P040', -120],
      ['P042', 110]
    ],
    centerHeading: 60,
    tileUrl: './images/041.jpg'
  },

  P042: {
    description: 'Victoria Junior College - P042',
    links: [
      ['P041', 55]
    ],
    centerHeading: 90,
    tileUrl: './images/042.jpg'
  },

  P043: {
    description: 'Victoria Junior College - P043',
    links: [
      ['P040', 0]
    ],
    centerHeading: -70,
    tileUrl: './images/043.jpg'
  },

  // TODO
  // P044 - P062

  P063: {
    description: 'Concourse',
    // TODO
    links: [
      ['P062', 0],
      ['P064', -86]
    ],
    centerHeading: 140,
    // TODO
    tileUrl: './images/063.jpg'
  },

  P064: {
    description: 'Concourse / Near General Office',
    links: [
      ['P063', 86],
      ['P065', 200]
    ],
    centerHeading: 75,
    tileUrl: './images/064.jpg'
  },

  P065: {
    description: 'General Office',
    links: [
      ['P064', -200],
      ['P066', 0]
    ],
    centerHeading: 90,
    tileUrl: './images/065.jpg'
  },

  // TODO

  P066: {
    description: 'General Office',
    links: [
      ['P065', 0],
      ['P067', 0]
    ],
    centerHeading: 0,
    tileUrl: './images/066.jpg'
  },

  P067: {
    description: 'General Office',
    links: [
      ['P066', 0],
      ['P068', 0]
    ],
    centerHeading: 0,
    tileUrl: './images/067.jpg'
  },

  P068: {
    description: 'Beside LT1',
    links: [
      ['P067', 0],
      ['P069', 0]
    ],
    centerHeading: 0,
    tileUrl: './images/068.jpg'
  },

};
