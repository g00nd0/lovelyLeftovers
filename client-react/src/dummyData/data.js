export const userData = [
  {
    _id: "Z",
    firstName: "Simon",
    lastName: "Lau",
    organisation: "General Assembly Hungry",
    contactNum: "99998888",
    email: "simonlau@ga.com",
    username: "simonlau",
    password: "1234",
    type: "contributor",
    contributeList: ["1"],
    myCart: [],
    receivedList: [],
    createdAt: 1029301932010,
    imgFile: "",
    status: "active",
  },
  {
    _id: "A",
    firstName: "Nausheen",
    lastName: "yoyo",
    organisation: "",
    contactNum: "88887777",
    email: "nausheen@ga.com",
    username: "nausheen",
    password: "1234",
    type: "recipient",
    contributeList: [],
    myCart: [],
    receivedList: ["a", "b"],
    createdAt: 1012313452,
    imgFile: "",
    status: "active",
  },
  {
    _id: "B",
    firstName: "Mitch",
    lastName: "Goon",
    organisation: "",
    contactNum: "77776666",
    email: "mitchg@heavymetal.com",
    username: "mitchg",
    password: "1234",
    type: "contributor",
    contributeList: ["0"],
    myCart: [],
    receivedList: [],
    createdAt: 1000333421,
    imgFile: "",
    status: "active",
  },
  {
    _id: "C",
    firstName: "Renice",
    lastName: "Goh",
    organisation: "Save the Hangries",
    contactNum: "66665555",
    email: "reniceg@coding.com",
    username: "reniceg",
    password: "1234",
    type: "contributor",
    contributeList: [],
    myCart: [],
    receivedList: [],
    createdAt: 1004444444,
    imgFile: "",
    status: "active",
  },
];

export const batchData = [
  {
    _id: "0",
    createdAt: 112039485,
    listingsCollection: ["a", "b"],
    contactPerson: "Gloria",
    contactNum: 98765432,
    collectionAdress: 513456,
    status: "active",
    Contributor: "2",
  },
  {
    _id: "1",
    createdAt: 112039486,
    listingsCollection: ["c"],
    contactPerson: "Bairong",
    contactNum: 91234567,
    collectionAdress: 123456,
    status: "active",
    Contributor: "0",
  },
  {
    _id: "2",
    createdAt: 112039485,
    listingsCollection: ["d"],
    contactPerson: "Gloria",
    contactNum: 98765432,
    collectionAdress: 513456,
    status: "active",
    Contributor: "B",
  },
];

export const listingData = [
  {
    _id: "a",
    title: "apple",
    quantity: "5",
    category: "fruit",
    isHalal: true,
    isVegetarian: true,
    description: "bright red pretty shinny fat round",
    bestBefore: "04/5/1960",
    image: "",
    status: "Active",
    recipient: "2",
    createdAt: 32523532523,
    batchID: "0",
  },
  {
    _id: "b",
    title: "pear",
    quantity: "5",
    category: "fruit",
    isHalal: true,
    isVegetarian: true,
    description: "bright green pretty shinny skinny shapy",
    bestBefore: "03/05/1955",
    image: "",
    status: "Active",
    recipient: "2",
    createdAt: 32523532523,
    batchID: "0",
  },
  {
    _id: "c",
    title: "durian",
    quantity: "5",
    category: "fruit",
    isHalal: true,
    isVegetarian: true,
    description: "dull spikey painful hard smelly",
    bestBefore: "01/5/1990",
    image: "",
    status: "Active",
    recipient: "",
    createdAt: 32523532523,
    batchID: "0",
  },
  {
    _id: "d",
    title: "mango",
    quantity: "1",
    category: "fruit",
    isHalal: true,
    isVegetarian: true,
    description: "dull spikey painful hard smelly",
    bestBefore: "01/5/1990",
    image: "",
    status: "Active",
    recipient: "",
    createdAt: 32523532523,
    batchID: "2",
  },
];
