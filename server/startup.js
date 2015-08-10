Meteor.startup(function() {
    if (Sites.find().count() === 0) {
        var SitesData = [

  {
    "AQS_Code": "480055013",
    "siteID": "48_005_5013",
    "CAMS": "5013",
    "TCEQRegion": "BEAUMONT",
    "Region": "10",
    "Name": "Lufkin KLFK",
    "Address": "Angelina County Airport",
    "loc": [
      -94.75,
      31.233889
    ],
    "Active": "2-Sep-05",
    "Deactive": "",
    "Owner": "National Weather Service"
  },
  {
    "AQS_Code": "480210684",
    "siteID": "48_021_0684",
    "CAMS": "684",
    "TCEQRegion": "AUSTIN",
    "Region": "11",
    "Name": "McKinney Roughs",
    "Address": "1884 State Hwy 71 W",
    "loc": [
      -97.4588971,
      30.140877
    ],
    "Active": "16-Aug-06",
    "Deactive": "",
    "Owner": "Capitol Area Council of Governments"
  },
  {
    "AQS_Code": "480271045",
    "siteID": "48_027_1045",
    "CAMS": "1045",
    "TCEQRegion": "WACO",
    "Region": "9",
    "Name": "Temple Georgia",
    "Address": "8406 Georgia Avenue",
    "loc": [
      -97.4310523,
      31.1224187
    ],
    "Active": "4-Oct-13",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "480271047",
    "siteID": "48_027_1047",
    "CAMS": "1047",
    "TCEQRegion": "WACO",
    "Region": "9",
    "Name": "Killeen Skylark Field",
    "Address": "1605 Stone Tree Drive",
    "loc": [
      -97.6797343,
      31.0880022
    ],
    "Active": "11-Jun-09",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "480290032",
    "siteID": "48_029_0032",
    "CAMS": "23",
    "TCEQRegion": "SAN ANTONIO",
    "Region": "13",
    "Name": "San Antonio Northwest",
    "Address": "6655 Bluebird Lane",
    "loc": [
      -98.620166,
      29.51509
    ],
    "Active": "1-Jul-81",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "480290051",
    "siteID": "48_029_0051",
    "CAMS": "140",
    "TCEQRegion": "SAN ANTONIO",
    "Region": "13",
    "Name": "San Antonio Seale",
    "Address": "254 Seale Road",
    "loc": [
      -98.406501,
      29.4450463
    ],
    "Active": "13-Jul-94",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "480290052",
    "siteID": "48_029_0052",
    "CAMS": "58",
    "TCEQRegion": "SAN ANTONIO",
    "Region": "13",
    "Name": "Camp Bullis",
    "Address": "F Range (1000Yd marker off Wilderness Trail) Near Wilderness Rd",
    "loc": [
      -98.5649364,
      29.6320582
    ],
    "Active": "10-Aug-98",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "480290053",
    "siteID": "48_029_0053",
    "CAMS": "301",
    "TCEQRegion": "SAN ANTONIO",
    "Region": "13",
    "Name": "Selma",
    "Address": "16289 North Evans Rd #2",
    "loc": [
      -98.3125118,
      29.5877408
    ],
    "Active": "6-Oct-99",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "480290055",
    "siteID": "48_029_0055",
    "CAMS": "678",
    "TCEQRegion": "SAN ANTONIO",
    "Region": "13",
    "Name": "CPS Pecan Valley",
    "Address": "802 Pecan Valley Drive",
    "loc": [
      -98.431251,
      29.4072945
    ],
    "Active": "11-Mar-99",
    "Deactive": "",
    "Owner": "San Antonio City Public Services"
  },
  {
    "AQS_Code": "480290059",
    "siteID": "48_029_0059",
    "CAMS": "59",
    "TCEQRegion": "SAN ANTONIO",
    "Region": "13",
    "Name": "Calaveras Lake",
    "Address": "14620 Laguna Rd",
    "loc": [
      -98.3116919,
      29.2753812
    ],
    "Active": "12-May-98",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "480290060",
    "siteID": "48_029_0060",
    "CAMS": "",
    "TCEQRegion": "SAN ANTONIO",
    "Region": "13",
    "Name": "Frank Wing Municipal Court",
    "Address": "401 South Frio St",
    "loc": [
      -98.505381,
      29.4221832
    ],
    "Active": "18-May-00",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "480290501",
    "siteID": "48_029_0501",
    "CAMS": "501",
    "TCEQRegion": "SAN ANTONIO",
    "Region": "13",
    "Name": "Elm Creek Elementary",
    "Address": "11535 Pearsall Rd",
    "loc": [
      -98.724444,
      29.276667
    ],
    "Active": "17-Jun-02",
    "Deactive": "",
    "Owner": "Alamo Area Council of Governments"
  },
  {
    "AQS_Code": "480290502",
    "siteID": "48_029_0502",
    "CAMS": "502",
    "TCEQRegion": "SAN ANTONIO",
    "Region": "13",
    "Name": "Fair Oaks Ranch",
    "Address": "7286 Dietz Elkhorn Rd",
    "loc": [
      -98.625556,
      29.73
    ],
    "Active": "27-Jun-02",
    "Deactive": "",
    "Owner": "Alamo Area Council of Governments"
  },
  {
    "AQS_Code": "480290622",
    "siteID": "48_029_0622",
    "CAMS": "622",
    "TCEQRegion": "SAN ANTONIO",
    "Region": "13",
    "Name": "Heritage Middle School",
    "Address": "7145 Gardner Road",
    "loc": [
      -98.3328207,
      29.3529047
    ],
    "Active": "29-Jul-04",
    "Deactive": "",
    "Owner": "San Antonio City Public Services"
  },
  {
    "AQS_Code": "480290623",
    "siteID": "48_029_0623",
    "CAMS": "623",
    "TCEQRegion": "SAN ANTONIO",
    "Region": "13",
    "Name": "Gardner Rd. Gas Sub-Station",
    "Address": "9599 Gardner Road",
    "loc": [
      -98.3258333,
      29.3319444
    ],
    "Active": "28-Jun-05",
    "Deactive": "",
    "Owner": "San Antonio City Public Services"
  },
  {
    "AQS_Code": "480290625",
    "siteID": "48_029_0625",
    "CAMS": "625",
    "TCEQRegion": "SAN ANTONIO",
    "Region": "13",
    "Name": "Gate 9A CPS",
    "Address": "12941 Cassiano Road",
    "loc": [
      -98.3377778,
      29.2922222
    ],
    "Active": "1-Jun-05",
    "Deactive": "",
    "Owner": "San Antonio City Public Services"
  },
  {
    "AQS_Code": "480290626",
    "siteID": "48_029_0626",
    "CAMS": "626",
    "TCEQRegion": "SAN ANTONIO",
    "Region": "13",
    "Name": "Gate 58 CPS",
    "Address": "1100 Hildebrandt",
    "loc": [
      -98.3316667,
      29.3177778
    ],
    "Active": "1-Jun-05",
    "Deactive": "",
    "Owner": "San Antonio City Public Services"
  },
  {
    "AQS_Code": "480290676",
    "siteID": "48_029_0676",
    "CAMS": "676",
    "TCEQRegion": "SAN ANTONIO",
    "Region": "13",
    "Name": "Palo Alto",
    "Address": "9011 Poteet Jourdanton Hwy",
    "loc": [
      -98.5513832,
      29.3327898
    ],
    "Active": "1-Aug-06",
    "Deactive": "",
    "Owner": "San Antonio Metropolitan Health District"
  },
  {
    "AQS_Code": "480290677",
    "siteID": "48_029_0677",
    "CAMS": "677",
    "TCEQRegion": "SAN ANTONIO",
    "Region": "13",
    "Name": "Old Hwy 90",
    "Address": "911 Old Hwy 90 West",
    "loc": [
      -98.5804991,
      29.4239439
    ],
    "Active": "9-Oct-06",
    "Deactive": "",
    "Owner": "San Antonio Metropolitan Health District"
  },
  {
    "AQS_Code": "480291069",
    "siteID": "48_029_1069",
    "CAMS": "1069",
    "TCEQRegion": "SAN ANTONIO",
    "Region": "13",
    "Name": "San Antonio Interstate 35",
    "Address": "9904 IH 35 N",
    "loc": [
      -98.39139,
      29.5294
    ],
    "Active": "8-Jan-14",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "480370004",
    "siteID": "48_037_0004",
    "CAMS": "",
    "TCEQRegion": "TYLER",
    "Region": "5",
    "Name": "Texarkana",
    "Address": "2315 W 10th Street",
    "loc": [
      -94.0708021,
      33.4257582
    ],
    "Active": "1-Jan-99",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "480390618",
    "siteID": "48_039_0618",
    "CAMS": "618",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Danciger",
    "Address": "FM 1459 @ County Road 924",
    "loc": [
      -95.765,
      29.148889
    ],
    "Active": "1-Jun-03",
    "Deactive": "",
    "Owner": "Brazoria County - Sweeny Industry Group"
  },
  {
    "AQS_Code": "480390619",
    "siteID": "48_039_0619",
    "CAMS": "619",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Mustang Bayou",
    "Address": "FM 2917 @ County Road 169",
    "loc": [
      -95.19991,
      29.308562
    ],
    "Active": "1-Jun-03",
    "Deactive": "",
    "Owner": "Brazoria County - Chocolate Bayou Industry Group"
  },
  {
    "AQS_Code": "480391003",
    "siteID": "48_039_1003",
    "CAMS": "11",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Clute",
    "Address": "426 Commerce Street",
    "loc": [
      -95.397744,
      29.0108409
    ],
    "Active": "1-Jan-74",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "480391004",
    "siteID": "48_039_1004",
    "CAMS": "84",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Manvel Croix Park",
    "Address": "4503 Croix Pkwy",
    "loc": [
      -95.3925089,
      29.5204432
    ],
    "Active": "23-Aug-01",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "480391012",
    "siteID": "48_039_1012",
    "CAMS": "1012",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Freeport South Avenue I",
    "Address": "207 South Avenue I",
    "loc": [
      -95.35483,
      28.96443
    ],
    "Active": "25-May-11",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "480391016",
    "siteID": "48_039_1016",
    "CAMS": "1016",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Lake Jackson",
    "Address": "109B Brazoria Hwy 332 West",
    "loc": [
      -95.4729462,
      29.0437592
    ],
    "Active": "10-Jun-03",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "480415011",
    "siteID": "48_041_5011",
    "CAMS": "5011",
    "TCEQRegion": "WACO",
    "Region": "9",
    "Name": "College Station KCLL",
    "Address": "Easterwood Field Airport",
    "loc": [
      -96.3511111,
      30.5822222
    ],
    "Active": "2-Sep-05",
    "Deactive": "",
    "Owner": "National Weather Service"
  },
  {
    "AQS_Code": "480430101",
    "siteID": "48_043_0101",
    "CAMS": "0067, 0316, 0656, 0691 ",
    "TCEQRegion": "EL PASO",
    "Region": "6",
    "Name": "Bravo Big Bend",
    "Address": "Big Bend National Park",
    "loc": [
      -103.1779076,
      29.3025518
    ],
    "Active": "1-Oct-90",
    "Deactive": "",
    "Owner": "National Park Service"
  },
  {
    "AQS_Code": "480535009",
    "siteID": "48_053_5009",
    "CAMS": "5009",
    "TCEQRegion": "AUSTIN",
    "Region": "11",
    "Name": "Burnet County Airport KBMQ",
    "Address": "Burnet County Airport",
    "loc": [
      -98.2386111,
      30.7388889
    ],
    "Active": "17-Jun-04",
    "Deactive": "",
    "Owner": "National Weather Service"
  },
  {
    "AQS_Code": "480551604",
    "siteID": "48_055_1604",
    "CAMS": "1604",
    "TCEQRegion": "AUSTIN",
    "Region": "11",
    "Name": "Lockhart",
    "Address": "214 Bufkin Lane",
    "loc": [
      -97.664936,
      29.864917
    ],
    "Active": "24-Apr-14",
    "Deactive": "",
    "Owner": "Capitol Area Council of Governments"
  },
  {
    "AQS_Code": "480610006",
    "siteID": "48_061_0006",
    "CAMS": "0080, 0180 ",
    "TCEQRegion": "HARLINGEN",
    "Region": "15",
    "Name": "Brownsville",
    "Address": "344 Porter Drive",
    "loc": [
      -97.4938295,
      25.8925176
    ],
    "Active": "1-Jul-93",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "480611023",
    "siteID": "48_061_1023",
    "CAMS": "1023",
    "TCEQRegion": "HARLINGEN",
    "Region": "15",
    "Name": "Harlingen Teege",
    "Address": "1602 W Teege Avenue",
    "loc": [
      -97.7126837,
      26.2003347
    ],
    "Active": "9-Oct-12",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "480612004",
    "siteID": "48_061_2004",
    "CAMS": "0323, 0667 ",
    "TCEQRegion": "HARLINGEN",
    "Region": "15",
    "Name": "Isla Blanca Park",
    "Address": "Lot B 69 1/2",
    "loc": [
      -97.1621996,
      26.0696153
    ],
    "Active": "1-Aug-05",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "480650004",
    "siteID": "48_065_0004",
    "CAMS": "104",
    "TCEQRegion": "AMARILLO",
    "Region": "1",
    "Name": "Pantex 4",
    "Address": "SW of FM 293 & FM 2373 Intersection",
    "loc": [
      -101.587083,
      35.3359717
    ],
    "Active": "29-Jan-04",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "480650005",
    "siteID": "48_065_0005",
    "CAMS": "105",
    "TCEQRegion": "AMARILLO",
    "Region": "1",
    "Name": "Pantex 5",
    "Address": "W of FM 293 & FM 2373 Intersection",
    "loc": [
      -101.5806223,
      35.3529795
    ],
    "Active": "13-Jan-04",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "480650007",
    "siteID": "48_065_0007",
    "CAMS": "79",
    "TCEQRegion": "AMARILLO",
    "Region": "1",
    "Name": "Pantex 7",
    "Address": "Masterson Pump Station",
    "loc": [
      -101.5608419,
      35.382749
    ],
    "Active": "12-Jul-99",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "480710013",
    "siteID": "48_071_0013",
    "CAMS": "0096, 0638 ",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Smith Point Hawkins Camp",
    "Address": "1850 Hawkins Camp Rd",
    "loc": [
      -94.7869686,
      29.5462437
    ],
    "Active": "6-Sep-00",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "480850003",
    "siteID": "48_085_0003",
    "CAMS": "",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Frisco 5th St",
    "Address": "7471 South 5th Street",
    "loc": [
      -96.8246832,
      33.1423361
    ],
    "Active": "1-Jan-84",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "480850005",
    "siteID": "48_085_0005",
    "CAMS": "0031, 0680 ",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Frisco",
    "Address": "6590 Hillcrest Road",
    "loc": [
      -96.7864188,
      33.1324003
    ],
    "Active": "7-May-92",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "480850007",
    "siteID": "48_085_0007",
    "CAMS": "",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Frisco 7",
    "Address": "6931 Ash Street",
    "loc": [
      -96.8257693,
      33.1474141
    ],
    "Active": "14-Jan-94",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "480850009",
    "siteID": "48_085_0009",
    "CAMS": "1010",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Frisco Eubanks",
    "Address": "6601 Eubanks",
    "loc": [
      -96.8288087,
      33.1446618
    ],
    "Active": "15-Jan-95",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "480850029",
    "siteID": "48_085_0029",
    "CAMS": "",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Frisco Stonebrook",
    "Address": "7202 Stonebrook Parkway",
    "loc": [
      -96.8244725,
      33.1360249
    ],
    "Active": "7-Jan-11",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "480910503",
    "siteID": "48_091_0503",
    "CAMS": "503",
    "TCEQRegion": "SAN ANTONIO",
    "Region": "13",
    "Name": "Bulverde Elementary",
    "Address": "1715 E Ammann Road",
    "loc": [
      -98.4627778,
      29.7608333
    ],
    "Active": "27-Aug-02",
    "Deactive": "",
    "Owner": "Alamo Area Council of Governments"
  },
  {
    "AQS_Code": "480910505",
    "siteID": "48_091_0505",
    "CAMS": "505",
    "TCEQRegion": "SAN ANTONIO",
    "Region": "13",
    "Name": "City of Garden Ridge",
    "Address": "21340 FM 3009",
    "loc": [
      -98.2986111,
      29.6391667
    ],
    "Active": "25-Mar-03",
    "Deactive": "",
    "Owner": "Alamo Area Council of Governments"
  },
  {
    "AQS_Code": "480971504",
    "siteID": "48_097_1504",
    "CAMS": "1504",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Gainesville Doss Street",
    "Address": "1112 Doss Street",
    "loc": [
      -97.153805,
      33.63317
    ],
    "Active": "1-Oct-13",
    "Deactive": "",
    "Owner": "North Texas Commission"
  },
  {
    "AQS_Code": "481095018",
    "siteID": "48_109_5018",
    "CAMS": "5018",
    "TCEQRegion": "EL PASO",
    "Region": "6",
    "Name": "Guadalupe Pass KGDP",
    "Address": "Pine Springs",
    "loc": [
      -104.814444,
      31.831111
    ],
    "Active": "1-Aug-05",
    "Deactive": "",
    "Owner": "National Weather Service"
  },
  {
    "AQS_Code": "481130018",
    "siteID": "48_113_0018",
    "CAMS": "",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Morrell",
    "Address": "3049 Morrell",
    "loc": [
      -96.7818829,
      32.744981
    ],
    "Active": "1-Jan-69",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "481130050",
    "siteID": "48_113_0050",
    "CAMS": "312",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Convention Center",
    "Address": "717 South Akard",
    "loc": [
      -96.7976859,
      32.7742622
    ],
    "Active": "1-Jan-79",
    "Deactive": "",
    "Owner": "City of Dallas Air Pollution Control Section"
  },
  {
    "AQS_Code": "481130061",
    "siteID": "48_113_0061",
    "CAMS": "",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Earhart",
    "Address": "3434 Bickers (Earhart Elem School)",
    "loc": [
      -96.8765711,
      32.7853591
    ],
    "Active": "1-Jan-09",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "481130069",
    "siteID": "48_113_0069",
    "CAMS": "0060, 0161, 0401, 3002 ",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Dallas Hinton",
    "Address": "1415 Hinton Street",
    "loc": [
      -96.8601165,
      32.8200608
    ],
    "Active": "1-Jan-86",
    "Deactive": "",
    "Owner": "City of Dallas Air Pollution Control Section"
  },
  {
    "AQS_Code": "481130075",
    "siteID": "48_113_0075",
    "CAMS": "0063, 0679 ",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Dallas North #2",
    "Address": "12532 1/2 Nuestra Drive",
    "loc": [
      -96.8084975,
      32.9192056
    ],
    "Active": "2-Nov-98",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "481130087",
    "siteID": "48_113_0087",
    "CAMS": "402",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Dallas Redbird Airport Executive",
    "Address": "3277 W Redbird Lane",
    "loc": [
      -96.8720596,
      32.6764506
    ],
    "Active": "1-Jan-95",
    "Deactive": "",
    "Owner": "City of Dallas Air Pollution Control Section"
  },
  {
    "AQS_Code": "481131067",
    "siteID": "48_113_1067",
    "CAMS": "1067",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Dallas LBJ Freeway",
    "Address": "8652 LBJ Freeway",
    "loc": [
      -96.75355,
      32.92118
    ],
    "Active": "1-Apr-14",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "481131500",
    "siteID": "48_113_1500",
    "CAMS": "1500",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Lancaster Cedardale",
    "Address": "1930 Cedardale Road",
    "loc": [
      -96.800599,
      32.630011
    ],
    "Active": "1-Sep-13",
    "Deactive": "",
    "Owner": "North Texas Commission"
  },
  {
    "AQS_Code": "481131505",
    "siteID": "48_113_1505",
    "CAMS": "1505",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Dallas Elm Fork",
    "Address": "2171 Manana Drive",
    "loc": [
      -96.913552,
      32.879107
    ],
    "Active": "18-Nov-13",
    "Deactive": "",
    "Owner": "North Texas Commission"
  },
  {
    "AQS_Code": "481210034",
    "siteID": "48_121_0034",
    "CAMS": "0056, 0157, 0163 ",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Denton Airport South",
    "Address": "Denton Airport South",
    "loc": [
      -97.1962836,
      33.219069
    ],
    "Active": "16-Feb-98",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "481211007",
    "siteID": "48_121_1007",
    "CAMS": "1007",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Flower Mound Shiloh",
    "Address": "4401 Shiloh Road",
    "loc": [
      -97.1300022,
      33.0458619
    ],
    "Active": "27-Oct-10",
    "Deactive": "",
    "Owner": "North Texas Commission"
  },
  {
    "AQS_Code": "481211013",
    "siteID": "48_121_1013",
    "CAMS": "1013",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "DISH Airfield",
    "Address": "9800 Clark Airport Road",
    "loc": [
      -97.29765,
      33.13093
    ],
    "Active": "31-Mar-10",
    "Deactive": "",
    "Owner": "North Texas Commission"
  },
  {
    "AQS_Code": "481211032",
    "siteID": "48_121_1032",
    "CAMS": "1032",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Pilot Point",
    "Address": "792 E Northside Dr",
    "loc": [
      -96.9445903,
      33.4106476
    ],
    "Active": "4-Apr-06",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "481215008",
    "siteID": "48_121_5008",
    "CAMS": "5008",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Denton Airport KDTO",
    "Address": "Denton Municipal Airport",
    "loc": [
      -97.198889,
      33.206111
    ],
    "Active": "22-Jan-03",
    "Deactive": "",
    "Owner": "National Weather Service"
  },
  {
    "AQS_Code": "481231602",
    "siteID": "48_123_1602",
    "CAMS": "1602",
    "TCEQRegion": "CORPUS CHRISTI",
    "Region": "14",
    "Name": "Cuero",
    "Address": "40 Cooperative Way",
    "loc": [
      -97.276575,
      29.134779
    ],
    "Active": "15-Apr-14",
    "Deactive": "",
    "Owner": "City of Victoria"
  },
  {
    "AQS_Code": "481350003",
    "siteID": "48_135_0003",
    "CAMS": "0047, 0122 ",
    "TCEQRegion": "MIDLAND",
    "Region": "7",
    "Name": "Odessa-Hays Elementary School",
    "Address": "Barrett & Monahans Streets",
    "loc": [
      -102.3420368,
      31.8365747
    ],
    "Active": "2-Feb-93",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "481351014",
    "siteID": "48_135_1014",
    "CAMS": "1014",
    "TCEQRegion": "MIDLAND",
    "Region": "7",
    "Name": "Odessa Gonzales",
    "Address": "2700 Disney",
    "loc": [
      -102.3347563,
      31.8702534
    ],
    "Active": "6-Jun-02",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "481390016",
    "siteID": "48_139_0016",
    "CAMS": "0052, 0137 ",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Midlothian OFW",
    "Address": "2725 Old Fort Worth Road",
    "loc": [
      -97.0268987,
      32.4820829
    ],
    "Active": "7-Nov-94",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "481391044",
    "siteID": "48_139_1044",
    "CAMS": "1044",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Italy",
    "Address": "900 FM 667 Ellis County",
    "loc": [
      -96.8701892,
      32.1754166
    ],
    "Active": "21-Aug-07",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "481410029",
    "siteID": "48_141_0029",
    "CAMS": "414",
    "TCEQRegion": "EL PASO",
    "Region": "6",
    "Name": "Ivanhoe",
    "Address": "10834 Ivanhoe (Ivanhoe Fire Station)",
    "loc": [
      -106.3235781,
      31.7857687
    ],
    "Active": "1-Jan-79",
    "Deactive": "",
    "Owner": "City of El Paso Environmental Services Department"
  },
  {
    "AQS_Code": "481410037",
    "siteID": "48_141_0037",
    "CAMS": "0012, 0125, 0151 ",
    "TCEQRegion": "EL PASO",
    "Region": "6",
    "Name": "El Paso UTEP",
    "Address": "250 Rim Rd",
    "loc": [
      -106.5012595,
      31.7682914
    ],
    "Active": "1-Jan-81",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "481410038",
    "siteID": "48_141_0038",
    "CAMS": "",
    "TCEQRegion": "EL PASO",
    "Region": "6",
    "Name": "Riverside",
    "Address": "301 Midway Dr (Riverside High School)",
    "loc": [
      -106.3721,
      31.7338
    ],
    "Active": "1-Jan-81",
    "Deactive": "",
    "Owner": "City of El Paso Environmental Services Department"
  },
  {
    "AQS_Code": "481410044",
    "siteID": "48_141_0044",
    "CAMS": "0041, 0126, 3001 ",
    "TCEQRegion": "EL PASO",
    "Region": "6",
    "Name": "El Paso Chamizal",
    "Address": "800 S San Marcial Street",
    "loc": [
      -106.4552272,
      31.7656854
    ],
    "Active": "1-Apr-88",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "481410047",
    "siteID": "48_141_0047",
    "CAMS": "123",
    "TCEQRegion": "EL PASO",
    "Region": "6",
    "Name": "Womble",
    "Address": "Cleveland Ave at Clark Dr",
    "loc": [
      -106.4131769,
      31.7759422
    ],
    "Active": "13-Apr-93",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "481410054",
    "siteID": "48_141_0054",
    "CAMS": "36",
    "TCEQRegion": "EL PASO",
    "Region": "6",
    "Name": "El Paso Lower Valley",
    "Address": "8470 Plant Rd",
    "loc": [
      -106.356022,
      31.7038461
    ],
    "Active": "7-Jun-96",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "481410055",
    "siteID": "48_141_0055",
    "CAMS": "0037, 0159, 0172 ",
    "TCEQRegion": "EL PASO",
    "Region": "6",
    "Name": "Ascarate Park SE",
    "Address": "650 R E Thomason Loop",
    "loc": [
      -106.4028059,
      31.7467753
    ],
    "Active": "1-Sep-99",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "481410057",
    "siteID": "48_141_0057",
    "CAMS": "49",
    "TCEQRegion": "EL PASO",
    "Region": "6",
    "Name": "Socorro Hueco",
    "Address": "320 Old Hueco Tanks Road",
    "loc": [
      -106.288,
      31.6675
    ],
    "Active": "18-Nov-99",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "481410058",
    "siteID": "48_141_0058",
    "CAMS": "72",
    "TCEQRegion": "EL PASO",
    "Region": "6",
    "Name": "Skyline Park",
    "Address": "5050A Yvette Drive",
    "loc": [
      -106.425827,
      31.8939133
    ],
    "Active": "11-Jul-00",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "481410693",
    "siteID": "48_141_0693",
    "CAMS": "693",
    "TCEQRegion": "EL PASO",
    "Region": "6",
    "Name": "Van Buren",
    "Address": "2700 Harrison Avenue",
    "loc": [
      -106.46452,
      31.81337
    ],
    "Active": "5-Jul-10",
    "Deactive": "",
    "Owner": "EPA/OAQPS/MQAG"
  },
  {
    "AQS_Code": "481411021",
    "siteID": "48_141_1021",
    "CAMS": "1021",
    "TCEQRegion": "EL PASO",
    "Region": "6",
    "Name": "Ojo De Agua",
    "Address": "6767 Ojo De Agua",
    "loc": [
      -106.5473,
      31.86247
    ],
    "Active": "15-Apr-13",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "481490001",
    "siteID": "48_149_0001",
    "CAMS": "601",
    "TCEQRegion": "AUSTIN",
    "Region": "11",
    "Name": "Fayette County",
    "Address": "636 Roznov Rd",
    "loc": [
      -96.7458748,
      29.9624745
    ],
    "Active": "18-May-00",
    "Deactive": "",
    "Owner": "Capitol Area Council of Governments"
  },
  {
    "AQS_Code": "481570696",
    "siteID": "48_157_0696",
    "CAMS": "696",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "UH Sugarland",
    "Address": "14000 University Blvd",
    "loc": [
      -95.6497,
      29.5741
    ],
    "Active": "26-Feb-09",
    "Deactive": "",
    "Owner": "University of Houston"
  },
  {
    "AQS_Code": "481670004",
    "siteID": "48_167_0004",
    "CAMS": "",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Texas City Fire Station",
    "Address": "2516 Texas Avenue",
    "loc": [
      -94.930833,
      29.384444
    ],
    "Active": "1-Jan-72",
    "Deactive": "",
    "Owner": "Galveston City-County Health Department"
  },
  {
    "AQS_Code": "481670005",
    "siteID": "48_167_0005",
    "CAMS": "0147, 1022 ",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Texas City Ball Park",
    "Address": "2516 1/2 Texas Avenue",
    "loc": [
      -94.9315197,
      29.3852338
    ],
    "Active": "20-Oct-97",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "481670056",
    "siteID": "48_167_0056",
    "CAMS": "620",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Texas City 34th Street",
    "Address": "2212 North 34th Street",
    "loc": [
      -94.94712,
      29.4057
    ],
    "Active": "1-Jun-03",
    "Deactive": "",
    "Owner": "Texas City Industry Group"
  },
  {
    "AQS_Code": "481670571",
    "siteID": "48_167_0571",
    "CAMS": "571",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Clear Creek High School",
    "Address": "2305 E Main St",
    "loc": [
      -95.070556,
      29.525556
    ],
    "Active": "12-Sep-03",
    "Deactive": "",
    "Owner": "University of Houston"
  },
  {
    "AQS_Code": "481670615",
    "siteID": "48_167_0615",
    "CAMS": "0615, 1615 ",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Texas City BP 31st Street (Site 1)",
    "Address": "Texas City Bp Property",
    "loc": [
      -94.94108,
      29.38145
    ],
    "Active": "31-Dec-09",
    "Deactive": "",
    "Owner": "British Petroleum"
  },
  {
    "AQS_Code": "481670616",
    "siteID": "48_167_0616",
    "CAMS": "0616, 1616 ",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Texas City BP Onsite (Site 2)",
    "Address": "Texas City Bp Property Onsite",
    "loc": [
      -94.91544,
      29.36886
    ],
    "Active": "23-Mar-10",
    "Deactive": "",
    "Owner": "British Petroleum"
  },
  {
    "AQS_Code": "481670621",
    "siteID": "48_167_0621",
    "CAMS": "0621, 1621 ",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Texas City BP Logan Street (Site 3)",
    "Address": "303 Logan Street",
    "loc": [
      -94.93022,
      29.380981
    ],
    "Active": "7-Apr-10",
    "Deactive": "",
    "Owner": "British Petroleum"
  },
  {
    "AQS_Code": "481670683",
    "siteID": "48_167_0683",
    "CAMS": "683",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Texas City 11th Street",
    "Address": "569 11th Street South",
    "loc": [
      -94.91019,
      29.3787
    ],
    "Active": "1-Jan-10",
    "Deactive": "",
    "Owner": "Marathon Petroleum Co."
  },
  {
    "AQS_Code": "481670697",
    "siteID": "48_167_0697",
    "CAMS": "697",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "UH Coastal Center",
    "Address": "Jack Brooks Road",
    "loc": [
      -95.0414,
      29.3879
    ],
    "Active": "31-Mar-10",
    "Deactive": "",
    "Owner": "University of Houston"
  },
  {
    "AQS_Code": "481671034",
    "siteID": "48_167_1034",
    "CAMS": "1034",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Galveston 99th Street",
    "Address": "9511 Avenue V 1/2",
    "loc": [
      -94.8612886,
      29.2544736
    ],
    "Active": "20-Mar-07",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "481675005",
    "siteID": "48_167_5005",
    "CAMS": "5005",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Galveston Airport KGLS",
    "Address": "Galveston Scholes International Airport",
    "loc": [
      -94.864167,
      29.270278
    ],
    "Active": "22-Jan-03",
    "Deactive": "",
    "Owner": "National Weather Service"
  },
  {
    "AQS_Code": "481750624",
    "siteID": "48_175_0624",
    "CAMS": "624",
    "TCEQRegion": "CORPUS CHRISTI",
    "Region": "14",
    "Name": "Coleto",
    "Address": "Coleto",
    "loc": [
      -97.220882,
      28.720926
    ],
    "Active": "10-Jul-10",
    "Deactive": "",
    "Owner": "City of Victoria"
  },
  {
    "AQS_Code": "481830001",
    "siteID": "48_183_0001",
    "CAMS": "0019, 0127, 0644 ",
    "TCEQRegion": "TYLER",
    "Region": "5",
    "Name": "Longview",
    "Address": "Gregg Co Airport near Longview",
    "loc": [
      -94.7118107,
      32.3786823
    ],
    "Active": "1-Jan-77",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "481870504",
    "siteID": "48_187_0504",
    "CAMS": "504",
    "TCEQRegion": "SAN ANTONIO",
    "Region": "13",
    "Name": "New Braunfels Airport",
    "Address": "2090 Airport Rd",
    "loc": [
      -98.0288889,
      29.7041667
    ],
    "Active": "30-Aug-02",
    "Deactive": "",
    "Owner": "Alamo Area Council of Governments"
  },
  {
    "AQS_Code": "481870506",
    "siteID": "48_187_0506",
    "CAMS": "506",
    "TCEQRegion": "SAN ANTONIO",
    "Region": "13",
    "Name": "Seguin Outdoor Learning Center",
    "Address": "1865 Hwy 90 East",
    "loc": [
      -97.932222,
      29.588611
    ],
    "Active": "26-Mar-03",
    "Deactive": "",
    "Owner": "Alamo Area Council of Governments"
  },
  {
    "AQS_Code": "481875004",
    "siteID": "48_187_5004",
    "CAMS": "5004",
    "TCEQRegion": "SAN ANTONIO",
    "Region": "13",
    "Name": "New Braunfels Airport KBAZ",
    "Address": "New Braunfels Municipal Airport",
    "loc": [
      -98.0452778,
      29.7086111
    ],
    "Active": "22-Jan-03",
    "Deactive": "",
    "Owner": "National Weather Service"
  },
  {
    "AQS_Code": "482010024",
    "siteID": "48_201_0024",
    "CAMS": "0008, 0108, 0150 ",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Houston Aldine",
    "Address": "4510 1/2 Aldine Mail Rd",
    "loc": [
      -95.3261373,
      29.9010364
    ],
    "Active": "1-Jan-74",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482010026",
    "siteID": "48_201_0026",
    "CAMS": "0015, 0115 ",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Channelview",
    "Address": "1405 Sheldon Road",
    "loc": [
      -95.1254948,
      29.8027073
    ],
    "Active": "1-Jan-80",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482010029",
    "siteID": "48_201_0029",
    "CAMS": "0026, 0110, 0154 ",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Northwest Harris County",
    "Address": "16822 Kitzman",
    "loc": [
      -95.6739508,
      30.039524
    ],
    "Active": "1-Jan-81",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482010036",
    "siteID": "48_201_0036",
    "CAMS": "1036",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Jacinto Port",
    "Address": "Corner of First & Elsbeth Streets",
    "loc": [
      -95.1051,
      29.7761
    ],
    "Active": "19-Jul-06",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482010046",
    "siteID": "48_201_0046",
    "CAMS": "405",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Houston North Wayside",
    "Address": "7330 1/2 North Wayside",
    "loc": [
      -95.2840958,
      29.8280859
    ],
    "Active": "1-Jan-76",
    "Deactive": "",
    "Owner": "City of Houston Health Department"
  },
  {
    "AQS_Code": "482010047",
    "siteID": "48_201_0047",
    "CAMS": "408",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Lang",
    "Address": "4401 1/2 Lang Rd",
    "loc": [
      -95.489167,
      29.834167
    ],
    "Active": "1-Jan-78",
    "Deactive": "",
    "Owner": "City of Houston Health Department"
  },
  {
    "AQS_Code": "482010051",
    "siteID": "48_201_0051",
    "CAMS": "409",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Houston Croquet",
    "Address": "13826 1/2 Croquet",
    "loc": [
      -95.474167,
      29.623889
    ],
    "Active": "1-Jan-78",
    "Deactive": "",
    "Owner": "City of Houston Health Department"
  },
  {
    "AQS_Code": "482010055",
    "siteID": "48_201_0055",
    "CAMS": "0053, 0146, 0181 ",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Houston Bayland Park",
    "Address": "6400 Bissonnet Street",
    "loc": [
      -95.499219,
      29.6957294
    ],
    "Active": "24-Mar-98",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482010057",
    "siteID": "48_201_0057",
    "CAMS": "0167, 1667 ",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Galena Park",
    "Address": "1713 2nd Street",
    "loc": [
      -95.238469,
      29.734231
    ],
    "Active": "21-Oct-97",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482010058",
    "siteID": "48_201_0058",
    "CAMS": "148",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Baytown",
    "Address": "7210 1/2 Bayway Drive",
    "loc": [
      -95.0312316,
      29.7706975
    ],
    "Active": "25-Mar-98",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482010060",
    "siteID": "48_201_0060",
    "CAMS": "404",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Houston Kirkpatrick",
    "Address": "5565 Kirkpatrick",
    "loc": [
      -95.2936223,
      29.8074146
    ],
    "Active": "10-Feb-00",
    "Deactive": "",
    "Owner": "City of Houston Health Department"
  },
  {
    "AQS_Code": "482010061",
    "siteID": "48_201_0061",
    "CAMS": "145",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Shore Acres",
    "Address": "3903 1/2 Old Highway 146",
    "loc": [
      -95.0181324,
      29.6150008
    ],
    "Active": "28-May-98",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482010062",
    "siteID": "48_201_0062",
    "CAMS": "406",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Houston Monroe",
    "Address": "9726 1/2 Monroe",
    "loc": [
      -95.267222,
      29.625556
    ],
    "Active": "1-Jan-84",
    "Deactive": "",
    "Owner": "City of Houston Health Department"
  },
  {
    "AQS_Code": "482010066",
    "siteID": "48_201_0066",
    "CAMS": "410",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Houston Westhollow",
    "Address": "3333 1/2 Hwy 6 South",
    "loc": [
      -95.635833,
      29.723333
    ],
    "Active": "1-Jul-94",
    "Deactive": "",
    "Owner": "City of Houston Health Department"
  },
  {
    "AQS_Code": "482010069",
    "siteID": "48_201_0069",
    "CAMS": "169",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Milby Park",
    "Address": "2201A Central St",
    "loc": [
      -95.2611301,
      29.7062492
    ],
    "Active": "7-Apr-99",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482010071",
    "siteID": "48_201_0071",
    "CAMS": "",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Pasadena HL&P",
    "Address": "1001 1/2 Red Bluff",
    "loc": [
      -95.2013298,
      29.7164829
    ],
    "Active": "17-Jul-00",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482010075",
    "siteID": "48_201_0075",
    "CAMS": "411",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Houston Texas Avenue",
    "Address": "2311 Texas Ave",
    "loc": [
      -95.350278,
      29.752778
    ],
    "Active": "30-Mar-01",
    "Deactive": "",
    "Owner": "City of Houston Health Department"
  },
  {
    "AQS_Code": "482010307",
    "siteID": "48_201_0307",
    "CAMS": "1029",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Manchester/Central",
    "Address": "9401 1/2 Manchester Street",
    "loc": [
      -95.2599093,
      29.718799
    ],
    "Active": "9-May-05",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482010416",
    "siteID": "48_201_0416",
    "CAMS": "416",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Park Place",
    "Address": "7421 Park Place Blvd",
    "loc": [
      -95.294722,
      29.686389
    ],
    "Active": "22-Feb-06",
    "Deactive": "",
    "Owner": "City of Houston Health Department"
  },
  {
    "AQS_Code": "482010551",
    "siteID": "48_201_0551",
    "CAMS": "551",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Sheldon",
    "Address": "15345 Beaumont Hwy",
    "loc": [
      -95.1602778,
      29.8586111
    ],
    "Active": "17-Apr-02",
    "Deactive": "",
    "Owner": "Harris County Health and Environmental Services"
  },
  {
    "AQS_Code": "482010552",
    "siteID": "48_201_0552",
    "CAMS": "552",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Baytown Wetlands Center",
    "Address": "1724 Market Street",
    "loc": [
      -94.9847222,
      29.7330556
    ],
    "Active": "11-Jun-03",
    "Deactive": "",
    "Owner": "Harris County Health and Environmental Services"
  },
  {
    "AQS_Code": "482010553",
    "siteID": "48_201_0553",
    "CAMS": "553",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Crosby Library",
    "Address": "1800 N. 18th Street",
    "loc": [
      -95.0683333,
      29.9208333
    ],
    "Active": "16-Jun-03",
    "Deactive": "",
    "Owner": "Harris County Health and Environmental Services"
  },
  {
    "AQS_Code": "482010554",
    "siteID": "48_201_0554",
    "CAMS": "554",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "West Houston",
    "Address": "16719 Clay Road",
    "loc": [
      -95.6569444,
      29.8330556
    ],
    "Active": "24-Dec-03",
    "Deactive": "",
    "Owner": "Harris County Health and Environmental Services"
  },
  {
    "AQS_Code": "482010556",
    "siteID": "48_201_0556",
    "CAMS": "556",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "La Porte Sylvan Beach",
    "Address": "636 Bayshore Drive",
    "loc": [
      -95.0097222,
      29.6552778
    ],
    "Active": "1-Jan-04",
    "Deactive": "",
    "Owner": "Harris County Health and Environmental Services"
  },
  {
    "AQS_Code": "482010557",
    "siteID": "48_201_0557",
    "CAMS": "557",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Mercer Arboretum",
    "Address": "22306 Aldine Westfield Road",
    "loc": [
      -95.3811111,
      30.0380556
    ],
    "Active": "12-Feb-04",
    "Deactive": "",
    "Owner": "Harris County Health and Environmental Services"
  },
  {
    "AQS_Code": "482010558",
    "siteID": "48_201_0558",
    "CAMS": "558",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Tom Bass",
    "Address": "15108 Cullen Blvd",
    "loc": [
      -95.3536111,
      29.5894444
    ],
    "Active": "6-Feb-04",
    "Deactive": "",
    "Owner": "Harris County Health and Environmental Services"
  },
  {
    "AQS_Code": "482010559",
    "siteID": "48_201_0559",
    "CAMS": "559",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Katy Park",
    "Address": "24927 Morton Road",
    "loc": [
      -95.8061111,
      29.8105556
    ],
    "Active": "12-Mar-04",
    "Deactive": "",
    "Owner": "Harris County Health and Environmental Services"
  },
  {
    "AQS_Code": "482010560",
    "siteID": "48_201_0560",
    "CAMS": "560",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Atascocita",
    "Address": "2302 Atascocita Rd",
    "loc": [
      -95.235,
      29.961944
    ],
    "Active": "29-Jul-04",
    "Deactive": "",
    "Owner": "Harris County Health and Environmental Services"
  },
  {
    "AQS_Code": "482010561",
    "siteID": "48_201_0561",
    "CAMS": "561",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Meyer Park",
    "Address": "7700 Cypresswood Dr",
    "loc": [
      -95.5225,
      30.011667
    ],
    "Active": "30-Jul-04",
    "Deactive": "",
    "Owner": "Harris County Health and Environmental Services"
  },
  {
    "AQS_Code": "482010562",
    "siteID": "48_201_0562",
    "CAMS": "562",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Bunker Hill Village",
    "Address": "11977 Memorial Drive",
    "loc": [
      -95.538056,
      29.778333
    ],
    "Active": "8-Oct-04",
    "Deactive": "",
    "Owner": "Harris County Health and Environmental Services"
  },
  {
    "AQS_Code": "482010563",
    "siteID": "48_201_0563",
    "CAMS": "563",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Huffman Wolf Road",
    "Address": "2100 Wolf Road",
    "loc": [
      -95.06147,
      30.05786
    ],
    "Active": "21-Sep-10",
    "Deactive": "",
    "Owner": "Harris County Health and Environmental Services"
  },
  {
    "AQS_Code": "482010570",
    "siteID": "48_201_0570",
    "CAMS": "570",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Clear Brook High School",
    "Address": "4607 FM 2351",
    "loc": [
      -95.1852778,
      29.5488889
    ],
    "Active": "12-Sep-03",
    "Deactive": "",
    "Owner": "University of Houston"
  },
  {
    "AQS_Code": "482010572",
    "siteID": "48_201_0572",
    "CAMS": "572",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Clear Lake High School",
    "Address": "2929 Bay Area Blvd",
    "loc": [
      -95.105,
      29.583333
    ],
    "Active": "12-Sep-03",
    "Deactive": "",
    "Owner": "University of Houston"
  },
  {
    "AQS_Code": "482010617",
    "siteID": "48_201_0617",
    "CAMS": "617",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Wallisville Road",
    "Address": "4727 Wallisville Road",
    "loc": [
      -94.99,
      29.821389
    ],
    "Active": "30-May-03",
    "Deactive": "",
    "Owner": "Houston Regional Monitoring"
  },
  {
    "AQS_Code": "482010669",
    "siteID": "48_201_0669",
    "CAMS": "669",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "TPC FTIR South",
    "Address": "8600 Park Place Blvd",
    "loc": [
      -95.252778,
      29.694722
    ],
    "Active": "13-Jan-06",
    "Deactive": "",
    "Owner": "Texas Petrochemicals"
  },
  {
    "AQS_Code": "482010670",
    "siteID": "48_201_0670",
    "CAMS": "670",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "TPC FTIR North",
    "Address": "8600 Park Place Blvd",
    "loc": [
      -95.257222,
      29.701944
    ],
    "Active": "1-Jan-06",
    "Deactive": "",
    "Owner": "Texas Petrochemicals"
  },
  {
    "AQS_Code": "482010671",
    "siteID": "48_201_0671",
    "CAMS": "671",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Goodyear GC",
    "Address": "9728 West Road",
    "loc": [
      -95.255,
      29.706111
    ],
    "Active": "4-May-06",
    "Deactive": "",
    "Owner": "Goodyear Tire & Rubber Co"
  },
  {
    "AQS_Code": "482010673",
    "siteID": "48_201_0673",
    "CAMS": "673",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Goodyear Houston Site #2",
    "Address": "2000 Goodyear Dr",
    "loc": [
      -95.256697,
      29.7023
    ],
    "Active": "1-Oct-06",
    "Deactive": "",
    "Owner": "Goodyear Tire & Rubber Co"
  },
  {
    "AQS_Code": "482010695",
    "siteID": "48_201_0695",
    "CAMS": "695",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "UH Moody Tower",
    "Address": "4401 Wheeler Street",
    "loc": [
      -95.3414,
      29.7176
    ],
    "Active": "31-Mar-10",
    "Deactive": "",
    "Owner": "University of Houston"
  },
  {
    "AQS_Code": "482010803",
    "siteID": "48_201_0803",
    "CAMS": "0114, 0603 ",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "HRM #3 Haden Rd",
    "Address": "1504 1/2 Haden Road",
    "loc": [
      -95.1785379,
      29.7647877
    ],
    "Active": "14-Nov-92",
    "Deactive": "",
    "Owner": "Houston Regional Monitoring"
  },
  {
    "AQS_Code": "482011015",
    "siteID": "48_201_1015",
    "CAMS": "0165, 1015 ",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Lynchburg Ferry",
    "Address": "4407 Independence Parkway South",
    "loc": [
      -95.0813861,
      29.7616528
    ],
    "Active": "24-Apr-03",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482011017",
    "siteID": "48_201_1017",
    "CAMS": "1017",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Baytown Garth",
    "Address": "8622 Garth Road Unit A",
    "loc": [
      -94.983786,
      29.823319
    ],
    "Active": "5-Jun-12",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482011034",
    "siteID": "48_201_1034",
    "CAMS": "1",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Houston East",
    "Address": "1262 1/2 Mae Drive",
    "loc": [
      -95.2205822,
      29.7679965
    ],
    "Active": "1-Jan-73",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482011035",
    "siteID": "48_201_1035",
    "CAMS": "0055, 0113, 0304, 0403 ",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Clinton",
    "Address": "9525 1/2 Clinton Dr",
    "loc": [
      -95.2575931,
      29.7337263
    ],
    "Active": "1-Jan-72",
    "Deactive": "",
    "Owner": "City of Houston Health Department"
  },
  {
    "AQS_Code": "482011039",
    "siteID": "48_201_1039",
    "CAMS": "0035, 0139, 0235, 1001, 3000 ",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Houston Deer Park #2",
    "Address": "4514 1/2 Durant St",
    "loc": [
      -95.1285077,
      29.670025
    ],
    "Active": "22-Oct-96",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482011042",
    "siteID": "48_201_1042",
    "CAMS": "309",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Kingwood",
    "Address": "3603 1/2 West Lake Houston Pkwy",
    "loc": [
      -95.1897514,
      30.0584604
    ],
    "Active": "15-Feb-01",
    "Deactive": "",
    "Owner": "City of Houston Health Department"
  },
  {
    "AQS_Code": "482011043",
    "siteID": "48_201_1043",
    "CAMS": "243",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "La Porte Airport C243",
    "Address": "La Porte Airport 2434 Buchanan Street",
    "loc": [
      -95.0647,
      29.672
    ],
    "Active": "9-Jun-05",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482011049",
    "siteID": "48_201_1049",
    "CAMS": "1049",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Pasadena North",
    "Address": "702 Light Co Service Road",
    "loc": [
      -95.2224669,
      29.716611
    ],
    "Active": "1-Jul-08",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482011050",
    "siteID": "48_201_1050",
    "CAMS": "45",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Seabrook Friendship Park",
    "Address": "4522 Park Rd",
    "loc": [
      -95.0155437,
      29.5830473
    ],
    "Active": "29-Jul-01",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482011052",
    "siteID": "48_201_1052",
    "CAMS": "1052",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Houston North Loop",
    "Address": "822 North Loop",
    "loc": [
      -95.38769,
      29.81453
    ],
    "Active": "15-Apr-15",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482011066",
    "siteID": "48_201_1066",
    "CAMS": "1066",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Houston Southwest Freeway",
    "Address": "5617 Westward Avenue",
    "loc": [
      -95.49265,
      29.7216
    ],
    "Active": "22-Jan-14",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482016000",
    "siteID": "48_201_6000",
    "CAMS": "0175, 1020 ",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Cesar Chavez",
    "Address": "4829 A Galveston Rd",
    "loc": [
      -95.2535982,
      29.6843603
    ],
    "Active": "11-Mar-04",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482030002",
    "siteID": "48_203_0002",
    "CAMS": "85",
    "TCEQRegion": "TYLER",
    "Region": "5",
    "Name": "Karnack",
    "Address": "Hwy 134 & Spur 449",
    "loc": [
      -94.1674569,
      32.6689873
    ],
    "Active": "30-Jun-01",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482090614",
    "siteID": "48_209_0614",
    "CAMS": "614",
    "TCEQRegion": "AUSTIN",
    "Region": "11",
    "Name": "Dripping Springs School",
    "Address": "29400 Ranch Road 12",
    "loc": [
      -98.0833473,
      30.2146162
    ],
    "Active": "11-Mar-03",
    "Deactive": "",
    "Owner": "Capitol Area Council of Governments"
  },
  {
    "AQS_Code": "482091675",
    "siteID": "48_209_1675",
    "CAMS": "1675",
    "TCEQRegion": "AUSTIN",
    "Region": "11",
    "Name": "CAPCOG San Marcos Staples Road",
    "Address": "599 Staples Road",
    "loc": [
      -97.928856,
      29.862281
    ],
    "Active": "20-Sep-11",
    "Deactive": "",
    "Owner": "Capitol Area Council of Governments"
  },
  {
    "AQS_Code": "482150043",
    "siteID": "48_215_0043",
    "CAMS": "0043, 0143 ",
    "TCEQRegion": "HARLINGEN",
    "Region": "15",
    "Name": "Mission",
    "Address": "2300 North Glasscock",
    "loc": [
      -98.291069,
      26.2262097
    ],
    "Active": "1-Jul-95",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482210001",
    "siteID": "48_221_0001",
    "CAMS": "0073, 0681 ",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Granbury",
    "Address": "200 N Gordon Street",
    "loc": [
      -97.8035291,
      32.4423044
    ],
    "Active": "9-May-00",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482311006",
    "siteID": "48_231_1006",
    "CAMS": "0198, 1006 ",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Greenville",
    "Address": "824 Sayle Street",
    "loc": [
      -96.1155717,
      33.1530882
    ],
    "Active": "20-Mar-03",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482450009",
    "siteID": "48_245_0009",
    "CAMS": "0002, 0112, 2002 ",
    "TCEQRegion": "BEAUMONT",
    "Region": "10",
    "Name": "Beaumont Downtown",
    "Address": "1086 Vermont Avenue",
    "loc": [
      -94.0710606,
      30.0364221
    ],
    "Active": "1-Jan-80",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482450011",
    "siteID": "48_245_0011",
    "CAMS": "0028, 0128, 0228 ",
    "TCEQRegion": "BEAUMONT",
    "Region": "10",
    "Name": "Port Arthur West",
    "Address": "623 Ellias Street",
    "loc": [
      -93.9910842,
      29.8975163
    ],
    "Active": "1-Jan-81",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482450014",
    "siteID": "48_245_0014",
    "CAMS": "119",
    "TCEQRegion": "BEAUMONT",
    "Region": "10",
    "Name": "Groves",
    "Address": "3355 Grandview Ave & 32nd St",
    "loc": [
      -93.895928,
      29.9611242
    ],
    "Active": "1-Sep-93",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482450017",
    "siteID": "48_245_0017",
    "CAMS": "136",
    "TCEQRegion": "BEAUMONT",
    "Region": "10",
    "Name": "Port Neches Avenue L",
    "Address": "605 Avenue L",
    "loc": [
      -93.9528657,
      29.9825311
    ],
    "Active": "25-Jul-94",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482450018",
    "siteID": "48_245_0018",
    "CAMS": "1019, 2001 ",
    "TCEQRegion": "BEAUMONT",
    "Region": "10",
    "Name": "Jefferson County Airport",
    "Address": "End of 90th Street @ Jefferson County Airport",
    "loc": [
      -94.00077,
      29.9427981
    ],
    "Active": "1-Oct-94",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482450019",
    "siteID": "48_245_0019",
    "CAMS": "0131, 2000 ",
    "TCEQRegion": "BEAUMONT",
    "Region": "10",
    "Name": "City Service Center / PA",
    "Address": "201 H O Mills Blvd",
    "loc": [
      -93.9792618,
      29.8938491
    ],
    "Active": "9-May-97",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482450021",
    "siteID": "48_245_0021",
    "CAMS": "0303, 0689 ",
    "TCEQRegion": "BEAUMONT",
    "Region": "10",
    "Name": "Port Arthur Memorial School",
    "Address": "2200 Jefferson Drive",
    "loc": [
      -93.9090184,
      29.9228943
    ],
    "Active": "6-Mar-00",
    "Deactive": "",
    "Owner": "South East Texas Regional Planning Commission"
  },
  {
    "AQS_Code": "482450022",
    "siteID": "48_245_0022",
    "CAMS": "0064, 0654 ",
    "TCEQRegion": "BEAUMONT",
    "Region": "10",
    "Name": "Hamshire",
    "Address": "12552 Second St",
    "loc": [
      -94.3178017,
      29.8639574
    ],
    "Active": "10-Feb-00",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482450101",
    "siteID": "48_245_0101",
    "CAMS": "0640, 1654 ",
    "TCEQRegion": "BEAUMONT",
    "Region": "10",
    "Name": "SETRPC 40 Sabine Pass",
    "Address": "5200 Mechanic",
    "loc": [
      -93.8940805,
      29.7279314
    ],
    "Active": "1-Jan-00",
    "Deactive": "",
    "Owner": "South East Texas Regional Planning Commission"
  },
  {
    "AQS_Code": "482450102",
    "siteID": "48_245_0102",
    "CAMS": "643",
    "TCEQRegion": "BEAUMONT",
    "Region": "10",
    "Name": "SETRPC 43 Jefferson Co Airport",
    "Address": "Jefferson County Airport",
    "loc": [
      -94.0006841,
      29.9427514
    ],
    "Active": "5-Aug-08",
    "Deactive": "",
    "Owner": "South East Texas Regional Planning Commission"
  },
  {
    "AQS_Code": "482450628",
    "siteID": "48_245_0628",
    "CAMS": "0628, 1628, 628 ",
    "TCEQRegion": "BEAUMONT",
    "Region": "10",
    "Name": "SETRPC Port Arthur",
    "Address": "Unavailable",
    "loc": [
      -93.951163,
      29.867756
    ],
    "Active": "5-Oct-04",
    "Deactive": "",
    "Owner": "South East Texas Regional Planning Commission"
  },
  {
    "AQS_Code": "482451035",
    "siteID": "48_245_1035",
    "CAMS": "1035",
    "TCEQRegion": "BEAUMONT",
    "Region": "10",
    "Name": "Nederland High School",
    "Address": "1800 N. 18th Street",
    "loc": [
      -94.0108717,
      29.9789255
    ],
    "Active": "30-Aug-06",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482451050",
    "siteID": "48_245_1050",
    "CAMS": "1050",
    "TCEQRegion": "BEAUMONT",
    "Region": "10",
    "Name": "Beaumont Mary",
    "Address": "414 Mary Street",
    "loc": [
      -94.0909236,
      30.0671163
    ],
    "Active": "13-Oct-10",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482510003",
    "siteID": "48_251_0003",
    "CAMS": "0077, 0682 ",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Cleburne Airport",
    "Address": "1650 Airport Drive",
    "loc": [
      -97.4367419,
      32.3535945
    ],
    "Active": "10-May-00",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482511008",
    "siteID": "48_251_1008",
    "CAMS": "1008",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Johnson County Luisa",
    "Address": "2420 Luisa Ln",
    "loc": [
      -97.169271,
      32.469701
    ],
    "Active": "23-Nov-10",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482511063",
    "siteID": "48_251_1063",
    "CAMS": "1063",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Mansfield Flying L Lane",
    "Address": "1310 Flying L Lane",
    "loc": [
      -97.1175,
      32.5418
    ],
    "Active": "1-Oct-12",
    "Deactive": "",
    "Owner": "North Texas Commission"
  },
  {
    "AQS_Code": "482511501",
    "siteID": "48_251_1501",
    "CAMS": "1501",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Godley FM2331",
    "Address": "12404 FM2331",
    "loc": [
      -97.526759,
      32.481821
    ],
    "Active": "13-Jul-13",
    "Deactive": "",
    "Owner": "North Texas Commission"
  },
  {
    "AQS_Code": "482551070",
    "siteID": "48_255_1070",
    "CAMS": "1070",
    "TCEQRegion": "SAN ANTONIO",
    "Region": "13",
    "Name": "Karnes County Courthouse",
    "Address": "210 W. Calvert Avenue",
    "loc": [
      -97.901742,
      28.885481
    ],
    "Active": "17-Dec-14",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482570005",
    "siteID": "48_257_0005",
    "CAMS": "71",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Kaufman",
    "Address": "3790 S Houston St",
    "loc": [
      -96.3176873,
      32.5649684
    ],
    "Active": "11-Sep-00",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482570020",
    "siteID": "48_257_0020",
    "CAMS": "",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Terrell Temtex",
    "Address": "2988 Temtex Blvd",
    "loc": [
      -96.317911,
      32.731919
    ],
    "Active": "22-Dec-10",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482730314",
    "siteID": "48_273_0314",
    "CAMS": "314",
    "TCEQRegion": "CORPUS CHRISTI",
    "Region": "14",
    "Name": "National Seashore",
    "Address": "20420 Park Road",
    "loc": [
      -97.2986922,
      27.4269813
    ],
    "Active": "25-Oct-02",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "482910699",
    "siteID": "48_291_0699",
    "CAMS": "699",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "UH West Liberty",
    "Address": "91 Weldon Texaco Road CR 615/610 N",
    "loc": [
      -94.9781,
      30.0583
    ],
    "Active": "31-Mar-10",
    "Deactive": "",
    "Owner": "University of Houston"
  },
  {
    "AQS_Code": "483091037",
    "siteID": "48_309_1037",
    "CAMS": "1037",
    "TCEQRegion": "WACO",
    "Region": "9",
    "Name": "Waco Mazanec",
    "Address": "4472 Mazanec Rd",
    "loc": [
      -97.0706982,
      31.6530743
    ],
    "Active": "16-Apr-07",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "483095010",
    "siteID": "48_309_5010",
    "CAMS": "5010",
    "TCEQRegion": "WACO",
    "Region": "9",
    "Name": "Waco KACT",
    "Address": "Waco Regional Airport",
    "loc": [
      -97.230556,
      31.611389
    ],
    "Active": "2-Sep-05",
    "Deactive": "",
    "Owner": "National Weather Service"
  },
  {
    "AQS_Code": "483230004",
    "siteID": "48_323_0004",
    "CAMS": "0319, 0655 ",
    "TCEQRegion": "LAREDO",
    "Region": "16",
    "Name": "Eagle Pass",
    "Address": "265 Foster Maldonado",
    "loc": [
      -100.4511555,
      28.704607
    ],
    "Active": "1-Jun-05",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "483371507",
    "siteID": "48_337_1507",
    "CAMS": "1507",
    "TCEQRegion": "ABILENE",
    "Region": "3",
    "Name": "Bowie Patterson Street",
    "Address": "1032 Patterson Street",
    "loc": [
      -97.829658,
      33.55896
    ],
    "Active": "31-Oct-13",
    "Deactive": "",
    "Owner": "North Texas Commission"
  },
  {
    "AQS_Code": "483390078",
    "siteID": "48_339_0078",
    "CAMS": "78",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Conroe Relocated",
    "Address": "9472A Hwy 1484",
    "loc": [
      -95.4251278,
      30.3503017
    ],
    "Active": "1-Oct-01",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "483390698",
    "siteID": "48_339_0698",
    "CAMS": "698",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "UH WG Jones Forest",
    "Address": "5203 Magnolia Parkway FM 1488",
    "loc": [
      -95.4832,
      30.2362
    ],
    "Active": "31-Mar-10",
    "Deactive": "",
    "Owner": "University of Houston"
  },
  {
    "AQS_Code": "483395006",
    "siteID": "48_339_5006",
    "CAMS": "5006",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Conroe Airport KCXO",
    "Address": "Montgomery County Airport",
    "loc": [
      -95.413889,
      30.356667
    ],
    "Active": "22-Jan-03",
    "Deactive": "",
    "Owner": "National Weather Service"
  },
  {
    "AQS_Code": "483491051",
    "siteID": "48_349_1051",
    "CAMS": "1051",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Corsicana Airport",
    "Address": "Corsicana Airport",
    "loc": [
      -96.3991408,
      32.0319335
    ],
    "Active": "16-Jun-09",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "483495014",
    "siteID": "48_349_5014",
    "CAMS": "5014",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Corsicana KCRS",
    "Address": "C David Campbell Field-Corsicana Municipal Airport",
    "loc": [
      -96.400556,
      32.028056
    ],
    "Active": "1-Aug-05",
    "Deactive": "",
    "Owner": "National Weather Service"
  },
  {
    "AQS_Code": "483550025",
    "siteID": "48_355_0025",
    "CAMS": "4",
    "TCEQRegion": "CORPUS CHRISTI",
    "Region": "14",
    "Name": "Corpus Christi West",
    "Address": "Corpus Christi State School (Airport Rd) 902 AIRPORT BLVD",
    "loc": [
      -97.4342619,
      27.7653399
    ],
    "Active": "1-Jan-81",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "483550026",
    "siteID": "48_355_0026",
    "CAMS": "21",
    "TCEQRegion": "CORPUS CHRISTI",
    "Region": "14",
    "Name": "Corpus Christi Tuloso",
    "Address": "9860 La Branch",
    "loc": [
      -97.5553798,
      27.8324089
    ],
    "Active": "1-Jan-84",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "483550029",
    "siteID": "48_355_0029",
    "CAMS": "0168, 0170, 0195 ",
    "TCEQRegion": "CORPUS CHRISTI",
    "Region": "14",
    "Name": "Corpus Christi Hillcrest",
    "Address": "1802 Nueces Bay Blvd (Citgo Refinery Co)",
    "loc": [
      -97.419258,
      27.8075444
    ],
    "Active": "1-Nov-94",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "483550032",
    "siteID": "48_355_0032",
    "CAMS": "0098, 0149, 0155 ",
    "TCEQRegion": "CORPUS CHRISTI",
    "Region": "14",
    "Name": "Corpus Christi Huisache",
    "Address": "3810 Huisache Street",
    "loc": [
      -97.4315816,
      27.8045054
    ],
    "Active": "6-Aug-97",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "483550034",
    "siteID": "48_355_0034",
    "CAMS": "0199, 0635 ",
    "TCEQRegion": "CORPUS CHRISTI",
    "Region": "14",
    "Name": "Dona Park",
    "Address": "5707 Up River Rd",
    "loc": [
      -97.4657031,
      27.8118166
    ],
    "Active": "31-Jan-01",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "483550035",
    "siteID": "48_355_0035",
    "CAMS": "634",
    "TCEQRegion": "CORPUS CHRISTI",
    "Region": "14",
    "Name": "Oak Park",
    "Address": "842 Erwin Street",
    "loc": [
      -97.433889,
      27.798889
    ],
    "Active": "2-Dec-04",
    "Deactive": "",
    "Owner": "UTCEER"
  },
  {
    "AQS_Code": "483550036",
    "siteID": "48_355_0036",
    "CAMS": "629",
    "TCEQRegion": "CORPUS CHRISTI",
    "Region": "14",
    "Name": "Port Grain Elevator",
    "Address": "2001B East Navigation Blvd",
    "loc": [
      -97.4197222,
      27.8175
    ],
    "Active": "1-Dec-04",
    "Deactive": "",
    "Owner": "UTCEER"
  },
  {
    "AQS_Code": "483550037",
    "siteID": "48_355_0037",
    "CAMS": "630",
    "TCEQRegion": "CORPUS CHRISTI",
    "Region": "14",
    "Name": "J.I Hailey",
    "Address": "2702B East Navigation Blvd",
    "loc": [
      -97.4325,
      27.8244444
    ],
    "Active": "30-Nov-04",
    "Deactive": "",
    "Owner": "UTCEER"
  },
  {
    "AQS_Code": "483550039",
    "siteID": "48_355_0039",
    "CAMS": "632",
    "TCEQRegion": "CORPUS CHRISTI",
    "Region": "14",
    "Name": "FHR Easement",
    "Address": "8401B Up River Road",
    "loc": [
      -97.5288889,
      27.8272222
    ],
    "Active": "29-Nov-04",
    "Deactive": "",
    "Owner": "UTCEER"
  },
  {
    "AQS_Code": "483550041",
    "siteID": "48_355_0041",
    "CAMS": "633",
    "TCEQRegion": "CORPUS CHRISTI",
    "Region": "14",
    "Name": "Solar Estates",
    "Address": "9122 Leopard St",
    "loc": [
      -97.5436111,
      27.8291667
    ],
    "Active": "1-Dec-04",
    "Deactive": "",
    "Owner": "UTCEER"
  },
  {
    "AQS_Code": "483550083",
    "siteID": "48_355_0083",
    "CAMS": "83",
    "TCEQRegion": "CORPUS CHRISTI",
    "Region": "14",
    "Name": "Corpus Christi Palm",
    "Address": "1511 Palm Drive",
    "loc": [
      -97.4198783,
      27.8028877
    ],
    "Active": "18-May-10",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "483550660",
    "siteID": "48_355_0660",
    "CAMS": "660",
    "TCEQRegion": "CORPUS CHRISTI",
    "Region": "14",
    "Name": "Holly Road",
    "Address": "4801 Holly Road",
    "loc": [
      -97.3875,
      27.703056
    ],
    "Active": "18-Jan-06",
    "Deactive": "",
    "Owner": "City of Corpus Christi"
  },
  {
    "AQS_Code": "483550664",
    "siteID": "48_355_0664",
    "CAMS": "664",
    "TCEQRegion": "CORPUS CHRISTI",
    "Region": "14",
    "Name": "Violet",
    "Address": "3515 FM 1694",
    "loc": [
      -97.619444,
      27.757778
    ],
    "Active": "12-Jan-06",
    "Deactive": "",
    "Owner": "City of Corpus Christi"
  },
  {
    "AQS_Code": "483551024",
    "siteID": "48_355_1024",
    "CAMS": "1024",
    "TCEQRegion": "CORPUS CHRISTI",
    "Region": "14",
    "Name": "Williams Park",
    "Address": "2518 Dempsey Rd",
    "loc": [
      -97.4137626,
      27.8038056
    ],
    "Active": "8-Aug-05",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "483611001",
    "siteID": "48_361_1001",
    "CAMS": "0009, 0141 ",
    "TCEQRegion": "BEAUMONT",
    "Region": "10",
    "Name": "West Orange",
    "Address": "2700 Austin Ave",
    "loc": [
      -93.7613411,
      30.0852629
    ],
    "Active": "1-Jan-74",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "483611100",
    "siteID": "48_361_1100",
    "CAMS": "0311, 0642, 0665 ",
    "TCEQRegion": "BEAUMONT",
    "Region": "10",
    "Name": "SETRPC 42 Mauriceville",
    "Address": "Intersection of TX Hwys 62 & 12",
    "loc": [
      -93.8672365,
      30.1945576
    ],
    "Active": "1-Jan-99",
    "Deactive": "",
    "Owner": "South East Texas Regional Planning Commission"
  },
  {
    "AQS_Code": "483631502",
    "siteID": "48_363_1502",
    "CAMS": "1502",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Mineral Wells 23rd Street",
    "Address": "2000 NE 23rd Street",
    "loc": [
      -98.091641,
      32.818671
    ],
    "Active": "21-Aug-13",
    "Deactive": "",
    "Owner": "North Texas Commission"
  },
  {
    "AQS_Code": "483670081",
    "siteID": "48_367_0081",
    "CAMS": "76",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Parker County",
    "Address": "3033 New Authon Rd",
    "loc": [
      -97.9059308,
      32.8687727
    ],
    "Active": "26-Jul-00",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "483671506",
    "siteID": "48_367_1506",
    "CAMS": "1506",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Weatherford Highway 180",
    "Address": "2253 Fort Worth Hwy",
    "loc": [
      -97.730285,
      32.758655
    ],
    "Active": "13-Oct-13",
    "Deactive": "",
    "Owner": "North Texas Commission"
  },
  {
    "AQS_Code": "483750024",
    "siteID": "48_375_0024",
    "CAMS": "",
    "TCEQRegion": "AMARILLO",
    "Region": "1",
    "Name": "Amarillo SH 136",
    "Address": "7100 State Highway 136",
    "loc": [
      -101.7156402,
      35.2802728
    ],
    "Active": "25-Apr-10",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "483750320",
    "siteID": "48_375_0320",
    "CAMS": "320",
    "TCEQRegion": "AMARILLO",
    "Region": "1",
    "Name": "Amarillo A&M",
    "Address": "6500 Amarillo Blvd West",
    "loc": [
      -101.9092746,
      35.2015922
    ],
    "Active": "12-Apr-05",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "483751025",
    "siteID": "48_375_1025",
    "CAMS": "1025",
    "TCEQRegion": "AMARILLO",
    "Region": "1",
    "Name": "Amarillo 24th Avenue",
    "Address": "4205 NE 24th Avenue",
    "loc": [
      -101.787405,
      35.236736
    ],
    "Active": "16-Oct-13",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "483970001",
    "siteID": "48_397_0001",
    "CAMS": "69",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Rockwall Heath",
    "Address": "100 E Heath St",
    "loc": [
      -96.4592108,
      32.936523
    ],
    "Active": "8-Aug-00",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "484090659",
    "siteID": "48_409_0659",
    "CAMS": "659",
    "TCEQRegion": "CORPUS CHRISTI",
    "Region": "14",
    "Name": "Aransas Pass",
    "Address": "527 Ransom Rd",
    "loc": [
      -97.148611,
      27.886667
    ],
    "Active": "22-Jan-06",
    "Deactive": "",
    "Owner": "City of Corpus Christi"
  },
  {
    "AQS_Code": "484090685",
    "siteID": "48_409_0685",
    "CAMS": "685",
    "TCEQRegion": "CORPUS CHRISTI",
    "Region": "14",
    "Name": "Ingleside",
    "Address": "San Patricio Municipal Water off Hwy 361",
    "loc": [
      -97.249167,
      27.901667
    ],
    "Active": "29-Jun-07",
    "Deactive": "",
    "Owner": "City of Corpus Christi"
  },
  {
    "AQS_Code": "484090686",
    "siteID": "48_409_0686",
    "CAMS": "686",
    "TCEQRegion": "CORPUS CHRISTI",
    "Region": "14",
    "Name": "Odem-SEP",
    "Address": "San Patricio Municipal Water NW of Corpus",
    "loc": [
      -97.538056,
      27.924722
    ],
    "Active": "11-Dec-06",
    "Deactive": "",
    "Owner": "City of Corpus Christi"
  },
  {
    "AQS_Code": "484090687",
    "siteID": "48_409_0687",
    "CAMS": "687",
    "TCEQRegion": "CORPUS CHRISTI",
    "Region": "14",
    "Name": "Taft-SEP",
    "Address": "San Patricio Municipal Water Dist Pumping Station",
    "loc": [
      -97.408611,
      27.923333
    ],
    "Active": "7-May-07",
    "Deactive": "",
    "Owner": "City of Corpus Christi"
  },
  {
    "AQS_Code": "484230007",
    "siteID": "48_423_0007",
    "CAMS": "82",
    "TCEQRegion": "TYLER",
    "Region": "5",
    "Name": "Tyler Airport Relocated",
    "Address": "14790 County Road 1145",
    "loc": [
      -95.4157515,
      32.3440079
    ],
    "Active": "25-May-00",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "484390075",
    "siteID": "48_439_0075",
    "CAMS": "75",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Eagle Mountain Lake",
    "Address": "14290 Morris Dido Newark Rd",
    "loc": [
      -97.4771754,
      32.9878908
    ],
    "Active": "6-Jun-00",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "484391002",
    "siteID": "48_439_1002",
    "CAMS": "13",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Fort Worth Northwest",
    "Address": "3317 Ross Ave",
    "loc": [
      -97.3565675,
      32.8058183
    ],
    "Active": "1-Jan-75",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "484391006",
    "siteID": "48_439_1006",
    "CAMS": "310",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Haws Athletic Center",
    "Address": "600 1/2 Congress St",
    "loc": [
      -97.3423337,
      32.7591432
    ],
    "Active": "1-Apr-01",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "484391009",
    "siteID": "48_439_1009",
    "CAMS": "1009",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Everman Johnson Park",
    "Address": "633 Everman Parkway",
    "loc": [
      -97.290353,
      32.621136
    ],
    "Active": "28-Jun-11",
    "Deactive": "",
    "Owner": "North Texas Commission"
  },
  {
    "AQS_Code": "484391018",
    "siteID": "48_439_1018",
    "CAMS": "1018",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Arlington UT Campus",
    "Address": "1101 S. Pecan St.",
    "loc": [
      -97.108333,
      32.726111
    ],
    "Active": "20-Sep-12",
    "Deactive": "",
    "Owner": "North Texas Commission"
  },
  {
    "AQS_Code": "484391053",
    "siteID": "48_439_1053",
    "CAMS": "1053",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Fort Worth California Parkway North",
    "Address": "1198 California Parkway North",
    "loc": [
      -97.338056,
      32.664722
    ],
    "Active": "12-Mar-15",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "484391062",
    "siteID": "48_439_1062",
    "CAMS": "1062",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Kennedale Treepoint Drive",
    "Address": "5419 Treepoint Drive",
    "loc": [
      -97.200278,
      32.658889
    ],
    "Active": "29-Jun-12",
    "Deactive": "",
    "Owner": "North Texas Commission"
  },
  {
    "AQS_Code": "484391065",
    "siteID": "48_439_1065",
    "CAMS": "1065",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Fort Worth Joe B. Rushing Road",
    "Address": "2525 Joe B. Rushing Road",
    "loc": [
      -97.2911778,
      32.6724056
    ],
    "Active": "17-Sep-13",
    "Deactive": "",
    "Owner": "North Texas Commission"
  },
  {
    "AQS_Code": "484391503",
    "siteID": "48_439_1503",
    "CAMS": "1503",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Fort Worth Benbrook Lake",
    "Address": "7001 Lakeside Drive",
    "loc": [
      -97.442658,
      32.646711
    ],
    "Active": "1-Oct-13",
    "Deactive": "",
    "Owner": "North Texas Commission"
  },
  {
    "AQS_Code": "484392003",
    "siteID": "48_439_2003",
    "CAMS": "17",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Keller",
    "Address": "FAA Site off Alta Vista Road",
    "loc": [
      -97.282088,
      32.9224736
    ],
    "Active": "11-Feb-81",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "484393009",
    "siteID": "48_439_3009",
    "CAMS": "0070, 0182 ",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Grapevine Fairway",
    "Address": "4100 Fairway Dr",
    "loc": [
      -97.0637211,
      32.9842596
    ],
    "Active": "4-Aug-00",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "484393010",
    "siteID": "48_439_3010",
    "CAMS": "",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Stage Coach",
    "Address": "8900 West Freeway",
    "loc": [
      -97.47033,
      32.7392
    ],
    "Active": "1-Jan-02",
    "Deactive": "",
    "Owner": "City of Fort Worth Health Department"
  },
  {
    "AQS_Code": "484393011",
    "siteID": "48_439_3011",
    "CAMS": "61",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Arlington Municipal Airport",
    "Address": "5504 South Collins Street",
    "loc": [
      -97.0885849,
      32.6563574
    ],
    "Active": "17-Jan-02",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "484395007",
    "siteID": "48_439_5007",
    "CAMS": "5007",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Arlington Airport KGKY",
    "Address": "Arlington Municipal Airport",
    "loc": [
      -97.095833,
      32.663889
    ],
    "Active": "22-Jan-03",
    "Deactive": "",
    "Owner": "National Weather Service"
  },
  {
    "AQS_Code": "484411509",
    "siteID": "48_441_1509",
    "CAMS": "1509",
    "TCEQRegion": "ABILENE",
    "Region": "3",
    "Name": "Abilene North 3rd Street",
    "Address": "TBD",
    "loc": [
      -99.729799,
      32.451011
    ],
    "Active": "18-Dec-13",
    "Deactive": "",
    "Owner": "North Texas Commission"
  },
  {
    "AQS_Code": "484415015",
    "siteID": "48_441_5015",
    "CAMS": "5015",
    "TCEQRegion": "ABILENE",
    "Region": "3",
    "Name": "Abilene KABI",
    "Address": "Abilene Regional Airport",
    "loc": [
      -99.681944,
      32.411389
    ],
    "Active": "1-Aug-05",
    "Deactive": "",
    "Owner": "National Weather Service"
  },
  {
    "AQS_Code": "484515016",
    "siteID": "48_451_5016",
    "CAMS": "5016",
    "TCEQRegion": "SAN ANGELO",
    "Region": "8",
    "Name": "San Angelo KSJT",
    "Address": "San Angelo Regional Airport/Mathis Field",
    "loc": [
      -100.496389,
      31.357778
    ],
    "Active": "2-Sep-05",
    "Deactive": "",
    "Owner": "National Weather Service"
  },
  {
    "AQS_Code": "484530014",
    "siteID": "48_453_0014",
    "CAMS": "3",
    "TCEQRegion": "AUSTIN",
    "Region": "11",
    "Name": "Austin Northwest",
    "Address": "3724 North Hills Dr",
    "loc": [
      -97.7602554,
      30.3544356
    ],
    "Active": "1-Jan-79",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "484530020",
    "siteID": "48_453_0020",
    "CAMS": "38",
    "TCEQRegion": "AUSTIN",
    "Region": "11",
    "Name": "Austin Audubon Society",
    "Address": "12200 Lime Creek Rd",
    "loc": [
      -97.8723005,
      30.4831681
    ],
    "Active": "28-Feb-97",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "484530021",
    "siteID": "48_453_0021",
    "CAMS": "171",
    "TCEQRegion": "AUSTIN",
    "Region": "11",
    "Name": "Austin Webberville Rd",
    "Address": "2600B Webberville Rd",
    "loc": [
      -97.7128831,
      30.2632079
    ],
    "Active": "29-Sep-99",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "484530326",
    "siteID": "48_453_0326",
    "CAMS": "326",
    "TCEQRegion": "AUSTIN",
    "Region": "11",
    "Name": "Zavala Elementary",
    "Address": "310 Robert T Martinez Jr Street",
    "loc": [
      -97.7203007,
      30.2583319
    ],
    "Active": "18-Feb-09",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "484531026",
    "siteID": "48_453_1026",
    "CAMS": "1026",
    "TCEQRegion": "AUSTIN",
    "Region": "11",
    "Name": "Austin 5th Street",
    "Address": "2001 East 5th Street",
    "loc": [
      -97.7209,
      30.259506
    ],
    "Active": "4-Sep-14",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "484531068",
    "siteID": "48_453_1068",
    "CAMS": "1068",
    "TCEQRegion": "AUSTIN",
    "Region": "11",
    "Name": "Austin North Interstate 35",
    "Address": "8912 N IH 35 SVRD SB",
    "loc": [
      -97.69166,
      30.35386
    ],
    "Active": "16-Apr-14",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "484531603",
    "siteID": "48_453_1603",
    "CAMS": "1603",
    "TCEQRegion": "AUSTIN",
    "Region": "11",
    "Name": "Gorzycki Middle School",
    "Address": "7412 Slaughter Lane",
    "loc": [
      -97.893744,
      30.216397
    ],
    "Active": "16-Apr-14",
    "Deactive": "",
    "Owner": "Capitol Area Council of Governments"
  },
  {
    "AQS_Code": "484535001",
    "siteID": "48_453_5001",
    "CAMS": "5001, 5002 ",
    "TCEQRegion": "AUSTIN",
    "Region": "11",
    "Name": "Camp Mabry KATT",
    "Address": "Camp Mabry",
    "loc": [
      -97.7613889,
      30.3136111
    ],
    "Active": "15-Sep-98",
    "Deactive": "",
    "Owner": "National Weather Service"
  },
  {
    "AQS_Code": "484535003",
    "siteID": "48_453_5003",
    "CAMS": "5003",
    "TCEQRegion": "AUSTIN",
    "Region": "11",
    "Name": "Austin Bergstrom KAUS",
    "Address": "Austin Bergstrom International Airport",
    "loc": [
      -97.67,
      30.1944444
    ],
    "Active": "17-Jun-04",
    "Deactive": "",
    "Owner": "National Weather Service"
  },
  {
    "AQS_Code": "484655017",
    "siteID": "48_465_5017",
    "CAMS": "5017",
    "TCEQRegion": "LAREDO",
    "Region": "16",
    "Name": "Del Rio KDRT",
    "Address": "Del Rio International Airport",
    "loc": [
      -100.925833,
      29.372778
    ],
    "Active": "1-Aug-05",
    "Deactive": "",
    "Owner": "National Weather Service"
  },
  {
    "AQS_Code": "484690003",
    "siteID": "48_469_0003",
    "CAMS": "87",
    "TCEQRegion": "CORPUS CHRISTI",
    "Region": "14",
    "Name": "Victoria",
    "Address": "106 Mockingbird Lane",
    "loc": [
      -97.0055298,
      28.8361697
    ],
    "Active": "1-Apr-89",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "484690609",
    "siteID": "48_469_0609",
    "CAMS": "609",
    "TCEQRegion": "CORPUS CHRISTI",
    "Region": "14",
    "Name": "Inez",
    "Address": "559 FM 444 South",
    "loc": [
      -96.78513,
      28.89962
    ],
    "Active": "9-Jul-10",
    "Deactive": "",
    "Owner": "City of Victoria"
  },
  {
    "AQS_Code": "484715012",
    "siteID": "48_471_5012",
    "CAMS": "5012",
    "TCEQRegion": "HOUSTON",
    "Region": "12",
    "Name": "Huntsville KUTS",
    "Address": "Huntsville Municipal Airport",
    "loc": [
      -95.587222,
      30.755278
    ],
    "Active": "1-Aug-05",
    "Deactive": "",
    "Owner": "National Weather Service"
  },
  {
    "AQS_Code": "484790016",
    "siteID": "48_479_0016",
    "CAMS": "0044, 0144 ",
    "TCEQRegion": "LAREDO",
    "Region": "16",
    "Name": "Laredo Vidaurri",
    "Address": "2020 Vidaurri Ave",
    "loc": [
      -99.5152185,
      27.5174485
    ],
    "Active": "15-Feb-96",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "484790017",
    "siteID": "48_479_0017",
    "CAMS": "0066, 0173 ",
    "TCEQRegion": "LAREDO",
    "Region": "16",
    "Name": "Laredo Bridge",
    "Address": "700 Zaragosa St",
    "loc": [
      -99.5029843,
      27.5018255
    ],
    "Active": "21-Sep-99",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "484790313",
    "siteID": "48_479_0313",
    "CAMS": "313",
    "TCEQRegion": "LAREDO",
    "Region": "16",
    "Name": "World Trade Bridge",
    "Address": "Mines Road 11601 FM 1472",
    "loc": [
      -99.533333,
      27.599444
    ],
    "Active": "13-Aug-02",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "484851508",
    "siteID": "48_485_1508",
    "CAMS": "1508",
    "TCEQRegion": "ABILENE",
    "Region": "3",
    "Name": "Wichita Falls MWSU",
    "Address": "MWSU grounds",
    "loc": [
      -98.506096,
      33.849304
    ],
    "Active": "19-Dec-13",
    "Deactive": "",
    "Owner": "North Texas Commission"
  },
  {
    "AQS_Code": "484910690",
    "siteID": "48_491_0690",
    "CAMS": "690",
    "TCEQRegion": "AUSTIN",
    "Region": "11",
    "Name": "CAPCOG Lake Georgetown",
    "Address": "500 Lake Overlook Drive",
    "loc": [
      -97.734579,
      30.6664421
    ],
    "Active": "20-Sep-07",
    "Deactive": "",
    "Owner": "Capitol Area Council of Governments"
  },
  {
    "AQS_Code": "484916602",
    "siteID": "48_491_6602",
    "CAMS": "6602",
    "TCEQRegion": "AUSTIN",
    "Region": "11",
    "Name": "CAPCOG Hutto College Street",
    "Address": "200 College Street",
    "loc": [
      -97.541794,
      30.545706
    ],
    "Active": "18-May-11",
    "Deactive": "",
    "Owner": "Capitol Area Council of Governments"
  },
  {
    "AQS_Code": "484931038",
    "siteID": "48_493_1038",
    "CAMS": "1038",
    "TCEQRegion": "SAN ANTONIO",
    "Region": "13",
    "Name": "Floresville Hospital Boulevard",
    "Address": "1404 Hospital Blvd",
    "loc": [
      -98.14806,
      29.130675
    ],
    "Active": "18-Jul-13",
    "Deactive": "",
    "Owner": "TCEQ"
  },
  {
    "AQS_Code": "484970088",
    "siteID": "48_497_0088",
    "CAMS": "88",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Decatur Thompson",
    "Address": "301 E Thompson Street",
    "loc": [
      -97.584445,
      33.221721
    ],
    "Active": "6-Oct-10",
    "Deactive": "",
    "Owner": "North Texas Commission"
  },
  {
    "AQS_Code": "484971064",
    "siteID": "48_497_1064",
    "CAMS": "1064",
    "TCEQRegion": "DALLAS/FORT WORTH",
    "Region": "4",
    "Name": "Rhome Seven Hills Road",
    "Address": "639 CR 4651",
    "loc": [
      -97.486618,
      33.044028
    ],
    "Active": "12-Nov-12",
    "Deactive": "",
    "Owner": "North Texas Commission"
  },
  {
    "AQS_Code": "800060003",
    "siteID": "80_006_0003",
    "CAMS": "",
    "TCEQRegion": "",
    "Region": "",
    "Name": "Zenco",
    "Address": "Carretera Pan Americana - Zenith Corp",
    "loc": [
      -106.443056,
      31.638056
    ],
    "Active": "4-Jun-90",
    "Deactive": "",
    "Owner": "SEMARNAP"
  },
  {
    "AQS_Code": "800060004",
    "siteID": "80_006_0004",
    "CAMS": "661",
    "TCEQRegion": "",
    "Region": "",
    "Name": "CD Juarez Advance",
    "Address": "Calle El Cid",
    "loc": [
      -106.459722,
      31.689722
    ],
    "Active": "4-Jun-90",
    "Deactive": "",
    "Owner": "SEMARNAP"
  },
  {
    "AQS_Code": "800060005",
    "siteID": "80_006_0005",
    "CAMS": "",
    "TCEQRegion": "",
    "Region": "",
    "Name": "Benito Juarez Police Station",
    "Address": "Jose Ma Morelos Y Paron",
    "loc": [
      -106.3545,
      31.654
    ],
    "Active": "1-Jul-10",
    "Deactive": "",
    "Owner": "EPA/OAQPS/MQAG"
  },
  {
    "AQS_Code": "800060006",
    "siteID": "80_006_0006",
    "CAMS": "662",
    "TCEQRegion": "",
    "Region": "",
    "Name": "CD Juarez 20 30 Club",
    "Address": "Calle Jose Borunda",
    "loc": [
      -106.459722,
      31.735556
    ],
    "Active": "22-Jul-96",
    "Deactive": "",
    "Owner": "SEMARNAP"
  },
  {
    "AQS_Code": "800060007",
    "siteID": "80_006_0007",
    "CAMS": "663",
    "TCEQRegion": "",
    "Region": "",
    "Name": "CD Juarez Delphi",
    "Address": "Avenida De La Industria",
    "loc": [
      -106.395278,
      31.712222
    ],
    "Active": "28-Feb-95",
    "Deactive": "",
    "Owner": "SEMARNAP"
  },
  {
    "AQS_Code": "800060011",
    "siteID": "80_006_0011",
    "CAMS": "",
    "TCEQRegion": "",
    "Region": "",
    "Name": "Ninez Mexicana Juarez",
    "Address": "Boulevard Zaragoza",
    "loc": [
      -106.4542,
      31.66127
    ],
    "Active": "12-Aug-10",
    "Deactive": "",
    "Owner": "City of El Paso Environmental Services Department"
  }
];
        //loop through each site and insert into the database
        _.each(SitesData, function(aSite) {
            Sites.insert(aSite);
        });
        
        Sites._ensureIndex({loc: '2d'});
        
    }
    
    if (History.find().count() === 0) {
        var HistoryData = [
  {
    "siteID": "48_027_1045",
    "epoch": 1420070400,
    "o3": 8.61528,
    "temp": 37.36
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420070400,
    "o3": 11.2647,
    "temp": 35.75
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420070400,
    "o3": 15.2348,
    "temp": 38.7
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420070400,
    "o3": 14.0027,
    "temp": 37.63
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420070400,
    "o3": 9.72845,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420070400,
    "o3": 12.9932,
    "temp": 41.68
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 35.8
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420070400,
    "o3": 13.0133,
    "temp": 40.3
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 40.6
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 40.5
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 39.8
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420070400,
    "o3": 15.9243,
    "temp": 45.6
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420070400,
    "o3": 14.4578,
    "temp": 45.8
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 47.6
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420070400,
    "o3": 14.1961,
    "temp": 44.76
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420070400,
    "o3": 13.9484,
    "temp": 45.5
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420070400,
    "o3": 16.6,
    "temp": 25.2
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420070400,
    "o3": 1.66702,
    "temp": 44.9
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420070400,
    "o3": 16.1642,
    "temp": 43.93
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 50.1
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 13.3
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 13.5
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 13.5
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 46.6
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420070400,
    "o3": 15.708,
    "temp": 32.34
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 33.65
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 30.81
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 35.8
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420070400,
    "o3": 10.3652,
    "temp": 35.2
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420070400,
    "o3": 12.1599,
    "temp": 34.1
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420070400,
    "o3": 6.07115,
    "temp": 34.2
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 35.41
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 35.16
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 34.65
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420070400,
    "o3": 9.81639,
    "temp": 31.5
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 32.38
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 31.26
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420070400,
    "o3": 15.6302,
    "temp": 31.3
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 19.5
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 19.3
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420070400,
    "o3": 12.3926,
    "temp": 34.2
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420070400,
    "o3": 13.3749,
    "temp": 36.7
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420070400,
    "o3": 13.8273,
    "temp": 30
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420070400,
    "o3": 16.5543,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420070400,
    "o3": 17.5701,
    "temp": 29.8
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 27.6
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420070400,
    "o3": 12.0655,
    "temp": 30.2
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420070400,
    "o3": 18.0405,
    "temp": 29.39
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420070400,
    "o3": 20.5407,
    "temp": 29.5
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 41.4
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420070400,
    "o3": 13.232,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 46.33
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420070400,
    "o3": 23.59,
    "temp": 45.08
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420070400,
    "o3": 16.395,
    "temp": 45.717
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420070400,
    "o3": 20.606,
    "temp": 46.5
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420070400,
    "o3": 20.0942,
    "temp": 38.59
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420070400,
    "o3": 14.9436,
    "temp": 44.13
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420070400,
    "o3": 18.7734,
    "temp": 45
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420070400,
    "o3": 19.0287,
    "temp": 43.4
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 45.16
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420070400,
    "o3": 16.4353,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420070400,
    "o3": 12.618,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420070400,
    "o3": 13.2953,
    "temp": 45.7
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420070400,
    "o3": 12.5402,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 45.06
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 45.76
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420070400,
    "o3": 12.4406,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420070400,
    "o3": 15.972,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420070400,
    "o3": 15.614,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420070400,
    "o3": 12.1947,
    "temp": 45.2
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420070400,
    "o3": 18.3,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420070400,
    "o3": 13.3,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420070400,
    "o3": 17.4,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420070400,
    "o3": 16.5,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420070400,
    "o3": 19.25,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420070400,
    "o3": 18.1,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420070400,
    "o3": 12.5,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420070400,
    "o3": 17.7,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420070400,
    "o3": 16.5,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420070400,
    "o3": 18.65,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420070400,
    "o3": 15.3,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420070400,
    "o3": 16.35,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420070400,
    "o3": 22.1409,
    "temp": 46.7
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420070400,
    "o3": 15.002,
    "temp": 43.889
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420070400,
    "o3": 7.81776,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420070400,
    "o3": 18.9204,
    "temp": 45
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420070400,
    "o3": 15.0597,
    "temp": 47
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420070400,
    "o3": 17.0954,
    "temp": 44.6
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420070400,
    "o3": 15.9822,
    "temp": 45.1
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420070400,
    "o3": 18.7407,
    "temp": 45.9
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 45.47
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 45.7
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420070400,
    "o3": 18.6214,
    "temp": 38.46
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420070400,
    "o3": 4.71435,
    "temp": 42.6
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420070400,
    "o3": 13.0882,
    "temp": 31.46
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420070400,
    "o3": 16.5533,
    "temp": 35.14
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420070400,
    "o3": 16.495,
    "temp": 46.26
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420070400,
    "o3": 20.4037,
    "temp": 47.2
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 49.2
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 46.9054
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 46.3
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 46.8
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420070400,
    "o3": 20.8504,
    "temp": 44.9
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420070400,
    "o3": 24.5085,
    "temp": 49.2
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420070400,
    "o3": 19.672,
    "temp": 46.6
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420070400,
    "o3": 29.4729,
    "temp": 47.9
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420070400,
    "o3": 21.4039,
    "temp": 46.1
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 45.5
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420070400,
    "o3": 9.38513,
    "temp": 31.49
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 34.15
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 31.09
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420070400,
    "o3": 15.1675,
    "temp": 37
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420070400,
    "o3": 21.268,
    "temp": 42.42
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420070400,
    "o3": 18.4618,
    "temp": 38.2
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 35.9
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 25.85
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420070400,
    "o3": 20.0109,
    "temp": 42.18
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420070400,
    "o3": 20.012,
    "temp": 43.038
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420070400,
    "o3": 22.765,
    "temp": 39.2
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420070400,
    "o3": 17.8754,
    "temp": 43.7
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420070400,
    "o3": 14.4197,
    "temp": 43.75
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 45.94
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 46
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 45.8
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 44.2
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 44.4
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420070400,
    "o3": 12.5773,
    "temp": 45.5
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420070400,
    "o3": 10.8323,
    "temp": 42.9
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420070400,
    "o3": 22.9053,
    "temp": 47.03
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420070400,
    "o3": 23.145,
    "temp": 46.2
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 26.49
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420070400,
    "o3": 17.5961,
    "temp": 26.5
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 28.93
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 13.25
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420070400,
    "o3": 17.2186,
    "temp": 34.3
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 45.4
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420070400,
    "o3": 14.4,
    "temp": 43.6
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420070400,
    "o3": 18.6,
    "temp": 44.5
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420070400,
    "o3": 22.494,
    "temp": 38.07
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420070400,
    "o3": 15.3195,
    "temp": 30.6
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420070400,
    "o3": 14.1622,
    "temp": 31.3
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 32.47
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 34.83
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 33.94
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 32.14
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 31.81
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420070400,
    "o3": 13.4302,
    "temp": 30.3
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420070400,
    "o3": 15.0433,
    "temp": 32.61
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420070400,
    "o3": 9.30816,
    "temp": 34.1
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 19.77
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420070400,
    "o3": 9.76287,
    "temp": 38.08
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420070400,
    "o3": 11.8833,
    "temp": 36.44
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 40.1
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 40.6
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 38.92
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420070400,
    "o3": 20.2963,
    "temp": 44.72
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420070400,
    "o3": 6.51769,
    "temp": 24.55
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 41.42
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 24.77
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 40.7
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 28.99
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420070400,
    "o3": 0,
    "temp": 30.86
  },
  {
    "siteID": "48_027_1045",
    "epoch": 1420070700,
    "o3": 8.61528,
    "temp": 37.39
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420070700,
    "o3": 11.4686,
    "temp": 35.64
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420070700,
    "o3": 15.3358,
    "temp": 38.75
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420070700,
    "o3": 13.7062,
    "temp": 37.6
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420070700,
    "o3": 9.52083,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420070700,
    "o3": 12.9932,
    "temp": 41.68
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 35.7
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420070700,
    "o3": 13.6957,
    "temp": 40.3
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 40.4
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 39.79
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420070700,
    "o3": 15.8276,
    "temp": 45.5
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420070700,
    "o3": 14.0293,
    "temp": 45.8
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 47.7
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420070700,
    "o3": 13.7009,
    "temp": 44.8
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420070700,
    "o3": 13.9484,
    "temp": 45.5
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420070700,
    "o3": 16.8,
    "temp": 25.2
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420070700,
    "o3": 1.46289,
    "temp": 45
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420070700,
    "o3": 16.5675,
    "temp": 43.8
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 50
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 13.3
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 13.6
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 13.5
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 46.6
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420070700,
    "o3": 15.2222,
    "temp": 32.46
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 33.81
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 30.82
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 35.8
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420070700,
    "o3": 11.0719,
    "temp": 35.2
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420070700,
    "o3": 11.9592,
    "temp": 34.1
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420070700,
    "o3": 6.16626,
    "temp": 34.1
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 35.19
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 35
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 34.65
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420070700,
    "o3": 11.5982,
    "temp": 31.5
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 32.35
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 31.23
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420070700,
    "o3": 15.6302,
    "temp": 31.4
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 19.7
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 19.4
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420070700,
    "o3": 12.7972,
    "temp": 34.3
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420070700,
    "o3": 12.5989,
    "temp": 36.6
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420070700,
    "o3": 13.3737,
    "temp": 30
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420070700,
    "o3": 17.7811,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420070700,
    "o3": 15.8131,
    "temp": 30
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 29.73
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 27.8
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420070700,
    "o3": 12.2135,
    "temp": 30.1
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420070700,
    "o3": 19.4257,
    "temp": 29.17
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420070700,
    "o3": 19.7994,
    "temp": 29.5
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 41.4
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420070700,
    "o3": 13.404,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 46.37
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420070700,
    "o3": 23.61,
    "temp": 45.18
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420070700,
    "o3": 15.035,
    "temp": 45.734
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420070700,
    "o3": 20.606,
    "temp": 46.5
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420070700,
    "o3": 19.114,
    "temp": 38.56
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420070700,
    "o3": 15.0924,
    "temp": 44.19
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420070700,
    "o3": 18.7734,
    "temp": 44.9
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420070700,
    "o3": 18.8264,
    "temp": 43.4
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 45.15
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420070700,
    "o3": 15.7859,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420070700,
    "o3": 12.5672,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420070700,
    "o3": 12.4499,
    "temp": 45.8
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420070700,
    "o3": 12.9959,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 45.04
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 45.71
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420070700,
    "o3": 12.8685,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420070700,
    "o3": 15.4055,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420070700,
    "o3": 14.766,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420070700,
    "o3": 11.5891,
    "temp": 45.2
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420070700,
    "o3": 18.55,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420070700,
    "o3": 13.25,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420070700,
    "o3": 17.75,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420070700,
    "o3": 15.7,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420070700,
    "o3": 16.05,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420070700,
    "o3": 18.1,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420070700,
    "o3": 12.55,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420070700,
    "o3": 16.7,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420070700,
    "o3": 16.5,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420070700,
    "o3": 18.35,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420070700,
    "o3": 16.55,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420070700,
    "o3": 16.4,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420070700,
    "o3": 21.8875,
    "temp": 46.7
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420070700,
    "o3": 14.204,
    "temp": 43.959
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420070700,
    "o3": 15.2734,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420070700,
    "o3": 19.0196,
    "temp": 45
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420070700,
    "o3": 16.3231,
    "temp": 46.9
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420070700,
    "o3": 16.0568,
    "temp": 44.6
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420070700,
    "o3": 16.3198,
    "temp": 45.1
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420070700,
    "o3": 18.2475,
    "temp": 45.91
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 45.44
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420070700,
    "o3": 19.1202,
    "temp": 38.46
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420070700,
    "o3": 5.01106,
    "temp": 42.6
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420070700,
    "o3": 12.1187,
    "temp": 31.29
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420070700,
    "o3": 16.5533,
    "temp": 35.08
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420070700,
    "o3": 18.4548,
    "temp": 46.04
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420070700,
    "o3": 19.9101,
    "temp": 47.09
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 49.6
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 46.8438
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 46.3
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 46.7
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420070700,
    "o3": 20.8504,
    "temp": 44.81
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420070700,
    "o3": 28.352,
    "temp": 49.3
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420070700,
    "o3": 19.3144,
    "temp": 46.6
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420070700,
    "o3": 29.4232,
    "temp": 47.8
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420070700,
    "o3": 21.5033,
    "temp": 46.1
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 45.4
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420070700,
    "o3": 8.88235,
    "temp": 31.48
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 34.04
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 31.02
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420070700,
    "o3": 16.1429,
    "temp": 36.8
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420070700,
    "o3": 21.249,
    "temp": 42.36
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420070700,
    "o3": 18.314,
    "temp": 38.2
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 36
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 25.84
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420070700,
    "o3": 20.2621,
    "temp": 42.16
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420070700,
    "o3": 19.79,
    "temp": 43.014
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420070700,
    "o3": 22.669,
    "temp": 39.1
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420070700,
    "o3": 18.0269,
    "temp": 43.8
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420070700,
    "o3": 14.9227,
    "temp": 43.76
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 46.54
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 45.8
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 45.9
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 45.9
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 44.2
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 44.3
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420070700,
    "o3": 12.8788,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420070700,
    "o3": 11.1332,
    "temp": 43
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420070700,
    "o3": 22.9053,
    "temp": 46.89
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420070700,
    "o3": 23.6353,
    "temp": 46
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 26.43
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420070700,
    "o3": 17.8391,
    "temp": 26.6
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 28.74
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 13.23
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420070700,
    "o3": 17.1203,
    "temp": 34.3
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420070700,
    "o3": 15.1,
    "temp": 43.6
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420070700,
    "o3": 17.5,
    "temp": 44.4
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420070700,
    "o3": 23.0131,
    "temp": 38.04
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420070700,
    "o3": 15.9592,
    "temp": 30.5
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420070700,
    "o3": 14.063,
    "temp": 31.3
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 32.46
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 34.78
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 33.99
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 32.19
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 31.63
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420070700,
    "o3": 13.479,
    "temp": 30.3
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420070700,
    "o3": 15.5448,
    "temp": 32.54
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420070700,
    "o3": 8.95405,
    "temp": 34.1
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 19.85
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420070700,
    "o3": 9.25789,
    "temp": 38.12
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420070700,
    "o3": 11.6177,
    "temp": 36.41
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 40.5
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 38.93
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420070700,
    "o3": 19.4499,
    "temp": 44.67
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420070700,
    "o3": 7.19372,
    "temp": 27.39
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 41.44
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 24.61
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 40.7
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 29.03
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420070700,
    "o3": 0,
    "temp": 30.96
  },
  {
    "siteID": "48_027_1045",
    "epoch": 1420071000,
    "o3": 8.61528,
    "temp": 37.45
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420071000,
    "o3": 11.5196,
    "temp": 35.71
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420071000,
    "o3": 15.3863,
    "temp": 38.65
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420071000,
    "o3": 13.2614,
    "temp": 37.58
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420071000,
    "o3": 8.71013,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420071000,
    "o3": 12.5059,
    "temp": 41.39
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 35.8
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420071000,
    "o3": 13.647,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 40.3
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 39.76
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420071000,
    "o3": 15.8759,
    "temp": 45.5
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420071000,
    "o3": 13.3628,
    "temp": 45.9
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 47.7
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420071000,
    "o3": 14.1961,
    "temp": 44.81
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 45.7
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420071000,
    "o3": 14.0977,
    "temp": 45.5
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420071000,
    "o3": 16.95,
    "temp": 25
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420071000,
    "o3": 16.013,
    "temp": 43.79
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 50.1
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 13.4
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 13.6
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 13.6
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 46.7
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420071000,
    "o3": 14.7364,
    "temp": 32.58
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 33.78
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 30.84
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 36
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420071000,
    "o3": 10.8195,
    "temp": 35.2
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420071000,
    "o3": 12.2603,
    "temp": 34
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420071000,
    "o3": 6.73691,
    "temp": 34.3
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 35.15
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 34.89
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 34.67
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420071000,
    "o3": 13.1325,
    "temp": 31.6
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 32.37
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 31.29
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420071000,
    "o3": 14.852,
    "temp": 31.5
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 19.5
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 19.2
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420071000,
    "o3": 12.2408,
    "temp": 34.3
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420071000,
    "o3": 12.7358,
    "temp": 36.5
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420071000,
    "o3": 13.0713,
    "temp": 30
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420071000,
    "o3": 18.7135,
    "temp": 29.8
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420071000,
    "o3": 16.4155,
    "temp": 30
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 29.51
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 27.7
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420071000,
    "o3": 16.2572,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420071000,
    "o3": 18.7826,
    "temp": 29.23
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420071000,
    "o3": 20.1948,
    "temp": 29.3
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 41.4
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420071000,
    "o3": 12.873,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 46.38
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420071000,
    "o3": 22.99,
    "temp": 45.21
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420071000,
    "o3": 15.408,
    "temp": 45.756
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420071000,
    "o3": 20.606,
    "temp": 46.4
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420071000,
    "o3": 19.6041,
    "temp": 38.56
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420071000,
    "o3": 15.1916,
    "temp": 44.2
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420071000,
    "o3": 17.0057,
    "temp": 45
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420071000,
    "o3": 18.6747,
    "temp": 43.4
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420071000,
    "o3": 16.1856,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420071000,
    "o3": 13.0245,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420071000,
    "o3": 12.2012,
    "temp": 45.8
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420071000,
    "o3": 13.1984,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 45.01
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 45.83
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420071000,
    "o3": 12.8209,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420071000,
    "o3": 14.6974,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420071000,
    "o3": 14.0676,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420071000,
    "o3": 12.1947,
    "temp": 45.2
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420071000,
    "o3": 18.25,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420071000,
    "o3": 13.3,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420071000,
    "o3": 17.8,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420071000,
    "o3": 15.2,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420071000,
    "o3": 11.5,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420071000,
    "o3": 17.9,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420071000,
    "o3": 12.7,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420071000,
    "o3": 17.15,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420071000,
    "o3": 16,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420071000,
    "o3": 18.05,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420071000,
    "o3": 16.55,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420071000,
    "o3": 16.45,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420071000,
    "o3": 22.1915,
    "temp": 46.6
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420071000,
    "o3": 15.499,
    "temp": 43.96
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420071000,
    "o3": 15.0266,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420071000,
    "o3": 19.367,
    "temp": 45
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420071000,
    "o3": 14.15,
    "temp": 46.9
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420071000,
    "o3": 15.4139,
    "temp": 44.6
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420071000,
    "o3": 15.8857,
    "temp": 45.1
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420071000,
    "o3": 19.7271,
    "temp": 45.94
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 45.48
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420071000,
    "o3": 19.619,
    "temp": 38.49
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420071000,
    "o3": 5.06051,
    "temp": 42.7
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420071000,
    "o3": 10.1797,
    "temp": 31.38
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420071000,
    "o3": 17.0401,
    "temp": 35.06
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420071000,
    "o3": 21.3945,
    "temp": 45.79
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420071000,
    "o3": 19.9101,
    "temp": 47.03
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 49.5
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 46.7799
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 46.3
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 46.7
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420071000,
    "o3": 21.3429,
    "temp": 44.79
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420071000,
    "o3": 24.2589,
    "temp": 49.2
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420071000,
    "o3": 17.7304,
    "temp": 46.6
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420071000,
    "o3": 29.3736,
    "temp": 47.8
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420071000,
    "o3": 20.2111,
    "temp": 46.1
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420071000,
    "o3": 8.88235,
    "temp": 31.5
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 34.11
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 30.94
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420071000,
    "o3": 16.1917,
    "temp": 36.8
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420071000,
    "o3": 20.952,
    "temp": 42.345
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420071000,
    "o3": 18.9053,
    "temp": 38.3
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 35.9
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 25.94
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420071000,
    "o3": 21.0659,
    "temp": 42.09
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420071000,
    "o3": 19.863,
    "temp": 42.982
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420071000,
    "o3": 22.717,
    "temp": 39
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420071000,
    "o3": 17.8249,
    "temp": 43.8
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420071000,
    "o3": 14.9227,
    "temp": 43.75
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 46.66
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 45.8
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 45.9
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 45.8
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 44.1
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 44.4
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420071000,
    "o3": 12.8788,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420071000,
    "o3": 11.8352,
    "temp": 43.1
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420071000,
    "o3": 23.3996,
    "temp": 46.74
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420071000,
    "o3": 23.3901,
    "temp": 45.8
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 26.41
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420071000,
    "o3": 17.4988,
    "temp": 26.7
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 28.91
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 13.31
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420071000,
    "o3": 16.8745,
    "temp": 34.3
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420071000,
    "o3": 15.3,
    "temp": 43.6
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420071000,
    "o3": 17,
    "temp": 44.4
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420071000,
    "o3": 21.9749,
    "temp": 38.02
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420071000,
    "o3": 16.2052,
    "temp": 30.5
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420071000,
    "o3": 12.9214,
    "temp": 31.5
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 32.45
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 34.71
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 33.83
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 32.19
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 31.58
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420071000,
    "o3": 13.0395,
    "temp": 30.3
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420071000,
    "o3": 16.5477,
    "temp": 32.5
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420071000,
    "o3": 9.81404,
    "temp": 33.7
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 19.93
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420071000,
    "o3": 8.75291,
    "temp": 38.14
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420071000,
    "o3": 11.5645,
    "temp": 36.38
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 40.6
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 38.95
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420071000,
    "o3": 19.6615,
    "temp": 44.59
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420071000,
    "o3": 6.51769,
    "temp": 25.72
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 41.24
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 24.81
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 40.6
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 28.94
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420071000,
    "o3": 0,
    "temp": 30.99
  },
  {
    "siteID": "48_027_1045",
    "epoch": 1420071300,
    "o3": 8.61528,
    "temp": 37.38
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420071300,
    "o3": 11.3157,
    "temp": 35.62
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420071300,
    "o3": 14.9318,
    "temp": 38.64
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420071300,
    "o3": 12.7178,
    "temp": 37.57
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420071300,
    "o3": 8.22568,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420071300,
    "o3": 12.5059,
    "temp": 41.62
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 35.6
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420071300,
    "o3": 12.9159,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 39.9
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 40.3
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 39.58
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420071300,
    "o3": 15.7309,
    "temp": 45.6
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420071300,
    "o3": 13.6008,
    "temp": 45.9
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 47.7
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420071300,
    "o3": 13.2056,
    "temp": 44.83
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 45.7
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420071300,
    "o3": 14.1972,
    "temp": 45.5
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420071300,
    "o3": 16.65,
    "temp": 25.2
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420071300,
    "o3": 16.6683,
    "temp": 43.76
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 50
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 13.5
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 13.6
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 13.7
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 46.5
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420071300,
    "o3": 14.2506,
    "temp": 32.6
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 33.8
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 30.53
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 35.7
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420071300,
    "o3": 9.9109,
    "temp": 35.3
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420071300,
    "o3": 13.013,
    "temp": 34
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420071300,
    "o3": 7.16491,
    "temp": 34.3
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 35.12
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 34.93
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 34.66
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420071300,
    "o3": 10.5093,
    "temp": 31.8
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 32.31
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 31.33
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420071300,
    "o3": 15.387,
    "temp": 31.4
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 19.5
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 19.2
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420071300,
    "o3": 12.5949,
    "temp": 34.4
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420071300,
    "o3": 12.7358,
    "temp": 36.5
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420071300,
    "o3": 12.9705,
    "temp": 30.1
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420071300,
    "o3": 17.4376,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420071300,
    "o3": 17.0681,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 29.42
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 27.5
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420071300,
    "o3": 14.9258,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420071300,
    "o3": 18.0405,
    "temp": 29.23
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420071300,
    "o3": 18.8605,
    "temp": 29.4
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 41.4
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420071300,
    "o3": 12.343,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 46.43
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420071300,
    "o3": 23.03,
    "temp": 45.16
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420071300,
    "o3": 15.352,
    "temp": 45.809
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420071300,
    "o3": 20.4063,
    "temp": 46.4
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420071300,
    "o3": 20.0942,
    "temp": 38.56
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420071300,
    "o3": 14.5469,
    "temp": 44.29
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420071300,
    "o3": 18.8225,
    "temp": 44.8
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420071300,
    "o3": 18.4219,
    "temp": 43.4
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 45.07
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420071300,
    "o3": 16.1856,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420071300,
    "o3": 14.6505,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420071300,
    "o3": 10.9081,
    "temp": 45.8
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420071300,
    "o3": 13.6541,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 44.99
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 45.9
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420071300,
    "o3": 13.5341,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420071300,
    "o3": 14.1309,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420071300,
    "o3": 13.868,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420071300,
    "o3": 11.4882,
    "temp": 45.2
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420071300,
    "o3": 18.05,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420071300,
    "o3": 13.65,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420071300,
    "o3": 18,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420071300,
    "o3": 15.55,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420071300,
    "o3": 7,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420071300,
    "o3": 18.15,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420071300,
    "o3": 12.7,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420071300,
    "o3": 17.2,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420071300,
    "o3": 16,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420071300,
    "o3": 17.8,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420071300,
    "o3": 15.6,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420071300,
    "o3": 16.35,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420071300,
    "o3": 22.6475,
    "temp": 46.6
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420071300,
    "o3": 17.293,
    "temp": 43.9
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420071300,
    "o3": 11.1259,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420071300,
    "o3": 19.2677,
    "temp": 44.9
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420071300,
    "o3": 14.3016,
    "temp": 47
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420071300,
    "o3": 15.859,
    "temp": 44.6
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420071300,
    "o3": 15.4034,
    "temp": 45.1
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420071300,
    "o3": 19.2339,
    "temp": 45.96
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 45.48
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 45.7
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420071300,
    "o3": 20.1178,
    "temp": 38.54
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420071300,
    "o3": 4.81325,
    "temp": 42.6
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420071300,
    "o3": 13.5729,
    "temp": 31.16
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420071300,
    "o3": 16.5533,
    "temp": 34.91
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420071300,
    "o3": 21.8844,
    "temp": 45.76
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420071300,
    "o3": 19.4164,
    "temp": 47.02
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 49.2
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 46.7128
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 46.3
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 46.7
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420071300,
    "o3": 21.3429,
    "temp": 44.77
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420071300,
    "o3": 22.1126,
    "temp": 49.1
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420071300,
    "o3": 19.4165,
    "temp": 46.6
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420071300,
    "o3": 29.1252,
    "temp": 47.8
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420071300,
    "o3": 21.5033,
    "temp": 46.1
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420071300,
    "o3": 9.38513,
    "temp": 31.48
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 34.08
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 31
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420071300,
    "o3": 15.8503,
    "temp": 36.9
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420071300,
    "o3": 20.747,
    "temp": 42.32
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420071300,
    "o3": 19.2502,
    "temp": 38.4
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 35.8
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 26.08
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420071300,
    "o3": 21.0659,
    "temp": 42.05
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420071300,
    "o3": 19.707,
    "temp": 42.944
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420071300,
    "o3": 22.237,
    "temp": 39
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420071300,
    "o3": 18.1784,
    "temp": 43.8
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420071300,
    "o3": 14.9227,
    "temp": 43.78
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 45.73
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 45.7
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 46.1
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 45.8
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 44.1
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 44.4
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420071300,
    "o3": 12.5773,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420071300,
    "o3": 12.7379,
    "temp": 43.1
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420071300,
    "o3": 23.894,
    "temp": 46.63
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420071300,
    "o3": 23.3411,
    "temp": 45.7
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 26.53
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420071300,
    "o3": 17.5961,
    "temp": 26.5
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 28.81
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 13.27
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420071300,
    "o3": 16.8254,
    "temp": 34.4
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420071300,
    "o3": 15.8,
    "temp": 43.6
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420071300,
    "o3": 17.3,
    "temp": 44.4
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420071300,
    "o3": 21.9749,
    "temp": 37.99
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420071300,
    "o3": 16.7465,
    "temp": 30.5
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420071300,
    "o3": 12.5243,
    "temp": 31.3
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 32.46
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 34.8
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 33.98
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 32.2
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 31.62
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420071300,
    "o3": 12.893,
    "temp": 30.4
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420071300,
    "o3": 16.0462,
    "temp": 32.54
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420071300,
    "o3": 10.7752,
    "temp": 33.7
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 19.66
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420071300,
    "o3": 9.25789,
    "temp": 38.05
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420071300,
    "o3": 11.6708,
    "temp": 36.37
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 40.5
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 38.9
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420071300,
    "o3": 19.3441,
    "temp": 44.59
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420071300,
    "o3": 4.33357,
    "temp": 26.16
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 41.16
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 24.83
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 40.4
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 28.85
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420071300,
    "o3": 0,
    "temp": 30.84
  },
  {
    "siteID": "48_027_1045",
    "epoch": 1420071600,
    "o3": 8.11493,
    "temp": 37.34
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420071600,
    "o3": 11.6215,
    "temp": 35.66
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420071600,
    "o3": 13.3157,
    "temp": 38.69
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420071600,
    "o3": 14.1016,
    "temp": 37.56
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420071600,
    "o3": 8.76945,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420071600,
    "o3": 12.0187,
    "temp": 41.64
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 35.6
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420071600,
    "o3": 13.0133,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 39.7
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 40.2
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 39.64
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420071600,
    "o3": 15.6825,
    "temp": 45.5
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420071600,
    "o3": 14.2197,
    "temp": 46
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 47.7
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420071600,
    "o3": 13.7009,
    "temp": 44.83
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 45.7
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420071600,
    "o3": 13.5504,
    "temp": 45.5
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420071600,
    "o3": 16.7,
    "temp": 25.2
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420071600,
    "o3": 16.6179,
    "temp": 43.7
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 49.9
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 13.6
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 13.7
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 13.8
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 46.7
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420071600,
    "o3": 14.7364,
    "temp": 32.6
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 33.8
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 30.57
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 35.6
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420071600,
    "o3": 9.96138,
    "temp": 35.6
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420071600,
    "o3": 12.9126,
    "temp": 33.9
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420071600,
    "o3": 6.87958,
    "temp": 34.3
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 34.82
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 34.97
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 34.74
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420071600,
    "o3": 12.2416,
    "temp": 31.7
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 32.4
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 31.28
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420071600,
    "o3": 15.5816,
    "temp": 31.4
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 19.5
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 19.4
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420071600,
    "o3": 12.949,
    "temp": 34.1
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420071600,
    "o3": 13.1467,
    "temp": 36.5
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420071600,
    "o3": 12.9201,
    "temp": 30.1
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420071600,
    "o3": 15.8673,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420071600,
    "o3": 17.3191,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 29.39
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 27.3
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420071600,
    "o3": 14.8764,
    "temp": 29.8
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420071600,
    "o3": 18.1394,
    "temp": 29.25
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420071600,
    "o3": 19.7006,
    "temp": 29.3
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 41.3
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420071600,
    "o3": 10.567,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 46.44
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420071600,
    "o3": 23.16,
    "temp": 45.18
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420071600,
    "o3": 15.38,
    "temp": 45.811
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420071600,
    "o3": 20.4562,
    "temp": 46.4
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420071600,
    "o3": 19.6041,
    "temp": 38.52
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420071600,
    "o3": 14.8444,
    "temp": 44.3
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420071600,
    "o3": 17.4967,
    "temp": 44.8
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420071600,
    "o3": 18.523,
    "temp": 43.4
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 45.12
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420071600,
    "o3": 16.0357,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420071600,
    "o3": 15.3618,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420071600,
    "o3": 12.0023,
    "temp": 45.7
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420071600,
    "o3": 12.4896,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 44.99
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 45.96
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420071600,
    "o3": 12.916,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420071600,
    "o3": 14.1781,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420071600,
    "o3": 13.4191,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420071600,
    "o3": 11.4378,
    "temp": 45.2
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420071600,
    "o3": 18.35,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420071600,
    "o3": 13.55,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420071600,
    "o3": 17.7,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420071600,
    "o3": 14.05,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420071600,
    "o3": 9.15,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420071600,
    "o3": 18.1,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420071600,
    "o3": 12.2,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420071600,
    "o3": 17.15,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420071600,
    "o3": 15.55,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420071600,
    "o3": 17.75,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420071600,
    "o3": 15.5,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420071600,
    "o3": 16.85,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420071600,
    "o3": 22.7488,
    "temp": 46.5
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420071600,
    "o3": 17.366,
    "temp": 43.899
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420071600,
    "o3": 11.3728,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420071600,
    "o3": 19.2677,
    "temp": 44.8
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420071600,
    "o3": 13.6447,
    "temp": 46.9
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420071600,
    "o3": 16.6008,
    "temp": 44.6
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420071600,
    "o3": 15.0657,
    "temp": 45.1
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420071600,
    "o3": 19.7271,
    "temp": 45.9
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 45.44
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420071600,
    "o3": 19.619,
    "temp": 38.53
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420071600,
    "o3": 5.40667,
    "temp": 42.5
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420071600,
    "o3": 13.5729,
    "temp": 31.23
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420071600,
    "o3": 17.0401,
    "temp": 34.78
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420071600,
    "o3": 22.3744,
    "temp": 45.71
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420071600,
    "o3": 18.9228,
    "temp": 47
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 49
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 46.6588
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 46.4
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 46.7
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420071600,
    "o3": 21.3429,
    "temp": 44.74
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420071600,
    "o3": 27.8029,
    "temp": 49
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420071600,
    "o3": 18.1902,
    "temp": 46.7
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420071600,
    "o3": 28.4794,
    "temp": 47.8
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420071600,
    "o3": 21.2051,
    "temp": 46.1
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420071600,
    "o3": 9.38513,
    "temp": 31.43
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 34.08
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 31
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420071600,
    "o3": 15.2163,
    "temp": 36.8
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420071600,
    "o3": 20.681,
    "temp": 42.307
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420071600,
    "o3": 19.2995,
    "temp": 38.4
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 35.8
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 26.09
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420071600,
    "o3": 20.463,
    "temp": 42.06
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420071600,
    "o3": 19.701,
    "temp": 42.926
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420071600,
    "o3": 19.2614,
    "temp": 38.9
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420071600,
    "o3": 17.421,
    "temp": 43.8
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420071600,
    "o3": 14.4197,
    "temp": 43.8
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 45.69
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 45.7
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 46
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 45.7
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 44.1
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 44.4
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420071600,
    "o3": 13.2808,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420071600,
    "o3": 12.6376,
    "temp": 43.2
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420071600,
    "o3": 23.3996,
    "temp": 46.52
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420071600,
    "o3": 22.2133,
    "temp": 45.6
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 26.6
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420071600,
    "o3": 17.9849,
    "temp": 26.5
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 28.9
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 13.29
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420071600,
    "o3": 17.2186,
    "temp": 34.2
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420071600,
    "o3": 16.1,
    "temp": 43.7
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420071600,
    "o3": 16.8,
    "temp": 44.4
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420071600,
    "o3": 22.494,
    "temp": 37.9
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420071600,
    "o3": 16.7957,
    "temp": 30.5
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420071600,
    "o3": 13.2192,
    "temp": 31.4
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 32.5
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 34.9
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 34.11
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 32.11
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 31.62
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420071600,
    "o3": 13.2348,
    "temp": 30.2
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420071600,
    "o3": 15.5448,
    "temp": 32.59
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420071600,
    "o3": 12.2423,
    "temp": 33.6
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 19.47
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420071600,
    "o3": 9.25789,
    "temp": 38.06
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420071600,
    "o3": 11.352,
    "temp": 36.39
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 39.9
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 40.5
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 38.98
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420071600,
    "o3": 18.4977,
    "temp": 44.59
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420071600,
    "o3": 6.41368,
    "temp": 27.05
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 41.69
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 24.77
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 40.2
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 28.88
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420071600,
    "o3": 0,
    "temp": 30.91
  },
  {
    "siteID": "48_027_1045",
    "epoch": 1420071900,
    "o3": 8.11493,
    "temp": 37.33
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420071900,
    "o3": 11.5706,
    "temp": 35.64
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420071900,
    "o3": 15.3358,
    "temp": 38.53
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 40.3
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420071900,
    "o3": 13.0637,
    "temp": 37.54
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420071900,
    "o3": 8.82877,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420071900,
    "o3": 12.0187,
    "temp": 41.37
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 35.6
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420071900,
    "o3": 12.3797,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 39.6
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 40.1
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 39.64
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420071900,
    "o3": 15.3924,
    "temp": 45.4
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420071900,
    "o3": 13.6484,
    "temp": 45.9
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 47.7
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420071900,
    "o3": 15.1865,
    "temp": 44.81
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420071900,
    "o3": 14.247,
    "temp": 45.5
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420071900,
    "o3": 16.6,
    "temp": 25.2
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420071900,
    "o3": 16.2146,
    "temp": 43.73
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 49.7
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 13.6
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 13.7
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 13.9
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 46.6
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420071900,
    "o3": 15.2222,
    "temp": 32.54
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 33.92
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 30.68
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 35.7
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420071900,
    "o3": 11.0719,
    "temp": 35.7
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420071900,
    "o3": 12.5614,
    "temp": 34
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420071900,
    "o3": 6.40403,
    "temp": 34
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 34.89
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 34.95
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 34.78
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420071900,
    "o3": 11.8951,
    "temp": 31.8
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 32.42
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 31.28
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420071900,
    "o3": 16.2626,
    "temp": 31.4
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 19.5
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 19.3
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420071900,
    "o3": 12.7467,
    "temp": 34.1
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420071900,
    "o3": 12.9184,
    "temp": 36.5
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420071900,
    "o3": 13.8777,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420071900,
    "o3": 15.5237,
    "temp": 29.8
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420071900,
    "o3": 15.4115,
    "temp": 30.1
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 29.52
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 27.4
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420071900,
    "o3": 13.8902,
    "temp": 29.8
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420071900,
    "o3": 18.3373,
    "temp": 29.13
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420071900,
    "o3": 19.4535,
    "temp": 29.4
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 41.3
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420071900,
    "o3": 13.714,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 46.51
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420071900,
    "o3": 23.23,
    "temp": 45.18
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420071900,
    "o3": 15.752,
    "temp": 45.808
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420071900,
    "o3": 21.2552,
    "temp": 46.5
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420071900,
    "o3": 19.6041,
    "temp": 38.43
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420071900,
    "o3": 15.4891,
    "temp": 44.21
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420071900,
    "o3": 19.3626,
    "temp": 44.8
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420071900,
    "o3": 18.1185,
    "temp": 43.4
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 45.03
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420071900,
    "o3": 15.3363,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420071900,
    "o3": 14.0915,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420071900,
    "o3": 12.3504,
    "temp": 45.7
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420071900,
    "o3": 11.6288,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 44.98
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 46.01
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420071900,
    "o3": 11.9652,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420071900,
    "o3": 15.1694,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420071900,
    "o3": 13.1198,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420071900,
    "o3": 10.9836,
    "temp": 45.3
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420071900,
    "o3": 18.6,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420071900,
    "o3": 12.8,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420071900,
    "o3": 17.6,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420071900,
    "o3": 14.25,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420071900,
    "o3": 9.1,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420071900,
    "o3": 18.05,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420071900,
    "o3": 12.9,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420071900,
    "o3": 17.2,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420071900,
    "o3": 16,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420071900,
    "o3": 17.75,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420071900,
    "o3": 15.75,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420071900,
    "o3": 17.05,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420071900,
    "o3": 23.1035,
    "temp": 46.4
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420071900,
    "o3": 17.553,
    "temp": 43.878
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420071900,
    "o3": 13.2984,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420071900,
    "o3": 19.5654,
    "temp": 44.7
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420071900,
    "o3": 15.9693,
    "temp": 46.8
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420071900,
    "o3": 18.0351,
    "temp": 44.5
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420071900,
    "o3": 13.6186,
    "temp": 45.2
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420071900,
    "o3": 19.2339,
    "temp": 45.87
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 45.62
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 45.7
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420071900,
    "o3": 20.1178,
    "temp": 38.58
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420071900,
    "o3": 4.7638,
    "temp": 42.5
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420071900,
    "o3": 13.5729,
    "temp": 31.35
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420071900,
    "o3": 16.5533,
    "temp": 34.66
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420071900,
    "o3": 21.8844,
    "temp": 45.75
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420071900,
    "o3": 20.4037,
    "temp": 47.02
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 48.6
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 46.6273
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 46.4
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 46.7
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420071900,
    "o3": 21.3429,
    "temp": 44.7
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420071900,
    "o3": 22.9112,
    "temp": 48.8
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420071900,
    "o3": 19.11,
    "temp": 46.7
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420071900,
    "o3": 28.6781,
    "temp": 47.9
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420071900,
    "o3": 19.8632,
    "temp": 46.1
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420071900,
    "o3": 8.88235,
    "temp": 31.45
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 34.04
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 30.99
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420071900,
    "o3": 15.4601,
    "temp": 36.8
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420071900,
    "o3": 20.674,
    "temp": 42.283
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420071900,
    "o3": 19.6937,
    "temp": 38.5
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 35.8
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 26.09
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420071900,
    "o3": 20.6137,
    "temp": 42.01
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420071900,
    "o3": 20.563,
    "temp": 42.832
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420071900,
    "o3": 20.6533,
    "temp": 38.8
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420071900,
    "o3": 17.7744,
    "temp": 43.8
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420071900,
    "o3": 14.4197,
    "temp": 43.83
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 45.55
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 45.5
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 45.9
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 45.8
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 44.1
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 45.5
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420071900,
    "o3": 13.0798,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420071900,
    "o3": 12.2364,
    "temp": 43.3
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420071900,
    "o3": 23.3996,
    "temp": 46.38
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420071900,
    "o3": 22.6056,
    "temp": 45.4
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 26.54
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420071900,
    "o3": 17.4988,
    "temp": 26.8
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 28.88
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 13.28
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420071900,
    "o3": 17.022,
    "temp": 34.2
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420071900,
    "o3": 15.9,
    "temp": 43.7
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420071900,
    "o3": 17.9,
    "temp": 44.4
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420071900,
    "o3": 23.0131,
    "temp": 37.91
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420071900,
    "o3": 17.337,
    "temp": 30.5
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420071900,
    "o3": 13.3184,
    "temp": 31.4
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 32.38
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 35
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 33.95
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 32.19
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 31.76
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420071900,
    "o3": 13.3325,
    "temp": 30.2
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420071900,
    "o3": 16.0462,
    "temp": 32.64
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420071900,
    "o3": 12.0399,
    "temp": 33.6
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 19.65
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420071900,
    "o3": 9.76287,
    "temp": 38.01
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420071900,
    "o3": 11.8302,
    "temp": 36.33
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 39.9
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 40.4
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 38.87
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420071900,
    "o3": 19.4499,
    "temp": 44.49
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420071900,
    "o3": 7.14172,
    "temp": 27.29
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 41.4
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 24.83
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 28.89
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420071900,
    "o3": 0,
    "temp": 30.98
  },
  {
    "siteID": "48_027_1045",
    "epoch": 1420072200,
    "o3": 8.11493,
    "temp": 37.38
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420072200,
    "o3": 11.5706,
    "temp": 35.61
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420072200,
    "o3": 15.6388,
    "temp": 38.52
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420072200,
    "o3": 13.1131,
    "temp": 37.54
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420072200,
    "o3": 10.0745,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420072200,
    "o3": 11.5314,
    "temp": 41.49
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 35.5
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420072200,
    "o3": 11.405,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 39.7
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 39.65
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420072200,
    "o3": 15.344,
    "temp": 45.4
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420072200,
    "o3": 14.0769,
    "temp": 45.9
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 47.7
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420072200,
    "o3": 14.1961,
    "temp": 44.81
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420072200,
    "o3": 14.5953,
    "temp": 45.5
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420072200,
    "o3": 16.8,
    "temp": 25.1
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420072200,
    "o3": 16.5675,
    "temp": 43.71
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 49.9
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 13.6
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 13.9
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 14
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 46.5
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420072200,
    "o3": 15.2222,
    "temp": 32.54
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 33.94
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 30.83
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 35.7
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420072200,
    "o3": 11.6777,
    "temp": 35.7
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420072200,
    "o3": 12.5614,
    "temp": 34
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420072200,
    "o3": 7.49779,
    "temp": 33.9
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 35.27
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 34.84
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 34.72
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420072200,
    "o3": 13.6275,
    "temp": 31.9
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 32.48
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 31.3
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420072200,
    "o3": 16.8463,
    "temp": 31.4
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 19.6
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 19.4
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420072200,
    "o3": 12.8478,
    "temp": 34.1
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420072200,
    "o3": 12.325,
    "temp": 36.5
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420072200,
    "o3": 13.4745,
    "temp": 30.1
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420072200,
    "o3": 16.2598,
    "temp": 29.8
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420072200,
    "o3": 17.0179,
    "temp": 30
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 29.46
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 27.4
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420072200,
    "o3": 12.7559,
    "temp": 29.8
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420072200,
    "o3": 18.7331,
    "temp": 29
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420072200,
    "o3": 19.3547,
    "temp": 29.4
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 41.3
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420072200,
    "o3": 15.287,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 46.52
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420072200,
    "o3": 22.69,
    "temp": 45.22
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420072200,
    "o3": 15.709,
    "temp": 45.808
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420072200,
    "o3": 21.6546,
    "temp": 46.6
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420072200,
    "o3": 19.6041,
    "temp": 38.36
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420072200,
    "o3": 17.572,
    "temp": 44.17
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420072200,
    "o3": 18.7243,
    "temp": 44.8
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420072200,
    "o3": 17.0061,
    "temp": 43.4
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 45.02
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420072200,
    "o3": 15.5861,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420072200,
    "o3": 13.0245,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420072200,
    "o3": 12.3504,
    "temp": 45.7
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420072200,
    "o3": 12.1351,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 44.93
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 45.98
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420072200,
    "o3": 11.5848,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420072200,
    "o3": 14.6502,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420072200,
    "o3": 15.3147,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420072200,
    "o3": 10.9836,
    "temp": 45.3
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420072200,
    "o3": 18.65,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420072200,
    "o3": 13.3,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420072200,
    "o3": 17.45,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420072200,
    "o3": 15.25,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420072200,
    "o3": 8.4,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420072200,
    "o3": 17.25,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420072200,
    "o3": 12.85,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420072200,
    "o3": 16.65,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420072200,
    "o3": 16,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420072200,
    "o3": 18.25,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420072200,
    "o3": 15.35,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420072200,
    "o3": 17.05,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420072200,
    "o3": 23.2555,
    "temp": 46.3
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420072200,
    "o3": 18.171,
    "temp": 43.833
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420072200,
    "o3": 12.9034,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420072200,
    "o3": 20.2104,
    "temp": 44.6
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420072200,
    "o3": 14.8575,
    "temp": 46.8
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420072200,
    "o3": 17.4416,
    "temp": 44.5
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420072200,
    "o3": 14.8245,
    "temp": 45.1
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420072200,
    "o3": 20.2202,
    "temp": 45.88
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 45.55
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420072200,
    "o3": 20.1178,
    "temp": 38.54
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420072200,
    "o3": 4.61545,
    "temp": 42.5
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420072200,
    "o3": 13.0882,
    "temp": 31.32
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420072200,
    "o3": 17.0401,
    "temp": 34.71
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420072200,
    "o3": 22.3744,
    "temp": 45.74
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420072200,
    "o3": 21.391,
    "temp": 47.08
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 48.7
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 46.5541
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 46.4
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 46.8
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420072200,
    "o3": 21.3429,
    "temp": 44.64
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420072200,
    "o3": 25.8063,
    "temp": 48.7
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420072200,
    "o3": 19.0589,
    "temp": 46.7
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420072200,
    "o3": 29.5226,
    "temp": 47.9
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420072200,
    "o3": 22.696,
    "temp": 46
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420072200,
    "o3": 9.38513,
    "temp": 31.48
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 34.08
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 30.98
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420072200,
    "o3": 16.0941,
    "temp": 36.8
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420072200,
    "o3": 20.991,
    "temp": 42.246
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420072200,
    "o3": 19.6444,
    "temp": 38.5
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 35.7
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 26.03
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420072200,
    "o3": 20.2621,
    "temp": 42.01
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420072200,
    "o3": 20.409,
    "temp": 42.781
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420072200,
    "o3": 20.7972,
    "temp": 38.7
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420072200,
    "o3": 17.4715,
    "temp": 43.8
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420072200,
    "o3": 15.4257,
    "temp": 43.94
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 45.87
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 45.9
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 45.8
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 44.3
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420072200,
    "o3": 13.6828,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420072200,
    "o3": 11.6346,
    "temp": 43.3
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420072200,
    "o3": 23.3996,
    "temp": 46.21
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420072200,
    "o3": 22.4094,
    "temp": 45.3
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 26.65
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420072200,
    "o3": 17.11,
    "temp": 26.8
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 28.91
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 13.26
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420072200,
    "o3": 16.6288,
    "temp": 34.3
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420072200,
    "o3": 15.8,
    "temp": 43.7
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420072200,
    "o3": 17.4,
    "temp": 44.4
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420072200,
    "o3": 22.494,
    "temp": 37.91
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420072200,
    "o3": 16.5497,
    "temp": 30.7
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420072200,
    "o3": 13.8644,
    "temp": 31.3
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 32.37
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 34.87
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 33.99
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 32.1
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 31.69
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420072200,
    "o3": 12.6488,
    "temp": 30.3
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420072200,
    "o3": 16.0462,
    "temp": 32.58
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420072200,
    "o3": 12.4952,
    "temp": 33.6
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 19.7
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420072200,
    "o3": 9.76287,
    "temp": 38.03
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420072200,
    "o3": 11.0864,
    "temp": 36.26
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 39.9
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 40.4
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 38.86
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420072200,
    "o3": 19.3441,
    "temp": 44.49
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420072200,
    "o3": 6.8297,
    "temp": 27.63
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 41.38
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 24.67
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 39.9
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 28.9
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420072200,
    "o3": 0,
    "temp": 31.02
  },
  {
    "siteID": "48_027_1045",
    "epoch": 1420072500,
    "o3": 8.61528,
    "temp": 37.45
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420072500,
    "o3": 11.0608,
    "temp": 35.58
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420072500,
    "o3": 14.7803,
    "temp": 38.57
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420072500,
    "o3": 12.6189,
    "temp": 37.59
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420072500,
    "o3": 10.1832,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420072500,
    "o3": 12.0187,
    "temp": 41.39
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 35.5
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420072500,
    "o3": 11.5512,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 39.6
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 39.9
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 39.51
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420072500,
    "o3": 15.5374,
    "temp": 45.4
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420072500,
    "o3": 14.553,
    "temp": 45.9
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 47.6
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420072500,
    "o3": 14.1961,
    "temp": 44.81
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420072500,
    "o3": 13.8987,
    "temp": 45.5
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420072500,
    "o3": 16.9,
    "temp": 25.2
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420072500,
    "o3": 15.8114,
    "temp": 43.79
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 49.3
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 13.6
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 13.9
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 14
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 46.5
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420072500,
    "o3": 16.1938,
    "temp": 32.4
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 33.99
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 30.83
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 35.6
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420072500,
    "o3": 10.7186,
    "temp": 35.7
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420072500,
    "o3": 11.8087,
    "temp": 34.1
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420072500,
    "o3": 7.26002,
    "temp": 33.9
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 34.76
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 34.84
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 34.88
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420072500,
    "o3": 16.5971,
    "temp": 31.9
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 32.61
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 31.4
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420072500,
    "o3": 16.9922,
    "temp": 31.4
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 19.6
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 19.4
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420072500,
    "o3": 12.8984,
    "temp": 34
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420072500,
    "o3": 12.6902,
    "temp": 36.4
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420072500,
    "o3": 12.668,
    "temp": 30.2
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420072500,
    "o3": 16.5052,
    "temp": 29.7
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420072500,
    "o3": 15.8131,
    "temp": 30.1
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 29.73
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 27.5
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420072500,
    "o3": 11.5231,
    "temp": 30
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420072500,
    "o3": 17.4468,
    "temp": 29.13
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420072500,
    "o3": 19.5524,
    "temp": 29.3
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 41.4
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420072500,
    "o3": 12.868,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 46.55
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420072500,
    "o3": 22.8,
    "temp": 45.2
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420072500,
    "o3": 16.359,
    "temp": 45.807
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420072500,
    "o3": 22.0541,
    "temp": 46.6
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420072500,
    "o3": 19.6041,
    "temp": 38.34
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420072500,
    "o3": 17.8199,
    "temp": 44.12
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420072500,
    "o3": 17.153,
    "temp": 44.8
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420072500,
    "o3": 17.259,
    "temp": 43.5
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 44.97
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420072500,
    "o3": 16.3854,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420072500,
    "o3": 13.1261,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420072500,
    "o3": 11.5547,
    "temp": 45.7
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420072500,
    "o3": 13.1478,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 44.93
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 45.94
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420072500,
    "o3": 9.68306,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420072500,
    "o3": 14.5085,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420072500,
    "o3": 14.317,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420072500,
    "o3": 9.11657,
    "temp": 45.4
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420072500,
    "o3": 18.65,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420072500,
    "o3": 12.95,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420072500,
    "o3": 17.5,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420072500,
    "o3": 15.8,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420072500,
    "o3": 12.3,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420072500,
    "o3": 18,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420072500,
    "o3": 12.4,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420072500,
    "o3": 16.65,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420072500,
    "o3": 16.05,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420072500,
    "o3": 17.85,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420072500,
    "o3": 15.45,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420072500,
    "o3": 17,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420072500,
    "o3": 23.2048,
    "temp": 46.3
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420072500,
    "o3": 16.025,
    "temp": 43.904
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420072500,
    "o3": 10.7309,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420072500,
    "o3": 19.8135,
    "temp": 44.5
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420072500,
    "o3": 14.6554,
    "temp": 46.8
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420072500,
    "o3": 17.3427,
    "temp": 44.5
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420072500,
    "o3": 14.0527,
    "temp": 45.1
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420072500,
    "o3": 19.2339,
    "temp": 45.82
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 45.48
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 45.5
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420072500,
    "o3": 19.619,
    "temp": 38.57
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420072500,
    "o3": 5.25831,
    "temp": 42.5
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420072500,
    "o3": 13.0882,
    "temp": 31.31
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420072500,
    "o3": 16.5533,
    "temp": 34.76
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420072500,
    "o3": 21.8844,
    "temp": 45.73
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420072500,
    "o3": 22.3782,
    "temp": 47.08
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 48.4
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 46.3433
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 46.3
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 46.8
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420072500,
    "o3": 20.8504,
    "temp": 44.59
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420072500,
    "o3": 27.7031,
    "temp": 48.5
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420072500,
    "o3": 19.4676,
    "temp": 46.6
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420072500,
    "o3": 29.5226,
    "temp": 47.8
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420072500,
    "o3": 23.3918,
    "temp": 45.9
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420072500,
    "o3": 9.38513,
    "temp": 31.49
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 34.03
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 31
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420072500,
    "o3": 16.2405,
    "temp": 36.8
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420072500,
    "o3": 19.021,
    "temp": 42.215
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420072500,
    "o3": 19.1516,
    "temp": 38.5
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 35.8
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 26.08
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420072500,
    "o3": 20.5133,
    "temp": 42
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420072500,
    "o3": 20.392,
    "temp": 42.736
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420072500,
    "o3": 20.4133,
    "temp": 38.7
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420072500,
    "o3": 17.4715,
    "temp": 43.8
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420072500,
    "o3": 14.9227,
    "temp": 44.01
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 46.48
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 45.8
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 45.9
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 46
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 44.3
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 44.4
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420072500,
    "o3": 14.0848,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420072500,
    "o3": 12.0358,
    "temp": 43.4
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420072500,
    "o3": 23.3996,
    "temp": 46.1
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420072500,
    "o3": 22.2133,
    "temp": 45.2
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 26.83
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420072500,
    "o3": 16.8183,
    "temp": 26.7
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 28.94
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 13.37
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420072500,
    "o3": 16.3339,
    "temp": 34.1
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420072500,
    "o3": 15.8,
    "temp": 43.7
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420072500,
    "o3": 17.1,
    "temp": 44.4
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420072500,
    "o3": 22.494,
    "temp": 37.89
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420072500,
    "o3": 16.8941,
    "temp": 30.6
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420072500,
    "o3": 12.3754,
    "temp": 31.2
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 32.41
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 34.82
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 33.76
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 32
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 31.61
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420072500,
    "o3": 13.0883,
    "temp": 30.4
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420072500,
    "o3": 16.5477,
    "temp": 32.6
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420072500,
    "o3": 11.787,
    "temp": 33.7
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 19.61
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420072500,
    "o3": 8.75291,
    "temp": 38.06
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420072500,
    "o3": 11.5645,
    "temp": 36.21
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 39.9
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 40.6
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 38.99
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420072500,
    "o3": 19.8202,
    "temp": 44.44
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420072500,
    "o3": 3.76154,
    "temp": 27.59
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 41.41
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 24.78
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 39.7
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 28.99
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420072500,
    "o3": 0,
    "temp": 31.22
  },
  {
    "siteID": "48_027_1045",
    "epoch": 1420072800,
    "o3": 8.61528,
    "temp": 37.56
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420072800,
    "o3": 11.0608,
    "temp": 35.56
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420072800,
    "o3": 14.0732,
    "temp": 38.55
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420072800,
    "o3": 12.3718,
    "temp": 37.59
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420072800,
    "o3": 9.70868,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420072800,
    "o3": 12.0187,
    "temp": 41.44
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 35.4
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420072800,
    "o3": 11.0638,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 39.7
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 39.8
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 39.53
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420072800,
    "o3": 15.1506,
    "temp": 45.6
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420072800,
    "o3": 14.6959,
    "temp": 46
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 47.6
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420072800,
    "o3": 14.6913,
    "temp": 44.82
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420072800,
    "o3": 13.5504,
    "temp": 45.5
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420072800,
    "o3": 16.6,
    "temp": 25.2
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420072800,
    "o3": 7.94384,
    "temp": 45.1
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420072800,
    "o3": 16.1138,
    "temp": 43.87
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 49.2
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 13.7
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 13.9
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 14
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 46.6
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420072800,
    "o3": 15.2222,
    "temp": 32.46
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 34.08
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 30.95
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 35.8
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420072800,
    "o3": 12.6368,
    "temp": 35.5
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420072800,
    "o3": 11.4073,
    "temp": 34
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420072800,
    "o3": 6.02359,
    "temp": 34
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 34.67
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 34.85
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 34.84
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420072800,
    "o3": 14.3699,
    "temp": 32
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 32.61
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 31.41
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420072800,
    "o3": 16.749,
    "temp": 31.5
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 19.7
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 19.5
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420072800,
    "o3": 11.1786,
    "temp": 34.1
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420072800,
    "o3": 13.5575,
    "temp": 36.4
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420072800,
    "o3": 12.9201,
    "temp": 30.1
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420072800,
    "o3": 16.5543,
    "temp": 29.8
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420072800,
    "o3": 15.5119,
    "temp": 30.1
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 29.55
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 27.4
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420072800,
    "o3": 11.1286,
    "temp": 30.1
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420072800,
    "o3": 17.2489,
    "temp": 29.09
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420072800,
    "o3": 19.5029,
    "temp": 29.3
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 41.3
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420072800,
    "o3": 13.183,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 46.54
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420072800,
    "o3": 23.08,
    "temp": 45.21
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420072800,
    "o3": 15.286,
    "temp": 45.821
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420072800,
    "o3": 22.3537,
    "temp": 46.6
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420072800,
    "o3": 19.6041,
    "temp": 38.36
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420072800,
    "o3": 17.3736,
    "temp": 44.09
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420072800,
    "o3": 18.3314,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420072800,
    "o3": 17.7646,
    "temp": 43.5
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 44.91
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420072800,
    "o3": 16.5352,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420072800,
    "o3": 13.7867,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420072800,
    "o3": 12.0023,
    "temp": 45.7
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420072800,
    "o3": 12.9959,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 44.84
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 44.4
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 45.86
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420072800,
    "o3": 10.9192,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420072800,
    "o3": 14.603,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420072800,
    "o3": 14.5166,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420072800,
    "o3": 8.41012,
    "temp": 45.4
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420072800,
    "o3": 18.6,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420072800,
    "o3": 13.2,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420072800,
    "o3": 17.45,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420072800,
    "o3": 16.45,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420072800,
    "o3": 11.2,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420072800,
    "o3": 17.5,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420072800,
    "o3": 11.7,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420072800,
    "o3": 16.7,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420072800,
    "o3": 15.55,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420072800,
    "o3": 17.85,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420072800,
    "o3": 15.85,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420072800,
    "o3": 16.75,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420072800,
    "o3": 23.3062,
    "temp": 46.2
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420072800,
    "o3": 17.058,
    "temp": 43.926
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420072800,
    "o3": 10.3853,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420072800,
    "o3": 19.8135,
    "temp": 44.5
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420072800,
    "o3": 16.3736,
    "temp": 46.7
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420072800,
    "o3": 17.2932,
    "temp": 44.5
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420072800,
    "o3": 15.1139,
    "temp": 45.1
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 45.4
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420072800,
    "o3": 19.2339,
    "temp": 45.77
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 45.47
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420072800,
    "o3": 20.1178,
    "temp": 38.58
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420072800,
    "o3": 4.91215,
    "temp": 42.5
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420072800,
    "o3": 13.5729,
    "temp": 31.18
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420072800,
    "o3": 17.0401,
    "temp": 34.74
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420072800,
    "o3": 21.8844,
    "temp": 45.57
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420072800,
    "o3": 22.8719,
    "temp": 47.11
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 48.2
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 46.2458
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 46.2
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 46.7
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420072800,
    "o3": 20.8504,
    "temp": 44.51
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420072800,
    "o3": 22.462,
    "temp": 48.4
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420072800,
    "o3": 20.0808,
    "temp": 46.5
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420072800,
    "o3": 30.218,
    "temp": 47.6
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420072800,
    "o3": 24.1373,
    "temp": 45.8
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420072800,
    "o3": 9.8879,
    "temp": 31.43
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 33.99
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 31.08
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420072800,
    "o3": 16.338,
    "temp": 36.8
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420072800,
    "o3": 20.26,
    "temp": 42.168
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420072800,
    "o3": 18.7574,
    "temp": 38.5
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 35.6
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 26.07
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420072800,
    "o3": 20.3123,
    "temp": 42.05
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420072800,
    "o3": 20.418,
    "temp": 42.709
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420072800,
    "o3": 20.2693,
    "temp": 38.6
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420072800,
    "o3": 17.9259,
    "temp": 43.8
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420072800,
    "o3": 15.9287,
    "temp": 43.98
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 46.65
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 45.9
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 46
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 46
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420072800,
    "o3": 14.4868,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420072800,
    "o3": 12.9385,
    "temp": 43.5
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420072800,
    "o3": 22.9053,
    "temp": 45.97
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420072800,
    "o3": 21.9681,
    "temp": 45.2
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 26.84
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420072800,
    "o3": 16.6239,
    "temp": 27
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 28.98
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 13.51
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420072800,
    "o3": 16.8254,
    "temp": 34.1
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420072800,
    "o3": 15.8,
    "temp": 43.6
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420072800,
    "o3": 16.7,
    "temp": 44.4
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420072800,
    "o3": 21.9749,
    "temp": 37.94
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420072800,
    "o3": 15.8116,
    "temp": 30.8
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420072800,
    "o3": 13.8644,
    "temp": 31.2
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 32.48
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 34.74
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 33.79
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 32.1
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 31.61
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420072800,
    "o3": 12.5999,
    "temp": 30.5
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420072800,
    "o3": 16.0462,
    "temp": 32.67
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420072800,
    "o3": 10.8764,
    "temp": 33.8
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 19.65
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420072800,
    "o3": 9.25789,
    "temp": 38.05
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420072800,
    "o3": 11.0332,
    "temp": 36.15
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 39.9
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 40.4
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 38.97
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420072800,
    "o3": 19.7144,
    "temp": 44.5
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420072800,
    "o3": 6.67369,
    "temp": 27.26
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 41.4
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 24.72
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 39.7
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 28.89
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420072800,
    "o3": 0,
    "temp": 31.09
  },
  {
    "siteID": "48_027_1045",
    "epoch": 1420073100,
    "o3": 8.61528,
    "temp": 37.51
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420073100,
    "o3": 10.704,
    "temp": 35.59
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420073100,
    "o3": 14.5278,
    "temp": 38.5
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420073100,
    "o3": 13.3108,
    "temp": 37.59
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420073100,
    "o3": 9.58015,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420073100,
    "o3": 12.0187,
    "temp": 41.65
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 35.4
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420073100,
    "o3": 10.7226,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 39.9
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 39.8
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 39.61
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420073100,
    "o3": 15.4891,
    "temp": 45.6
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420073100,
    "o3": 15.2672,
    "temp": 46
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 47.5
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420073100,
    "o3": 14.6913,
    "temp": 44.82
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 45.5
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420073100,
    "o3": 14.0977,
    "temp": 45.4
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420073100,
    "o3": 16.5,
    "temp": 25.2
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420073100,
    "o3": 7.84178,
    "temp": 45.1
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420073100,
    "o3": 16.1642,
    "temp": 43.88
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 49
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 13.7
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 13.9
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 14
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 46.5
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420073100,
    "o3": 15.2222,
    "temp": 32.51
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 34.05
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 30.87
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 35.5
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420073100,
    "o3": 13.0407,
    "temp": 35.6
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420073100,
    "o3": 10.9055,
    "temp": 34.1
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420073100,
    "o3": 5.97604,
    "temp": 34.2
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 34.71
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 34.83
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 34.95
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420073100,
    "o3": 12.3406,
    "temp": 31.9
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 32.67
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 31.48
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420073100,
    "o3": 16.8949,
    "temp": 31.5
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 19.7
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 19.5
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420073100,
    "o3": 12.2914,
    "temp": 34
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420073100,
    "o3": 12.9184,
    "temp": 36.4
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420073100,
    "o3": 13.8777,
    "temp": 30
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420073100,
    "o3": 16.0636,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420073100,
    "o3": 14.3071,
    "temp": 30.2
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 29.76
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 27.4
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420073100,
    "o3": 9.30394,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420073100,
    "o3": 16.9027,
    "temp": 29.14
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420073100,
    "o3": 18.1193,
    "temp": 29.4
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 41.4
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420073100,
    "o3": 14.038,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 46.53
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420073100,
    "o3": 23.44,
    "temp": 45.23
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420073100,
    "o3": 14.354,
    "temp": 45.844
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420073100,
    "o3": 22.4037,
    "temp": 46.6
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420073100,
    "o3": 19.6041,
    "temp": 38.33
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420073100,
    "o3": 16.8281,
    "temp": 44.08
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420073100,
    "o3": 18.4296,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420073100,
    "o3": 18.2197,
    "temp": 43.4
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 44.93
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420073100,
    "o3": 17.0348,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420073100,
    "o3": 15.8699,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420073100,
    "o3": 10.8087,
    "temp": 45.7
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420073100,
    "o3": 13.2491,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 44.74
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 44.3
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 45.84
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420073100,
    "o3": 10.1585,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420073100,
    "o3": 14.6502,
    "temp": 44.4
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420073100,
    "o3": 15.5143,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420073100,
    "o3": 8.81381,
    "temp": 45.4
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420073100,
    "o3": 19.05,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420073100,
    "o3": 14.15,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420073100,
    "o3": 17.15,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420073100,
    "o3": 16.2,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420073100,
    "o3": 15.55,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420073100,
    "o3": 17.55,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420073100,
    "o3": 10.9,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420073100,
    "o3": 16.15,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420073100,
    "o3": 15.5,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420073100,
    "o3": 18.85,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420073100,
    "o3": 16,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420073100,
    "o3": 16.8,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420073100,
    "o3": 22.9515,
    "temp": 46.1
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420073100,
    "o3": 16.387,
    "temp": 43.912
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420073100,
    "o3": 15.0759,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420073100,
    "o3": 19.8135,
    "temp": 44.4
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420073100,
    "o3": 16.3736,
    "temp": 46.6
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420073100,
    "o3": 17.0954,
    "temp": 44.4
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420073100,
    "o3": 16.2716,
    "temp": 45
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420073100,
    "o3": 19.2339,
    "temp": 45.74
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 45.28
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420073100,
    "o3": 20.1178,
    "temp": 38.55
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420073100,
    "o3": 5.40667,
    "temp": 42.5
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420073100,
    "o3": 13.5729,
    "temp": 31.18
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420073100,
    "o3": 16.5533,
    "temp": 34.77
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420073100,
    "o3": 22.8643,
    "temp": 45.44
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420073100,
    "o3": 22.8719,
    "temp": 47.05
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 48.1
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 46.0669
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 46.2
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 46.6
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420073100,
    "o3": 20.8504,
    "temp": 44.48
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420073100,
    "o3": 26.7048,
    "temp": 48.2
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420073100,
    "o3": 19.0589,
    "temp": 46.5
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420073100,
    "o3": 29.1252,
    "temp": 47.5
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420073100,
    "o3": 23.4912,
    "temp": 45.6
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420073100,
    "o3": 8.88235,
    "temp": 31.42
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 34.07
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 30.95
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420073100,
    "o3": 15.8015,
    "temp": 36.8
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420073100,
    "o3": 20.656,
    "temp": 42.124
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420073100,
    "o3": 17.0821,
    "temp": 38.4
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 35.6
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 26.07
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420073100,
    "o3": 20.3123,
    "temp": 42.05
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420073100,
    "o3": 20.31,
    "temp": 42.692
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420073100,
    "o3": 20.0293,
    "temp": 38.7
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420073100,
    "o3": 16.815,
    "temp": 43.8
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420073100,
    "o3": 15.9287,
    "temp": 43.99
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 46.46
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 45.9
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 45.9
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 46
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 44.4
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 45.5
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420073100,
    "o3": 14.4868,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420073100,
    "o3": 13.1391,
    "temp": 43.6
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420073100,
    "o3": 22.4109,
    "temp": 45.87
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420073100,
    "o3": 22.3604,
    "temp": 45.1
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 26.98
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420073100,
    "o3": 16.5753,
    "temp": 26.9
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 29.05
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 13.49
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420073100,
    "o3": 16.6288,
    "temp": 34.1
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420073100,
    "o3": 15.7,
    "temp": 43.7
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420073100,
    "o3": 18.2,
    "temp": 44.4
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420073100,
    "o3": 21.9749,
    "temp": 37.89
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420073100,
    "o3": 16.3529,
    "temp": 30.8
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420073100,
    "o3": 14.5593,
    "temp": 31.3
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 32.42
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 34.73
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 33.88
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 32.08
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 31.65
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420073100,
    "o3": 12.1604,
    "temp": 30.6
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420073100,
    "o3": 16.0462,
    "temp": 32.73
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420073100,
    "o3": 11.6352,
    "temp": 33.6
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 19.53
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420073100,
    "o3": 9.76287,
    "temp": 38.04
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420073100,
    "o3": 11.352,
    "temp": 36.12
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 39.9
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 40.4
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 38.97
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420073100,
    "o3": 19.0796,
    "temp": 44.56
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420073100,
    "o3": 6.8297,
    "temp": 26.98
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 41.22
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 24.69
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 39.7
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 28.91
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420073100,
    "o3": 0,
    "temp": 31.12
  },
  {
    "siteID": "48_027_1045",
    "epoch": 1420073400,
    "o3": 8.61528,
    "temp": 37.56
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420073400,
    "o3": 10.755,
    "temp": 35.44
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420073400,
    "o3": 14.6288,
    "temp": 38.5
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420073400,
    "o3": 13.4097,
    "temp": 37.58
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420073400,
    "o3": 10.0547,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420073400,
    "o3": 11.5314,
    "temp": 41.73
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 35.3
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420073400,
    "o3": 10.4789,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 39.9
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 39.9
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 39.62
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420073400,
    "o3": 15.2957,
    "temp": 45.7
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420073400,
    "o3": 16.0766,
    "temp": 46.1
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 47.4
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420073400,
    "o3": 15.1865,
    "temp": 44.84
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 45.5
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420073400,
    "o3": 14.3963,
    "temp": 45.4
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420073400,
    "o3": 16.75,
    "temp": 25.1
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420073400,
    "o3": 7.84178,
    "temp": 45.1
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420073400,
    "o3": 16.1642,
    "temp": 43.94
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 49
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 13.6
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 14
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 14
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 46.4
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420073400,
    "o3": 14.7364,
    "temp": 32.52
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 33.96
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 30.88
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 35.6
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420073400,
    "o3": 11.9806,
    "temp": 35.7
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420073400,
    "o3": 10.5041,
    "temp": 34
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420073400,
    "o3": 6.07115,
    "temp": 34.4
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 34.74
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 34.84
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 35.01
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420073400,
    "o3": 14.6173,
    "temp": 32
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 32.66
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 31.58
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420073400,
    "o3": 17.43,
    "temp": 31.5
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 19.6
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 19.6
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420073400,
    "o3": 8.59894,
    "temp": 34.1
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420073400,
    "o3": 12.2794,
    "temp": 36.4
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420073400,
    "o3": 12.668,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420073400,
    "o3": 15.8182,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420073400,
    "o3": 13.6545,
    "temp": 30.1
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 29.69
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 27.4
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420073400,
    "o3": 13.1011,
    "temp": 29.8
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420073400,
    "o3": 17.1995,
    "temp": 29.17
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420073400,
    "o3": 19.9477,
    "temp": 29
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 41.4
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420073400,
    "o3": 13.835,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 46.51
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420073400,
    "o3": 23.22,
    "temp": 45.18
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420073400,
    "o3": 15.077,
    "temp": 45.838
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420073400,
    "o3": 22.0042,
    "temp": 46.6
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420073400,
    "o3": 19.6041,
    "temp": 38.32
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420073400,
    "o3": 16.1834,
    "temp": 44.08
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420073400,
    "o3": 18.626,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420073400,
    "o3": 18.0174,
    "temp": 43.4
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 44.89
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420073400,
    "o3": 15.7859,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420073400,
    "o3": 14.4472,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420073400,
    "o3": 10.8087,
    "temp": 45.7
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420073400,
    "o3": 12.4389,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 44.69
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 44.3
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 45.84
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420073400,
    "o3": 11.9652,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420073400,
    "o3": 14.2725,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420073400,
    "o3": 15.1651,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420073400,
    "o3": 11.9928,
    "temp": 45.3
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420073400,
    "o3": 19.1,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420073400,
    "o3": 14.1,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420073400,
    "o3": 17.2,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420073400,
    "o3": 15.9,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420073400,
    "o3": 15.75,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420073400,
    "o3": 16.4,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420073400,
    "o3": 11.8,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420073400,
    "o3": 16.15,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420073400,
    "o3": 15,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420073400,
    "o3": 19.35,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420073400,
    "o3": 15.25,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420073400,
    "o3": 16.7,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420073400,
    "o3": 22.7995,
    "temp": 46
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420073400,
    "o3": 16.5,
    "temp": 43.918
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420073400,
    "o3": 15.1253,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420073400,
    "o3": 19.8135,
    "temp": 44.3
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420073400,
    "o3": 16.5252,
    "temp": 46.6
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420073400,
    "o3": 16.5019,
    "temp": 44.4
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420073400,
    "o3": 15.4998,
    "temp": 45
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420073400,
    "o3": 19.7271,
    "temp": 45.72
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 45.41
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 45.7
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420073400,
    "o3": 20.6166,
    "temp": 38.54
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420073400,
    "o3": 5.06051,
    "temp": 42.6
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420073400,
    "o3": 13.0882,
    "temp": 31.19
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420073400,
    "o3": 16.5533,
    "temp": 34.81
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420073400,
    "o3": 22.3744,
    "temp": 45.41
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420073400,
    "o3": 23.3655,
    "temp": 46.87
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 48.1
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 45.9065
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 46.1
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 46.4
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420073400,
    "o3": 20.8504,
    "temp": 44.45
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420073400,
    "o3": 26.2555,
    "temp": 48.2
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420073400,
    "o3": 19.4165,
    "temp": 46.4
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420073400,
    "o3": 30.1187,
    "temp": 47.3
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420073400,
    "o3": 22.8948,
    "temp": 45.6
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420073400,
    "o3": 9.38513,
    "temp": 31.34
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 34.17
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 31.06
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420073400,
    "o3": 15.8015,
    "temp": 36.8
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420073400,
    "o3": 20.742,
    "temp": 42.094
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420073400,
    "o3": 15.7516,
    "temp": 38.3
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 35.4
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 26.1
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420073400,
    "o3": 20.6137,
    "temp": 42.07
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420073400,
    "o3": 20.189,
    "temp": 42.704
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420073400,
    "o3": 20.1253,
    "temp": 38.6
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420073400,
    "o3": 17.017,
    "temp": 43.9
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420073400,
    "o3": 15.4257,
    "temp": 43.98
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 46.34
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 46
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 45.9
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 46
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 44.4
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 45.5
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420073400,
    "o3": 14.1853,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420073400,
    "o3": 13.3397,
    "temp": 43.6
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420073400,
    "o3": 22.4109,
    "temp": 45.78
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420073400,
    "o3": 21.1835,
    "temp": 44.9
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 26.91
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420073400,
    "o3": 15.9434,
    "temp": 26.9
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 29.06
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 13.55
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420073400,
    "o3": 16.4322,
    "temp": 34
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420073400,
    "o3": 15.9,
    "temp": 43.7
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420073400,
    "o3": 18,
    "temp": 44.3
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420073400,
    "o3": 21.9749,
    "temp": 37.89
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420073400,
    "o3": 16.2544,
    "temp": 30.8
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420073400,
    "o3": 12.9214,
    "temp": 31.3
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 32.44
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 34.8
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 33.85
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 32.05
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 31.56
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420073400,
    "o3": 12.8441,
    "temp": 30.6
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420073400,
    "o3": 16.0462,
    "temp": 32.76
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420073400,
    "o3": 11.1293,
    "temp": 33.6
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 19.77
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420073400,
    "o3": 9.25789,
    "temp": 38.07
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420073400,
    "o3": 10.9801,
    "temp": 36.12
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 39.9
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 40.5
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 38.9
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420073400,
    "o3": 19.3441,
    "temp": 44.49
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420073400,
    "o3": 5.58164,
    "temp": 26.28
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 41.4
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 24.67
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 39.8
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 28.98
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420073400,
    "o3": 0,
    "temp": 31.07
  },
  {
    "siteID": "48_027_1045",
    "epoch": 1420073700,
    "o3": 9.11562,
    "temp": 37.58
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420073700,
    "o3": 10.2963,
    "temp": 35.46
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420073700,
    "o3": 13.0632,
    "temp": 38.48
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420073700,
    "o3": 11.4822,
    "temp": 37.55
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420073700,
    "o3": 10.2426,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420073700,
    "o3": 11.5314,
    "temp": 41.47
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 35.2
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420073700,
    "o3": 10.6251,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 39.8
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 39.62
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420073700,
    "o3": 15.1506,
    "temp": 45.6
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420073700,
    "o3": 16.267,
    "temp": 46.1
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 47.4
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420073700,
    "o3": 14.6913,
    "temp": 44.85
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 45.5
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420073700,
    "o3": 14.5455,
    "temp": 45.3
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420073700,
    "o3": 16.75,
    "temp": 25.2
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420073700,
    "o3": 7.58663,
    "temp": 45
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420073700,
    "o3": 16.0634,
    "temp": 43.91
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 48.9
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 13.7
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 13.9
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 14.1
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 46.4
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420073700,
    "o3": 14.7364,
    "temp": 32.45
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 33.99
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 30.79
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 35.6
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420073700,
    "o3": 11.5263,
    "temp": 35.5
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420073700,
    "o3": 11.056,
    "temp": 33.9
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420073700,
    "o3": 6.30892,
    "temp": 34.5
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 34.85
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 34.88
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 34.97
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420073700,
    "o3": 17.1416,
    "temp": 32
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 32.78
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 31.45
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420073700,
    "o3": 16.9436,
    "temp": 31.4
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 19.6
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 19.3
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420073700,
    "o3": 12.1903,
    "temp": 34
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420073700,
    "o3": 12.1424,
    "temp": 36.4
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420073700,
    "o3": 13.6761,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420073700,
    "o3": 16.2108,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420073700,
    "o3": 16.3151,
    "temp": 30.1
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 29.62
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 27.5
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420073700,
    "o3": 12.2628,
    "temp": 29.8
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420073700,
    "o3": 17.0016,
    "temp": 29.23
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420073700,
    "o3": 19.8489,
    "temp": 28.9
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 41.4
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420073700,
    "o3": 15.316,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 46.5
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420073700,
    "o3": 23.12,
    "temp": 45.16
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420073700,
    "o3": 14.813,
    "temp": 45.83
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420073700,
    "o3": 21.6047,
    "temp": 46.6
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420073700,
    "o3": 20.0942,
    "temp": 38.27
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420073700,
    "o3": 17.0761,
    "temp": 44.09
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420073700,
    "o3": 18.4787,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420073700,
    "o3": 18.2702,
    "temp": 43.4
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 44.89
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420073700,
    "o3": 15.686,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420073700,
    "o3": 15.1586,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420073700,
    "o3": 10.4605,
    "temp": 45.7
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420073700,
    "o3": 12.8946,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 44.62
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 44.3
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 45.77
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420073700,
    "o3": 10.6339,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420073700,
    "o3": 13.7532,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420073700,
    "o3": 15.8136,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420073700,
    "o3": 12.1442,
    "temp": 45.2
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420073700,
    "o3": 18.9,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420073700,
    "o3": 14.05,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420073700,
    "o3": 17.3,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420073700,
    "o3": 16.55,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420073700,
    "o3": 16.15,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420073700,
    "o3": 17.15,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420073700,
    "o3": 11.85,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420073700,
    "o3": 16.15,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420073700,
    "o3": 15.55,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420073700,
    "o3": 19.5,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420073700,
    "o3": 15.85,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420073700,
    "o3": 16.8,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420073700,
    "o3": 22.4955,
    "temp": 46
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420073700,
    "o3": 18.255,
    "temp": 43.765
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420073700,
    "o3": 14.9278,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420073700,
    "o3": 19.1189,
    "temp": 44.2
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420073700,
    "o3": 16.222,
    "temp": 46.6
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420073700,
    "o3": 16.9965,
    "temp": 44.4
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420073700,
    "o3": 15.2104,
    "temp": 45
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420073700,
    "o3": 19.2339,
    "temp": 45.67
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 45.51
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 45.7
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420073700,
    "o3": 21.1154,
    "temp": 38.55
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420073700,
    "o3": 4.96161,
    "temp": 42.5
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420073700,
    "o3": 13.5729,
    "temp": 31.31
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420073700,
    "o3": 16.5533,
    "temp": 34.77
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420073700,
    "o3": 22.3744,
    "temp": 45.36
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420073700,
    "o3": 23.3655,
    "temp": 46.78
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 48
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 45.6853
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 45.9
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 46.3
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420073700,
    "o3": 20.3578,
    "temp": 44.45
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420073700,
    "o3": 21.8131,
    "temp": 48.1
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420073700,
    "o3": 19.2633,
    "temp": 46.2
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420073700,
    "o3": 29.9696,
    "temp": 47
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420073700,
    "o3": 22.5966,
    "temp": 45.5
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420073700,
    "o3": 9.38513,
    "temp": 31.4
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 34.05
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 31.09
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420073700,
    "o3": 15.3626,
    "temp": 36.9
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420073700,
    "o3": 20.773,
    "temp": 42.079
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420073700,
    "o3": 15.3574,
    "temp": 38.3
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 35.5
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 26.12
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420073700,
    "o3": 20.3626,
    "temp": 42.11
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420073700,
    "o3": 20.169,
    "temp": 42.727
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420073700,
    "o3": 19.9333,
    "temp": 38.6
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420073700,
    "o3": 16.1081,
    "temp": 43.9
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420073700,
    "o3": 16.4318,
    "temp": 44.01
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 46.41
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 46
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 45.9
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 45.9
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 44.3
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 45.5
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420073700,
    "o3": 13.4818,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420073700,
    "o3": 12.8382,
    "temp": 43.7
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420073700,
    "o3": 22.4109,
    "temp": 45.68
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420073700,
    "o3": 21.0364,
    "temp": 44.8
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 26.87
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420073700,
    "o3": 16.7211,
    "temp": 26.8
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 29.22
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 13.56
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420073700,
    "o3": 16.4813,
    "temp": 34.2
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420073700,
    "o3": 15.7,
    "temp": 43.6
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420073700,
    "o3": 17.8,
    "temp": 44.2
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420073700,
    "o3": 21.9749,
    "temp": 37.89
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420073700,
    "o3": 16.8449,
    "temp": 30.8
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420073700,
    "o3": 13.4674,
    "temp": 31.3
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 32.48
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 34.64
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 33.82
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 32.04
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 31.62
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420073700,
    "o3": 13.1371,
    "temp": 30.6
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420073700,
    "o3": 15.5448,
    "temp": 32.83
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420073700,
    "o3": 11.8376,
    "temp": 33.7
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 19.72
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420073700,
    "o3": 9.76287,
    "temp": 38.08
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420073700,
    "o3": 10.5019,
    "temp": 36.13
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 40.4
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 38.98
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420073700,
    "o3": 19.0267,
    "temp": 44.46
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420073700,
    "o3": 7.19372,
    "temp": 26.27
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 41.29
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 24.71
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 28.99
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420073700,
    "o3": 0,
    "temp": 31.1
  },
  {
    "siteID": "48_027_1045",
    "epoch": 1420074000,
    "o3": 9.61597,
    "temp": 37.59
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420074000,
    "o3": 10.4492,
    "temp": 35.47
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420074000,
    "o3": 13.8207,
    "temp": 38.35
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420074000,
    "o3": 10.395,
    "temp": 37.56
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420074000,
    "o3": 10.0152,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420074000,
    "o3": 11.5314,
    "temp": 41.54
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 35.2
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420074000,
    "o3": 9.74782,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 39.9
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 39.61
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420074000,
    "o3": 15.1506,
    "temp": 45.5
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420074000,
    "o3": 16.4098,
    "temp": 46.1
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 47.3
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420074000,
    "o3": 13.7009,
    "temp": 44.86
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 45.5
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420074000,
    "o3": 14.2967,
    "temp": 45.3
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420074000,
    "o3": 16.65,
    "temp": 25.3
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420074000,
    "o3": 7.89281,
    "temp": 45
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420074000,
    "o3": 15.4081,
    "temp": 43.85
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 48.8
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 13.8
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 13.9
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 14.2
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 46.2
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420074000,
    "o3": 15.2222,
    "temp": 32.44
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 33.95
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 30.95
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 35.6
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420074000,
    "o3": 11.2234,
    "temp": 35.7
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420074000,
    "o3": 11.3069,
    "temp": 34
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420074000,
    "o3": 5.73827,
    "temp": 34.6
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 34.6
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 35.01
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 34.94
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420074000,
    "o3": 16.9436,
    "temp": 32
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 32.7
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 31.6
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420074000,
    "o3": 17.5759,
    "temp": 31.4
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 19.6
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 19.5
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420074000,
    "o3": 12.8984,
    "temp": 34
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420074000,
    "o3": 11.5033,
    "temp": 36.4
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420074000,
    "o3": 13.1217,
    "temp": 30
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420074000,
    "o3": 16.5052,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420074000,
    "o3": 15.1605,
    "temp": 30
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 29.41
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 27.7
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420074000,
    "o3": 13.0518,
    "temp": 29.8
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420074000,
    "o3": 16.6058,
    "temp": 29.31
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420074000,
    "o3": 19.5524,
    "temp": 28.9
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 41.4
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420074000,
    "o3": 17.176,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 46.41
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420074000,
    "o3": 22.39,
    "temp": 45.15
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420074000,
    "o3": 14.573,
    "temp": 45.84
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420074000,
    "o3": 21.355,
    "temp": 46.6
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420074000,
    "o3": 19.6041,
    "temp": 38.26
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420074000,
    "o3": 16.7785,
    "temp": 44.06
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420074000,
    "o3": 18.0368,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420074000,
    "o3": 18.3208,
    "temp": 43.3
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 44.89
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420074000,
    "o3": 16.3354,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420074000,
    "o3": 14.9045,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420074000,
    "o3": 10.56,
    "temp": 45.7
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420074000,
    "o3": 13.9073,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 44.55
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 44.2
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 45.73
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420074000,
    "o3": 12.8685,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420074000,
    "o3": 15.6887,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420074000,
    "o3": 16.4621,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420074000,
    "o3": 12.6488,
    "temp": 45.1
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420074000,
    "o3": 18.8,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420074000,
    "o3": 15.2,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420074000,
    "o3": 17.2,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420074000,
    "o3": 15.95,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420074000,
    "o3": 17.4,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420074000,
    "o3": 16.7,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420074000,
    "o3": 12.8,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420074000,
    "o3": 16.25,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420074000,
    "o3": 16,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420074000,
    "o3": 19.4,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420074000,
    "o3": 15.35,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420074000,
    "o3": 16.65,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420074000,
    "o3": 21.9889,
    "temp": 46
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420074000,
    "o3": 17.092,
    "temp": 43.701
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420074000,
    "o3": 17.0509,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420074000,
    "o3": 19.0196,
    "temp": 44.2
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420074000,
    "o3": 16.2725,
    "temp": 46.5
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420074000,
    "o3": 17.2932,
    "temp": 44.3
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420074000,
    "o3": 15.6928,
    "temp": 45
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420074000,
    "o3": 20.2202,
    "temp": 45.65
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 45.46
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420074000,
    "o3": 20.6166,
    "temp": 38.58
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420074000,
    "o3": 5.55502,
    "temp": 42.6
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420074000,
    "o3": 12.6034,
    "temp": 31.41
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420074000,
    "o3": 16.5533,
    "temp": 34.85
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420074000,
    "o3": 21.8844,
    "temp": 45.32
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420074000,
    "o3": 22.8719,
    "temp": 46.56
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 47.9
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 45.6513
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 45.9
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 46.1
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420074000,
    "o3": 20.3578,
    "temp": 44.41
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420074000,
    "o3": 25.5068,
    "temp": 47.9
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420074000,
    "o3": 20.5407,
    "temp": 46.2
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420074000,
    "o3": 29.9696,
    "temp": 46.9
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420074000,
    "o3": 21.9505,
    "temp": 45.5
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420074000,
    "o3": 9.38513,
    "temp": 31.41
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 33.98
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 30.99
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420074000,
    "o3": 15.6552,
    "temp": 36.9
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420074000,
    "o3": 20.607,
    "temp": 42.116
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420074000,
    "o3": 15.8995,
    "temp": 38.3
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 35.3
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 26.07
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420074000,
    "o3": 20.2118,
    "temp": 42.07
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420074000,
    "o3": 19.953,
    "temp": 42.74
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420074000,
    "o3": 19.7414,
    "temp": 38.6
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420074000,
    "o3": 16.916,
    "temp": 43.9
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420074000,
    "o3": 16.4318,
    "temp": 44
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 47.01
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 46.1
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 46
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 46
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 44.3
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 45.5
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420074000,
    "o3": 13.8838,
    "temp": 45.5
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420074000,
    "o3": 12.1361,
    "temp": 43.6
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420074000,
    "o3": 21.9165,
    "temp": 45.6
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420074000,
    "o3": 21.0364,
    "temp": 44.8
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 26.85
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420074000,
    "o3": 16.6239,
    "temp": 26.9
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 29.08
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 13.73
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420074000,
    "o3": 16.039,
    "temp": 34.2
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420074000,
    "o3": 15.8,
    "temp": 43.6
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420074000,
    "o3": 17.8,
    "temp": 44
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420074000,
    "o3": 21.9749,
    "temp": 37.93
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420074000,
    "o3": 17.091,
    "temp": 30.8
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420074000,
    "o3": 12.7228,
    "temp": 31.3
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 32.38
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 34.53
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 34.01
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 32.12
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 31.65
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420074000,
    "o3": 12.6976,
    "temp": 30.6
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420074000,
    "o3": 16.0462,
    "temp": 32.82
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420074000,
    "o3": 11.3317,
    "temp": 33.6
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 19.74
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420074000,
    "o3": 9.76287,
    "temp": 38.03
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420074000,
    "o3": 10.2894,
    "temp": 36.15
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 40.5
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 38.86
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420074000,
    "o3": 19.6086,
    "temp": 44.45
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420074000,
    "o3": 7.40173,
    "temp": 26.19
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 41
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 24.69
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 40.1
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 29.12
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420074000,
    "o3": 0,
    "temp": 31.23
  },
  {
    "siteID": "48_027_1045",
    "epoch": 1420074300,
    "o3": 10.1163,
    "temp": 37.62
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420074300,
    "o3": 10.4492,
    "temp": 35.53
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420074300,
    "o3": 13.8207,
    "temp": 38.35
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420074300,
    "o3": 11.8776,
    "temp": 37.55
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420074300,
    "o3": 9.07594,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420074300,
    "o3": 11.0442,
    "temp": 41.56
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 35.2
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420074300,
    "o3": 11.5024,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 39.9
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 39.79
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420074300,
    "o3": 15.3924,
    "temp": 45.4
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420074300,
    "o3": 16.029,
    "temp": 46.2
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 47.4
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420074300,
    "o3": 13.7009,
    "temp": 44.89
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 45.5
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420074300,
    "o3": 14.7445,
    "temp": 45.4
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420074300,
    "o3": 16.7,
    "temp": 25.3
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420074300,
    "o3": 2.84073,
    "temp": 44.9
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420074300,
    "o3": 15.2569,
    "temp": 43.92
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 48.8
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 13.8
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 14
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 14.3
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 46.1
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420074300,
    "o3": 14.7364,
    "temp": 32.58
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 34.01
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 30.73
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 35.5
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420074300,
    "o3": 10.2643,
    "temp": 35.7
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420074300,
    "o3": 10.5542,
    "temp": 34
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420074300,
    "o3": 6.45159,
    "temp": 34.5
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 34.3
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 34.95
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 35.07
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420074300,
    "o3": 17.3395,
    "temp": 32
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 32.75
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 31.76
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420074300,
    "o3": 16.7003,
    "temp": 31.5
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 19.5
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 19.4
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420074300,
    "o3": 13.3031,
    "temp": 33.9
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420074300,
    "o3": 11.8685,
    "temp": 36.4
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420074300,
    "o3": 12.8697,
    "temp": 30.2
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420074300,
    "o3": 15.7691,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420074300,
    "o3": 16.3151,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 29.4
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 27.4
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420074300,
    "o3": 12.7066,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420074300,
    "o3": 16.8037,
    "temp": 29.39
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420074300,
    "o3": 19.7994,
    "temp": 28.8
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 41.4
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420074300,
    "o3": 15.805,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 46.37
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420074300,
    "o3": 23.14,
    "temp": 45.09
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420074300,
    "o3": 14.193,
    "temp": 45.858
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420074300,
    "o3": 20.9056,
    "temp": 46.7
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420074300,
    "o3": 19.6041,
    "temp": 38.23
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420074300,
    "o3": 16.0842,
    "temp": 44.03
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420074300,
    "o3": 18.7243,
    "temp": 44.4
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420074300,
    "o3": 18.6747,
    "temp": 43.3
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 44.81
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420074300,
    "o3": 15.736,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420074300,
    "o3": 14.244,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420074300,
    "o3": 11.8033,
    "temp": 45.8
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420074300,
    "o3": 13.0972,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 44.46
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 44.2
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 45.69
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420074300,
    "o3": 11.4422,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420074300,
    "o3": 15.8776,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420074300,
    "o3": 15.1152,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420074300,
    "o3": 12.3461,
    "temp": 45.1
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420074300,
    "o3": 19.05,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420074300,
    "o3": 15.2,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420074300,
    "o3": 17,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420074300,
    "o3": 15.2,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420074300,
    "o3": 16,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420074300,
    "o3": 18.05,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420074300,
    "o3": 14.3,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420074300,
    "o3": 16.15,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420074300,
    "o3": 15.5,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420074300,
    "o3": 19.2,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420074300,
    "o3": 15.4,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420074300,
    "o3": 16.7,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420074300,
    "o3": 21.8875,
    "temp": 46
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420074300,
    "o3": 16.834,
    "temp": 43.697
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420074300,
    "o3": 16.4584,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420074300,
    "o3": 18.8212,
    "temp": 44.2
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420074300,
    "o3": 14.6554,
    "temp": 46.5
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420074300,
    "o3": 15.9579,
    "temp": 44.2
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420074300,
    "o3": 15.2586,
    "temp": 45
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420074300,
    "o3": 18.2475,
    "temp": 45.65
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 45.18
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 45.4
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420074300,
    "o3": 20.6166,
    "temp": 38.56
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420074300,
    "o3": 4.96161,
    "temp": 42.6
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420074300,
    "o3": 12.1187,
    "temp": 31.27
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420074300,
    "o3": 17.0401,
    "temp": 34.73
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420074300,
    "o3": 22.8643,
    "temp": 45.06
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420074300,
    "o3": 22.3782,
    "temp": 46.43
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 47.6
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 45.6421
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 45.9
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 45.8
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420074300,
    "o3": 19.3728,
    "temp": 44.4
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420074300,
    "o3": 25.0576,
    "temp": 47.9
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420074300,
    "o3": 19.3144,
    "temp": 46.2
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420074300,
    "o3": 30.4664,
    "temp": 46.8
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420074300,
    "o3": 22.2487,
    "temp": 45.4
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420074300,
    "o3": 8.88235,
    "temp": 31.49
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 33.9
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 31.04
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420074300,
    "o3": 15.5577,
    "temp": 36.9
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 44.4
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420074300,
    "o3": 20.477,
    "temp": 42.119
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420074300,
    "o3": 15.8009,
    "temp": 38.2
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 35.4
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 26.06
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420074300,
    "o3": 19.9104,
    "temp": 42.04
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420074300,
    "o3": 19.77,
    "temp": 42.738
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420074300,
    "o3": 19.0695,
    "temp": 38.5
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420074300,
    "o3": 15.6031,
    "temp": 43.9
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420074300,
    "o3": 16.4318,
    "temp": 43.97
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 46.25
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 45.9
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 46.1
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 45.8
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 44.3
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 45.5
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420074300,
    "o3": 14.0848,
    "temp": 45.5
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420074300,
    "o3": 11.7349,
    "temp": 43.6
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420074300,
    "o3": 22.4109,
    "temp": 45.5
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420074300,
    "o3": 21.4777,
    "temp": 44.8
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 26.97
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420074300,
    "o3": 16.0406,
    "temp": 27
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 29.18
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 13.77
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420074300,
    "o3": 16.1373,
    "temp": 34.1
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420074300,
    "o3": 15.8,
    "temp": 43.6
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420074300,
    "o3": 17.5,
    "temp": 44
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420074300,
    "o3": 22.494,
    "temp": 37.86
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420074300,
    "o3": 16.4021,
    "temp": 30.8
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420074300,
    "o3": 11.482,
    "temp": 31.3
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 32.28
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 34.69
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 34.13
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 32.11
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 31.44
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420074300,
    "o3": 12.3069,
    "temp": 30.8
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420074300,
    "o3": 16.0462,
    "temp": 32.83
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420074300,
    "o3": 11.2811,
    "temp": 33.8
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 19.93
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420074300,
    "o3": 10.2678,
    "temp": 37.98
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420074300,
    "o3": 10.1832,
    "temp": 36.11
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 39.9
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 40.4
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 38.75
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420074300,
    "o3": 18.3919,
    "temp": 44.57
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420074300,
    "o3": 7.60975,
    "temp": 25.8
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 41.2
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 24.83
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 40.2
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 29.08
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420074300,
    "o3": 0,
    "temp": 31.25
  },
  {
    "siteID": "48_027_1045",
    "epoch": 1420074600,
    "o3": 10.1163,
    "temp": 37.66
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420074600,
    "o3": 10.0414,
    "temp": 35.57
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420074600,
    "o3": 13.7197,
    "temp": 38.36
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420074600,
    "o3": 11.6799,
    "temp": 37.49
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420074600,
    "o3": 9.04628,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420074600,
    "o3": 11.5314,
    "temp": 41.41
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 35.2
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420074600,
    "o3": 11.8436,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 39.69
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420074600,
    "o3": 15.2957,
    "temp": 45.4
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420074600,
    "o3": 16.029,
    "temp": 46.1
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 47.4
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420074600,
    "o3": 13.2056,
    "temp": 44.97
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 45.8
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420074600,
    "o3": 14.5455,
    "temp": 45.4
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420074600,
    "o3": 16.6,
    "temp": 25.3
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420074600,
    "o3": 2.33042,
    "temp": 44.9
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420074600,
    "o3": 15.1057,
    "temp": 43.97
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 48.6
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 13.8
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 14
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 14.3
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 46
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420074600,
    "o3": 15.2222,
    "temp": 32.5
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 33.98
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 30.89
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 35.4
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420074600,
    "o3": 11.2739,
    "temp": 35.6
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420074600,
    "o3": 10.7549,
    "temp": 34
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420074600,
    "o3": 7.21246,
    "temp": 34.5
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 34.35
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 34.87
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 35.08
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420074600,
    "o3": 17.2405,
    "temp": 32.1
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 32.78
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 31.77
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420074600,
    "o3": 17.284,
    "temp": 31.5
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 19.7
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 19.7
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420074600,
    "o3": 13.3536,
    "temp": 33.9
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420074600,
    "o3": 11.5946,
    "temp": 36.3
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420074600,
    "o3": 11.2063,
    "temp": 30.2
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420074600,
    "o3": 16.9469,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420074600,
    "o3": 15.0601,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 29.38
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 27.5
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420074600,
    "o3": 12.7066,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420074600,
    "o3": 16.1606,
    "temp": 29.37
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420074600,
    "o3": 19.3547,
    "temp": 28.9
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 41.3
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420074600,
    "o3": 15.063,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 46.43
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420074600,
    "o3": 22.59,
    "temp": 45.01
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420074600,
    "o3": 15.106,
    "temp": 45.903
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420074600,
    "o3": 20.2565,
    "temp": 46.5
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420074600,
    "o3": 19.6041,
    "temp": 38.24
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420074600,
    "o3": 16.6793,
    "temp": 44.02
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420074600,
    "o3": 17.4967,
    "temp": 44.4
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420074600,
    "o3": 20.2928,
    "temp": 43.3
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 44.72
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420074600,
    "o3": 16.2355,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420074600,
    "o3": 14.8029,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420074600,
    "o3": 13.4942,
    "temp": 45.8
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420074600,
    "o3": 13.1984,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 44.36
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 44.2
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 45.59
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420074600,
    "o3": 11.775,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420074600,
    "o3": 16.5857,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420074600,
    "o3": 16.3623,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420074600,
    "o3": 14.1626,
    "temp": 45.1
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420074600,
    "o3": 19.05,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420074600,
    "o3": 15.3,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420074600,
    "o3": 16.75,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420074600,
    "o3": 14.8,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420074600,
    "o3": 9.1,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420074600,
    "o3": 17.25,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420074600,
    "o3": 14.4,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420074600,
    "o3": 16.25,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420074600,
    "o3": 16,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420074600,
    "o3": 19.4,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420074600,
    "o3": 16.45,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420074600,
    "o3": 16.45,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420074600,
    "o3": 21.8875,
    "temp": 45.9
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420074600,
    "o3": 17.131,
    "temp": 43.648
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420074600,
    "o3": 18.1665,
    "temp": 44.8
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420074600,
    "o3": 16.5078,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420074600,
    "o3": 18.7716,
    "temp": 44.1
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420074600,
    "o3": 11.32,
    "temp": 46.6
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420074600,
    "o3": 17.9856,
    "temp": 44.2
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420074600,
    "o3": 16.1751,
    "temp": 45
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420074600,
    "o3": 17.2612,
    "temp": 45.44
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 45.32
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 45.4
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420074600,
    "o3": 21.1154,
    "temp": 38.54
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420074600,
    "o3": 4.17039,
    "temp": 42.6
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420074600,
    "o3": 13.0882,
    "temp": 31.14
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420074600,
    "o3": 16.5533,
    "temp": 34.67
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420074600,
    "o3": 22.3744,
    "temp": 44.95
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420074600,
    "o3": 22.3782,
    "temp": 46.32
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 47.4
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 45.5766
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 45.7
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 45.8
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420074600,
    "o3": 19.8653,
    "temp": 44.45
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420074600,
    "o3": 21.3638,
    "temp": 47.8
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420074600,
    "o3": 20.0808,
    "temp": 46
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420074600,
    "o3": 29.9696,
    "temp": 46.7
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420074600,
    "o3": 22.696,
    "temp": 45.3
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420074600,
    "o3": 9.38513,
    "temp": 31.37
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 33.93
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 30.96
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420074600,
    "o3": 16.2405,
    "temp": 36.8
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 44.4
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420074600,
    "o3": 20.645,
    "temp": 42.11
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420074600,
    "o3": 15.9487,
    "temp": 38.2
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 35.3
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 26.25
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420074600,
    "o3": 19.7597,
    "temp": 42.03
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420074600,
    "o3": 19.53,
    "temp": 42.726
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420074600,
    "o3": 19.0215,
    "temp": 38.5
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420074600,
    "o3": 16.815,
    "temp": 43.9
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420074600,
    "o3": 16.4318,
    "temp": 43.96
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 45.53
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 46
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 45.8
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 44.4
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420074600,
    "o3": 14.7883,
    "temp": 45.5
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420074600,
    "o3": 11.7349,
    "temp": 43.6
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420074600,
    "o3": 22.4109,
    "temp": 45.38
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420074600,
    "o3": 21.0364,
    "temp": 44.7
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 27.03
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420074600,
    "o3": 16.3809,
    "temp": 26.9
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 29.13
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 13.86
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420074600,
    "o3": 17.022,
    "temp": 34.1
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420074600,
    "o3": 15.9,
    "temp": 43.6
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420074600,
    "o3": 17.4,
    "temp": 44
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420074600,
    "o3": 22.494,
    "temp": 37.89
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420074600,
    "o3": 16.6973,
    "temp": 30.8
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420074600,
    "o3": 12.4747,
    "temp": 31.3
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 32.32
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 34.66
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 34.01
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 32.19
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 31.46
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420074600,
    "o3": 12.7953,
    "temp": 30.8
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420074600,
    "o3": 16.0462,
    "temp": 32.94
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420074600,
    "o3": 10.5223,
    "temp": 33.8
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 19.61
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420074600,
    "o3": 9.76287,
    "temp": 37.9
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420074600,
    "o3": 9.65187,
    "temp": 36.04
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 39.9
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 40.4
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 38.77
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420074600,
    "o3": 19.6086,
    "temp": 44.46
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420074600,
    "o3": 7.76575,
    "temp": 25.04
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 41.13
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 25.01
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 40.3
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 29.16
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420074600,
    "o3": 0,
    "temp": 31.14
  },
  {
    "siteID": "48_027_1045",
    "epoch": 1420074900,
    "o3": 10.6167,
    "temp": 37.71
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420074900,
    "o3": 10.5002,
    "temp": 35.54
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420074900,
    "o3": 13.8207,
    "temp": 38.42
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420074900,
    "o3": 10.6915,
    "temp": 37.48
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420074900,
    "o3": 9.63947,
    "temp": 40
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420074900,
    "o3": 12.0187,
    "temp": 41.69
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 35.2
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420074900,
    "o3": 11.2587,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 39.9
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 39.69
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420074900,
    "o3": 15.1023,
    "temp": 45.4
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420074900,
    "o3": 15.8861,
    "temp": 46.2
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 47.4
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420074900,
    "o3": 14.6913,
    "temp": 45
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 45.8
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420074900,
    "o3": 12.9036,
    "temp": 45.4
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420074900,
    "o3": 16.45,
    "temp": 25.4
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420074900,
    "o3": 1.92217,
    "temp": 45
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420074900,
    "o3": 15.1057,
    "temp": 43.94
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 49
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 13.9
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 14
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 14.2
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 45.9
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420074900,
    "o3": 14.2506,
    "temp": 32.53
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 33.78
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 30.89
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 35.4
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420074900,
    "o3": 10.8195,
    "temp": 35.6
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420074900,
    "o3": 11.1062,
    "temp": 33.9
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420074900,
    "o3": 7.16491,
    "temp": 34.4
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 34.52
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 34.74
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 35.1
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420074900,
    "o3": 16.6961,
    "temp": 32.1
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 32.81
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 31.81
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420074900,
    "o3": 17.1868,
    "temp": 31.5
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 19.6
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 19.4
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420074900,
    "o3": 12.8478,
    "temp": 33.9
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420074900,
    "o3": 11.3207,
    "temp": 36.2
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420074900,
    "o3": 12.9705,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420074900,
    "o3": 16.4071,
    "temp": 30
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420074900,
    "o3": 16.4657,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 29.21
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 27.5
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420074900,
    "o3": 13.1998,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420074900,
    "o3": 15.8638,
    "temp": 28.71
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420074900,
    "o3": 19.0088,
    "temp": 28.9
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 41.3
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420074900,
    "o3": 15.203,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 46.47
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420074900,
    "o3": 22.09,
    "temp": 45.04
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420074900,
    "o3": 15.818,
    "temp": 45.93
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420074900,
    "o3": 21.2052,
    "temp": 46.5
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420074900,
    "o3": 19.6041,
    "temp": 38.25
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420074900,
    "o3": 16.6297,
    "temp": 43.97
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420074900,
    "o3": 18.5278,
    "temp": 44.3
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420074900,
    "o3": 20.8489,
    "temp": 43.3
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 44.64
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420074900,
    "o3": 15.8359,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420074900,
    "o3": 15.9715,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420074900,
    "o3": 13.6932,
    "temp": 45.8
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420074900,
    "o3": 13.6035,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 44.4
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 44.31
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 44.3
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 45.44
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420074900,
    "o3": 11.6799,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420074900,
    "o3": 16.1136,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420074900,
    "o3": 16.063,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420074900,
    "o3": 14.7682,
    "temp": 45
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420074900,
    "o3": 18.8,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420074900,
    "o3": 14.75,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420074900,
    "o3": 16.6,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420074900,
    "o3": 15.75,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420074900,
    "o3": 19,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420074900,
    "o3": 17.05,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420074900,
    "o3": 13.85,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420074900,
    "o3": 16.15,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420074900,
    "o3": 15,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420074900,
    "o3": 19.1,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420074900,
    "o3": 15.3,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420074900,
    "o3": 16.15,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420074900,
    "o3": 22.1409,
    "temp": 45.9
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420074900,
    "o3": 17.784,
    "temp": 43.656
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420074900,
    "o3": 17.862,
    "temp": 44.8
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420074900,
    "o3": 15.5203,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420074900,
    "o3": 18.97,
    "temp": 44.1
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420074900,
    "o3": 16.0704,
    "temp": 46.4
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420074900,
    "o3": 18.2824,
    "temp": 44.2
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420074900,
    "o3": 16.9469,
    "temp": 45
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420074900,
    "o3": 20.2202,
    "temp": 45.28
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 45.36
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 45.4
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420074900,
    "o3": 21.1154,
    "temp": 38.52
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420074900,
    "o3": 5.25831,
    "temp": 42.4
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420074900,
    "o3": 12.6034,
    "temp": 31.3
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420074900,
    "o3": 17.0401,
    "temp": 34.69
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420074900,
    "o3": 23.3543,
    "temp": 44.75
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420074900,
    "o3": 21.8846,
    "temp": 46.18
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 47
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 45.4858
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 45.8
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420074900,
    "o3": 20.3578,
    "temp": 44.5
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420074900,
    "o3": 24.3588,
    "temp": 47.9
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420074900,
    "o3": 20.694,
    "temp": 45.9
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420074900,
    "o3": 30.069,
    "temp": 46.6
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420074900,
    "o3": 22.3481,
    "temp": 45.3
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420074900,
    "o3": 9.8879,
    "temp": 31.32
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 33.88
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 30.85
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420074900,
    "o3": 15.3138,
    "temp": 36.9
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 44.2
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420074900,
    "o3": 20.874,
    "temp": 42.061
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420074900,
    "o3": 15.6531,
    "temp": 38.1
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 35.4
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 26.23
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420074900,
    "o3": 19.8099,
    "temp": 42.02
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420074900,
    "o3": 19.39,
    "temp": 42.697
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420074900,
    "o3": 18.7335,
    "temp": 38.4
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420074900,
    "o3": 16.9665,
    "temp": 43.8
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420074900,
    "o3": 16.9348,
    "temp": 43.96
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 46.47
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 45.5
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 46
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 44.4
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420074900,
    "o3": 14.2858,
    "temp": 45.5
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420074900,
    "o3": 11.7349,
    "temp": 43.6
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420074900,
    "o3": 21.9165,
    "temp": 45.29
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420074900,
    "o3": 20.9874,
    "temp": 44.6
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 27.04
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420074900,
    "o3": 16.7697,
    "temp": 26.8
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 29.08
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 14
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420074900,
    "o3": 16.7762,
    "temp": 34.2
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420074900,
    "o3": 16.4,
    "temp": 43.6
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420074900,
    "o3": 16.9,
    "temp": 44
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420074900,
    "o3": 21.9749,
    "temp": 37.94
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420074900,
    "o3": 17.1402,
    "temp": 30.9
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420074900,
    "o3": 13.3681,
    "temp": 31.4
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 32.35
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 34.5
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 34
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 32.26
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 31.5
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420074900,
    "o3": 13.186,
    "temp": 30.8
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420074900,
    "o3": 16.0462,
    "temp": 32.94
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420074900,
    "o3": 10.2693,
    "temp": 33.7
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 19.88
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420074900,
    "o3": 9.76287,
    "temp": 38
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420074900,
    "o3": 9.86439,
    "temp": 35.96
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 39.9
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 40.6
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 38.74
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420074900,
    "o3": 19.7144,
    "temp": 44.43
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420074900,
    "o3": 7.97376,
    "temp": 25.76
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 41
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 24.9
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 40.4
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 29.22
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420074900,
    "o3": 0,
    "temp": 31.2
  },
  {
    "siteID": "48_027_1045",
    "epoch": 1420075200,
    "o3": 10.6167,
    "temp": 37.74
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420075200,
    "o3": 10.4492,
    "temp": 35.59
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420075200,
    "o3": 13.1137,
    "temp": 38.45
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420075200,
    "o3": 11.9764,
    "temp": 37.49
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420075200,
    "o3": 9.41208,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420075200,
    "o3": 11.5314,
    "temp": 41.85
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 35.1
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420075200,
    "o3": 10.8688,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 39.55
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420075200,
    "o3": 15.1023,
    "temp": 45.5
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420075200,
    "o3": 15.8385,
    "temp": 46.3
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 47.4
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420075200,
    "o3": 15.1865,
    "temp": 45
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 45.8
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420075200,
    "o3": 14.048,
    "temp": 45.3
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420075200,
    "o3": 16.5,
    "temp": 25.3
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420075200,
    "o3": 1.9732,
    "temp": 45
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420075200,
    "o3": 14.8032,
    "temp": 43.82
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 48.5
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 14
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 14.1
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 14.3
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 45.9
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420075200,
    "o3": 14.7364,
    "temp": 32.33
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 33.79
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 30.95
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 35.4
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420075200,
    "o3": 11.2739,
    "temp": 35.6
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420075200,
    "o3": 10.6044,
    "temp": 33.9
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420075200,
    "o3": 6.73691,
    "temp": 34.4
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 34.73
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 34.82
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 35.08
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420075200,
    "o3": 17.686,
    "temp": 32
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 32.94
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 31.82
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420075200,
    "o3": 17.284,
    "temp": 31.5
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 19.5
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 19.5
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420075200,
    "o3": 12.6455,
    "temp": 33.9
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420075200,
    "o3": 11.2751,
    "temp": 36.2
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420075200,
    "o3": 13.7769,
    "temp": 30
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420075200,
    "o3": 17.0941,
    "temp": 30.1
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420075200,
    "o3": 17.1685,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 29.46
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 27.6
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420075200,
    "o3": 13.9888,
    "temp": 29.7
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420075200,
    "o3": 16.9027,
    "temp": 28.55
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420075200,
    "o3": 18.7123,
    "temp": 28.8
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 41.3
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420075200,
    "o3": 15.149,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 46.5
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420075200,
    "o3": 22.07,
    "temp": 44.98
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420075200,
    "o3": 15.695,
    "temp": 45.909
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420075200,
    "o3": 20.1067,
    "temp": 46.4
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420075200,
    "o3": 19.6041,
    "temp": 38.25
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420075200,
    "o3": 16.8281,
    "temp": 44
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420075200,
    "o3": 17.9386,
    "temp": 44.3
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420075200,
    "o3": 19.3826,
    "temp": 43.3
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 44.69
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420075200,
    "o3": 16.0357,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420075200,
    "o3": 15.9715,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420075200,
    "o3": 12.8974,
    "temp": 45.8
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420075200,
    "o3": 12.5402,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 44.4
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 44.25
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 44.3
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 45.34
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420075200,
    "o3": 10.9667,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420075200,
    "o3": 16.5385,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420075200,
    "o3": 14.4667,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420075200,
    "o3": 14.0113,
    "temp": 45.1
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420075200,
    "o3": 18.55,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420075200,
    "o3": 14.6,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420075200,
    "o3": 16.55,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420075200,
    "o3": 16.05,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420075200,
    "o3": 21.7,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420075200,
    "o3": 17.35,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420075200,
    "o3": 13.65,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420075200,
    "o3": 16.2,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420075200,
    "o3": 15.5,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420075200,
    "o3": 18.95,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420075200,
    "o3": 15.25,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420075200,
    "o3": 15.95,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420075200,
    "o3": 21.8875,
    "temp": 45.8
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420075200,
    "o3": 17.8,
    "temp": 43.615
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420075200,
    "o3": 18.3695,
    "temp": 44.8
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420075200,
    "o3": 15.1747,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420075200,
    "o3": 19.0693,
    "temp": 44
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420075200,
    "o3": 17.2327,
    "temp": 46.4
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420075200,
    "o3": 18.9253,
    "temp": 44.1
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420075200,
    "o3": 16.561,
    "temp": 45
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420075200,
    "o3": 22.193,
    "temp": 45.16
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 45.29
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420075200,
    "o3": 21.1154,
    "temp": 38.53
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420075200,
    "o3": 4.566,
    "temp": 42.4
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420075200,
    "o3": 12.6034,
    "temp": 31.18
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420075200,
    "o3": 17.0401,
    "temp": 34.54
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420075200,
    "o3": 22.3744,
    "temp": 44.65
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420075200,
    "o3": 22.3782,
    "temp": 46.18
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 47.4
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 45.449
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 45.5
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 45.8
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420075200,
    "o3": 19.8653,
    "temp": 44.55
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420075200,
    "o3": 24.3588,
    "temp": 47.8
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420075200,
    "o3": 20.183,
    "temp": 45.8
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420075200,
    "o3": 29.6716,
    "temp": 46.4
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420075200,
    "o3": 22.199,
    "temp": 45.2
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420075200,
    "o3": 9.8879,
    "temp": 31.38
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 33.91
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 30.91
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420075200,
    "o3": 14.9237,
    "temp": 36.9
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 44.3
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420075200,
    "o3": 20.897,
    "temp": 42.032
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420075200,
    "o3": 15.2589,
    "temp": 38.1
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 35.5
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 26.31
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420075200,
    "o3": 19.6592,
    "temp": 41.98
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420075200,
    "o3": 19.32,
    "temp": 42.73
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420075200,
    "o3": 18.6375,
    "temp": 38.4
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420075200,
    "o3": 17.421,
    "temp": 43.7
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420075200,
    "o3": 16.4318,
    "temp": 43.94
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 46.52
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 45.9
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420075200,
    "o3": 14.6878,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420075200,
    "o3": 10.8323,
    "temp": 43.6
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420075200,
    "o3": 20.9278,
    "temp": 45.23
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420075200,
    "o3": 20.7422,
    "temp": 44.5
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 27.17
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420075200,
    "o3": 16.6725,
    "temp": 27
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 29.21
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 13.94
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420075200,
    "o3": 16.4813,
    "temp": 34.2
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420075200,
    "o3": 15.8,
    "temp": 43.6
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420075200,
    "o3": 17.3,
    "temp": 43.9
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420075200,
    "o3": 21.9749,
    "temp": 37.95
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420075200,
    "o3": 16.6973,
    "temp": 30.9
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420075200,
    "o3": 12.6236,
    "temp": 31.4
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 32.38
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 34.56
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 34
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 32.22
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 31.5
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420075200,
    "o3": 12.9418,
    "temp": 30.8
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420075200,
    "o3": 15.5448,
    "temp": 33.02
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420075200,
    "o3": 10.2187,
    "temp": 33.8
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 20.01
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420075200,
    "o3": 9.25789,
    "temp": 37.97
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420075200,
    "o3": 9.54561,
    "temp": 35.88
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 39.9
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 40.5
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 38.8
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420075200,
    "o3": 20.5609,
    "temp": 44.45
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420075200,
    "o3": 8.38979,
    "temp": 26.24
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 40.8
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 24.84
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 40.4
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 29.18
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420075200,
    "o3": 0,
    "temp": 31.36
  },
  {
    "siteID": "48_027_1045",
    "epoch": 1420075500,
    "o3": 11.117,
    "temp": 37.75
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420075500,
    "o3": 10.5002,
    "temp": 35.56
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420075500,
    "o3": 14.3762,
    "temp": 38.38
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420075500,
    "o3": 12.6189,
    "temp": 37.47
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420075500,
    "o3": 9.23412,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420075500,
    "o3": 11.5314,
    "temp": 41.73
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 35.1
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420075500,
    "o3": 10.284,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 39.72
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420075500,
    "o3": 15.344,
    "temp": 45.3
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420075500,
    "o3": 15.6005,
    "temp": 46.2
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 47.4
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420075500,
    "o3": 15.6817,
    "temp": 45
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420075500,
    "o3": 12.7045,
    "temp": 45.3
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420075500,
    "o3": 17.05,
    "temp": 25.2
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420075500,
    "o3": 1.76908,
    "temp": 45.1
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420075500,
    "o3": 15.2065,
    "temp": 43.74
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 48.5
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 13.8
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 14.1
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 14.2
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 45.8
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420075500,
    "o3": 14.7364,
    "temp": 32.25
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 33.79
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 30.8
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 35.4
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420075500,
    "o3": 11.6272,
    "temp": 35.7
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420075500,
    "o3": 10.8553,
    "temp": 33.9
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420075500,
    "o3": 7.54534,
    "temp": 34.3
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 34.45
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 34.79
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 35.13
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420075500,
    "o3": 17.389,
    "temp": 32.1
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 33.01
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 31.81
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420075500,
    "o3": 17.0408,
    "temp": 31.6
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 19.6
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 19.6
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420075500,
    "o3": 12.6455,
    "temp": 33.9
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420075500,
    "o3": 11.5946,
    "temp": 36.1
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420075500,
    "o3": 13.3233,
    "temp": 30
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420075500,
    "o3": 17.6339,
    "temp": 30.2
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420075500,
    "o3": 16.3151,
    "temp": 29.8
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 29.4
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 27.5
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420075500,
    "o3": 13.397,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420075500,
    "o3": 17.7437,
    "temp": 28.34
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420075500,
    "o3": 18.8605,
    "temp": 28.7
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 41.3
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420075500,
    "o3": 14.674,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 46.44
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420075500,
    "o3": 21.77,
    "temp": 44.93
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420075500,
    "o3": 14.894,
    "temp": 45.923
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420075500,
    "o3": 20.0568,
    "temp": 46.4
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420075500,
    "o3": 19.114,
    "temp": 38.25
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420075500,
    "o3": 16.9273,
    "temp": 43.99
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420075500,
    "o3": 17.4967,
    "temp": 44.3
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420075500,
    "o3": 19.686,
    "temp": 43.3
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420075500,
    "o3": 13.6878,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420075500,
    "o3": 15.8699,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420075500,
    "o3": 12.6985,
    "temp": 45.9
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420075500,
    "o3": 12.0845,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 44.3
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 44.25
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 44.2
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 45.23
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420075500,
    "o3": 11.2995,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420075500,
    "o3": 16.9633,
    "temp": 44.4
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420075500,
    "o3": 13.3692,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420075500,
    "o3": 15.4242,
    "temp": 44.9
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420075500,
    "o3": 18.55,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420075500,
    "o3": 14.3,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420075500,
    "o3": 16.25,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420075500,
    "o3": 16.05,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420075500,
    "o3": 20.05,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420075500,
    "o3": 17.35,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420075500,
    "o3": 13.3,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420075500,
    "o3": 15.15,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420075500,
    "o3": 15,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420075500,
    "o3": 19.3,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420075500,
    "o3": 14.8,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420075500,
    "o3": 15.95,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420075500,
    "o3": 21.9889,
    "temp": 45.7
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420075500,
    "o3": 16.84,
    "temp": 43.679
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420075500,
    "o3": 17.7605,
    "temp": 44.8
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420075500,
    "o3": 14.8291,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420075500,
    "o3": 19.0693,
    "temp": 44
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420075500,
    "o3": 15.2113,
    "temp": 46.4
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420075500,
    "o3": 18.7275,
    "temp": 44.1
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420075500,
    "o3": 16.8022,
    "temp": 44.9
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420075500,
    "o3": 26.6315,
    "temp": 45.08
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 45.48
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420075500,
    "o3": 21.1154,
    "temp": 38.52
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420075500,
    "o3": 6.00008,
    "temp": 42.3
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420075500,
    "o3": 12.6034,
    "temp": 31.09
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420075500,
    "o3": 17.0401,
    "temp": 34.55
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420075500,
    "o3": 21.8844,
    "temp": 44.57
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420075500,
    "o3": 21.8846,
    "temp": 46.18
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 47.4
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 45.3322
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 45.4
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 45.7
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420075500,
    "o3": 19.8653,
    "temp": 44.5
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420075500,
    "o3": 23.6599,
    "temp": 47.6
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420075500,
    "o3": 20.3363,
    "temp": 45.7
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420075500,
    "o3": 28.9762,
    "temp": 46.4
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420075500,
    "o3": 21.7021,
    "temp": 45.1
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420075500,
    "o3": 8.88235,
    "temp": 31.48
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 33.91
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 30.95
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420075500,
    "o3": 15.2163,
    "temp": 36.9
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 44.3
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420075500,
    "o3": 21.318,
    "temp": 42.021
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420075500,
    "o3": 15.2589,
    "temp": 38
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 35.5
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 26.24
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420075500,
    "o3": 20.0109,
    "temp": 42
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420075500,
    "o3": 19.594,
    "temp": 42.744
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420075500,
    "o3": 18.7815,
    "temp": 38.3
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420075500,
    "o3": 17.6735,
    "temp": 43.6
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420075500,
    "o3": 16.4318,
    "temp": 43.94
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 46.15
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 45.8
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 45.9
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 45.7
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420075500,
    "o3": 14.8888,
    "temp": 45.5
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420075500,
    "o3": 11.5344,
    "temp": 43.6
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420075500,
    "o3": 19.4448,
    "temp": 45.15
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420075500,
    "o3": 20.8403,
    "temp": 44.5
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 27.06
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420075500,
    "o3": 16.8183,
    "temp": 26.8
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 29.2
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 14.07
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420075500,
    "o3": 16.4322,
    "temp": 34.1
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420075500,
    "o3": 15.4,
    "temp": 43.5
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420075500,
    "o3": 18.1,
    "temp": 43.9
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420075500,
    "o3": 21.4559,
    "temp": 37.92
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420075500,
    "o3": 16.6481,
    "temp": 30.9
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420075500,
    "o3": 13.0703,
    "temp": 31.4
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 32.37
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 34.52
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 33.89
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 32.22
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 31.61
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420075500,
    "o3": 13.5767,
    "temp": 30.8
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420075500,
    "o3": 15.5448,
    "temp": 33.05
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420075500,
    "o3": 10.3199,
    "temp": 33.8
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 19.78
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420075500,
    "o3": 9.25789,
    "temp": 37.93
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420075500,
    "o3": 9.43935,
    "temp": 35.84
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 39.9
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 40.7
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 38.77
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420075500,
    "o3": 19.9789,
    "temp": 44.46
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420075500,
    "o3": 7.92176,
    "temp": 25.9
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 40.92
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 24.75
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 40.5
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 29.25
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420075500,
    "o3": 0,
    "temp": 31.26
  },
  {
    "siteID": "48_027_1045",
    "epoch": 1420075800,
    "o3": 11.117,
    "temp": 37.73
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420075800,
    "o3": 10.2963,
    "temp": 35.71
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420075800,
    "o3": 14.7298,
    "temp": 38.39
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420075800,
    "o3": 14.151,
    "temp": 37.48
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420075800,
    "o3": 8.55194,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420075800,
    "o3": 12.5059,
    "temp": 41.55
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 35.2
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420075800,
    "o3": 10.2352,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 39.69
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420075800,
    "o3": 15.2957,
    "temp": 45.4
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420075800,
    "o3": 16.029,
    "temp": 46.3
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 47.4
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420075800,
    "o3": 14.6913,
    "temp": 45.03
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 45.8
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420075800,
    "o3": 13.5504,
    "temp": 45.3
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420075800,
    "o3": 17.05,
    "temp": 25.2
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420075800,
    "o3": 2.58558,
    "temp": 45.1
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420075800,
    "o3": 15.9122,
    "temp": 43.63
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 48.5
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 13.9
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 14.2
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 14.2
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 45.8
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420075800,
    "o3": 14.2506,
    "temp": 32.36
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 33.69
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 30.92
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 35.5
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420075800,
    "o3": 11.6272,
    "temp": 35.7
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420075800,
    "o3": 10.7048,
    "temp": 33.9
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420075800,
    "o3": 8.78176,
    "temp": 34.3
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 34.47
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 34.81
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 35.28
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420075800,
    "o3": 14.9638,
    "temp": 32.1
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 32.89
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 31.84
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420075800,
    "o3": 16.3599,
    "temp": 31.7
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 19.7
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 19.4
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420075800,
    "o3": 12.949,
    "temp": 33.9
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420075800,
    "o3": 11.1382,
    "temp": 36
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420075800,
    "o3": 13.4241,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420075800,
    "o3": 17.2904,
    "temp": 30.3
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420075800,
    "o3": 16.5661,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 29.31
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 27.6
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420075800,
    "o3": 14.0874,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420075800,
    "o3": 17.7931,
    "temp": 28.28
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420075800,
    "o3": 18.0699,
    "temp": 28.9
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 41.3
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420075800,
    "o3": 14.542,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 46.39
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420075800,
    "o3": 21.14,
    "temp": 44.92
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420075800,
    "o3": 16.278,
    "temp": 45.92
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420075800,
    "o3": 19.4576,
    "temp": 46.4
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420075800,
    "o3": 19.114,
    "temp": 38.25
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420075800,
    "o3": 16.1834,
    "temp": 43.95
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420075800,
    "o3": 17.9877,
    "temp": 44.2
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420075800,
    "o3": 19.3826,
    "temp": 43.2
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420075800,
    "o3": 14.6869,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420075800,
    "o3": 15.6159,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420075800,
    "o3": 11.5049,
    "temp": 45.9
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420075800,
    "o3": 11.7807,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 44.3
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 44.22
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 44.2
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 45.19
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420075800,
    "o3": 10.9192,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420075800,
    "o3": 16.6801,
    "temp": 44.4
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420075800,
    "o3": 14.2671,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420075800,
    "o3": 15.0709,
    "temp": 44.9
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420075800,
    "o3": 18.55,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420075800,
    "o3": 13.95,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420075800,
    "o3": 16.6,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420075800,
    "o3": 15.7,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420075800,
    "o3": 17.85,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420075800,
    "o3": 17.5,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420075800,
    "o3": 13,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420075800,
    "o3": 16.2,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420075800,
    "o3": 16,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420075800,
    "o3": 18.3,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420075800,
    "o3": 14.85,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420075800,
    "o3": 15.85,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420075800,
    "o3": 21.7862,
    "temp": 45.7
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420075800,
    "o3": 17.658,
    "temp": 43.658
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420075800,
    "o3": 17.3546,
    "temp": 44.8
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420075800,
    "o3": 14.6809,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420075800,
    "o3": 18.6227,
    "temp": 44
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420075800,
    "o3": 15.8683,
    "temp": 46.3
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420075800,
    "o3": 18.5791,
    "temp": 44.1
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420075800,
    "o3": 17.3328,
    "temp": 44.9
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420075800,
    "o3": 26.6315,
    "temp": 44.99
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 45.18
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420075800,
    "o3": 20.6166,
    "temp": 38.54
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420075800,
    "o3": 5.20886,
    "temp": 42.3
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420075800,
    "o3": 12.6034,
    "temp": 31
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420075800,
    "o3": 17.527,
    "temp": 34.55
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420075800,
    "o3": 21.8844,
    "temp": 44.54
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420075800,
    "o3": 22.3782,
    "temp": 46.19
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 47.2
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 45.1899
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420075800,
    "o3": 19.3728,
    "temp": 44.52
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420075800,
    "o3": 26.7547,
    "temp": 47.6
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420075800,
    "o3": 19.8253,
    "temp": 45.6
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420075800,
    "o3": 28.0324,
    "temp": 46.3
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420075800,
    "o3": 21.9009,
    "temp": 45
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420075800,
    "o3": 9.38513,
    "temp": 31.44
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 33.94
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 30.96
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420075800,
    "o3": 14.8261,
    "temp": 36.9
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 44
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420075800,
    "o3": 21.364,
    "temp": 41.953
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420075800,
    "o3": 14.6676,
    "temp": 37.9
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 35.5
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 26.12
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420075800,
    "o3": 20.2118,
    "temp": 41.99
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420075800,
    "o3": 19.356,
    "temp": 42.746
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420075800,
    "o3": 18.6375,
    "temp": 38.3
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420075800,
    "o3": 17.1685,
    "temp": 43.6
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420075800,
    "o3": 16.9348,
    "temp": 43.95
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 46.47
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 45.8
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420075800,
    "o3": 14.4868,
    "temp": 45.5
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420075800,
    "o3": 11.9355,
    "temp": 43.7
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420075800,
    "o3": 21.4222,
    "temp": 45.07
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420075800,
    "o3": 19.7125,
    "temp": 44.4
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 27.02
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420075800,
    "o3": 16.8669,
    "temp": 26.7
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 29.35
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 14.12
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420075800,
    "o3": 16.5305,
    "temp": 34.1
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420075800,
    "o3": 15.7,
    "temp": 43.5
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420075800,
    "o3": 18.3,
    "temp": 43.9
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420075800,
    "o3": 21.9749,
    "temp": 37.94
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420075800,
    "o3": 16.8449,
    "temp": 31
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420075800,
    "o3": 13.3681,
    "temp": 31.3
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 32.46
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 34.65
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 33.9
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 32.2
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 31.6
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420075800,
    "o3": 12.8441,
    "temp": 30.9
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420075800,
    "o3": 15.5448,
    "temp": 33.11
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420075800,
    "o3": 10.8258,
    "temp": 33.6
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 19.53
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420075800,
    "o3": 9.76287,
    "temp": 37.87
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420075800,
    "o3": 9.38622,
    "temp": 35.83
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 39.9
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 40.5
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 38.8
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420075800,
    "o3": 19.5557,
    "temp": 44.48
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420075800,
    "o3": 7.76575,
    "temp": 26.3
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 40.88
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 24.86
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 40.5
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 29.35
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420075800,
    "o3": 0,
    "temp": 31.3
  },
  {
    "siteID": "48_027_1045",
    "epoch": 1420076100,
    "o3": 10.6167,
    "temp": 37.76
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420076100,
    "o3": 9.99044,
    "temp": 35.69
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420076100,
    "o3": 14.3762,
    "temp": 38.4
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 40.3
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420076100,
    "o3": 12.7672,
    "temp": 37.38
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420076100,
    "o3": 9.77789,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420076100,
    "o3": 12.5059,
    "temp": 41.47
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 35
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420076100,
    "o3": 10.1865,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 39.64
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420076100,
    "o3": 15.2473,
    "temp": 45.5
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420076100,
    "o3": 15.6481,
    "temp": 46.3
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 47.4
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420076100,
    "o3": 14.6913,
    "temp": 45.04
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 46.1
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420076100,
    "o3": 14.9933,
    "temp": 45.3
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420076100,
    "o3": 17,
    "temp": 25.1
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420076100,
    "o3": 2.53455,
    "temp": 45
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420076100,
    "o3": 15.3577,
    "temp": 43.63
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 48.6
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 14
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 14.3
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 14.2
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 45.8
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420076100,
    "o3": 14.7364,
    "temp": 32.22
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 33.71
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 30.81
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 35.6
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420076100,
    "o3": 11.0719,
    "temp": 35.7
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420076100,
    "o3": 10.0524,
    "temp": 34
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420076100,
    "o3": 8.06845,
    "temp": 34.3
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 34.64
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 34.83
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 35.54
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420076100,
    "o3": 10.9053,
    "temp": 32.1
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 32.87
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 31.83
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420076100,
    "o3": 16.3599,
    "temp": 31.6
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 19.7
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 19.5
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420076100,
    "o3": 12.9996,
    "temp": 33.9
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420076100,
    "o3": 11.5033,
    "temp": 35.9
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420076100,
    "o3": 13.2225,
    "temp": 29.8
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420076100,
    "o3": 16.9469,
    "temp": 30.2
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420076100,
    "o3": 17.9717,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 28.94
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 27.7
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420076100,
    "o3": 14.9751,
    "temp": 30
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420076100,
    "o3": 17.7437,
    "temp": 28.23
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420076100,
    "o3": 17.7734,
    "temp": 28.7
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 41.2
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420076100,
    "o3": 14.224,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 46.34
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420076100,
    "o3": 21.95,
    "temp": 44.86
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420076100,
    "o3": 16.387,
    "temp": 45.846
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420076100,
    "o3": 18.4589,
    "temp": 46.3
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420076100,
    "o3": 19.6041,
    "temp": 38.25
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420076100,
    "o3": 16.1834,
    "temp": 43.93
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420076100,
    "o3": 17.7422,
    "temp": 44.4
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420076100,
    "o3": 19.2309,
    "temp": 43.3
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 44.63
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420076100,
    "o3": 15.8858,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420076100,
    "o3": 15.7683,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420076100,
    "o3": 12.052,
    "temp": 45.9
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420076100,
    "o3": 10.9706,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 44.2
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 44.18
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 44.2
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 45.28
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420076100,
    "o3": 12.4881,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420076100,
    "o3": 16.7745,
    "temp": 44.4
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420076100,
    "o3": 15.2648,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420076100,
    "o3": 16.0802,
    "temp": 44.8
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420076100,
    "o3": 18.6,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420076100,
    "o3": 13.85,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420076100,
    "o3": 17.15,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420076100,
    "o3": 16,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420076100,
    "o3": 18.5,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420076100,
    "o3": 16.8,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420076100,
    "o3": 13.1,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420076100,
    "o3": 15.65,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420076100,
    "o3": 16.5,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420076100,
    "o3": 18.6,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420076100,
    "o3": 15.6,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420076100,
    "o3": 16,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420076100,
    "o3": 21.7862,
    "temp": 45.7
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420076100,
    "o3": 17.929,
    "temp": 43.605
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420076100,
    "o3": 17.3546,
    "temp": 44.7
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420076100,
    "o3": 16.9028,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420076100,
    "o3": 18.325,
    "temp": 44
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420076100,
    "o3": 16.1715,
    "temp": 46.3
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420076100,
    "o3": 18.3813,
    "temp": 44
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420076100,
    "o3": 16.9469,
    "temp": 44.9
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420076100,
    "o3": 23.6725,
    "temp": 44.97
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 45.41
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420076100,
    "o3": 21.1154,
    "temp": 38.53
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420076100,
    "o3": 6.29679,
    "temp": 42.3
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420076100,
    "o3": 13.0882,
    "temp": 30.8
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420076100,
    "o3": 17.0401,
    "temp": 34.5
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420076100,
    "o3": 21.3945,
    "temp": 44.55
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420076100,
    "o3": 22.3782,
    "temp": 46.05
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 47.5
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 45.1549
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 45.5
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420076100,
    "o3": 18.8802,
    "temp": 44.57
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420076100,
    "o3": 23.3604,
    "temp": 47.5
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420076100,
    "o3": 19.5698,
    "temp": 45.6
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420076100,
    "o3": 27.1383,
    "temp": 46.2
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420076100,
    "o3": 22.5469,
    "temp": 44.9
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 44.4
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420076100,
    "o3": 9.8879,
    "temp": 31.56
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 33.95
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 30.95
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420076100,
    "o3": 15.2163,
    "temp": 37
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 44
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420076100,
    "o3": 20.77,
    "temp": 41.901
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420076100,
    "o3": 14.8647,
    "temp": 37.8
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 35.4
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 26.09
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420076100,
    "o3": 19.6592,
    "temp": 42.01
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420076100,
    "o3": 19.19,
    "temp": 42.741
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420076100,
    "o3": 18.4935,
    "temp": 38.3
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420076100,
    "o3": 17.4715,
    "temp": 43.5
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420076100,
    "o3": 16.4318,
    "temp": 43.91
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 46.12
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 45.7
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 45.8
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420076100,
    "o3": 14.5873,
    "temp": 45.5
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420076100,
    "o3": 12.3367,
    "temp": 43.7
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420076100,
    "o3": 21.9165,
    "temp": 44.98
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420076100,
    "o3": 20.7422,
    "temp": 44.4
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 26.93
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420076100,
    "o3": 16.9155,
    "temp": 26.7
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 29.24
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 14.09
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420076100,
    "o3": 16.1864,
    "temp": 34.1
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420076100,
    "o3": 16.3,
    "temp": 43.5
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420076100,
    "o3": 17.5,
    "temp": 43.9
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420076100,
    "o3": 21.4559,
    "temp": 37.99
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420076100,
    "o3": 16.156,
    "temp": 31
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420076100,
    "o3": 11.5316,
    "temp": 31.5
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 32.52
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 34.85
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 33.88
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 32.27
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 31.49
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420076100,
    "o3": 12.7953,
    "temp": 31
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420076100,
    "o3": 15.5448,
    "temp": 33.19
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420076100,
    "o3": 11.0282,
    "temp": 33.4
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 19.48
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420076100,
    "o3": 9.76287,
    "temp": 37.81
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420076100,
    "o3": 9.43935,
    "temp": 35.81
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 40.4
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 38.85
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420076100,
    "o3": 19.3441,
    "temp": 44.47
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420076100,
    "o3": 8.23378,
    "temp": 27.01
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 40.94
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 24.99
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 40.5
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 29.27
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420076100,
    "o3": 0,
    "temp": 31.44
  },
  {
    "siteID": "48_027_1045",
    "epoch": 1420076400,
    "o3": 11.117,
    "temp": 37.77
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420076400,
    "o3": 9.93947,
    "temp": 35.63
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420076400,
    "o3": 15.0833,
    "temp": 38.35
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420076400,
    "o3": 12.1247,
    "temp": 37.18
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420076400,
    "o3": 9.94596,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420076400,
    "o3": 12.5059,
    "temp": 41.58
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 35
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420076400,
    "o3": 11.015,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 39.78
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420076400,
    "o3": 14.8605,
    "temp": 45.7
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420076400,
    "o3": 15.7433,
    "temp": 46.4
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 47.4
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420076400,
    "o3": 15.1865,
    "temp": 45.03
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 46
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420076400,
    "o3": 14.2967,
    "temp": 45.4
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420076400,
    "o3": 16.75,
    "temp": 25.1
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420076400,
    "o3": 2.43248,
    "temp": 44.9
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420076400,
    "o3": 15.0553,
    "temp": 43.68
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 48.7
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 14
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 14.2
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 14.3
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 45.9
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420076400,
    "o3": 14.7364,
    "temp": 32.16
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 33.63
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 30.77
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 35.4
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420076400,
    "o3": 10.3652,
    "temp": 35.7
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420076400,
    "o3": 11.056,
    "temp": 33.9
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420076400,
    "o3": 9.11465,
    "temp": 34.3
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 34.42
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 34.85
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 35.55
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420076400,
    "o3": 14.8648,
    "temp": 32
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 33
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 31.85
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420076400,
    "o3": 17.0408,
    "temp": 31.6
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 19.6
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 19.6
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420076400,
    "o3": 11.3304,
    "temp": 33.9
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420076400,
    "o3": 11.7316,
    "temp": 35.9
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420076400,
    "o3": 13.3737,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420076400,
    "o3": 16.9469,
    "temp": 30.2
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420076400,
    "o3": 17.8211,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 29.07
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 27.5
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420076400,
    "o3": 14.1367,
    "temp": 30
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420076400,
    "o3": 17.8426,
    "temp": 28.19
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420076400,
    "o3": 18.6135,
    "temp": 28.7
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 41.1
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420076400,
    "o3": 14.487,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 46.3
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420076400,
    "o3": 21.98,
    "temp": 44.82
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420076400,
    "o3": 15.838,
    "temp": 45.743
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420076400,
    "o3": 20.0068,
    "temp": 46.2
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420076400,
    "o3": 19.6041,
    "temp": 38.26
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420076400,
    "o3": 15.985,
    "temp": 43.92
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420076400,
    "o3": 18.135,
    "temp": 44.3
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420076400,
    "o3": 19.1804,
    "temp": 43.3
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420076400,
    "o3": 15.9358,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420076400,
    "o3": 15.311,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420076400,
    "o3": 13.7926,
    "temp": 45.8
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420076400,
    "o3": 13.2491,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 44.2
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 44.13
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 44.2
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 45.22
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420076400,
    "o3": 12.4881,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420076400,
    "o3": 16.5385,
    "temp": 44.4
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420076400,
    "o3": 14.3669,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420076400,
    "o3": 16.8875,
    "temp": 44.8
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420076400,
    "o3": 18.55,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420076400,
    "o3": 13.55,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420076400,
    "o3": 17.25,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420076400,
    "o3": 16.4,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420076400,
    "o3": 17.45,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420076400,
    "o3": 16.95,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420076400,
    "o3": 13.5,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420076400,
    "o3": 16.15,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420076400,
    "o3": 16,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420076400,
    "o3": 18.7,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420076400,
    "o3": 15.85,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420076400,
    "o3": 16.15,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420076400,
    "o3": 21.7355,
    "temp": 45.7
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420076400,
    "o3": 18.291,
    "temp": 43.636
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420076400,
    "o3": 17.1516,
    "temp": 44.8
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420076400,
    "o3": 14.2859,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420076400,
    "o3": 18.5235,
    "temp": 44
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420076400,
    "o3": 16.7274,
    "temp": 46.2
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420076400,
    "o3": 18.5296,
    "temp": 44
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420076400,
    "o3": 16.6575,
    "temp": 44.8
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420076400,
    "o3": 22.6861,
    "temp": 44.98
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 45.44
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420076400,
    "o3": 20.6166,
    "temp": 38.53
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420076400,
    "o3": 5.15941,
    "temp": 42.3
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420076400,
    "o3": 12.6034,
    "temp": 30.86
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420076400,
    "o3": 17.0401,
    "temp": 34.56
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420076400,
    "o3": 20.4146,
    "temp": 44.53
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420076400,
    "o3": 22.8719,
    "temp": 45.9
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 47.1
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 45.1529
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 45.4
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420076400,
    "o3": 18.3877,
    "temp": 44.6
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420076400,
    "o3": 25.3072,
    "temp": 47.3
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420076400,
    "o3": 20.2852,
    "temp": 45.6
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420076400,
    "o3": 26.4925,
    "temp": 46.1
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420076400,
    "o3": 22.4972,
    "temp": 44.9
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 44.4
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420076400,
    "o3": 9.8879,
    "temp": 31.43
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 33.91
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 30.86
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420076400,
    "o3": 14.7774,
    "temp": 37
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 44.1
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420076400,
    "o3": 21.222,
    "temp": 41.889
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420076400,
    "o3": 14.569,
    "temp": 37.7
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 35.4
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 26.16
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420076400,
    "o3": 19.7095,
    "temp": 42.04
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420076400,
    "o3": 19.519,
    "temp": 42.739
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420076400,
    "o3": 18.4935,
    "temp": 38.2
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420076400,
    "o3": 17.8754,
    "temp": 43.5
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420076400,
    "o3": 16.4318,
    "temp": 43.9
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 45.89
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 45.8
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 45.5
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420076400,
    "o3": 14.3863,
    "temp": 45.5
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420076400,
    "o3": 12.2364,
    "temp": 43.7
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420076400,
    "o3": 21.9165,
    "temp": 44.93
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420076400,
    "o3": 20.399,
    "temp": 44.4
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 26.93
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420076400,
    "o3": 16.7211,
    "temp": 26.7
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 29.19
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 14.2
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420076400,
    "o3": 16.8254,
    "temp": 34.2
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420076400,
    "o3": 15.9,
    "temp": 43.5
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420076400,
    "o3": 17.7,
    "temp": 43.9
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420076400,
    "o3": 20.9368,
    "temp": 37.98
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420076400,
    "o3": 16.0576,
    "temp": 31.1
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420076400,
    "o3": 11.8294,
    "temp": 31.5
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 32.42
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 34.76
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 33.95
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 32.31
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 31.5
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420076400,
    "o3": 13.0883,
    "temp": 31
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420076400,
    "o3": 15.5448,
    "temp": 33.18
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420076400,
    "o3": 11.4329,
    "temp": 33.5
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 19.58
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420076400,
    "o3": 10.2678,
    "temp": 37.72
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420076400,
    "o3": 9.81126,
    "temp": 35.77
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 40.5
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 38.66
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420076400,
    "o3": 18.868,
    "temp": 44.48
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420076400,
    "o3": 8.18178,
    "temp": 26.78
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 41.1
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 24.96
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 40.6
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 29.31
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420076400,
    "o3": 0,
    "temp": 31.37
  },
  {
    "siteID": "48_027_1045",
    "epoch": 1420076700,
    "o3": 11.117,
    "temp": 37.78
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420076700,
    "o3": 10.0924,
    "temp": 35.7
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420076700,
    "o3": 14.3257,
    "temp": 38.37
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420076700,
    "o3": 12.9649,
    "temp": 37.11
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420076700,
    "o3": 9.13525,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420076700,
    "o3": 12.0187,
    "temp": 41.62
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 34.8
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420076700,
    "o3": 11.5024,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 39.85
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420076700,
    "o3": 14.8605,
    "temp": 45.5
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420076700,
    "o3": 18.1238,
    "temp": 46.4
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 47.4
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420076700,
    "o3": 15.6817,
    "temp": 44.99
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 46
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420076700,
    "o3": 14.3465,
    "temp": 45.4
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420076700,
    "o3": 16.8,
    "temp": 25.2
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420076700,
    "o3": 2.33042,
    "temp": 44.9
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420076700,
    "o3": 15.4081,
    "temp": 43.73
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 48.5
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 14.1
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 14.2
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 14.3
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420076700,
    "o3": 14.2506,
    "temp": 32.11
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 33.57
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 30.87
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 35.4
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420076700,
    "o3": 10.6681,
    "temp": 35.6
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420076700,
    "o3": 11.4073,
    "temp": 33.8
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420076700,
    "o3": 9.73286,
    "temp": 34.3
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 34.43
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 34.87
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 35.68
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420076700,
    "o3": 14.0234,
    "temp": 32
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 32.91
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 31.84
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420076700,
    "o3": 16.8949,
    "temp": 31.6
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 19.5
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 19.7
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420076700,
    "o3": 12.6455,
    "temp": 33.9
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420076700,
    "o3": 11.7772,
    "temp": 35.9
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420076700,
    "o3": 11.7608,
    "temp": 30
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420076700,
    "o3": 16.6524,
    "temp": 30.1
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420076700,
    "o3": 17.3191,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 29.32
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 27.4
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420076700,
    "o3": 13.397,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420076700,
    "o3": 17.1005,
    "temp": 28.26
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420076700,
    "o3": 19.3547,
    "temp": 28.7
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 41
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420076700,
    "o3": 14.806,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 46.12
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420076700,
    "o3": 22.36,
    "temp": 44.65
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420076700,
    "o3": 15.758,
    "temp": 45.662
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420076700,
    "o3": 20.5062,
    "temp": 46.1
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420076700,
    "o3": 19.6041,
    "temp": 38.27
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420076700,
    "o3": 15.8363,
    "temp": 43.9
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420076700,
    "o3": 18.626,
    "temp": 44.3
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420076700,
    "o3": 18.8264,
    "temp": 43.3
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 44.67
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420076700,
    "o3": 16.7351,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420076700,
    "o3": 14.7521,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420076700,
    "o3": 14.1408,
    "temp": 45.8
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420076700,
    "o3": 13.2491,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 44.2
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 44.11
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 44.2
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 45.08
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420076700,
    "o3": 13.0111,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420076700,
    "o3": 16.2552,
    "temp": 44.4
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420076700,
    "o3": 14.2671,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420076700,
    "o3": 16.282,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420076700,
    "o3": 18.35,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420076700,
    "o3": 13.15,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420076700,
    "o3": 17.6,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420076700,
    "o3": 16.1,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420076700,
    "o3": 18.4,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420076700,
    "o3": 16.65,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420076700,
    "o3": 13.5,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420076700,
    "o3": 16.15,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420076700,
    "o3": 16,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420076700,
    "o3": 19.35,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420076700,
    "o3": 15.35,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420076700,
    "o3": 15.9,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420076700,
    "o3": 21.5329,
    "temp": 45.7
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420076700,
    "o3": 19.034,
    "temp": 43.608
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420076700,
    "o3": 17.5575,
    "temp": 44.7
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420076700,
    "o3": 14.3847,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420076700,
    "o3": 18.97,
    "temp": 43.9
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420076700,
    "o3": 16.7779,
    "temp": 46.2
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420076700,
    "o3": 18.5296,
    "temp": 44
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420076700,
    "o3": 17.5257,
    "temp": 44.8
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420076700,
    "o3": 18.7407,
    "temp": 44.84
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 45.18
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420076700,
    "o3": 21.1154,
    "temp": 38.5
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420076700,
    "o3": 5.10996,
    "temp": 42.3
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420076700,
    "o3": 13.0882,
    "temp": 30.92
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420076700,
    "o3": 16.5533,
    "temp": 34.4
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420076700,
    "o3": 20.4146,
    "temp": 44.5
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420076700,
    "o3": 21.8846,
    "temp": 45.84
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 47.2
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 45.1079
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 45.4
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420076700,
    "o3": 18.8802,
    "temp": 44.65
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420076700,
    "o3": 25.7564,
    "temp": 47.2
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420076700,
    "o3": 20.694,
    "temp": 45.6
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420076700,
    "o3": 26.2938,
    "temp": 46.1
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420076700,
    "o3": 22.5966,
    "temp": 44.9
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 44.4
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420076700,
    "o3": 9.8879,
    "temp": 31.41
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 33.89
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 30.78
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420076700,
    "o3": 14.7774,
    "temp": 36.9
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 44
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420076700,
    "o3": 21.016,
    "temp": 41.864
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420076700,
    "o3": 14.569,
    "temp": 37.6
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 35.3
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 26.1
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420076700,
    "o3": 19.8099,
    "temp": 42.07
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420076700,
    "o3": 19.036,
    "temp": 42.766
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420076700,
    "o3": 18.3016,
    "temp": 38.2
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420076700,
    "o3": 17.6735,
    "temp": 43.5
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420076700,
    "o3": 16.4318,
    "temp": 43.88
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 46.46
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 45.5
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 45.8
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420076700,
    "o3": 14.0848,
    "temp": 45.5
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420076700,
    "o3": 12.1361,
    "temp": 43.7
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420076700,
    "o3": 21.4222,
    "temp": 44.92
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420076700,
    "o3": 20.6441,
    "temp": 44.4
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 26.87
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420076700,
    "o3": 16.8669,
    "temp": 26.8
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 29.19
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 14.37
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420076700,
    "o3": 16.6779,
    "temp": 34.1
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420076700,
    "o3": 16,
    "temp": 43.4
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420076700,
    "o3": 18.1,
    "temp": 43.9
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420076700,
    "o3": 21.4559,
    "temp": 38.03
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420076700,
    "o3": 15.4179,
    "temp": 31.1
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420076700,
    "o3": 12.5243,
    "temp": 31.5
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 32.52
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 34.69
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 33.96
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 32.36
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 31.51
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420076700,
    "o3": 12.5511,
    "temp": 31
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420076700,
    "o3": 16.0462,
    "temp": 33.11
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420076700,
    "o3": 11.8376,
    "temp": 33.4
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 19.98
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420076700,
    "o3": 9.76287,
    "temp": 37.76
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420076700,
    "o3": 9.75813,
    "temp": 35.72
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 39.9
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 40.5
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 38.63
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420076700,
    "o3": 19.1325,
    "temp": 44.46
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420076700,
    "o3": 7.76575,
    "temp": 27.12
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 41.05
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 25.09
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 40.6
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 29.3
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420076700,
    "o3": 0,
    "temp": 31.33
  },
  {
    "siteID": "48_027_1045",
    "epoch": 1420077000,
    "o3": 11.117,
    "temp": 37.79
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420077000,
    "o3": 9.93947,
    "temp": 35.68
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420077000,
    "o3": 13.3157,
    "temp": 38.41
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420077000,
    "o3": 12.6189,
    "temp": 37.12
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420077000,
    "o3": 8.96718,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420077000,
    "o3": 12.0187,
    "temp": 41.54
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 34.8
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420077000,
    "o3": 10.9663,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 39.61
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420077000,
    "o3": 14.8122,
    "temp": 45.4
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420077000,
    "o3": 18.5047,
    "temp": 46.4
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 47.4
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420077000,
    "o3": 15.1865,
    "temp": 45
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 45.9
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420077000,
    "o3": 15.4411,
    "temp": 45.4
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420077000,
    "o3": 16.8,
    "temp": 25.3
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420077000,
    "o3": 2.07527,
    "temp": 44.9
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420077000,
    "o3": 15.2065,
    "temp": 43.74
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 48.6
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 14.2
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 14.3
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 14.4
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 45.5
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420077000,
    "o3": 14.2506,
    "temp": 32.15
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 33.73
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 30.84
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 35.4
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420077000,
    "o3": 10.0119,
    "temp": 35.7
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420077000,
    "o3": 11.7585,
    "temp": 33.9
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420077000,
    "o3": 10.9693,
    "temp": 34.2
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 34.85
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 34.89
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 35.64
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420077000,
    "o3": 16.4486,
    "temp": 32
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 33
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 31.92
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420077000,
    "o3": 16.2626,
    "temp": 31.6
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 19.6
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 19.6
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420077000,
    "o3": 12.4432,
    "temp": 33.8
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420077000,
    "o3": 12.2794,
    "temp": 35.8
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420077000,
    "o3": 12.0632,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420077000,
    "o3": 15.671,
    "temp": 30.1
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420077000,
    "o3": 15.8633,
    "temp": 30
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 29.31
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 27.4
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420077000,
    "o3": 14.7285,
    "temp": 29.7
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420077000,
    "o3": 15.9627,
    "temp": 28.38
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420077000,
    "o3": 19.4535,
    "temp": 28.8
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 41
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420077000,
    "o3": 13.908,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 46.02
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420077000,
    "o3": 22.11,
    "temp": 44.52
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420077000,
    "o3": 17.337,
    "temp": 45.611
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420077000,
    "o3": 20.606,
    "temp": 46
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420077000,
    "o3": 19.6041,
    "temp": 38.27
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420077000,
    "o3": 16.8777,
    "temp": 43.88
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420077000,
    "o3": 17.3985,
    "temp": 44.4
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420077000,
    "o3": 18.2702,
    "temp": 43.2
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 44.64
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420077000,
    "o3": 16.4853,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420077000,
    "o3": 15.1586,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420077000,
    "o3": 15.6825,
    "temp": 45.7
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420077000,
    "o3": 15.0719,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 44.2
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 44.08
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 44.3
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 45.13
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420077000,
    "o3": 12.8209,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420077000,
    "o3": 16.0192,
    "temp": 44.4
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420077000,
    "o3": 16.8612,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420077000,
    "o3": 16.3829,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420077000,
    "o3": 18.6,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420077000,
    "o3": 13.95,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420077000,
    "o3": 17.55,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420077000,
    "o3": 15.75,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420077000,
    "o3": 18.35,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420077000,
    "o3": 17.1,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420077000,
    "o3": 13.25,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420077000,
    "o3": 16.15,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420077000,
    "o3": 15.5,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420077000,
    "o3": 19.35,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420077000,
    "o3": 15.25,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420077000,
    "o3": 15.85,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420077000,
    "o3": 21.4822,
    "temp": 45.6
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420077000,
    "o3": 19.546,
    "temp": 43.543
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420077000,
    "o3": 17.7605,
    "temp": 44.7
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420077000,
    "o3": 15.7672,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420077000,
    "o3": 18.1762,
    "temp": 43.9
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420077000,
    "o3": 15.5145,
    "temp": 46.3
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420077000,
    "o3": 17.8372,
    "temp": 43.9
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420077000,
    "o3": 18.3458,
    "temp": 44.8
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420077000,
    "o3": 21.6998,
    "temp": 44.84
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 45.53
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420077000,
    "o3": 21.6141,
    "temp": 38.47
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420077000,
    "o3": 6.29679,
    "temp": 42.3
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420077000,
    "o3": 12.6034,
    "temp": 31.03
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420077000,
    "o3": 16.5533,
    "temp": 34.45
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420077000,
    "o3": 20.4146,
    "temp": 44.48
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420077000,
    "o3": 22.3782,
    "temp": 45.77
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 47.4
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 45.0302
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420077000,
    "o3": 19.8653,
    "temp": 44.85
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420077000,
    "o3": 20.9645,
    "temp": 47.1
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420077000,
    "o3": 20.2341,
    "temp": 45.5
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420077000,
    "o3": 25.3003,
    "temp": 46.1
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420077000,
    "o3": 22.0996,
    "temp": 44.8
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 44.3
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420077000,
    "o3": 10.3907,
    "temp": 31.42
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 34.03
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 30.78
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420077000,
    "o3": 14.8749,
    "temp": 37
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 44
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420077000,
    "o3": 20.665,
    "temp": 41.847
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420077000,
    "o3": 14.7661,
    "temp": 37.6
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 35.3
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 26.17
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420077000,
    "o3": 19.3578,
    "temp": 42.11
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420077000,
    "o3": 19.327,
    "temp": 42.776
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420077000,
    "o3": 18.4935,
    "temp": 38.2
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420077000,
    "o3": 17.7744,
    "temp": 43.5
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420077000,
    "o3": 15.9287,
    "temp": 43.79
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 46.4
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 45.7
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 45.7
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420077000,
    "o3": 14.7883,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420077000,
    "o3": 12.437,
    "temp": 43.7
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420077000,
    "o3": 21.4222,
    "temp": 44.88
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420077000,
    "o3": 20.448,
    "temp": 44.4
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 26.67
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420077000,
    "o3": 16.9155,
    "temp": 26.7
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 29.06
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 14.34
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420077000,
    "o3": 16.6779,
    "temp": 34.2
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420077000,
    "o3": 15.7,
    "temp": 43.4
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420077000,
    "o3": 19,
    "temp": 43.9
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420077000,
    "o3": 20.9368,
    "temp": 38.05
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420077000,
    "o3": 16.3037,
    "temp": 31
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420077000,
    "o3": 13.7155,
    "temp": 31.5
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 32.42
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 34.67
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 34.03
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 32.32
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 31.48
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420077000,
    "o3": 13.0883,
    "temp": 31
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420077000,
    "o3": 16.0462,
    "temp": 33.2
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420077000,
    "o3": 10.7246,
    "temp": 33.5
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 20.21
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420077000,
    "o3": 8.75291,
    "temp": 37.77
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420077000,
    "o3": 9.75813,
    "temp": 35.77
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 39.9
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 40.5
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 38.69
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420077000,
    "o3": 18.8151,
    "temp": 44.48
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420077000,
    "o3": 7.81776,
    "temp": 26.44
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 41.2
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 25.13
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 40.6
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 29.2
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420077000,
    "o3": 0,
    "temp": 31.37
  },
  {
    "siteID": "48_027_1045",
    "epoch": 1420077300,
    "o3": 11.6174,
    "temp": 37.77
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420077300,
    "o3": 10.0924,
    "temp": 35.74
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420077300,
    "o3": 13.4672,
    "temp": 38.23
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420077300,
    "o3": 11.9764,
    "temp": 37.09
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420077300,
    "o3": 8.63104,
    "temp": 40.3
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420077300,
    "o3": 12.0187,
    "temp": 41.47
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 34.7
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420077300,
    "o3": 11.21,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 39.7
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420077300,
    "o3": 15.2473,
    "temp": 45.5
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420077300,
    "o3": 17.1716,
    "temp": 46.4
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 47.4
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420077300,
    "o3": 15.1865,
    "temp": 45.01
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 45.9
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420077300,
    "o3": 15.5904,
    "temp": 45.4
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420077300,
    "o3": 16.6,
    "temp": 25.2
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420077300,
    "o3": 2.02423,
    "temp": 44.9
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420077300,
    "o3": 15.4585,
    "temp": 43.65
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 48.4
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 14.2
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 14.3
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 14.5
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 45.4
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420077300,
    "o3": 14.2506,
    "temp": 32.24
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 33.68
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 30.91
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 35.4
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420077300,
    "o3": 9.60802,
    "temp": 35.6
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420077300,
    "o3": 11.4073,
    "temp": 33.8
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420077300,
    "o3": 11.3497,
    "temp": 34.3
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 34.72
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 34.91
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 35.63
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420077300,
    "o3": 15.9537,
    "temp": 32.1
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 32.97
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 31.85
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420077300,
    "o3": 16.4085,
    "temp": 31.6
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 19.7
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 19.5
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420077300,
    "o3": 12.0385,
    "temp": 33.9
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420077300,
    "o3": 11.6403,
    "temp": 35.7
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420077300,
    "o3": 14.2305,
    "temp": 29.8
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420077300,
    "o3": 16.5543,
    "temp": 30.1
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420077300,
    "o3": 14.6083,
    "temp": 30
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 29.22
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 27.5
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420077300,
    "o3": 14.9258,
    "temp": 29.6
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420077300,
    "o3": 14.528,
    "temp": 28.43
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420077300,
    "o3": 19.0582,
    "temp": 28.9
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 41
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420077300,
    "o3": 14.116,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 45.88
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420077300,
    "o3": 22.08,
    "temp": 44.51
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420077300,
    "o3": 17.052,
    "temp": 45.494
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420077300,
    "o3": 20.656,
    "temp": 45.8
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420077300,
    "o3": 20.0942,
    "temp": 38.28
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420077300,
    "o3": 16.3322,
    "temp": 43.83
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420077300,
    "o3": 18.0859,
    "temp": 44.4
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420077300,
    "o3": 18.5736,
    "temp": 43.2
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 44.57
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420077300,
    "o3": 15.736,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420077300,
    "o3": 15.311,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420077300,
    "o3": 16.0804,
    "temp": 45.7
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420077300,
    "o3": 15.0212,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 44.1
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 44.09
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 44.3
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 45.25
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420077300,
    "o3": 12.298,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420077300,
    "o3": 15.9248,
    "temp": 44.4
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420077300,
    "o3": 14.7161,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420077300,
    "o3": 15.9792,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420077300,
    "o3": 18.4,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420077300,
    "o3": 13.95,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420077300,
    "o3": 17.75,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420077300,
    "o3": 16.3,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420077300,
    "o3": 19.05,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420077300,
    "o3": 16.35,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420077300,
    "o3": 13.6,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420077300,
    "o3": 15.65,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420077300,
    "o3": 15.5,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420077300,
    "o3": 19.25,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420077300,
    "o3": 15.55,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420077300,
    "o3": 16,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420077300,
    "o3": 21.3809,
    "temp": 45.7
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420077300,
    "o3": 19.692,
    "temp": 43.528
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420077300,
    "o3": 17.862,
    "temp": 44.7
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420077300,
    "o3": 14.7303,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420077300,
    "o3": 18.2258,
    "temp": 43.9
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420077300,
    "o3": 15.7166,
    "temp": 46.2
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420077300,
    "o3": 17.4416,
    "temp": 43.9
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420077300,
    "o3": 18.2493,
    "temp": 44.7
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420077300,
    "o3": 21.2066,
    "temp": 44.77
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 45.77
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420077300,
    "o3": 21.6141,
    "temp": 38.5
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420077300,
    "o3": 4.71435,
    "temp": 42.3
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420077300,
    "o3": 13.0882,
    "temp": 30.88
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420077300,
    "o3": 17.0401,
    "temp": 34.29
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420077300,
    "o3": 20.4146,
    "temp": 44.47
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420077300,
    "o3": 22.3782,
    "temp": 45.7
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 47.4
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 45.0534
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420077300,
    "o3": 21.3429,
    "temp": 44.95
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420077300,
    "o3": 25.407,
    "temp": 46.9
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420077300,
    "o3": 19.3144,
    "temp": 45.5
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420077300,
    "o3": 24.7043,
    "temp": 46.2
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420077300,
    "o3": 22.0996,
    "temp": 44.8
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 44.3
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420077300,
    "o3": 10.3907,
    "temp": 31.36
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 33.92
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 30.77
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420077300,
    "o3": 15.1675,
    "temp": 37
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 44.1
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420077300,
    "o3": 20.641,
    "temp": 41.856
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420077300,
    "o3": 14.5198,
    "temp": 37.6
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 35.3
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 26.2
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420077300,
    "o3": 19.2573,
    "temp": 42.06
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420077300,
    "o3": 19.443,
    "temp": 42.777
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420077300,
    "o3": 18.2536,
    "temp": 38.1
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420077300,
    "o3": 17.9259,
    "temp": 43.4
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420077300,
    "o3": 16.9348,
    "temp": 43.79
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 46.08
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 45.5
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 45.7
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 45.6
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 44.4
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420077300,
    "o3": 14.3863,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420077300,
    "o3": 12.1361,
    "temp": 43.7
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420077300,
    "o3": 20.9278,
    "temp": 44.82
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420077300,
    "o3": 20.6441,
    "temp": 44.4
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 26.75
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420077300,
    "o3": 16.8183,
    "temp": 26.6
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 29.16
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 14.38
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420077300,
    "o3": 16.383,
    "temp": 34.2
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420077300,
    "o3": 16.2,
    "temp": 43.4
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420077300,
    "o3": 18.9,
    "temp": 43.9
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420077300,
    "o3": 20.9368,
    "temp": 38.01
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420077300,
    "o3": 16.2544,
    "temp": 31
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420077300,
    "o3": 13.0703,
    "temp": 31.6
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 32.52
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 34.85
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 34.16
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 32.32
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 31.54
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420077300,
    "o3": 13.2348,
    "temp": 31.2
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420077300,
    "o3": 16.0462,
    "temp": 33.24
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420077300,
    "o3": 11.3823,
    "temp": 33.4
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 19.92
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420077300,
    "o3": 8.75291,
    "temp": 37.65
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420077300,
    "o3": 9.43935,
    "temp": 35.7
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 39.9
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 40.6
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 38.75
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420077300,
    "o3": 19.5028,
    "temp": 44.46
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420077300,
    "o3": 7.92176,
    "temp": 26.56
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 41.01
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 25.17
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 40.6
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 29.27
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420077300,
    "o3": 0,
    "temp": 31.48
  },
  {
    "siteID": "48_027_1045",
    "epoch": 1420077600,
    "o3": 11.6174,
    "temp": 37.76
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420077600,
    "o3": 10.2453,
    "temp": 35.7
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420077600,
    "o3": 12.9622,
    "temp": 38.07
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 40.3
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420077600,
    "o3": 11.3834,
    "temp": 37.06
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420077600,
    "o3": 9.59004,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420077600,
    "o3": 12.5059,
    "temp": 41.61
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 34.6
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420077600,
    "o3": 11.5512,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 40.3
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 40.1
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 39.76
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420077600,
    "o3": 15.3924,
    "temp": 45.5
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420077600,
    "o3": 18.6476,
    "temp": 46.3
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 47.4
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420077600,
    "o3": 15.6817,
    "temp": 44.91
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 46
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420077600,
    "o3": 15.0431,
    "temp": 45.4
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420077600,
    "o3": 16.7,
    "temp": 25.3
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420077600,
    "o3": 2.02423,
    "temp": 44.9
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420077600,
    "o3": 15.4585,
    "temp": 43.52
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 48.2
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 14.2
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 14.4
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 14.5
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 45.4
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420077600,
    "o3": 14.7364,
    "temp": 32.08
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 33.58
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 30.96
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 35.5
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420077600,
    "o3": 9.75946,
    "temp": 35.7
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420077600,
    "o3": 10.5542,
    "temp": 34
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420077600,
    "o3": 10.7315,
    "temp": 34.3
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 34.43
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 35
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 35.63
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420077600,
    "o3": 13.4295,
    "temp": 32.1
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 32.94
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 31.85
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420077600,
    "o3": 15.9221,
    "temp": 31.6
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 19.5
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 19.6
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420077600,
    "o3": 12.6455,
    "temp": 34
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420077600,
    "o3": 11.6859,
    "temp": 35.7
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420077600,
    "o3": 13.5249,
    "temp": 29.8
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420077600,
    "o3": 17.4376,
    "temp": 30.1
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420077600,
    "o3": 15.3613,
    "temp": 30
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 29.19
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 27.3
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420077600,
    "o3": 10.6847,
    "temp": 29.7
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420077600,
    "o3": 14.7259,
    "temp": 28.39
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420077600,
    "o3": 19.2064,
    "temp": 28.9
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 40.9
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420077600,
    "o3": 14.332,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 45.88
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420077600,
    "o3": 22.91,
    "temp": 44.46
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420077600,
    "o3": 15.17,
    "temp": 45.452
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420077600,
    "o3": 20.1566,
    "temp": 45.7
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420077600,
    "o3": 19.6041,
    "temp": 38.28
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420077600,
    "o3": 17.9687,
    "temp": 43.8
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420077600,
    "o3": 18.2823,
    "temp": 44.4
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420077600,
    "o3": 18.4219,
    "temp": 43.2
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 44.58
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420077600,
    "o3": 16.0357,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420077600,
    "o3": 13.9391,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420077600,
    "o3": 15.4836,
    "temp": 45.7
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420077600,
    "o3": 15.1225,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 44.2
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 44.06
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 44.2
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 45.01
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420077600,
    "o3": 12.1553,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420077600,
    "o3": 16.208,
    "temp": 44.4
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420077600,
    "o3": 14.3669,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420077600,
    "o3": 14.1122,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420077600,
    "o3": 18.55,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420077600,
    "o3": 14.05,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420077600,
    "o3": 17.6,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420077600,
    "o3": 16,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420077600,
    "o3": 15.15,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420077600,
    "o3": 16.25,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420077600,
    "o3": 13.05,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420077600,
    "o3": 15.65,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420077600,
    "o3": 15.5,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420077600,
    "o3": 18.6,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420077600,
    "o3": 15,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420077600,
    "o3": 15.75,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420077600,
    "o3": 21.5329,
    "temp": 45.6
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420077600,
    "o3": 19.316,
    "temp": 43.53
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420077600,
    "o3": 17.5575,
    "temp": 44.8
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420077600,
    "o3": 14.7797,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420077600,
    "o3": 17.9281,
    "temp": 43.9
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420077600,
    "o3": 15.565,
    "temp": 46.2
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420077600,
    "o3": 18.0845,
    "temp": 43.9
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420077600,
    "o3": 17.5257,
    "temp": 44.7
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420077600,
    "o3": 20.7134,
    "temp": 44.79
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 45.53
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420077600,
    "o3": 21.1154,
    "temp": 38.51
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420077600,
    "o3": 4.8627,
    "temp": 42.4
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420077600,
    "o3": 13.0882,
    "temp": 30.83
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420077600,
    "o3": 17.0401,
    "temp": 34.31
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420077600,
    "o3": 20.9045,
    "temp": 44.4
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420077600,
    "o3": 22.3782,
    "temp": 45.58
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 47.6
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 44.9477
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420077600,
    "o3": 20.8504,
    "temp": 44.98
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420077600,
    "o3": 25.8063,
    "temp": 46.9
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420077600,
    "o3": 19.8253,
    "temp": 45.4
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420077600,
    "o3": 24.4559,
    "temp": 46.1
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420077600,
    "o3": 20.8572,
    "temp": 44.7
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 44.2
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420077600,
    "o3": 9.38513,
    "temp": 31.4
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 33.96
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 30.72
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420077600,
    "o3": 15.1675,
    "temp": 37.1
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 44
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420077600,
    "o3": 20.798,
    "temp": 41.843
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420077600,
    "o3": 14.8647,
    "temp": 37.5
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 35.3
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 26.09
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420077600,
    "o3": 19.4583,
    "temp": 42.06
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420077600,
    "o3": 19.411,
    "temp": 42.779
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420077600,
    "o3": 17.8696,
    "temp": 38.2
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420077600,
    "o3": 18.1279,
    "temp": 43.4
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420077600,
    "o3": 16.9348,
    "temp": 43.8
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 46.1
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 45.5
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 45.7
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 44.4
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 44.3
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420077600,
    "o3": 15.1903,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420077600,
    "o3": 12.6376,
    "temp": 43.7
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420077600,
    "o3": 21.4222,
    "temp": 44.75
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420077600,
    "o3": 20.8893,
    "temp": 44.4
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 26.95
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420077600,
    "o3": 16.6239,
    "temp": 26.9
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 29.41
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 14.28
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420077600,
    "o3": 16.2356,
    "temp": 34.1
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420077600,
    "o3": 15.5,
    "temp": 43.4
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420077600,
    "o3": 18.3,
    "temp": 43.8
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420077600,
    "o3": 20.4177,
    "temp": 38.03
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420077600,
    "o3": 16.4021,
    "temp": 31.1
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420077600,
    "o3": 12.8221,
    "temp": 31.7
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 32.54
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 34.86
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 34.19
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 32.35
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 31.47
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420077600,
    "o3": 12.6488,
    "temp": 31.2
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420077600,
    "o3": 16.5477,
    "temp": 33.19
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420077600,
    "o3": 11.1799,
    "temp": 33.4
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 19.78
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420077600,
    "o3": 8.75291,
    "temp": 37.66
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420077600,
    "o3": 9.27996,
    "temp": 35.68
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 39.9
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 40.4
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 38.67
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420077600,
    "o3": 19.1854,
    "temp": 44.44
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420077600,
    "o3": 7.24573,
    "temp": 23.82
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 41.16
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 24.96
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 40.6
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 29.28
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420077600,
    "o3": 0,
    "temp": 31.52
  },
  {
    "siteID": "48_027_1045",
    "epoch": 1420077900,
    "o3": 12.1177,
    "temp": 37.77
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420077900,
    "o3": 10.4492,
    "temp": 35.76
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420077900,
    "o3": 13.2147,
    "temp": 37.97
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420077900,
    "o3": 11.0869,
    "temp": 36.92
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420077900,
    "o3": 10.2722,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420077900,
    "o3": 12.5059,
    "temp": 41.63
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 34.4
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420077900,
    "o3": 11.6974,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 40.4
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 39.77
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420077900,
    "o3": 15.5374,
    "temp": 45.5
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420077900,
    "o3": 19.6474,
    "temp": 46.3
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 47.4
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420077900,
    "o3": 15.6817,
    "temp": 44.86
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 46
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420077900,
    "o3": 15.3416,
    "temp": 45.4
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420077900,
    "o3": 16.75,
    "temp": 25.4
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420077900,
    "o3": 2.58558,
    "temp": 45
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420077900,
    "o3": 15.5089,
    "temp": 43.52
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 48.4
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 14.3
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 14.3
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 14.4
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 45.4
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420077900,
    "o3": 14.2506,
    "temp": 32.1
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 33.67
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 30.86
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 35.5
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420077900,
    "o3": 10.6176,
    "temp": 35.6
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420077900,
    "o3": 11.2567,
    "temp": 33.8
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420077900,
    "o3": 10.256,
    "temp": 34.3
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 34.63
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 35.08
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 35.61
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420077900,
    "o3": 13.8749,
    "temp": 32.1
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 32.9
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 31.87
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420077900,
    "o3": 15.8734,
    "temp": 31.7
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 19.5
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 19.6
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420077900,
    "o3": 12.5443,
    "temp": 34
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420077900,
    "o3": 11.3207,
    "temp": 35.7
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420077900,
    "o3": 13.2225,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420077900,
    "o3": 16.9469,
    "temp": 30.1
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420077900,
    "o3": 17.6203,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 29.25
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 27.1
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420077900,
    "o3": 12.2135,
    "temp": 29.7
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420077900,
    "o3": 15.9627,
    "temp": 28.33
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420077900,
    "o3": 19.5029,
    "temp": 28.7
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 40.9
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420077900,
    "o3": 14.94,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 45.9
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420077900,
    "o3": 21.05,
    "temp": 44.59
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420077900,
    "o3": 14.62,
    "temp": 45.493
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420077900,
    "o3": 20.3564,
    "temp": 45.7
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420077900,
    "o3": 19.6041,
    "temp": 38.27
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420077900,
    "o3": 17.8199,
    "temp": 43.82
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420077900,
    "o3": 18.9698,
    "temp": 44.4
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420077900,
    "o3": 18.3208,
    "temp": 43.2
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 44.58
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420077900,
    "o3": 17.1847,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420077900,
    "o3": 13.8375,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420077900,
    "o3": 15.3344,
    "temp": 45.7
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420077900,
    "o3": 14.1098,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 44.1
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 44.04
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 44.1
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 45.05
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420077900,
    "o3": 12.5832,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420077900,
    "o3": 15.9248,
    "temp": 44.4
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420077900,
    "o3": 14.7161,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 44.4
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420077900,
    "o3": 14.415,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420077900,
    "o3": 18.65,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420077900,
    "o3": 14.15,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420077900,
    "o3": 17.6,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420077900,
    "o3": 15.9,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420077900,
    "o3": 16.55,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420077900,
    "o3": 16.3,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420077900,
    "o3": 14.25,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420077900,
    "o3": 16.15,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420077900,
    "o3": 16,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420077900,
    "o3": 18.25,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420077900,
    "o3": 14.9,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420077900,
    "o3": 15.85,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420077900,
    "o3": 21.5835,
    "temp": 45.7
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420077900,
    "o3": 18.814,
    "temp": 43.56
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420077900,
    "o3": 17.659,
    "temp": 44.8
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420077900,
    "o3": 17.1991,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420077900,
    "o3": 18.325,
    "temp": 44
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420077900,
    "o3": 17.2327,
    "temp": 46.1
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420077900,
    "o3": 18.0351,
    "temp": 43.9
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420077900,
    "o3": 16.4645,
    "temp": 44.5
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420077900,
    "o3": 19.7271,
    "temp": 44.81
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 45.23
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420077900,
    "o3": 21.6141,
    "temp": 38.51
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420077900,
    "o3": 4.61545,
    "temp": 42.2
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420077900,
    "o3": 13.0882,
    "temp": 30.87
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420077900,
    "o3": 16.5533,
    "temp": 34.35
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420077900,
    "o3": 20.4146,
    "temp": 44.4
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420077900,
    "o3": 21.8846,
    "temp": 45.57
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 48.1
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 44.9325
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420077900,
    "o3": 21.8354,
    "temp": 44.93
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420077900,
    "o3": 21.3139,
    "temp": 46.8
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420077900,
    "o3": 19.2633,
    "temp": 45.4
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420077900,
    "o3": 24.903,
    "temp": 46.2
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420077900,
    "o3": 20.6087,
    "temp": 44.7
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 44.2
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420077900,
    "o3": 8.88235,
    "temp": 31.43
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 33.99
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 30.67
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420077900,
    "o3": 14.9237,
    "temp": 37.1
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 44.1
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420077900,
    "o3": 20.671,
    "temp": 41.837
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420077900,
    "o3": 14.3227,
    "temp": 37.6
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 35.2
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 26.06
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420077900,
    "o3": 19.3578,
    "temp": 42.04
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420077900,
    "o3": 19.076,
    "temp": 42.764
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420077900,
    "o3": 17.5337,
    "temp": 38.1
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420077900,
    "o3": 18.3299,
    "temp": 43.4
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420077900,
    "o3": 16.9348,
    "temp": 43.76
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 45.87
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 45.5
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 45.8
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 45.5
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 44.3
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 44.3
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420077900,
    "o3": 15.0898,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420077900,
    "o3": 12.1361,
    "temp": 43.7
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420077900,
    "o3": 20.4335,
    "temp": 44.79
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420077900,
    "o3": 20.5951,
    "temp": 44.4
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 26.92
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420077900,
    "o3": 17.11,
    "temp": 26.7
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 29.2
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 14.19
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420077900,
    "o3": 16.2847,
    "temp": 34.2
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 44.9
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420077900,
    "o3": 15.7,
    "temp": 43.4
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420077900,
    "o3": 18.6,
    "temp": 43.8
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420077900,
    "o3": 20.9368,
    "temp": 38.02
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420077900,
    "o3": 16.4513,
    "temp": 31
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420077900,
    "o3": 13.0703,
    "temp": 31.8
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 32.55
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 34.7
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 34.11
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 32.37
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 31.53
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420077900,
    "o3": 12.9906,
    "temp": 31.2
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420077900,
    "o3": 16.0462,
    "temp": 33.19
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420077900,
    "o3": 10.6234,
    "temp": 33.5
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 20.22
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420077900,
    "o3": 8.75291,
    "temp": 37.63
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420077900,
    "o3": 9.1737,
    "temp": 35.56
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 39.8
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 40.5
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 38.65
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420077900,
    "o3": 19.397,
    "temp": 44.46
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420077900,
    "o3": 8.07777,
    "temp": 22.92
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 41.4
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 25.29
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 40.6
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 29.21
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420077900,
    "o3": 0,
    "temp": 31.48
  },
  {
    "siteID": "48_027_1045",
    "epoch": 1420078200,
    "o3": 10.6167,
    "temp": 37.59
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420078200,
    "o3": 10.3472,
    "temp": 35.71
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420078200,
    "o3": 13.6692,
    "temp": 37.88
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 40.1
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420078200,
    "o3": 10.988,
    "temp": 36.85
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420078200,
    "o3": 9.41208,
    "temp": 40.3
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420078200,
    "o3": 12.5059,
    "temp": 41.44
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 34.2
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420078200,
    "o3": 11.2587,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 40.3
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 39.63
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420078200,
    "o3": 15.9726,
    "temp": 45.5
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420078200,
    "o3": 19.7426,
    "temp": 46.2
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 47.5
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420078200,
    "o3": 15.1865,
    "temp": 44.85
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 46
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420078200,
    "o3": 15.0928,
    "temp": 45.4
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420078200,
    "o3": 16.55,
    "temp": 25.4
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420078200,
    "o3": 2.84073,
    "temp": 45
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420078200,
    "o3": 15.8114,
    "temp": 43.48
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 48.4
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 14.3
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 14.3
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 14.5
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420078200,
    "o3": 14.2506,
    "temp": 32.08
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 33.65
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 31.06
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 35.5
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420078200,
    "o3": 11.9301,
    "temp": 35.6
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420078200,
    "o3": 10.3033,
    "temp": 33.9
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420078200,
    "o3": 9.01954,
    "temp": 34.3
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 34.59
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 35.06
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 35.51
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420078200,
    "o3": 9.81639,
    "temp": 32.1
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 32.99
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 31.82
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420078200,
    "o3": 16.3599,
    "temp": 31.5
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 19.5
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 19.7
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420078200,
    "o3": 12.5949,
    "temp": 34
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420078200,
    "o3": 11.7316,
    "temp": 35.6
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420078200,
    "o3": 13.0209,
    "temp": 29.8
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420078200,
    "o3": 16.4561,
    "temp": 30
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420078200,
    "o3": 17.8211,
    "temp": 29.8
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 29.12
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 27.1
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420078200,
    "o3": 13.3477,
    "temp": 29.7
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420078200,
    "o3": 14.8249,
    "temp": 28.39
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420078200,
    "o3": 19.8489,
    "temp": 28.7
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 40.8
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420078200,
    "o3": 14.304,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 45.86
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420078200,
    "o3": 22.25,
    "temp": 44.65
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420078200,
    "o3": 16.218,
    "temp": 45.513
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420078200,
    "o3": 19.857,
    "temp": 45.8
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420078200,
    "o3": 19.6041,
    "temp": 38.27
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420078200,
    "o3": 18.2167,
    "temp": 43.76
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420078200,
    "o3": 17.8895,
    "temp": 44.3
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420078200,
    "o3": 18.9275,
    "temp": 43.2
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 44.45
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420078200,
    "o3": 17.0848,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420078200,
    "o3": 15.0569,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420078200,
    "o3": 15.1852,
    "temp": 45.7
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420078200,
    "o3": 13.6035,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 44.1
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 44.06
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 44.1
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 45.01
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420078200,
    "o3": 12.4406,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420078200,
    "o3": 15.5471,
    "temp": 44.4
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420078200,
    "o3": 15.7637,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 44.3
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420078200,
    "o3": 15.1719,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420078200,
    "o3": 18.65,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420078200,
    "o3": 14.15,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420078200,
    "o3": 17.15,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420078200,
    "o3": 16.4,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420078200,
    "o3": 12.25,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420078200,
    "o3": 16.65,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420078200,
    "o3": 15.05,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420078200,
    "o3": 16.15,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420078200,
    "o3": 15.5,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420078200,
    "o3": 18.9,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420078200,
    "o3": 14.95,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420078200,
    "o3": 15.95,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420078200,
    "o3": 21.5329,
    "temp": 45.7
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420078200,
    "o3": 18.311,
    "temp": 43.586
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420078200,
    "o3": 17.5575,
    "temp": 44.7
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420078200,
    "o3": 15.8166,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420078200,
    "o3": 18.6723,
    "temp": 44
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420078200,
    "o3": 16.4241,
    "temp": 46.1
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420078200,
    "o3": 17.9856,
    "temp": 43.8
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420078200,
    "o3": 16.6575,
    "temp": 44.5
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420078200,
    "o3": 20.2202,
    "temp": 44.79
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 45.58
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420078200,
    "o3": 21.1154,
    "temp": 38.51
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420078200,
    "o3": 4.51654,
    "temp": 42.1
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420078200,
    "o3": 12.6034,
    "temp": 30.86
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420078200,
    "o3": 16.5533,
    "temp": 34.37
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420078200,
    "o3": 19.9246,
    "temp": 44.45
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420078200,
    "o3": 21.391,
    "temp": 45.56
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 48.4
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 44.8785
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420078200,
    "o3": 21.8354,
    "temp": 44.91
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420078200,
    "o3": 25.5567,
    "temp": 46.7
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420078200,
    "o3": 18.5479,
    "temp": 45.4
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420078200,
    "o3": 25.8467,
    "temp": 46.4
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420078200,
    "o3": 21.6524,
    "temp": 44.7
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 44.2
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420078200,
    "o3": 9.8879,
    "temp": 31.4
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 33.88
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 30.7
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420078200,
    "o3": 14.8749,
    "temp": 37.2
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 44.2
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420078200,
    "o3": 20.909,
    "temp": 41.865
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420078200,
    "o3": 14.4705,
    "temp": 37.5
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 35.3
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 26.19
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420078200,
    "o3": 18.9559,
    "temp": 41.95
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420078200,
    "o3": 18.995,
    "temp": 42.753
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420078200,
    "o3": 17.4377,
    "temp": 38.2
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420078200,
    "o3": 18.4814,
    "temp": 43.4
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420078200,
    "o3": 16.9348,
    "temp": 43.75
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 45.9
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 44.2
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 44.3
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420078200,
    "o3": 14.8888,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420078200,
    "o3": 12.437,
    "temp": 43.7
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420078200,
    "o3": 20.4335,
    "temp": 44.78
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420078200,
    "o3": 20.5951,
    "temp": 44.4
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 26.65
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420078200,
    "o3": 16.6239,
    "temp": 26.6
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 29.2
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 14.26
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420078200,
    "o3": 16.4322,
    "temp": 34.1
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420078200,
    "o3": 15.6,
    "temp": 43.4
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420078200,
    "o3": 17.4,
    "temp": 43.9
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420078200,
    "o3": 20.4177,
    "temp": 38.06
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420078200,
    "o3": 16.156,
    "temp": 31
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420078200,
    "o3": 12.7725,
    "temp": 31.7
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 32.54
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 34.79
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 34.22
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 32.33
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 31.43
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420078200,
    "o3": 13.2837,
    "temp": 31.3
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420078200,
    "o3": 16.5477,
    "temp": 33.17
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420078200,
    "o3": 10.2693,
    "temp": 33.5
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 19.78
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420078200,
    "o3": 8.75291,
    "temp": 37.49
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420078200,
    "o3": 9.49248,
    "temp": 35.56
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 39.7
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 40.6
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 38.61
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420078200,
    "o3": 18.5506,
    "temp": 44.51
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420078200,
    "o3": 7.66175,
    "temp": 22.12
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 41.11
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 25.12
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 40.6
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 29.2
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420078200,
    "o3": 0,
    "temp": 31.62
  },
  {
    "siteID": "48_027_1045",
    "epoch": 1420078500,
    "o3": 9.61597,
    "temp": 37.35
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420078500,
    "o3": 10.1943,
    "temp": 35.71
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420078500,
    "o3": 13.9217,
    "temp": 37.82
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 40.2
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420078500,
    "o3": 12.4707,
    "temp": 36.79
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420078500,
    "o3": 9.13525,
    "temp": 40.3
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420078500,
    "o3": 12.9932,
    "temp": 41.68
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 34.1
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420078500,
    "o3": 11.0638,
    "temp": 40.3
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 40.4
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 40.1
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 39.55
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420078500,
    "o3": 16.3594,
    "temp": 45.5
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420078500,
    "o3": 19.3141,
    "temp": 46.1
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 47.5
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420078500,
    "o3": 15.6817,
    "temp": 44.84
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 46.1
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420078500,
    "o3": 15.3416,
    "temp": 45.4
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420078500,
    "o3": 16.8,
    "temp": 25.4
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420078500,
    "o3": 2.53455,
    "temp": 44.9
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420078500,
    "o3": 16.1642,
    "temp": 43.49
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 48.4
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 14.4
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 14.4
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 14.5
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 45.4
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420078500,
    "o3": 14.2506,
    "temp": 32.22
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 33.68
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 30.9
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 35.4
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420078500,
    "o3": 11.5767,
    "temp": 35.6
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420078500,
    "o3": 11.5578,
    "temp": 33.9
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420078500,
    "o3": 9.59019,
    "temp": 34.4
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 34.65
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 35.03
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 35.58
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420078500,
    "o3": 14.1719,
    "temp": 32.1
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 32.95
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 31.8
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420078500,
    "o3": 16.3112,
    "temp": 31.5
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 19.5
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 19.5
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420078500,
    "o3": 12.1903,
    "temp": 34
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420078500,
    "o3": 11.8229,
    "temp": 35.6
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420078500,
    "o3": 13.1721,
    "temp": 29.6
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420078500,
    "o3": 16.6034,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420078500,
    "o3": 18.1223,
    "temp": 29.9
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 29.04
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 27.1
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420078500,
    "o3": 13.7915,
    "temp": 29.7
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420078500,
    "o3": 13.6376,
    "temp": 28.88
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420078500,
    "o3": 18.9594,
    "temp": 28.8
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 40.8
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420078500,
    "o3": 13.374,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 45.88
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420078500,
    "o3": 21.88,
    "temp": 44.65
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420078500,
    "o3": 16.151,
    "temp": 45.537
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420078500,
    "o3": 18.6586,
    "temp": 45.8
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420078500,
    "o3": 19.6041,
    "temp": 38.27
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420078500,
    "o3": 17.9191,
    "temp": 43.74
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420078500,
    "o3": 18.7243,
    "temp": 44.2
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420078500,
    "o3": 19.2815,
    "temp": 43.1
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 44.42
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420078500,
    "o3": 17.1847,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420078500,
    "o3": 14.0915,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420078500,
    "o3": 16.1301,
    "temp": 45.6
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420078500,
    "o3": 14.3124,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 44.2
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 44.07
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 44.1
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 44.97
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420078500,
    "o3": 13.3915,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420078500,
    "o3": 14.7446,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420078500,
    "o3": 14.6662,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 44.4
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420078500,
    "o3": 14.97,
    "temp": 44.7
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420078500,
    "o3": 18.7,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420078500,
    "o3": 13.7,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420078500,
    "o3": 17.3,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420078500,
    "o3": 16.1,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420078500,
    "o3": 14.55,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420078500,
    "o3": 16.45,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420078500,
    "o3": 15.25,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420078500,
    "o3": 16.7,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420078500,
    "o3": 15.55,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420078500,
    "o3": 18.35,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420078500,
    "o3": 15.3,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420078500,
    "o3": 16.15,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420078500,
    "o3": 21.1275,
    "temp": 45.7
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420078500,
    "o3": 18.721,
    "temp": 43.586
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420078500,
    "o3": 17.1516,
    "temp": 44.7
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420078500,
    "o3": 14.9278,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420078500,
    "o3": 18.325,
    "temp": 44
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420078500,
    "o3": 16.879,
    "temp": 46.1
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420078500,
    "o3": 17.59,
    "temp": 43.9
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420078500,
    "o3": 17.4293,
    "temp": 44.4
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420078500,
    "o3": 20.2202,
    "temp": 44.81
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 45.69
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420078500,
    "o3": 22.1129,
    "temp": 38.51
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420078500,
    "o3": 4.21984,
    "temp": 42.1
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420078500,
    "o3": 12.6034,
    "temp": 30.92
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420078500,
    "o3": 16.0664,
    "temp": 34.33
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420078500,
    "o3": 20.9045,
    "temp": 44.37
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420078500,
    "o3": 21.8846,
    "temp": 45.55
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 48.6
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 44.8518
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420078500,
    "o3": 21.3429,
    "temp": 44.92
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420078500,
    "o3": 25.407,
    "temp": 46.6
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420078500,
    "o3": 19.5187,
    "temp": 45.4
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420078500,
    "o3": 25.8964,
    "temp": 46.5
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420078500,
    "o3": 20.8572,
    "temp": 44.7
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 44.2
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420078500,
    "o3": 9.8879,
    "temp": 31.36
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 33.82
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 30.7
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420078500,
    "o3": 15.1675,
    "temp": 37.1
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 44.3
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420078500,
    "o3": 20.754,
    "temp": 41.855
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420078500,
    "o3": 14.7169,
    "temp": 37.4
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 35.3
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 26.28
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420078500,
    "o3": 18.8555,
    "temp": 41.99
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420078500,
    "o3": 19.385,
    "temp": 42.779
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420078500,
    "o3": 17.1017,
    "temp": 38
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420078500,
    "o3": 18.6834,
    "temp": 43.3
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420078500,
    "o3": 16.9348,
    "temp": 43.73
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 45.21
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 44.6
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 45.7
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 44.3
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 44.3
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420078500,
    "o3": 14.5873,
    "temp": 45.4
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420078500,
    "o3": 13.8412,
    "temp": 43.7
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420078500,
    "o3": 19.4448,
    "temp": 44.82
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420078500,
    "o3": 19.5653,
    "temp": 44.4
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 26.86
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420078500,
    "o3": 16.7697,
    "temp": 26.7
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 29.24
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 14.32
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420078500,
    "o3": 16.039,
    "temp": 34.2
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420078500,
    "o3": 15.9,
    "temp": 43.4
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420078500,
    "o3": 17.4,
    "temp": 43.9
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420078500,
    "o3": 19.8986,
    "temp": 38.13
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420078500,
    "o3": 15.7624,
    "temp": 31.1
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420078500,
    "o3": 11.3331,
    "temp": 31.8
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 32.64
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 35.02
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 34.12
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 32.33
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 31.51
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420078500,
    "o3": 12.893,
    "temp": 31.4
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420078500,
    "o3": 16.5477,
    "temp": 33.17
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420078500,
    "o3": 9.5611,
    "temp": 33.7
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 19.81
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420078500,
    "o3": 9.25789,
    "temp": 37.5
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420078500,
    "o3": 8.8018,
    "temp": 35.56
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 39.6
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 40.2
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 38.63
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420078500,
    "o3": 18.8151,
    "temp": 44.54
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420078500,
    "o3": 7.55774,
    "temp": 23.12
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 40.98
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 25.25
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 40.6
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 29.01
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420078500,
    "o3": 0,
    "temp": 31.56
  },
  {
    "siteID": "48_027_1045",
    "epoch": 1420078800,
    "o3": 9.11562,
    "temp": 37.28
  },
  {
    "siteID": "48_027_1047",
    "epoch": 1420078800,
    "o3": 10.1943,
    "temp": 35.71
  },
  {
    "siteID": "48_029_0032",
    "epoch": 1420078800,
    "o3": 13.8207,
    "temp": 37.78
  },
  {
    "siteID": "48_029_0051",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 40.4
  },
  {
    "siteID": "48_029_0052",
    "epoch": 1420078800,
    "o3": 10.1479,
    "temp": 36.68
  },
  {
    "siteID": "48_029_0053",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_029_0055",
    "epoch": 1420078800,
    "o3": 9.16492,
    "temp": 40.3
  },
  {
    "siteID": "48_029_0059",
    "epoch": 1420078800,
    "o3": 12.9932,
    "temp": 41.68
  },
  {
    "siteID": "48_029_0502",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 34
  },
  {
    "siteID": "48_029_0622",
    "epoch": 1420078800,
    "o3": 11.3075,
    "temp": 40.3
  },
  {
    "siteID": "48_029_0676",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 40.4
  },
  {
    "siteID": "48_029_0677",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 40
  },
  {
    "siteID": "48_029_1069",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 39.72
  },
  {
    "siteID": "48_039_0618",
    "epoch": 1420078800,
    "o3": 16.021,
    "temp": 45.5
  },
  {
    "siteID": "48_039_0619",
    "epoch": 1420078800,
    "o3": 19.3141,
    "temp": 46.1
  },
  {
    "siteID": "48_039_1003",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 47.5
  },
  {
    "siteID": "48_039_1004",
    "epoch": 1420078800,
    "o3": 15.1865,
    "temp": 44.81
  },
  {
    "siteID": "48_039_1012",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 46.1
  },
  {
    "siteID": "48_039_1016",
    "epoch": 1420078800,
    "o3": 14.7445,
    "temp": 45.4
  },
  {
    "siteID": "48_043_0101",
    "epoch": 1420078800,
    "o3": 16.6,
    "temp": 25.4
  },
  {
    "siteID": "48_061_0006",
    "epoch": 1420078800,
    "o3": 2.33042,
    "temp": 44.9
  },
  {
    "siteID": "48_061_1023",
    "epoch": 1420078800,
    "o3": 16.6179,
    "temp": 43.48
  },
  {
    "siteID": "48_061_2004",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 48.4
  },
  {
    "siteID": "48_065_0004",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 14.3
  },
  {
    "siteID": "48_065_0005",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 14.4
  },
  {
    "siteID": "48_065_0007",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 14.5
  },
  {
    "siteID": "48_071_0013",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_085_0005",
    "epoch": 1420078800,
    "o3": 14.2506,
    "temp": 32.3
  },
  {
    "siteID": "48_085_0009",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 33.63
  },
  {
    "siteID": "48_097_1504",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 30.83
  },
  {
    "siteID": "48_113_0050",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 35.4
  },
  {
    "siteID": "48_113_0069",
    "epoch": 1420078800,
    "o3": 11.6777,
    "temp": 35.6
  },
  {
    "siteID": "48_113_0075",
    "epoch": 1420078800,
    "o3": 12.3105,
    "temp": 33.9
  },
  {
    "siteID": "48_113_0087",
    "epoch": 1420078800,
    "o3": 10.3986,
    "temp": 34.4
  },
  {
    "siteID": "48_113_1067",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 34.54
  },
  {
    "siteID": "48_113_1500",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 35.03
  },
  {
    "siteID": "48_113_1505",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 35.84
  },
  {
    "siteID": "48_121_0034",
    "epoch": 1420078800,
    "o3": 11.6972,
    "temp": 31.9
  },
  {
    "siteID": "48_121_1007",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 32.99
  },
  {
    "siteID": "48_121_1013",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 31.85
  },
  {
    "siteID": "48_121_1032",
    "epoch": 1420078800,
    "o3": 15.9221,
    "temp": 31.6
  },
  {
    "siteID": "48_135_0003",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 19.7
  },
  {
    "siteID": "48_135_1014",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 19.5
  },
  {
    "siteID": "48_139_0016",
    "epoch": 1420078800,
    "o3": 12.2914,
    "temp": 34
  },
  {
    "siteID": "48_139_1044",
    "epoch": 1420078800,
    "o3": 11.6859,
    "temp": 35.6
  },
  {
    "siteID": "48_141_0029",
    "epoch": 1420078800,
    "o3": 12.4664,
    "temp": 29.3
  },
  {
    "siteID": "48_141_0037",
    "epoch": 1420078800,
    "o3": 16.5543,
    "temp": 30
  },
  {
    "siteID": "48_141_0044",
    "epoch": 1420078800,
    "o3": 18.2227,
    "temp": 30
  },
  {
    "siteID": "48_141_0047",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 29.14
  },
  {
    "siteID": "48_141_0054",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 27.1
  },
  {
    "siteID": "48_141_0055",
    "epoch": 1420078800,
    "o3": 13.9888,
    "temp": 29.7
  },
  {
    "siteID": "48_141_0057",
    "epoch": 1420078800,
    "o3": 15.3196,
    "temp": 29.48
  },
  {
    "siteID": "48_141_0058",
    "epoch": 1420078800,
    "o3": 19.1076,
    "temp": 28.8
  },
  {
    "siteID": "48_141_1021",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_149_0001",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 40.8
  },
  {
    "siteID": "48_157_0696",
    "epoch": 1420078800,
    "o3": 12.739,
    "temp": 0
  },
  {
    "siteID": "48_167_0005",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 45.88
  },
  {
    "siteID": "48_167_0056",
    "epoch": 1420078800,
    "o3": 22.32,
    "temp": 44.53
  },
  {
    "siteID": "48_167_0697",
    "epoch": 1420078800,
    "o3": 16.889,
    "temp": 45.556
  },
  {
    "siteID": "48_167_1034",
    "epoch": 1420078800,
    "o3": 20.2066,
    "temp": 45.7
  },
  {
    "siteID": "48_183_0001",
    "epoch": 1420078800,
    "o3": 19.6041,
    "temp": 38.26
  },
  {
    "siteID": "48_201_0024",
    "epoch": 1420078800,
    "o3": 16.9273,
    "temp": 43.78
  },
  {
    "siteID": "48_201_0026",
    "epoch": 1420078800,
    "o3": 19.3626,
    "temp": 44.3
  },
  {
    "siteID": "48_201_0029",
    "epoch": 1420078800,
    "o3": 19.0287,
    "temp": 43.1
  },
  {
    "siteID": "48_201_0036",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 44.41
  },
  {
    "siteID": "48_201_0046",
    "epoch": 1420078800,
    "o3": 16.2855,
    "temp": 0
  },
  {
    "siteID": "48_201_0047",
    "epoch": 1420078800,
    "o3": 13.8883,
    "temp": 0
  },
  {
    "siteID": "48_201_0051",
    "epoch": 1420078800,
    "o3": 14.29,
    "temp": 45.6
  },
  {
    "siteID": "48_201_0055",
    "epoch": 1420078800,
    "o3": 15.2744,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0057",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 44.2
  },
  {
    "siteID": "48_201_0058",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 44.06
  },
  {
    "siteID": "48_201_0060",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 44.1
  },
  {
    "siteID": "48_201_0061",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 44.99
  },
  {
    "siteID": "48_201_0062",
    "epoch": 1420078800,
    "o3": 12.3931,
    "temp": 0
  },
  {
    "siteID": "48_201_0066",
    "epoch": 1420078800,
    "o3": 15.6415,
    "temp": 44.4
  },
  {
    "siteID": "48_201_0069",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 44.4
  },
  {
    "siteID": "48_201_0075",
    "epoch": 1420078800,
    "o3": 15.3646,
    "temp": 0
  },
  {
    "siteID": "48_201_0307",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 44.4
  },
  {
    "siteID": "48_201_0416",
    "epoch": 1420078800,
    "o3": 15.6765,
    "temp": 44.6
  },
  {
    "siteID": "48_201_0551",
    "epoch": 1420078800,
    "o3": 18.4,
    "temp": 0
  },
  {
    "siteID": "48_201_0552",
    "epoch": 1420078800,
    "o3": 14,
    "temp": 0
  },
  {
    "siteID": "48_201_0553",
    "epoch": 1420078800,
    "o3": 17.2,
    "temp": 0
  },
  {
    "siteID": "48_201_0554",
    "epoch": 1420078800,
    "o3": 16.25,
    "temp": 0
  },
  {
    "siteID": "48_201_0556",
    "epoch": 1420078800,
    "o3": 17.4,
    "temp": 0
  },
  {
    "siteID": "48_201_0557",
    "epoch": 1420078800,
    "o3": 16.35,
    "temp": 0
  },
  {
    "siteID": "48_201_0558",
    "epoch": 1420078800,
    "o3": 15,
    "temp": 0
  },
  {
    "siteID": "48_201_0559",
    "epoch": 1420078800,
    "o3": 16.7,
    "temp": 0
  },
  {
    "siteID": "48_201_0560",
    "epoch": 1420078800,
    "o3": 16,
    "temp": 0
  },
  {
    "siteID": "48_201_0561",
    "epoch": 1420078800,
    "o3": 18.8,
    "temp": 0
  },
  {
    "siteID": "48_201_0562",
    "epoch": 1420078800,
    "o3": 14.5,
    "temp": 0
  },
  {
    "siteID": "48_201_0563",
    "epoch": 1420078800,
    "o3": 15.95,
    "temp": 0
  },
  {
    "siteID": "48_201_0617",
    "epoch": 1420078800,
    "o3": 21.2795,
    "temp": 45.6
  },
  {
    "siteID": "48_201_0695",
    "epoch": 1420078800,
    "o3": 18.585,
    "temp": 43.548
  },
  {
    "siteID": "48_201_0803",
    "epoch": 1420078800,
    "o3": 17.862,
    "temp": 44.7
  },
  {
    "siteID": "48_201_1015",
    "epoch": 1420078800,
    "o3": 16.3103,
    "temp": 0
  },
  {
    "siteID": "48_201_1017",
    "epoch": 1420078800,
    "o3": 18.0273,
    "temp": 43.9
  },
  {
    "siteID": "48_201_1034",
    "epoch": 1420078800,
    "o3": 15.8683,
    "temp": 46.2
  },
  {
    "siteID": "48_201_1035",
    "epoch": 1420078800,
    "o3": 17.7383,
    "temp": 43.8
  },
  {
    "siteID": "48_201_1039",
    "epoch": 1420078800,
    "o3": 17.3328,
    "temp": 44.4
  },
  {
    "siteID": "48_201_1042",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_201_1043",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 44.8
  },
  {
    "siteID": "48_201_1049",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_201_1050",
    "epoch": 1420078800,
    "o3": 20.2202,
    "temp": 44.9
  },
  {
    "siteID": "48_201_1066",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 45.69
  },
  {
    "siteID": "48_201_6000",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_203_0002",
    "epoch": 1420078800,
    "o3": 21.6141,
    "temp": 38.48
  },
  {
    "siteID": "48_215_0043",
    "epoch": 1420078800,
    "o3": 4.31874,
    "temp": 42.1
  },
  {
    "siteID": "48_221_0001",
    "epoch": 1420078800,
    "o3": 12.1187,
    "temp": 30.95
  },
  {
    "siteID": "48_231_1006",
    "epoch": 1420078800,
    "o3": 16.5533,
    "temp": 34.27
  },
  {
    "siteID": "48_245_0009",
    "epoch": 1420078800,
    "o3": 19.9246,
    "temp": 44.35
  },
  {
    "siteID": "48_245_0011",
    "epoch": 1420078800,
    "o3": 21.391,
    "temp": 45.52
  },
  {
    "siteID": "48_245_0014",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 48.4
  },
  {
    "siteID": "48_245_0017",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 44.873
  },
  {
    "siteID": "48_245_0018",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_245_0019",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_245_0021",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_245_0022",
    "epoch": 1420078800,
    "o3": 21.8354,
    "temp": 44.91
  },
  {
    "siteID": "48_245_0101",
    "epoch": 1420078800,
    "o3": 21.264,
    "temp": 46.5
  },
  {
    "siteID": "48_245_0102",
    "epoch": 1420078800,
    "o3": 19.11,
    "temp": 45.4
  },
  {
    "siteID": "48_245_0628",
    "epoch": 1420078800,
    "o3": 25.1513,
    "temp": 46.6
  },
  {
    "siteID": "48_245_1035",
    "epoch": 1420078800,
    "o3": 21.3542,
    "temp": 44.6
  },
  {
    "siteID": "48_245_1050",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 44.2
  },
  {
    "siteID": "48_251_0003",
    "epoch": 1420078800,
    "o3": 8.88235,
    "temp": 31.42
  },
  {
    "siteID": "48_251_1063",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 33.84
  },
  {
    "siteID": "48_251_1501",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 30.73
  },
  {
    "siteID": "48_257_0005",
    "epoch": 1420078800,
    "o3": 14.9724,
    "temp": 37.1
  },
  {
    "siteID": "48_273_0314",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_291_0699",
    "epoch": 1420078800,
    "o3": 20.708,
    "temp": 41.837
  },
  {
    "siteID": "48_309_1037",
    "epoch": 1420078800,
    "o3": 14.569,
    "temp": 37.5
  },
  {
    "siteID": "48_323_0004",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 35.3
  },
  {
    "siteID": "48_337_1507",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 26.24
  },
  {
    "siteID": "48_339_0078",
    "epoch": 1420078800,
    "o3": 18.9559,
    "temp": 41.94
  },
  {
    "siteID": "48_339_0698",
    "epoch": 1420078800,
    "o3": 19.218,
    "temp": 42.777
  },
  {
    "siteID": "48_349_1051",
    "epoch": 1420078800,
    "o3": 17.0537,
    "temp": 38
  },
  {
    "siteID": "48_355_0025",
    "epoch": 1420078800,
    "o3": 18.6329,
    "temp": 43.4
  },
  {
    "siteID": "48_355_0026",
    "epoch": 1420078800,
    "o3": 16.4318,
    "temp": 43.67
  },
  {
    "siteID": "48_355_0029",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 44.7
  },
  {
    "siteID": "48_355_0032",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 45.7
  },
  {
    "siteID": "48_355_0034",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_355_0035",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 45.1
  },
  {
    "siteID": "48_355_0036",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 45.7
  },
  {
    "siteID": "48_355_0037",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 45.3
  },
  {
    "siteID": "48_355_0039",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 44.2
  },
  {
    "siteID": "48_355_0041",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 44.3
  },
  {
    "siteID": "48_355_0083",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 45
  },
  {
    "siteID": "48_355_0660",
    "epoch": 1420078800,
    "o3": 15.0898,
    "temp": 45.2
  },
  {
    "siteID": "48_355_0664",
    "epoch": 1420078800,
    "o3": 14.1421,
    "temp": 43.7
  },
  {
    "siteID": "48_355_1024",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 44.5
  },
  {
    "siteID": "48_361_1001",
    "epoch": 1420078800,
    "o3": 18.9504,
    "temp": 44.91
  },
  {
    "siteID": "48_361_1100",
    "epoch": 1420078800,
    "o3": 19.6144,
    "temp": 44.4
  },
  {
    "siteID": "48_363_1502",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 26.82
  },
  {
    "siteID": "48_367_0081",
    "epoch": 1420078800,
    "o3": 16.235,
    "temp": 26.6
  },
  {
    "siteID": "48_367_1506",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 29.25
  },
  {
    "siteID": "48_375_0320",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_375_1025",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 14.38
  },
  {
    "siteID": "48_397_0001",
    "epoch": 1420078800,
    "o3": 16.039,
    "temp": 34.2
  },
  {
    "siteID": "48_409_0659",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 45.2
  },
  {
    "siteID": "48_409_0685",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_409_0686",
    "epoch": 1420078800,
    "o3": 15.8,
    "temp": 43.4
  },
  {
    "siteID": "48_409_0687",
    "epoch": 1420078800,
    "o3": 18.2,
    "temp": 43.9
  },
  {
    "siteID": "48_423_0007",
    "epoch": 1420078800,
    "o3": 19.3795,
    "temp": 38.11
  },
  {
    "siteID": "48_439_0075",
    "epoch": 1420078800,
    "o3": 15.1227,
    "temp": 31
  },
  {
    "siteID": "48_439_1002",
    "epoch": 1420078800,
    "o3": 9.54627,
    "temp": 31.8
  },
  {
    "siteID": "48_439_1006",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_439_1009",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 32.57
  },
  {
    "siteID": "48_439_1018",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 35.03
  },
  {
    "siteID": "48_439_1062",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 34.16
  },
  {
    "siteID": "48_439_1065",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 32.4
  },
  {
    "siteID": "48_439_1503",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 31.67
  },
  {
    "siteID": "48_439_2003",
    "epoch": 1420078800,
    "o3": 13.1371,
    "temp": 31.4
  },
  {
    "siteID": "48_439_3009",
    "epoch": 1420078800,
    "o3": 16.5477,
    "temp": 33.23
  },
  {
    "siteID": "48_439_3011",
    "epoch": 1420078800,
    "o3": 10.3199,
    "temp": 33.6
  },
  {
    "siteID": "48_441_1509",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 19.81
  },
  {
    "siteID": "48_453_0014",
    "epoch": 1420078800,
    "o3": 8.75291,
    "temp": 37.49
  },
  {
    "siteID": "48_453_0020",
    "epoch": 1420078800,
    "o3": 9.38622,
    "temp": 35.48
  },
  {
    "siteID": "48_453_0021",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 39.7
  },
  {
    "siteID": "48_453_0326",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 40.4
  },
  {
    "siteID": "48_453_1026",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_453_1068",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 38.52
  },
  {
    "siteID": "48_469_0003",
    "epoch": 1420078800,
    "o3": 19.397,
    "temp": 44.49
  },
  {
    "siteID": "48_479_0016",
    "epoch": 1420078800,
    "o3": 7.34973,
    "temp": 26.9
  },
  {
    "siteID": "48_479_0017",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 41.09
  },
  {
    "siteID": "48_479_0313",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 0
  },
  {
    "siteID": "48_485_1508",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 25.39
  },
  {
    "siteID": "48_493_1038",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 40.5
  },
  {
    "siteID": "48_497_0088",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 29.27
  },
  {
    "siteID": "48_497_1064",
    "epoch": 1420078800,
    "o3": 0,
    "temp": 31.38
  }
];
         //loop through each site and insert into the database
        _.each(HistoryData, function(aHistory) {
            History.insert(aHistory);
        });
        
        History._ensureIndex({siteID: '2d'});
        
    }
        
});
        