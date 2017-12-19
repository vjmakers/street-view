// Apparently locations are not needed.
var locations = {
  outsideVJC: { lat: 1.3065322, lng: 103.9207787 },
};

// ---------------------------------------
// EDIT THIS TO START FROM A CHOSEN IMAGE.
// ---------------------------------------
var startingLink = {
  pano: 'P078',
  heading: -110,
  description: 'VJC'
};

var panoramas = {
  outsideVJC: undefined,

  P001: {
    description: 'Outside Guardhouse',
    links: [
      ['outsideVJC', 75],
      ['P002', 255]
    ],
    centerHeading: 240,
    tileUrl: './images/001.jpg'
  },
  
  P002: {
    description: 'Treehouse - First Stairs',
    links: [
      ['P003', 260],
      ['P001', 80]
    ],
    centerHeading: 255,
    tileUrl: './images/002.jpg'
  },

  P003: {
    description: 'Treehouse - Second Stairs',
    links: [
      ['P004', 260],
      ['P002', 80],
      ['P068', 315]
    ],
    centerHeading: 190,
    tileUrl: './images/003.jpg'
  },

  P004: {
    description: 'Outside Canteen',
    links: [
      ['P005', -15],
      ['P003', 75],
      ['P006', 255],
      ['P011', 165]
      
    ],
    centerHeading: 10,
    tileUrl: './images/004.jpg'
  },

  P005: {
    description: 'Outside Bookshop',
    links: [
      ['P004', 170],
      ['P037', 80],
      ['P036', -10]
    ],
    centerHeading: 80,
    tileUrl: './images/005.jpg'
  },

  P006: {
    description: 'Canteen/Near Sink',
    links: [
      ['P004', 85,],
      ['P007', -95]
    ],
    centerHeading: 100,
    tileUrl: './images/006.jpg'
  },

  P007: {
    description: 'Canteen/Teachers' Table',
    links: [
      ['P006', 120],
      ['P008', 210]
    ],
    centerHeading: 30,
    tileUrl: './images/007.jpg'
  },

  P008: {
    description: 'Canteen',
    links: [
      ['P007', 75],
      ['P009', -105]
    ],
    centerHeading: -30,
    tileUrl: './images/008.jpg'
  },

  P009: {
    description: 'Canteen/Near Malay Food Stall',
    links: [
      ['P008', 185],
      ['P010', -85],
      ['P020', 5]
    ],
    centerHeading: 40,
    tileUrl: './images/009.jpg'
  },

  P010: {
    description: 'Canteen/Outside Band Room',
    links: [
      ['P009', 100],
      ['P011', -80]
    ],
    centerHeading: 230,
    tileUrl: './images/010.jpg'
  },

  P011: {
    description: 'Fitness Corner/Outside Canteen',
    links: [
      ['P010', -15],
      ['P004', 75],
      ['P016', -105],
      ['P012', 165]
    ],
    centerHeading: 30,
    tileUrl: './images/011.jpg'
  },

  P012: {
    description: 'Fitness Corner/Near Grandstand',
    links: [
      ['P011', 80],
      ['P013', -55]
    ],
    centerHeading: 280,
    tileUrl: './images/012.jpg'
  },

  P013: {
    description: 'Grandstand',
    links: [
      ['P012', 35],
      ['P014', 260]
    ],
    centerHeading: 180,
    tileUrl: './images/013.jpg'
  },

  P014: {
    description: 'Soccer Field/Track',
    links: [
      ['P013', 75],
      ['P015', -105]
    ],
    centerHeading: 165,
    tileUrl: './images/014.jpg'
  },

  P015: {
    description: 'Soccer Field/Track',
    links: [
      ['P014', 80]
    ],
    centerHeading: 285,
    tileUrl: './images/015.jpg'
  },

  P016: {
    description: 'Hockey Board/Pathway to the Hall',
    links: [
      ['P011', 75],
      ['P017', -195],
      ['P018', -15],
      ['P035', -105]
    ],
    centerHeading: 70,
    tileUrl: './images/016.jpg'
  },

  P017: {
    description: 'Stairs Leading to Second Floor of Hall',
    links: [
      ['P016', 80]
      
    ],
    centerHeading: 80,
    tileUrl: './images/017.jpg'
  },

  P018: {
    description: 'Outside Gym/House Boards',
    links: [
      ['P016', 70],
      ['P019', -110]

    ],
    centerHeading: 160,
    tileUrl: './images/018.jpg'
  },

  P019: {
    description: 'Outside Gym',
    links: [
      ['P020', -130],
      ['P018', 60]
    ],
    centerHeading: 250,
    tileUrl: './images/019.jpg'
  },

  P020: {
    description: 'Canteen/Outside Toilets',
    links: [
      ['P019', 150],
      ['P026', -110]
    ],
    centerHeading: 80,
    tileUrl: './images/020.jpg'
  },

  P022: {
    description: 'Outdoor Court',
    links: [
      ['P024', -104],
      ['P026', -14]
    ],
    centerHeading: 50,
    tileUrl: './images/022.jpg'
  },

  P024: {
    description: 'Infront of Parade Square',
    links: [
      ['P022', 80],
      ['P025', -100]
    ],
    centerHeading: 130,
    tileUrl: './images/024.jpg'
  },

  P025: {
    description: 'Parade Square/Near Fountain',
    links: [
      ['P024', 75],
      ['P041', 255]
    ],
    centerHeading: -75,
    tileUrl: './images/025.jpg'
  },


  P026: {
    description: 'Outside Hall',
    links: [
      ['P020', 70],
      ['P027', -110],
      ['P022', -20]
    ],
    centerHeading: 220,
    tileUrl: './images/026.jpg'
  },

  P027: {
    description: 'Approaching Indoor Court',
    links: [
      ['P026', 70],
      ['P028', -110]
    ],
    centerHeading: 0,
    tileUrl: './images/027.jpg'
  },

   P028: {
    description: 'Indoor Court',
    links: [
      ['P027', 75],
      ['P029', 255]
    ],
    centerHeading: -90,
    tileUrl: './images/028.jpg'
  },

  P029: {
    description: 'Indoor Court',
    links: [
      ['P027', -100],
      ['P030', -30]
    ],
    centerHeading: 80,
    tileUrl: './images/029.jpg'
  },

  P030: {
    description: 'Indoor Court',
    links: [
      ['P029', 90],
      ['P031', -90]
    ],
    centerHeading: 170,
    tileUrl: './images/030.jpg'
  },

  P031: {
    description: 'Beside Storage Rooms',
    links: [
      ['P030', 80],
      ['P033', -100]

    ],
    centerHeading: -30,
    tileUrl: './images/031.jpg'
  },


  P033: {
    description: 'Outside Hall/Stairs to 2nd floor of Hall',
    links: [
      ['P031', 80],
      ['P034', -80]
    ],
    centerHeading: -70,
    tileUrl: './images/033.jpg'
  },

  P034: {
    description: 'Outside Hall',
    links: [
      ['P035', 70],
      ['P033', -110]
    ],
    centerHeading: -70,
    tileUrl: './images/034.jpg'
  },

  P035: {
    description: 'Halls Entrance',
    links: [
      ['P016', 70],
      ['P034', -110]
    ],
    centerHeading: 230,
    tileUrl: './images/035.jpg'
  },

  P036: {
    description: 'Outside Canteen, Near Printing Shop',
    links: [
      
      ['P005', 50],
      ['P039', -12],
      ['P041', -75]
    ],
    centerHeading: 150,
    tileUrl: './images/036.jpg'
  },

  P037: {
    description: 'Outside LT AVA/Pathway to Canteen',
    links: [
      ['P005', -100],
      ['P039', -10],
      ['P048', 80],
      ['P068', 170]
    ],
    centerHeading: -30,
    tileUrl: './images/037.jpg'
  },

  P039: {
    description: 'Stone Tables Leading to Perfomance Theatre',
    links: [
      ['P036', 70],
      ['P037', -20],
      ['P040', 160]
    ],
    centerHeading: 250,
    tileUrl: './images/039.jpg'
  },

  P040: {
    description: 'Grand Piano/Stairs to Perfomance Theatre Level 2',
    links: [
      ['P039', -10],
      ['P041', 170],
      ['P043', -100]
    ],
    centerHeading: 160,
    tileUrl: './images/040.jpg'
  },

  P041: {
    description: 'Entrance to Perfomance Theatre',
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
    description: 'Performance Theatre',
    links: [
      ['P041', 55]
    ],
    centerHeading: 90,
    tileUrl: './images/042.jpg'
  },

  P043: {
    description: 'Outside LT5/Live Like a Victorian Mural',
    links: [
      ['P040', 0],
      ['P049', 180]
    ],
    centerHeading: -70,
    tileUrl: './images/043.jpg'
  },

  P045: {
    description: 'Outside LT3',
    links: [
      ['P049', 80],
      ['P047', -100],
      ['P051', 180]

    ],
    centerHeading: -25,
    tileUrl: './images/045.jpg'
  },

  P047: {
    description: 'Recycling Alley',
    links: [
      ['P045', 135],
      ['P048', 45],
      ['P076', -95]
    ],
    centerHeading: 13,
    tileUrl: './images/047.jpg'
  },

  P048: {
    description: 'Notice Boards near Koi Pond',
    links: [
      ['P047', 75],
      ['P037', -105]
    ],
    centerHeading: 150,
    tileUrl: './images/048.jpg'
  },

  P049: {
    description: 'Outside LT5',
    links: [
      ['P043', 0],
      ['P045', -90]
    ],
    centerHeading: -115,
    tileUrl: './images/049.jpg'
  },

  P051: {
    description: 'E Block',
    links: [
      ['P045', 120],
      ['P052', -150],
      ['P054', -70]
    ],
    centerHeading: 20,
    tileUrl: './images/051.jpg'
  },

  P052: {
    description: 'Outside VJ Choir room',
    links: [
      ['P051', 90],
      ['P053', -100]
    ],
    centerHeading: -60,
    tileUrl: './images/052.jpg'
  },

  P053: {
    description: 'Outside Drama Studio',
    links: [
      ['P052', 80]
    ],
    centerHeading: -10,
    tileUrl: './images/053.jpg'
  },
  P054: {
    description: 'Stone Tables near Garden',
    links: [
      ['P055', -150],
      ['P051', 100],
      ['P057', -100],
      ['P059', -60]
    ],
    centerHeading: 160,
    tileUrl: './images/054.jpg'
  },
  
  P055: {
    description: 'Small Garden',
    links: [
      ['P056', -100],
      ['P054', 100]
    ],
    centerHeading: 100,
    tileUrl: './images/055.jpg'
  },

  P056: {
    description: 'Small Garden',
    links: [
      ['P055', 80]
    ],
    centerHeading: 80,
    tileUrl: './images/056.jpg'
  },

  P057: {
    description: 'T-block Classrooms',
    links: [
      ['P054', 80],
      ['P058', -110]
    ],
    centerHeading: 100,
    tileUrl: './images/057.jpg'
  },

  P058: {
    description: 'T-block Classrooms',
    links: [
      ['P057', 80]
      
    ],
    centerHeading: -160,
    tileUrl: './images/058.jpg'
  },
  
  P059: {
    description: 'Pathway to T-block/Garden',
    links: [
      ['P054', 85],
      ['P060', -5],
      ['P069', -95]
    ],
    centerHeading: 100,
    tileUrl: './images/059.jpg'
  },
  
  P060: {
    description: 'Garden',
    links: [
      ['P059', 90],
      ['P061', -100]
    ],
    centerHeading: -100,
    tileUrl: './images/060.jpg'
  },
  
  P061: {
    description: 'Garden/Towards Concourse',
    links: [
      ['P059', 90],
      ['P062', -90]
    ],
    centerHeading: -130,
    tileUrl: './images/061.jpg'
  },

  P062: {
    description: 'Concourse/Stairs to Computer Lab',
    links: [
      ['P061', 20],
      ['P076', -70],
      ['P073', 110]
    ],
    centerHeading: -80,
    tileUrl: './images/062.jpg'
  },
  
  P063: {
    description: 'Concourse',
    // TODO
    links: [
      ['P062', 0],
      ['P064', -90],
      ['P075', 180]
    ],
    centerHeading: 140,
    // TODO
    tileUrl: './images/063.jpg'
  },

  P064: {
    description: 'Concourse / Near General Office',
    links: [
      ['P063', 90],
      ['P065', 180],
      ['P076', 0]
    ],
    centerHeading: 90,
    tileUrl: './images/064.jpg'
  },

  P065: {
    description: 'Near General Office',
    links: [
      ['P064', 50],
      ['P066', -50]
    ],
    centerHeading: -100,
    tileUrl: './images/065.jpg'
  },

  P066: {
    description: 'Near General Office',
    links: [
      ['P068', -60],
      ['P065', 120],
      ['P067', -150]
    ],
    centerHeading: 5,
    tileUrl: './images/066.jpg'
  },

  P067: {
    description: 'Near General Office',
    links: [
      ['P066', 0]
    ],
    centerHeading: -100,
    tileUrl: './images/067.jpg'
  },

  P068: {
    description: 'Beside LT1',
    links: [
      ['P003', -150],
      ['P066', 75],
      ['P037', -15]
    ],
    centerHeading: 40,
    tileUrl: './images/068.jpg'
  },

  P069: {
    description: 'T-block classrooms',
    links: [
      ['P059', -100],
      ['P070', -10],
      ['P071', 170]
    ],
    centerHeading: 133,
    tileUrl: './images/069.jpg'
  },

  P070: {
    description: 'T-block classrooms',
    links: [
      ['P069', 80]
    ],
    centerHeading: 0,
    tileUrl: './images/070.jpg'
  },

  P071: {
    description: 'T-block classrooms',
    links: [
      ['P069', 75],
      ['P072', -105]
    ],
    centerHeading: 200,
    tileUrl: './images/071.jpg'
  },

  P072: {
    description: 'Next to T-block classrooms',
    links: [
      ['P071', -10],
      ['P073', -100],
      ['P085', 170]
    ],
    centerHeading: -55,
    tileUrl: './images/072.jpg'
  },

  P073: {
    description: 'Next to L-block',
    links: [
      ['P062', -95],
      ['P072', 85],
      ['P074', -185]
    ],
    centerHeading: 23,
    tileUrl: './images/073.jpg'
  },

  P074: {
    description: 'Next to L-block classrooms',
    links: [
      ['P073', -10],
      ['P075', -100],
      ['P077', 170]
    ],
    centerHeading: 70,
    tileUrl: './images/074.jpg'
  },

  P075: {
    description: 'Near Concourse',
    links: [
      ['P063', -20],
      ['P074', 80]
    ],
    centerHeading: -20,
    tileUrl: './images/075.jpg'
  },

  P076: {
    description: 'Infront of Concourse',
    links: [
      
      ['P047', 30],
      ['P064', -60],
      ['P062', 210]
    ],
    centerHeading: 100,
    tileUrl: './images/076.jpg'
  },

  P077: {
    description: 'Outside Science Labs',
    links: [
      
      ['P076', 75],
      ['P078', -105]
    ],
    centerHeading: 130,
    tileUrl: './images/077.jpg'
  },

  P078: {
    description: 'Science Talent Corner',
    links: [
      
      ['P077', 75],
      ['P079', -105],
      ['P100', -15]
    ],
    centerHeading: -100,
    tileUrl: './images/078.jpg'
  },

  P079: {
    description: 'Synapse',
    links: [
      
      ['P078', -100],
      ['P081', -10]
    ],
    centerHeading: 35,
    tileUrl: './images/079.jpg'
  },

  P081: {
    description: 'Stairs to V Block Classrooms',
    links: [
      
      ['P079', 80],
      ['P082', -100]
    ],
    centerHeading: 10,
    tileUrl: './images/081.jpg'
  },

  P082: {
    description: 'Outside Math Room',
    links: [
      
      ['P081', 170],
      ['P083', 260]
    ],
    centerHeading: -20,
    tileUrl: './images/082.jpg'
  },

  P082: {
    description: 'Staffroom - Scrabbleboard',
    links: [
      
      ['P081', 170],
      ['P083', 260]
    ],
    centerHeading: -20,
    tileUrl: './images/082.jpg'
  },

  P083: {
    description: 'Staffroom',
    links: [
      
      ['P082', 80],
      ['P084', -100]
    ],
    centerHeading: -110,
    tileUrl: './images/083.jpg'
  },

  P084: {
    description: 'Staffroom',
    links: [
      
      ['P083', 80],
      ['P085', -100]
    ],
    centerHeading: -105,
    tileUrl: './images/084.jpg'
  },

  P085: {
    description: 'Staffroom',
    links: [
      
      ['P084', 170],
      ['P072', -55]
    ],
    centerHeading: -20,
    tileUrl: './images/085.jpg'
  },

  P100: {
    description: 'Makers Club',
    links: [
      
      ['P078', -55]
    ],
    centerHeading: -120,
    tileUrl: './images/100.jpg'
  },

};
