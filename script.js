/**
 * ==========================================================================
 * NAMMA NAMAKKAL - DISTRICT INFORMATION & TOURISM PORTAL
 * Modular Vanilla JavaScript Application Logic
 * Pure ES6+ • Zero External Dependencies • Production Grade
 * ==========================================================================
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. DATA DEFINITIONS & KNOWLEDGE BASE
     ========================================================================== */

  // 8 Taluks of Namakkal District
  const taluksData = [
    {
      id: 'namakkal',
      name: 'Namakkal',
      nameTa: 'நாமக்கல்',
      hq: 'Namakkal Town',
      image: 'namakkal.jpg',
      desc: 'The administrative heart of the district, world-renowned for its 200-ft monolithic rock fort, sacred 18-ft Anjaneyar temple, and premier poultry export industry.',
      keyPlaces: 'Rock Fort, Anjaneyar Temple, Narasimha Cave, Kamalalayam Tank',
      highlights: [
        'Administrative Headquarters of the District',
        'Home to the historic 8th-century Adiyaman rock-cut temples',
        'National center for poultry farming and egg distribution',
        'Namakkal Kavignar Ramalingam Pillai Memorial Museum'
      ],
      population: '385,000 approx.',
      area: '488 sq. km'
    },
    {
      id: 'rasipuram',
      name: 'Rasipuram',
      nameTa: 'ராசிபுரம்',
      hq: 'Rasipuram Town',
      image: 'rasipuram.jpg',
      desc: 'Famed for authentic pure ghee, traditional silk weaving, ancient Kailasanathar temple, and prestigious higher educational institutions.',
      keyPlaces: 'Kailasanathar Temple, Rasipuram Ghee Market, Vennandur Weaving Clusters',
      highlights: [
        'Legendary "Rasipuram Nei" (pure aromatic ghee) trade hub',
        'Vibrant silk saree handloom and powerloom clusters',
        'Gateway town on the foothills leading towards Kolli Hills',
        'Centuries-old Chola-era Sri Kailasanathar temple'
      ],
      population: '260,000 approx.',
      area: '345 sq. km'
    },
    {
      id: 'tiruchengode',
      name: 'Tiruchengode',
      nameTa: 'திருச்செங்கோடு',
      hq: 'Tiruchengode Town',
      image: 'Tiruchengode.jpg',
      desc: 'Perched around the sacred red hill (Nagamalai), celebrated for the Arthanareeswarar temple, heavy borewell rig fabrication, and textile powerlooms.',
      keyPlaces: 'Arthanareeswarar Hill Temple, Kailasanathar Temple, Rig Drilling Hub',
      highlights: [
        'Sacred hilltop temple featuring the rare half-male, half-female deity form of Shiva-Parvati',
        'Global capital for deep-earth borewell rig vehicle assembly',
        'Extensive textile weaving and processing industries',
        'Historic Sangam literary references in Silappadikaram'
      ],
      population: '315,000 approx.',
      area: '412 sq. km'
    },
    {
      id: 'paramathi-velur',
      name: 'Paramathi-Velur',
      nameTa: 'பரமத்தி-வேலூர்',
      hq: 'Velur Town',
      image: 'paramathi-Velur.jpg',
      desc: 'Fertile riverine belt along the Kaveri, celebrated for betel vine plantations, banana groves, sugarcane cultivation, and the scenic Kabilarmalai Murugan temple.',
      keyPlaces: 'Kabilarmalai Murugan Temple, Kaveri River Canal Belt, Velur Betel Market',
      highlights: [
        'Prime agricultural basin watered by ancient Kaveri irrigation channels',
        'Major wholesale market for pungent Velur betel leaves',
        'Rock-hill shrine of Lord Murugan at Kabilarmalai',
        'Hub of jaggery, coconut, and sugarcane processing units'
      ],
      population: '210,000 approx.',
      area: '390 sq. km'
    },
    {
      id: 'kolli-hills',
      name: 'Kolli Hills (Kolli Malai)',
      nameTa: 'கொல்லிமலை',
      hq: 'Semmedu',
      image: 'kolli-hills.jpg',
      desc: 'Pristine mountain sanctuary in the Eastern Ghats rising 1,300m high, blessed with 70 hairpin curves, medicinal herb forests, and Agaya Gangai waterfalls.',
      keyPlaces: 'Agaya Gangai Falls, Arapaleeswarar Temple, Seekuparai Viewpoint, Botanical Garden',
      highlights: [
        '70 continuous exhilarating hairpin bends on the scenic ghat road',
        'Ancient seat of Sangam King Valvil Ori, famed for archery prowess',
        'Treasure trove of over 500 varieties of medicinal and aromatic herbs',
        'Spectacular 300-ft Agaya Gangai waterfall cascading through rocky gorges'
      ],
      population: '45,000 approx.',
      area: '280 sq. km'
    },
    {
      id: 'sendamangalam',
      name: 'Sendamangalam',
      nameTa: 'சேந்தமங்கலம்',
      hq: 'Sendamangalam Town',
      image: 'sendamangalam.jpg',
      desc: 'Serene agricultural heartland serving as the principal eastern gateway into the Kolli Hills ghat route, rich in tamarind and tapioca cultivation.',
      keyPlaces: 'Dattatreya Temple, Kolli Foothills Base, Agricultural Orchards',
      highlights: [
        'Strategic base town from where the Kolli Hills mountain road ascends',
        'Flourishing tapioca, groundnut, and tamarind harvesting belt',
        'Unique Sri Dattatreya Temple and scenic countryside landscapes',
        'Gateway for eco-tourists and spice traders'
      ],
      population: '165,000 approx.',
      area: '320 sq. km'
    },
    {
      id: 'kumarapalayam',
      name: 'Kumarapalayam',
      nameTa: 'குமாரபாளையம்',
      hq: 'Kumarapalayam Town',
      image: 'Kumarapalayam.jpg',
      desc: 'Known as the "Textile City", located on the banks of River Kaveri, humming with thousands of spinning mills, powerlooms, and garment dyeing units.',
      keyPlaces: 'Kaveri River Promenade, Powerloom Industrial Estate, Textile Markets',
      highlights: [
        'Dynamic industrial center manufacturing cotton towels, bedsheets, and garments',
        'Exporting fabrics to domestic and international markets',
        'Sister industrial city adjoining Bhavani across the Kaveri bridge',
        'Thriving engineering, spinning, and printing factories'
      ],
      population: '220,000 approx.',
      area: '185 sq. km'
    },
    {
      id: 'mohanur',
      name: 'Mohanur',
      nameTa: 'மோகனூர்',
      hq: 'Mohanur Town',
      image: 'Mohanur.jpg',
      desc: 'Peaceful temple township along the southern bank of River Kaveri, famed for sacred river bathing ghats, Subramaniaswamy temple, and cooperative sugar mills.',
      keyPlaces: 'Mohanur Kaveri Bathing Ghats, Achaldeepeswarar Temple, Mohanur Sugar Mills',
      highlights: [
        'Sacred spot for Aadi Perukku celebrations along the wide Kaveri waters',
        'Centuries-old Sri Achaldeepeswarar & Lord Subramaniaswamy temples',
        'Large-scale sugar manufacturing and molasses refining factories',
        'Scenic bridge connecting Namakkal directly to Karur district'
      ],
      population: '135,000 approx.',
      area: '265 sq. km'
    }
  ];

  // Places to Explore (Tourism Destinations)
  const placesData = [
    {
      id: 'namakkal-fort',
      name: 'Namakkal Rock Fort (Durgam)',
      category: 'heritage',
      location: 'Namakkal City Center',
      image: 'duragam.jpg',
      shortDesc: 'A colossal monolithic single rock fort standing 200 feet high, fortified by Madurai Nayaks and Tipu Sultan.',
      fullDesc: 'Rising dramatically from the plain, Namakkal Rock Fort covers an area of approximately 3.5 acres atop a single massive granitic monolith. Built in the 16th century by Ramachandra Nayakar and later reinforced by Hyder Ali and Tipu Sultan, it houses historic stone ramparts, watchtowers, and a rock-cut freshwater pool that never dries up.',
      timings: '06:00 AM – 06:00 PM (Daily)',
      bestTime: 'October to March (Early mornings / Sunsets)',
      thingsToSee: [
        'Single granitic monolith citadel structure',
        'Ancient stone watchtowers and cannon battlements',
        'Perennial rock-cut freshwater reservoir (Kamalalayam)',
        '360-degree panoramic view of Namakkal township and surrounding green plains'
      ],
      nearbyAttractions: 'Anjaneyar Temple, Narasimha Cave Temple, Namakkal Kavignar Memorial',
      entryFee: 'Free entry (Managed by Archaeological Survey of India)'
    },
    {
      id: 'anjaneyar-temple',
      name: 'Namakkal Sri Anjaneyar Temple',
      category: 'heritage',
      location: 'Opposite Namakkal Rock Fort',
      image: 'godanjaneyar.jpg',
      shortDesc: 'World-famous 18-foot monolithic Hanuman standing open to the sky, gazing towards Lord Narasimha.',
      fullDesc: 'One of the most sacred Hanuman shrines in India, this temple features an awe-inspiring 18-foot monolithic statue of Lord Anjaneyar carved from a single stone. In a unique architectural wonder, the sanctum sanctorum has no roof, leaving the deity open to the sun and rain. The Lord stands with folded hands, facing Sri Lakshmi Narasimhaswamy seated in the rock cave a quarter-mile away.',
      timings: '06:30 AM – 01:00 PM & 04:30 PM – 09:00 PM',
      bestTime: 'Year-round; special during Hanuman Jayanthi and Tamil New Year',
      thingsToSee: [
        '18-feet colossal monolithic Anjaneyar statue',
        'Sacred open-roof sanctum architecture',
        'Grand 1,00,008 Vada Malai offerings during festivals',
        'Aromatic butter alankaram ritual ceremonies'
      ],
      nearbyAttractions: 'Namakkal Rock Fort, Ranganatha Cave Temple, Narasimhaswamy Cave',
      entryFee: 'Free darshan; Special darshan tickets available'
    },
    {
      id: 'narasimha-cave',
      name: 'Sri Namagiri Lakshmi Narasimhaswamy Temple',
      category: 'heritage',
      location: 'Base of Namakkal Rock Fort',
      image: 'namagiri.jpg',
      shortDesc: '8th-century rock-cut cave marvel of King Guna Bhushana, featuring exquisite bas-relief sculptures.',
      fullDesc: 'Carved directly into the western flank of the great Namakkal rock during the 8th century by Adiyaman King Guna Bhushana, this ASI-protected monument is a masterpiece of early Dravidian cave architecture. It features intricately detailed panel reliefs depicting Lord Narasimha slaying Hiranyakashipu, Lord Vishnu recumbent as Ranganatha, and Goddess Namagiri Thayar — the tutelary deity who inspired mathematical genius Srinivasa Ramanujan.',
      timings: '07:00 AM – 01:00 PM & 04:30 PM – 08:30 PM',
      bestTime: 'October to April; Panguni Uthiram chariot festival',
      thingsToSee: [
        'Intricate 8th-century bas-relief rock carvings',
        'Goddess Namagiri Thayar sanctum (associated with Ramanujan)',
        'Ranganatha cave shrine on the eastern slope',
        'Monolithic pillared mandapams'
      ],
      nearbyAttractions: 'Namakkal Rock Fort, Anjaneyar Temple, Kamalalayam Tank',
      entryFee: 'Free entry'
    },
    {
      id: 'kolli-hills-range',
      name: 'Kolli Hills (Kolli Malai)',
      category: 'nature',
      location: 'Eastern Ghats (55 km from Namakkal)',
      image: 'kolli-hills.jpg',
      shortDesc: 'Majestic mountain retreat rising 1,300 meters high, famed for 70 hairpin curves and medicinal herbs.',
      fullDesc: 'Kolli Hills (often called the "Mountain of Death" in folklore due to guardian spirit Kolli Paavai, but a peaceful haven in reality) is a verdant Eastern Ghats ridge known for its untouched natural beauty. A thrilling road with 70 sharp hairpin bends winds up the mountain, offering panoramic valley vistas, cool mountain air, fruit orchards (jackfruit, banana, pineapple), and aromatic pepper plantations.',
      timings: 'Accessible 24/7 (Daytime driving recommended for hairpin bends)',
      bestTime: 'September to March (Pleasant climate, lush greenery)',
      thingsToSee: [
        '70 Hairpin curves engineering marvel drive',
        'Arapaleeswarar Temple dating back to the Sangam era',
        'Extensive coffee, pepper, and organic spice estates',
        'Solakkadu tribal weekly market'
      ],
      nearbyAttractions: 'Agaya Gangai Waterfalls, Seekuparai Viewpoint, Botanical Garden, Masila Falls',
      entryFee: 'Hill entry toll: nominal vehicle fee'
    },
    {
      id: 'agaya-gangai',
      name: 'Agaya Gangai Waterfalls',
      category: 'nature',
      location: 'Kolli Hills (Near Arapaleeswarar Temple)',
      image: 'Agaya Gangai Waterfalls.jpg',
      shortDesc: 'A spectacular 300-foot waterfall cascading through rocky gorges on River Aiyaru down 1,000 steps.',
      fullDesc: 'Located close to the ancient Arapaleeswarar Temple in Kolli Hills, Agaya Gangai ("Ganges of the Sky") is a roaring waterfall that plunges over 300 feet into a deep forested valley. Reaching the cascade involves descending and later climbing back approximately 1,000 stone steps surrounded by lush ferns, medicinal plants, and misty mountain breezes.',
      timings: '08:00 AM – 05:00 PM (Subject to seasonal water flow)',
      bestTime: 'July to December (Post-monsoon full flow)',
      thingsToSee: [
        '300-feet roaring waterfall plummeting into pristine rocky pool',
        'Scenic trek through forested canyon steps',
        'Natural herbal mineral water spray',
        'Adjacent ancient Arapaleeswarar Temple'
      ],
      nearbyAttractions: 'Arapaleeswarar Temple, Siddhar Caves, Botanical Garden',
      entryFee: 'Nominal forest department entry fee'
    },
    {
      id: 'arthanareeswarar-temple',
      name: 'Tiruchengode Arthanareeswarar Temple',
      category: 'heritage',
      location: 'Tiruchengode (35 km from Namakkal)',
      image: 'Tiruchengode Arthanareeswarar Temple.jpg',
      shortDesc: 'Ancient hill temple celebrating Lord Shiva and Parvati united in an iconic half-male, half-female form.',
      fullDesc: 'Perched on the Nagamalai hill in Tiruchengode at a height of 1,900 feet, this temple is one of the rarest shrines in Hinduism dedicated to Lord Arthanareeswarar (half Shiva, half Shakthi). Devotees can either climb the 1,200 carved steps flanked by stone serpent carvings (Aadhi Seshan) or use the motorable ghat road. The sunset views over the Kongu plains from this hill temple are legendary.',
      timings: '06:00 AM – 06:00 PM (Continuous on festival days)',
      bestTime: 'October to March; Vaikasi Visakam car festival',
      thingsToSee: [
        'Rare 6-foot emerald-hued Arthanareeswarar presiding deity',
        'Giant 60-foot stone serpent (Nagar) carved on the rock stairs',
        'Illuminated nocturnal view of the sacred hill',
        'Pillared hall with musical pillars and Nayaka stone carvings'
      ],
      nearbyAttractions: 'Kailasanathar Temple, Chengodu Velavar Shrine, Kumarapalayam Kaveri bank',
      entryFee: 'Free entry'
    },
    {
      id: 'seekuparai-viewpoint',
      name: 'Seekuparai & Selur Viewpoints',
      category: 'nature',
      location: 'Kolli Hills Ridge',
      image: 'Seekuparai & Selur Viewpoints.jpg',
      shortDesc: 'Panoramic watch towers offering sweeping views over deep forested valleys and rolling clouds.',
      fullDesc: 'Constructed by the Tamil Nadu Tourism Development Corporation and State Forest Department, Seekuparai and Selur Viewpoints are prime vantage points located on the crests of Kolli Hills. From the sheltered watchtower, visitors can witness endless layers of mountain ridges, clouds drifting across the canopy, and tranquil sunrise panoramas.',
      timings: '07:00 AM – 06:00 PM',
      bestTime: 'Early mornings (06:30 AM – 09:00 AM) & Golden Hour',
      thingsToSee: [
        'Unobstructed 180° vista of the Eastern Ghats valley',
        'Sea of clouds in monsoon mornings',
        'Forest rest areas and children’s viewing gazebos',
        'Birdwatching for native hill species'
      ],
      nearbyAttractions: 'Botanical Garden, Kolli Boat House, Agaya Gangai',
      entryFee: 'Nominal eco-conservation charge'
    },
    {
      id: 'botanical-garden',
      name: 'Kolli Hills Botanical Garden',
      category: 'nature',
      location: 'Semmedu, Kolli Hills',
      image: 'Kolli Hills Botanical Garden.jpg',
      shortDesc: 'A sprawling eco-park featuring aromatic medicinal gardens, rose nurseries, and nature trails.',
      fullDesc: 'Spanning across several acres near Semmedu, the Botanical Garden is maintained by the Department of Horticulture. It serves as a conservation sanctuary for rare endemic medicinal herbs of the Eastern Ghats, colorful floral gardens, glasshouses, children’s playground, and tranquil walking trails under eucalyptus and silver oak trees.',
      timings: '09:00 AM – 05:30 PM (Daily)',
      bestTime: 'October to May',
      thingsToSee: [
        'Herbal garden preserving over 200 Ayurvedic plants',
        'Vibrant rose cultivars and decorative floral displays',
        'Eco-friendly walking paths and gazebos',
        'Horticulture sapling and fresh spice sales outlet'
      ],
      nearbyAttractions: 'Solakkadu Market, Seekuparai Viewpoint, Arapaleeswarar Temple',
      entryFee: 'Adults: ₹20, Children: ₹10'
    }
  ];

  // Photo Gallery Items
  const galleryData = [
    {
      id: 'gal-1',
      title: 'Misty Dawn at Kolli Hills',
      category: 'nature',
      image: 'kolli-hills.jpg',
      size: 'tall',
      tag: 'Kolli Hills'
    },
    {
      id: 'gal-2',
      title: 'Namakkal Durgam Rock Fort',
      category: 'temples',
      image: 'duragam.jpg',
      size: 'wide',
      tag: 'Rock Fort'
    },
    {
      id: 'gal-3',
      title: '18-Ft Monolithic Anjaneyar',
      category: 'temples',
      image: 'godanjaneyar.jpg',
      size: 'normal',
      tag: 'Sacred Temples'
    },
    {
      id: 'gal-4',
      title: 'Agaya Gangai Cascades',
      category: 'nature',
      image: 'Agaya Gangai Waterfalls.jpg',
      size: 'tall',
      tag: 'Waterfalls'
    },
    {
      id: 'gal-5',
      title: 'High-Tech Poultry Operations',
      category: 'industry',
      image: 'poultry.jpg',
      size: 'normal',
      tag: 'Egg Capital'
    },
    {
      id: 'gal-6',
      title: 'Heavy Lorry Body Building Work',
      category: 'industry',
      image: 'lorry.jpg',
      size: 'wide',
      tag: 'Transport City'
    },
    {
      id: 'gal-7',
      title: 'Valvil Ori Tourism Vizha',
      category: 'festivals',
      image: 'valvilfest.jpg',
      size: 'normal',
      tag: 'Folk Heritage'
    },
    {
      id: 'gal-8',
      title: 'Kongu Banana Leaf Spread',
      category: 'food',
      image: 'BANANA LEAF.jpg',
      size: 'normal',
      tag: 'Kongu Cuisine'
    },
    {
      id: 'gal-9',
      title: 'Serene Kaveri River at Mohanur',
      category: 'nature',
      image: 'Mohanur.jpg',
      size: 'wide',
      tag: 'Kaveri River'
    },
    {
      id: 'gal-10',
      title: 'Lush Tapioca & Sugarcane Fields',
      category: 'agriculture',
      image: 'cauvery.jpg',
      size: 'normal',
      tag: 'Cauvery Belt'
    },
    {
      id: 'gal-11',
      title: 'Textile Power Looms in Action',
      category: 'industry',
      image: 'power.jpg',
      size: 'normal',
      tag: 'Kumarapalayam'
    },
    {
      id: 'gal-12',
      title: 'The Legendary 70 Hairpin Ghats',
      category: 'nature',
      image: 'HAIRPIN.jpg',
      size: 'tall',
      tag: 'Ghat Road'
    }
  ];

  // Video Gallery Items
  const videosData = [
    {
      id: 'vid-1',
      title: 'Kolli Hills 70 Hairpin Ghats Drive',
      category: 'Nature & Drive',
      duration: '04:15',
      desc: 'Experience the thrilling ascent through 70 hairpin curves ascending from Sendamangalam to Semmedu.',
      thumb: 'kolli-hills.jpg',
      videoType: 'simulated',
      embedInfo: 'Take a virtual drone journey through the winding mountain curves, cloud canopy, and tropical forests of Kolli Malai.'
    },
    {
      id: 'vid-2',
      title: 'Agaya Gangai Waterfalls Expedition',
      category: 'Waterfalls & Trek',
      duration: '03:40',
      desc: 'The complete downhill trek across 1,000 stone stairs into the roaring mist of the 300-ft mountain cascade.',
      thumb: 'Agaya Gangai Waterfalls.jpg',
      videoType: 'simulated',
      embedInfo: 'Witness River Aiyaru plunging through rugged cliffs into the deep green pool below the Arapaleeswarar shrine.'
    },
    {
      id: 'vid-3',
      title: 'Anjaneyar Temple & Rock Fort Monolith',
      category: 'Sacred Heritage',
      duration: '05:10',
      desc: 'Spiritual documentary on the 18-foot open-air Lord Anjaneyar and the 8th-century Adiyaman cave carvings.',
      thumb: 'godanjaneyar.jpg',
      videoType: 'simulated',
      embedInfo: 'Explore the architectural alignment where Lord Anjaneyar’s gaze meets Lord Narasimha inside the monolith cavern.'
    },
    {
      id: 'vid-4',
      title: 'Valvil Ori Tourism Vizha Celebrations',
      category: 'Folk Culture',
      duration: '04:30',
      desc: 'Annual August festival featuring traditional archery tournaments, Karagattam dance, and tribal flower shows.',
      thumb: 'valvilfest.jpg',
      videoType: 'simulated',
      embedInfo: 'Celebration of Sangam King Valvil Ori’s legendary archery skills and cultural vibrancy in Kolli Hills.'
    },
    {
      id: 'vid-5',
      title: 'Secret Flavors of Namakkal Cuisine',
      category: 'Food Culture',
      duration: '03:55',
      desc: 'Discover authentic Pallipalayam chicken, traditional Kozhi Biryani, and Rasipuram ghee delicacies.',
      thumb: 'BANANA LEAF.jpg',
      videoType: 'simulated',
      embedInfo: 'Master chefs demonstrate the traditional roasting of whole spices and shallots in native cold-pressed oil.'
    },
    {
      id: 'vid-6',
      title: 'Kaveri River Agriculture & Tapioca Harvest',
      category: 'Agriculture',
      duration: '03:20',
      desc: 'How the Kaveri river canal system fuels Tamil Nadu’s largest tapioca and betel vine harvesting operations.',
      thumb: 'cauvery.jpg',
      videoType: 'simulated',
      embedInfo: 'From canal-fed fertile soil to modern sago starch refineries and vibrant agricultural mandis.'
    },
    {
      id: 'vid-7',
      title: 'Lorry Body Building Capital Craftsmanship',
      category: 'Industry',
      duration: '04:45',
      desc: 'Inside the workshops that transform bare chassis into 50,000+ custom commercial transport giants.',
      thumb: 'lorry.jpg',
      videoType: 'simulated',
      embedInfo: 'Behind the scenes of Namakkal’s legendary artisans shaping South India’s premier logistics infrastructure.'
    }
  ];

  // Map Location Metadata
  const mapLocationsData = {
    namakkal: {
      title: 'Namakkal Town (District HQ)',
      badge: 'ADMINISTRATIVE CAPITAL',
      desc: 'Focal administrative city famed for its 200-ft monolithic rock citadel, 18-ft open-air Anjaneyar shrine, poultry breeding headquarters, and commercial lorry operations.',
      distance: '0 km (Center)',
      elevation: '218 meters MSL',
      highlight: 'Rock Fort & Anjaneyar Temple',
      commute: 'City Bus / Auto / Local Taxis',
      mapUrl: 'https://maps.google.com/?q=Namakkal,+Tamil+Nadu'
    },
    kolli: {
      title: 'Kolli Hills (Kolli Malai)',
      badge: 'MOUNTAIN SANCTUARY',
      desc: 'Untamed Eastern Ghats paradise with 70 sharp hairpin turns, ancient King Valvil Ori heritage, medicinal flora, and thunderous Agaya Gangai waterfalls.',
      distance: '55 km (approx. 1.5 hrs)',
      elevation: '1,300 meters MSL',
      highlight: '70 Hairpin Bends & Waterfalls',
      commute: 'TNSTC Mountain Bus / Private Car / Bike',
      mapUrl: 'https://maps.google.com/?q=Kolli+Hills,+Tamil+Nadu'
    },
    tiruchengode: {
      title: 'Tiruchengode',
      badge: 'SACRED & INDUSTRIAL HUB',
      desc: 'Iconic hill town famed for the Arthanareeswarar Temple situated atop the serpent-shaped red hill (Nagamalai) and heavy borewell rig manufacturing.',
      distance: '35 km (approx. 45 mins)',
      elevation: '235 meters MSL',
      highlight: 'Arthanareeswarar Temple & Rigs',
      commute: 'Frequent Direct Express Buses',
      mapUrl: 'https://maps.google.com/?q=Tiruchengode,+Tamil+Nadu'
    },
    rasipuram: {
      title: 'Rasipuram',
      badge: 'GHEE & SILK CAPITAL',
      desc: 'Historic town celebrated for pure Rasipuram ghee, silk handlooms, ancient Chola temples, and educational centers nestled near the northern foothills.',
      distance: '27 km (approx. 35 mins)',
      elevation: '246 meters MSL',
      highlight: 'Rasipuram Ghee & Handloom Silk',
      commute: 'Bus via Salem Highway (NH 44)',
      mapUrl: 'https://maps.google.com/?q=Rasipuram,+Tamil+Nadu'
    },
    paramathi: {
      title: 'Paramathi-Velur',
      badge: 'KAVERI RIVER BASIN',
      desc: 'Verdant agrarian hub on the Kaveri riverbanks, flourishing with betel vine plantations, banana orchards, and the hilltop Kabilarmalai Murugan temple.',
      distance: '22 km (approx. 25 mins)',
      elevation: '170 meters MSL',
      highlight: 'Betel Vine & Kabilarmalai Temple',
      commute: 'Bus / Taxi via NH 44 South',
      mapUrl: 'https://maps.google.com/?q=Paramathi+Velur,+Tamil+Nadu'
    },
    mohanur: {
      title: 'Mohanur',
      badge: 'SACRED RIVER GHAT',
      desc: 'Serene riverbank township famous for sacred Kaveri bathing ghats, Aadi Perukku celebrations, sugar processing mills, and direct connection to Karur.',
      distance: '18 km (approx. 20 mins)',
      elevation: '145 meters MSL',
      highlight: 'Kaveri River Ghats & Sugar Mills',
      commute: 'Town Bus / Auto / Car',
      mapUrl: 'https://maps.google.com/?q=Mohanur,+Tamil+Nadu'
    },
    kumarapalayam: {
      title: 'Kumarapalayam',
      badge: 'TEXTILE & POWERLOOM TOWN',
      desc: 'Major industrial powerhouse on the banks of River Kaveri, bustling with thousands of powerlooms producing export cotton towels and fabrics.',
      distance: '55 km (approx. 1 hr 10 mins)',
      elevation: '190 meters MSL',
      highlight: 'Powerloom Towels & Textile Markets',
      commute: 'Bus via Sankari / Erode Road',
      mapUrl: 'https://maps.google.com/?q=Kumarapalayam,+Tamil+Nadu'
    }
  };

  // Events & Festivals
  const eventsData = [
    {
      id: 'evt-1',
      title: 'Valvil Ori Tourism Vizha',
      month: 'AUG',
      day: '17-18',
      type: 'annual',
      location: 'Semmedu, Kolli Hills',
      image: 'semmedu.jpg',
      desc: 'Grand 2-day cultural festival celebrating King Valvil Ori with state-level archery competitions, tribal music performances, and flower exhibitions.'
    },
    {
      id: 'evt-2',
      title: 'Namakkal Anjaneyar Hanuman Jayanthi',
      month: 'DEC',
      day: '23',
      type: 'upcoming',
      location: 'Anjaneyar Temple, Namakkal',
      image: 'godanjaneyar.jpg',
      desc: 'Spiritual mahotsavam where Lord Anjaneyar is adorned with 1,00,008 Vada Malai garlands and cooling aromatic butter alankaram, attended by 50,000+ pilgrims.'
    },
    {
      id: 'evt-3',
      title: 'Panguni Uthiram Ther Thiruvizha',
      month: 'MAR',
      day: '29',
      type: 'upcoming',
      location: 'Narasimhaswamy Temple & Rock Fort',
      image: 'panguni.jpg',
      desc: 'Massive car festival featuring the pulling of the towering wooden temple chariot through the ancient four car streets surrounding the monolithic fort.'
    },
    {
      id: 'evt-4',
      title: 'Aadi Perukku Festival',
      month: 'AUG',
      day: '03',
      type: 'annual',
      location: 'Mohanur & Velur Kaveri River Ghats',
      image: 'Mohanur.jpg',
      desc: 'Sacred water thanksgiving ritual on the 18th day of Tamil month Aadi, honoring Mother Kaveri as families offer flowers, coconuts, and traditional rice dishes.'
    },
    {
      id: 'evt-5',
      title: 'Tiruchengode Arthanareeswarar Vaikasi Car Festival',
      month: 'JUN',
      day: '05',
      type: 'annual',
      location: 'Tiruchengode Hill Base',
      image: 'Tiruchengode Arthanareeswarar Temple.jpg',
      desc: 'A grand 14-day festival culminating in the procession of five majestic temple cars celebrating Lord Arthanareeswarar and Sengottu Velavar.'
    },
    {
      id: 'evt-6',
      title: 'Margazhi Music & Spiritual Utsavam',
      month: 'DEC',
      day: '16',
      type: 'upcoming',
      location: 'Namakkal Town Temples',
      image: 'music.jpg',
      desc: 'Month-long dawn chanting of Tiruppavai and devotional bhajans across all Vaishnavite cave shrines and the Kamalalayam tank promenade.'
    }
  ];

  // Bilingual Dictionary (English & Tamil)
  const translations = {
    en: {
      'nav.brandTitle': 'NAMMA NAMAKKAL',
      'nav.brandSub': 'TAMIL NADU • INDIA',
      'nav.home': 'Home',
      'nav.discover': 'Discover',
      'nav.taluks': 'Taluks',
      'nav.places': 'Places',
      'nav.culture': 'Culture',
      'nav.economy': 'Economy',
      'nav.gallery': 'Gallery',
      'nav.videos': 'Videos',
      'nav.travel': 'Travel',
      'nav.map': 'Map',
      'nav.events': 'Events',
      'nav.services': 'Services',
      'nav.contact': 'Contact',
      'hero.badge': 'DIGITAL DISTRICT PORTAL',
      'hero.welcome': 'WELCOME TO',
      'hero.namakkal': 'NAMAKKAL',
      'hero.subtitle': 'Discover the heritage, nature, culture and spirit of Namakkal District — The Poultry Capital, Transport Hub, and Home to the Mystical Kolli Hills.',
      'hero.btnExplore': 'Explore Namakkal',
      'hero.btnVideo': 'Watch Video Tour',
      'hero.scroll': 'SCROLL DOWN',
      'hl.poultryTitle': 'Poultry & Egg City',
      'hl.poultryDesc': "India's largest egg production center",
      'hl.transportTitle': 'Transport Capital',
      'hl.transportDesc': 'Premier lorry body building hub',
      'hl.kolliTitle': 'Kolli Hills',
      'hl.kolliDesc': 'Mountain sanctuary of medicinal herbs',
      'hl.templeTitle': 'Sacred Heritage',
      'hl.templeDesc': '18-ft Anjaneyar & Rock Fort citadel',
      'hl.agriTitle': 'Kaveri Heartland',
      'hl.agriDesc': 'Fertile paddy, tapioca & sugarcane belt',
      'disc.tag': 'DISTRICT OVERVIEW',
      'disc.title': 'Discover Namakkal',
      'disc.subtitle': 'Nestled between the Kaveri river and the Eastern Ghats, Namakkal is an iconic district in Tamil Nadu renowned for rock-cut architecture, industrial dynamism, and serene hill stations.',
      'disc.lead': 'Where is Namakkal? Located in the central Kongu region of Tamil Nadu (approx. 380 km southwest of Chennai and 160 km east of Coimbatore), Namakkal derives its name from "Namagiri" — the single massive monolithic rock rising majestically in the heart of town.',
      'disc.popLbl': 'Total Population',
      'disc.areaLbl': 'Geographical Area',
      'disc.taluksLbl': 'Administrative Units',
      'disc.climateLbl': 'Tropical Climate',
      'taluks.tag': 'ADMINISTRATIVE DIVISIONS',
      'taluks.title': 'The 8 Taluks of Namakkal',
      'taluks.subtitle': 'Every taluk in Namakkal possesses a distinct personality, from mountainous tribal retreats and river bank farms to textile capitals and industrial epicenters.',
      'places.tag': 'DESTINATION GUIDE',
      'places.title': 'Famous Places to Explore',
      'places.subtitle': 'Whether you crave mist-laden mountain hairpin curves, thunderous cascading waterfalls, or centuries-old monolith temples, Namakkal promises an unforgettable expedition.',
      'places.filterAll': 'All Attractions',
      'places.filterNature': '⛰️ Nature & Waterfalls',
      'places.filterHeritage': '🛕 Heritage & Temples',
      'econ.tag': 'ECONOMIC POWERHOUSE',
      'econ.title': 'Why is Namakkal Famous?',
      'gal.title': 'Namakkal Photo Gallery',
      'vid.title': 'Experience Namakkal Through Video',
      'trv.title': 'Travel Guide & Suggested Itineraries',
      'map.title': 'Interactive Namakkal District Map',
      'evt.title': 'Cultural Events & Festivals',
      'srv.title': 'Emergency & Public Services'
    },
    ta: {
      'nav.brandTitle': 'நம்ம நாமக்கல்',
      'nav.brandSub': 'தமிழ்நாடு • இந்தியா',
      'nav.home': 'முகப்பு',
      'nav.discover': 'அறிமுகம்',
      'nav.taluks': 'வட்டங்கள்',
      'nav.places': 'சுற்றுலா தலங்கள்',
      'nav.culture': 'கலாச்சாரம்',
      'nav.economy': 'பொருளாதாரம்',
      'nav.gallery': 'புகைப்படங்கள்',
      'nav.videos': 'காணொளிகள்',
      'nav.travel': 'பயண வழிகாட்டி',
      'nav.map': 'வரைபடம்',
      'nav.events': 'திருவிழாக்கள்',
      'nav.services': 'சேவைகள்',
      'nav.contact': 'தொடர்பு',
      'hero.badge': 'டிஜிட்டல் மாவட்ட வழிகாட்டி',
      'hero.welcome': 'வருக நாமக்கல் மண்ணிற்கு',
      'hero.namakkal': 'நாமக்கல்',
      'hero.subtitle': 'கொல்லிமலை இயற்கை எழில், வரலாற்று சிறப்புமிக்க மலைக்கோட்டை, 18 அடி ஆஞ்சநேயர், முட்டை மற்றும் போக்குவரத்து தலைநகர் நாமக்கல் மாவட்டத்திற்கு உங்களை வரவேற்கிறோம்.',
      'hero.btnExplore': 'நாமக்கல்லை அறிய',
      'hero.btnVideo': 'காணொளி பார்வை',
      'hero.scroll': 'கீழே உருட்டவும்',
      'hl.poultryTitle': 'முட்டை மாநகரம்',
      'hl.poultryDesc': 'இந்தியாவின் மிகப்பெரிய முட்டை உற்பத்தி மையம்',
      'hl.transportTitle': 'போக்குவரத்து மையம்',
      'hl.transportDesc': 'தென்னிந்தியாவின் முன்னணி லாரி கூண்டு கட்டும் தளம்',
      'hl.kolliTitle': 'கொல்லிமலை',
      'hl.kolliDesc': '70 கொண்டை ஊசி வளைவுகள் கொண்ட மூலிகை மலை',
      'hl.templeTitle': 'வரலாற்று பெருமை',
      'hl.templeDesc': '18 அடி ஆஞ்சநேயர் மற்றும் ஒற்றைக்கல் கோட்டை',
      'hl.agriTitle': 'காவிரி டெல்டா',
      'hl.agriDesc': 'செழிப்பான நெல், மரவள்ளிக்கிழங்கு மற்றும் கரும்பு பூமி',
      'disc.tag': 'மாவட்ட கண்ணோட்டம்',
      'disc.title': 'நாமக்கல் மாவட்டம் பற்றி அறிய',
      'disc.subtitle': 'காவிரி ஆற்றின் வளமும், கிழக்கு தொடர்ச்சி மலையின் அழகும் சூழ்ந்த கொங்கு மண்டலத்தின் வரலாற்று சிறப்புமிக்க மாவட்டம் நாமக்கல்.',
      'disc.lead': 'நாமக்கல் எங்குள்ளது? தமிழ்நாட்டின் மையப்பகுதியில் அமைந்துள்ள நாமக்கல், நகரின் நடுவே ஓங்கி உயர்ந்து நிற்கும் "நாமகிரி" ஒற்றைக்கல் பாறையால் இப்பெயர் பெற்றது.',
      'disc.popLbl': 'மொத்த மக்கள் தொகை',
      'disc.areaLbl': 'புவியியல் பரப்பளவு',
      'disc.taluksLbl': 'வருவாய் வட்டங்கள் (8)',
      'disc.climateLbl': 'வெப்பமண்டல காலநிலை',
      'taluks.tag': 'நிர்வாக பிரிவுகள்',
      'taluks.title': 'நாமக்கல்லின் 8 வட்டங்கள்',
      'taluks.subtitle': 'மலைப்பிரதேசம் முதல் ஜவுளி தலைநகரம் வரை நாமக்கல்லின் எட்டு வட்டங்களும் தனித்துவமான பண்புகளை கொண்டவை.',
      'places.tag': 'சுற்றுலா வழிகாட்டி',
      'places.title': 'கண்டிப்பாக பார்க்க வேண்டிய இடங்கள்',
      'places.subtitle': 'கொல்லிமலையின் பனி மூட்டமும், ஆகாய கங்கையின் பேரிரைச்சலும், பழமையான குடைவரை கோயில்களும் உங்களுக்கு மறக்க முடியாத அனுபவத்தை தரும்.',
      'places.filterAll': 'அனைத்து இடங்கள்',
      'places.filterNature': '⛰️ இயற்கை & அருவிகள்',
      'places.filterHeritage': '🛕 பாரம்பரிய கோயில்கள்',
      'econ.tag': 'பொருளாதார தூண்கள்',
      'econ.title': 'நாமக்கல் எதற்கு பிரசித்தி பெற்றது?',
      'gal.title': 'நாமக்கல் புகைப்பட தொகுப்பு',
      'vid.title': 'காணொளி மூலம் நாமக்கல் பயணம்',
      'trv.title': 'பயண வழிகாட்டி & திட்டங்கள்',
      'map.title': 'நாமக்கல் மாவட்ட வரைபடம்',
      'evt.title': 'பாரம்பரிய திருவிழாக்கள்',
      'srv.title': 'அவசர & மக்கள் சேவைகள்'
    }
  };

  /* ==========================================================================
     2. AI ASSISTANT SMART KNOWLEDGE ENGINE
     ========================================================================== */
  const aiKnowledgeBase = [
    {
      keywords: ['famous', 'why', 'special', 'known', 'முட்டை', 'சிறப்பு'],
      answer: "Namakkal is globally famous for four major achievements:\n1. 🥚 **The Egg City of India**: Produces over 4.5+ crore eggs daily!\n2. 🚛 **Transport Capital**: Premier lorry body building and truck fleet hub (50,000+ trucks).\n3. ⛰️ **Kolli Hills**: Stunning hill station with 70 hairpin bends, Agaya Gangai waterfall, and medicinal herbs.\n4. 🛕 **Sacred Monoliths**: 18-ft open-sky Anjaneyar statue and the 8th-century Rock Fort citadel."
    },
    {
      keywords: ['kolli', 'hills', 'bend', 'hairpin', 'agaya', 'gangai', 'mountain', 'மலைய'],
      answer: "⛰️ **Kolli Hills (Kolli Malai)** is an Eastern Ghats paradise at 1,300m elevation. Key attractions:\n• **70 Hairpin Bends**: Thrilling 35 km ghat road with breathtaking views.\n• **Agaya Gangai Waterfalls**: A majestic 300-ft cascade reached via 1,000 stone stairs.\n• **Arapaleeswarar Temple**: Ancient Shiva shrine by River Aiyaru.\n• **Seekuparai & Selur Viewpoints**: Panoramic cloud vistas.\n• **Local produce**: Kolli black pepper, jackfruit, wild honey, and medicinal herbs."
    },
    {
      keywords: ['anjaneyar', 'hanuman', 'temple', 'rock', 'fort', 'narasimha', 'கோயில்', 'ஆஞ்சநேயர்'],
      answer: "🛕 **Namakkal Anjaneyar & Fort**:\n• **18-ft Monolithic Anjaneyar**: Carved from a single stone, standing without a roof directly beneath the open sky.\n• **Sri Lakshmi Narasimhaswamy Cave**: 8th-century Adiyaman rock-cut shrine directly opposite Anjaneyar.\n• **Namakkal Rock Fort**: A 200-ft monolithic citadel built in the 16th century, later reinforced by Tipu Sultan."
    },
    {
      keywords: ['reach', 'travel', 'bus', 'train', 'flight', 'chennai', 'bangalore', 'road', 'பயணம்'],
      answer: "🚗 **How to reach Namakkal**:\n• **By Road**: Right on National Highway 44 (Kashmir–Kanyakumari). 52 km from Salem, 245 km from Bangalore (4 hrs), 380 km from Chennai (6.5 hrs).\n• **By Train**: Namakkal Railway Station (NMKL) on the Salem–Karur line connects Chennai, Bangalore, and Trichy.\n• **By Air**: Nearest airport is Tiruchirappalli International Airport (TRZ), 85 km away (1.5 hrs drive)."
    },
    {
      keywords: ['food', 'eat', 'dish', 'biryani', 'chicken', 'pallipalayam', 'சாப்பாடு', 'உணவு'],
      answer: "🍛 **Famous Namakkal Delicacies**:\n• **Pallipalayam Chicken**: Stir-fried chicken with shallots, garlic, and dried red chillies (no masala powder).\n• **Namakkal Kozhi Biryani**: Aromatic seeraga samba rice cooked with tender country chicken.\n• **Rasipuram Ghee**: Unmatched aroma and purity, famous across Tamil Nadu.\n• **Kaveri Meen Curry**: Fresh Kaveri river fish curry prepared in traditional clay pots."
    },
    {
      keywords: ['hospital', 'police', 'ambulance', 'emergency', 'help', 'contact', 'அவசரம்'],
      answer: "🚨 **Emergency Helplines for Namakkal**:\n• 🚑 Ambulance: **108**\n• 🚓 Police Control: **100**\n• 🚒 Fire & Rescue: **101**\n• 🏥 Govt Medical College Hospital: **04286-280000**\n• 🏢 District Collectorate: **04286-281101**\n• 👩 Women Helpline: **1091**"
    },
    {
      keywords: ['taluk', 'divisions', 'how many', 'வட்டம்'],
      answer: "🏛️ Namakkal District has **8 Administrative Taluks**:\n1. Namakkal (HQ)\n2. Rasipuram (Ghee & Silk)\n3. Tiruchengode (Arthanareeswarar & Rigs)\n4. Paramathi-Velur (Kaveri Agriculture)\n5. Kolli Hills (Hill Resort)\n6. Sendamangalam (Foothills & Farming)\n7. Kumarapalayam (Textile Town)\n8. Mohanur (Kaveri River Ghats)"
    }
  ];

  /* ==========================================================================
     3. APP STATE & INITIALIZATION
     ========================================================================== */
  let currentLang = 'en';
  let activeLightboxIndex = 0;
  let activeFilteredGallery = [...galleryData];

  // DOM Elements Cache
  const htmlEl = document.documentElement;
  const siteHeader = document.getElementById('siteHeader');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const langToggleBtn = document.getElementById('langToggleBtn');
  const currentLangLabel = document.getElementById('currentLangLabel');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const taluksGrid = document.getElementById('taluksGrid');
  const placesGrid = document.getElementById('placesGrid');
  const galleryGrid = document.getElementById('galleryGrid');
  const videosGrid = document.getElementById('videosGrid');
  const eventsGrid = document.getElementById('eventsGrid');
  
  // Modals & Overlays
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');

  const videoModal = document.getElementById('videoModal');
  const videoModalTitle = document.getElementById('videoModalTitle');
  const videoModalCloseBtn = document.getElementById('videoModalCloseBtn');
  const videoPlayerWrapper = document.getElementById('videoPlayerWrapper');
  const heroWatchVideoBtn = document.getElementById('heroWatchVideoBtn');

  const detailModal = document.getElementById('detailModal');
  const detailModalImg = document.getElementById('detailModalImg');
  const detailModalBody = document.getElementById('detailModalBody');
  const detailModalCloseBtn = document.getElementById('detailModalCloseBtn');

  // Search
  const searchTriggerBtn = document.getElementById('searchTriggerBtn');
  const searchModal = document.getElementById('searchModal');
  const searchInput = document.getElementById('searchInput');
  const searchResultsList = document.getElementById('searchResultsList');

  // AI Assistant
  const aiLauncherBtn = document.getElementById('aiLauncherBtn');
  const aiChatPanel = document.getElementById('aiChatPanel');
  const aiCloseBtn = document.getElementById('aiCloseBtn');
  const aiChatForm = document.getElementById('aiChatForm');
  const aiUserInput = document.getElementById('aiUserInput');
  const aiMessagesContainer = document.getElementById('aiMessagesContainer');

  // Interactive Map
  const mapQuickPicker = document.getElementById('mapQuickPicker');
  const mapPinBadge = document.getElementById('mapPinBadge');
  const mapSelectedTitle = document.getElementById('mapSelectedTitle');
  const mapSelectedDesc = document.getElementById('mapSelectedDesc');
  const mapDistanceVal = document.getElementById('mapDistanceVal');
  const mapElevationVal = document.getElementById('mapElevationVal');
  const mapHighlightVal = document.getElementById('mapHighlightVal');
  const mapCommuteVal = document.getElementById('mapCommuteVal');
  const mapDirectionsLink = document.getElementById('mapDirectionsLink');

  /* ==========================================================================
     4. THEME & LANGUAGE MANAGEMENT
     ========================================================================== */

  // Theme Initializer
  function initTheme() {
    const savedTheme = localStorage.getItem('namakkal_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);
  }

  function applyTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('namakkal_theme', theme);
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlEl.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  });

  // Language Initializer
  function initLanguage() {
    const savedLang = localStorage.getItem('namakkal_lang') || 'en';
    setLanguage(savedLang);
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('namakkal_lang', lang);
    if (currentLangLabel) {
      currentLangLabel.textContent = lang === 'en' ? 'தமிழ்' : 'English';
    }

    // Update all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Re-render dynamic components with localized content
    renderTaluks();
    renderPlaces('all');
  }

  langToggleBtn.addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'ta' : 'en');
  });

  /* ==========================================================================
     5. NAVIGATION & SCROLL OBSERVERS
     ========================================================================== */

  // Sticky Navbar Scroll Listener
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile Hamburger Menu
  hamburgerBtn.addEventListener('click', () => {
    const isOpen = mobileNavDrawer.classList.toggle('open');
    hamburgerBtn.classList.toggle('active', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
    mobileNavDrawer.setAttribute('aria-hidden', !isOpen);
  });

  // Close mobile drawer on link click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNavDrawer.classList.remove('open');
      hamburgerBtn.classList.remove('active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      mobileNavDrawer.setAttribute('aria-hidden', 'true');
    });
  });

  // Active Link Scroll-Spy via IntersectionObserver
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.25 });

  sections.forEach(sec => navObserver.observe(sec));

  // Scroll Reveal Animations
  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => animObserver.observe(el));

  // Stat Counter Animation
  const statCounterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counterEl = entry.target;
        const targetVal = parseFloat(counterEl.getAttribute('data-counter'));
        if (targetVal) {
          animateCounter(counterEl, targetVal);
        }
        observer.unobserve(counterEl);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-counter]').forEach(el => statCounterObserver.observe(el));

  function animateCounter(el, target) {
    const duration = 1800;
    const start = 0;
    const startTime = performance.now();
    const originalText = el.textContent;

    function step(currentTime) {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = start + (target - start) * ease;

      if (target >= 10000) {
        el.textContent = Math.floor(current).toLocaleString() + (originalText.includes('+') ? '+' : '');
      } else if (target % 1 !== 0) {
        el.textContent = current.toFixed(1) + (originalText.includes('Cr') ? '+ Cr Eggs/Day' : '');
      } else {
        el.textContent = Math.floor(current) + (originalText.includes('Bends') ? ' Hairpin Bends' : '');
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = originalText;
      }
    }
    requestAnimationFrame(step);
  }

  /* ==========================================================================
     6. TALUKS COMPONENT (8 TALUKS)
     ========================================================================== */
  function renderTaluks() {
    if (!taluksGrid) return;
    taluksGrid.innerHTML = '';

    taluksData.forEach(taluk => {
      const displayName = currentLang === 'ta' ? `${taluk.nameTa} (${taluk.name})` : taluk.name;
      const card = document.createElement('div');
      card.className = 'taluk-card animate-on-scroll';
      card.innerHTML = `
        <div class="taluk-img-wrap">
          <img src="${taluk.image}" alt="${taluk.name} Taluk" class="taluk-img" loading="lazy" onerror="this.src='images/hero/hero-bg.svg'">
          <span class="taluk-badge-overlay">${taluk.hq}</span>
        </div>
        <div class="taluk-body">
          <h3 class="taluk-name">${displayName}</h3>
          <p class="taluk-desc">${taluk.desc}</p>
          <div class="taluk-key-places">
            <span>Key Landmarks:</span> ${taluk.keyPlaces}
          </div>
          <button class="taluk-btn" data-taluk-id="${taluk.id}" aria-label="Explore details of ${taluk.name}">
            <span>Explore Taluk</span> <span>→</span>
          </button>
        </div>
      `;
      taluksGrid.appendChild(card);
    });

    // Attach click listeners for Taluk detail modal
    document.querySelectorAll('.taluk-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-taluk-id');
        const taluk = taluksData.find(t => t.id === id);
        if (taluk) openTalukModal(taluk);
      });
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => animObserver.observe(el));
  }

  function openTalukModal(taluk) {
    if (!detailModal) return;
    detailModalImg.src = taluk.image;
    detailModalImg.alt = taluk.name;

    const displayName = currentLang === 'ta' ? `${taluk.nameTa} (${taluk.name})` : taluk.name;
    const highlightsHtml = taluk.highlights.map(h => `<li style="margin-bottom: 8px;">✓ ${h}</li>`).join('');

    detailModalBody.innerHTML = `
      <div style="margin-bottom: 12px;">
        <span class="section-tag">🏛️ TALUK PROFILE</span>
      </div>
      <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--text-primary); margin-bottom: 8px;">${displayName}</h2>
      <p style="font-size: 1rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 24px;">${taluk.desc}</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 14px; margin-bottom: 24px; padding: 18px; background: var(--bg-tertiary); border-radius: var(--radius-md);">
        <div>
          <span style="font-size: 0.76rem; font-weight: 700; color: var(--text-tertiary); text-transform: uppercase;">Headquarters</span>
          <div style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary);">${taluk.hq}</div>
        </div>
        <div>
          <span style="font-size: 0.76rem; font-weight: 700; color: var(--text-tertiary); text-transform: uppercase;">Geographical Area</span>
          <div style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary);">${taluk.area}</div>
        </div>
        <div>
          <span style="font-size: 0.76rem; font-weight: 700; color: var(--text-tertiary); text-transform: uppercase;">Estimated Population</span>
          <div style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary);">${taluk.population}</div>
        </div>
      </div>

      <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--text-primary); margin-bottom: 12px;">Key Administrative & Cultural Highlights</h4>
      <ul style="padding-left: 0; list-style: none; color: var(--text-secondary); line-height: 1.6; margin-bottom: 24px;">
        ${highlightsHtml}
      </ul>

      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <a href="#places" class="btn btn-primary" onclick="document.getElementById('detailModal').classList.remove('active')">
          <span>Explore Sightseeing</span> <span>→</span>
        </a>
        <button class="btn btn-secondary" onclick="document.getElementById('detailModal').classList.remove('active')">
          <span>Close Window</span>
        </button>
      </div>
    `;

    detailModal.classList.add('active');
  }

  /* ==========================================================================
     7. PLACES TO EXPLORE & DETAIL MODAL
     ========================================================================== */
  function renderPlaces(filter = 'all') {
    if (!placesGrid) return;
    placesGrid.innerHTML = '';

    const filtered = filter === 'all' ? placesData : placesData.filter(p => p.category === filter);

    filtered.forEach(place => {
      const card = document.createElement('div');
      card.className = 'place-card animate-on-scroll';
      card.innerHTML = `
        <div class="place-media-wrap">
          <img src="${place.image}" alt="${place.name}" class="place-img" loading="lazy" onerror="this.src='images/hero/hero-bg.svg'">
          <span class="place-category-pill">${place.category === 'nature' ? '⛰️ Nature' : '🛕 Heritage'}</span>
        </div>
        <div class="place-content">
          <span class="place-location-tag">📍 ${place.location}</span>
          <h3 class="place-title">${place.name}</h3>
          <p class="place-summary">${place.shortDesc}</p>
          <div class="place-footer-action">
            <span class="place-timing-badge">⏰ ${place.timings.split('&')[0]}</span>
            <button class="view-details-btn" data-place-id="${place.id}">View Details</button>
          </div>
        </div>
      `;
      placesGrid.appendChild(card);
    });

    // Attach listeners
    document.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-place-id');
        const place = placesData.find(p => p.id === id);
        if (place) openPlaceModal(place);
      });
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => animObserver.observe(el));
  }

  function openPlaceModal(place) {
    if (!detailModal) return;
    detailModalImg.src = place.image;
    detailModalImg.alt = place.name;

    const thingsHtml = place.thingsToSee.map(t => `<li style="margin-bottom: 8px;">🔹 ${t}</li>`).join('');

    detailModalBody.innerHTML = `
      <div style="margin-bottom: 8px;">
        <span class="section-tag">${place.category === 'nature' ? '⛰️ NATURE & ADVENTURE' : '🛕 SACRED HERITAGE'}</span>
      </div>
      <h2 style="font-size: 1.85rem; font-weight: 800; color: var(--text-primary); margin-bottom: 6px;">${place.name}</h2>
      <div style="font-size: 0.9rem; font-weight: 600; color: var(--accent-gold); margin-bottom: 18px;">📍 ${place.location}</div>
      
      <p style="font-size: 1.02rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 24px;">${place.fullDesc}</p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 24px; padding: 18px; background: var(--bg-tertiary); border-radius: var(--radius-md);">
        <div>
          <span style="font-size: 0.74rem; font-weight: 700; color: var(--text-tertiary); text-transform: uppercase;">Visiting Hours</span>
          <div style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary);">${place.timings}</div>
        </div>
        <div>
          <span style="font-size: 0.74rem; font-weight: 700; color: var(--text-tertiary); text-transform: uppercase;">Best Season to Visit</span>
          <div style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary);">${place.bestTime}</div>
        </div>
        <div>
          <span style="font-size: 0.74rem; font-weight: 700; color: var(--text-tertiary); text-transform: uppercase;">Entry Guidelines</span>
          <div style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary);">${place.entryFee}</div>
        </div>
      </div>

      <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--text-primary); margin-bottom: 10px;">What You Must Experience:</h4>
      <ul style="padding-left: 0; list-style: none; color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px;">
        ${thingsHtml}
      </ul>

      <div style="margin-bottom: 24px; padding: 12px 16px; border-left: 4px solid var(--accent-emerald); background: var(--accent-emerald-subtle); border-radius: 4px;">
        <strong style="color: var(--accent-emerald); font-size: 0.9rem;">Nearby Attractions:</strong>
        <span style="font-size: 0.9rem; color: var(--text-primary); margin-left: 6px;">${place.nearbyAttractions}</span>
      </div>

      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <a href="https://maps.google.com/?q=${encodeURIComponent(place.name + ', Namakkal, Tamil Nadu')}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <span>📍 Get Directions on Map</span>
        </a>
        <button class="btn btn-secondary" onclick="document.getElementById('detailModal').classList.remove('active')">
          <span>Close</span>
        </button>
      </div>
    `;

    detailModal.classList.add('active');
  }

  // Filter tabs listener
  document.querySelectorAll('.places-filter-tabs .tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.places-filter-tabs .tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderPlaces(filter);
    });
  });

  // Modal dismiss buttons
  if (detailModalCloseBtn) {
    detailModalCloseBtn.addEventListener('click', () => detailModal.classList.remove('active'));
  }
  if (detailModal) {
    detailModal.addEventListener('click', (e) => {
      if (e.target === detailModal) detailModal.classList.remove('active');
    });
  }

  /* ==========================================================================
     8. PHOTO GALLERY & LIGHTBOX
     ========================================================================== */
  function renderGallery(filter = 'all') {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';

    activeFilteredGallery = filter === 'all' ? galleryData : galleryData.filter(g => g.category === filter);

    activeFilteredGallery.forEach((item, index) => {
      const el = document.createElement('div');
      el.className = `gallery-item ${item.size || ''}`;
      el.setAttribute('data-index', index);
      el.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="gallery-img" loading="lazy" onerror="this.src='images/hero/hero-bg.svg'">
        <div class="gallery-overlay">
          <span class="gallery-category-badge">${item.tag}</span>
          <h4 class="gallery-title">${item.title}</h4>
        </div>
        <div class="gallery-zoom-icon">🔍</div>
      `;

      el.addEventListener('click', () => {
        openLightbox(index);
      });

      galleryGrid.appendChild(el);
    });
  }

  function openLightbox(index) {
    if (!lightboxModal) return;
    activeLightboxIndex = index;
    updateLightboxContent();
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function updateLightboxContent() {
    const item = activeFilteredGallery[activeLightboxIndex];
    if (!item) return;
    lightboxImg.src = item.image;
    lightboxImg.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxCounter.textContent = `Photo ${activeLightboxIndex + 1} of ${activeFilteredGallery.length} • Category: ${item.tag}`;
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showNextLightbox() {
    activeLightboxIndex = (activeLightboxIndex + 1) % activeFilteredGallery.length;
    updateLightboxContent();
  }

  function showPrevLightbox() {
    activeLightboxIndex = (activeLightboxIndex - 1 + activeFilteredGallery.length) % activeFilteredGallery.length;
    updateLightboxContent();
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', showNextLightbox);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', showPrevLightbox);

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // Gallery Filter Buttons
  document.querySelectorAll('.gallery-filter-tabs .tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.gallery-filter-tabs .tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-gfilter');
      renderGallery(cat);
    });
  });

  /* ==========================================================================
     9. VIDEO GALLERY & MODAL
     ========================================================================== */
  function renderVideos() {
    if (!videosGrid) return;
    videosGrid.innerHTML = '';

    videosData.forEach(vid => {
      const card = document.createElement('div');
      card.className = 'video-card animate-on-scroll';
      card.setAttribute('data-vid-id', vid.id);
      card.innerHTML = `
        <div class="video-thumb-wrap">
          <img src="${vid.thumb}" alt="${vid.title}" class="video-thumb" loading="lazy">
          <div class="video-play-btn">▶</div>
          <span class="video-duration-pill">${vid.duration}</span>
        </div>
        <div class="video-body">
          <span class="video-category">${vid.category}</span>
          <h4 class="video-title">${vid.title}</h4>
          <p class="video-desc">${vid.desc}</p>
        </div>
      `;

      card.addEventListener('click', () => {
        openVideoModal(vid);
      });

      videosGrid.appendChild(card);
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => animObserver.observe(el));
  }

  function openVideoModal(vid) {
    if (!videoModal) return;
    videoModalTitle.textContent = vid.title;

    // Rich Interactive Player Simulation
    videoPlayerWrapper.innerHTML = `
      <div class="video-sim-player">
        <div style="font-size: 3rem; margin-bottom: 12px;">🎬</div>
        <h3 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 8px;">${vid.title}</h3>
        <p style="max-width: 600px; color: #cbd5e1; font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px;">${vid.embedInfo}</p>
        
        <div style="width: 100%; max-width: 500px; height: 6px; background: rgba(255,255,255,0.2); border-radius: 3px; position: relative; overflow: hidden; margin-bottom: 16px;">
          <div style="width: 65%; height: 100%; background: #ef4444; border-radius: 3px;"></div>
        </div>

        <div class="video-sim-controls">
          <button class="btn btn-primary" style="padding: 10px 20px; font-size: 0.9rem;" onclick="alert('Playing interactive Namakkal documentary clip preview.')">
            <span>▶ Replay Trailer</span>
          </button>
          <a href="https://www.youtube.com/results?search_query=${encodeURIComponent('Namakkal ' + vid.title)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="padding: 10px 20px; font-size: 0.9rem;">
            <span>Watch Full HD Video on YouTube ↗</span>
          </a>
        </div>
      </div>
    `;

    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeVideoModal() {
    if (!videoModal) return;
    videoModal.classList.remove('active');
    videoPlayerWrapper.innerHTML = '';
    document.body.style.overflow = '';
  }

  if (videoModalCloseBtn) videoModalCloseBtn.addEventListener('click', closeVideoModal);
  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeVideoModal();
    });
  }

  if (heroWatchVideoBtn) {
    heroWatchVideoBtn.addEventListener('click', () => {
      const featuredVid = videosData[0];
      if (featuredVid) openVideoModal(featuredVid);
    });
  }

  /* ==========================================================================
     10. INTERACTIVE DISTRICT MAP
     ========================================================================== */
  function initInteractiveMap() {
    const pins = document.querySelectorAll('.district-svg-map .map-pin');
    const chips = document.querySelectorAll('.map-quick-picker .picker-chip');

    function selectLocation(locKey) {
      const data = mapLocationsData[locKey];
      if (!data) return;

      // Update pins active state
      pins.forEach(p => p.classList.toggle('active', p.getAttribute('data-loc') === locKey));

      // Update chips active state
      chips.forEach(c => c.classList.toggle('active', c.getAttribute('data-pick') === locKey));

      // Update Details Box
      if (mapPinBadge) mapPinBadge.textContent = data.badge;
      if (mapSelectedTitle) mapSelectedTitle.textContent = data.title;
      if (mapSelectedDesc) mapSelectedDesc.textContent = data.desc;
      if (mapDistanceVal) mapDistanceVal.textContent = data.distance;
      if (mapElevationVal) mapElevationVal.textContent = data.elevation;
      if (mapHighlightVal) mapHighlightVal.textContent = data.highlight;
      if (mapCommuteVal) mapCommuteVal.textContent = data.commute;
      if (mapDirectionsLink) mapDirectionsLink.href = data.mapUrl;
    }

    pins.forEach(pin => {
      pin.addEventListener('click', () => {
        const loc = pin.getAttribute('data-loc');
        selectLocation(loc);
      });
    });

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const loc = chip.getAttribute('data-pick');
        selectLocation(loc);
      });
    });
  }

  /* ==========================================================================
     11. EVENTS & FESTIVALS
     ========================================================================== */
  function renderEvents(filter = 'all') {
    if (!eventsGrid) return;
    eventsGrid.innerHTML = '';

    const filtered = filter === 'all' ? eventsData : eventsData.filter(e => e.type === filter);

    filtered.forEach(evt => {
      const card = document.createElement('div');
      card.className = 'event-card animate-on-scroll';
      card.innerHTML = `
        <div class="event-media">
          <img src="${evt.image}" alt="${evt.title}" loading="lazy" onerror="this.src='images/culture/festivals.svg'">
          <div class="event-date-badge">
            <div class="event-date-month">${evt.month}</div>
            <div class="event-date-day">${evt.day}</div>
          </div>
        </div>
        <div class="event-content">
          <span class="event-location">📍 ${evt.location}</span>
          <h3 class="event-title">${evt.title}</h3>
          <p class="event-desc">${evt.desc}</p>
          <span class="event-status-pill ${evt.type}">${evt.type === 'upcoming' ? 'Upcoming Celebration' : 'Annual Heritage Feast'}</span>
        </div>
      `;
      eventsGrid.appendChild(card);
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => animObserver.observe(el));
  }

  document.querySelectorAll('.events-filter-bar .tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.events-filter-bar .tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-efilter');
      renderEvents(filter);
    });
  });

  /* ==========================================================================
     12. SEARCH OVERLAY & FUZZY MATCHER
     ========================================================================== */
  const searchIndex = [
    // Places
    ...placesData.map(p => ({
      title: p.name,
      category: 'Tourist Destination',
      snippet: p.shortDesc,
      targetId: 'places'
    })),
    // Taluks
    ...taluksData.map(t => ({
      title: `${t.name} Taluk (${t.nameTa})`,
      category: 'Administrative Taluk',
      snippet: t.desc,
      targetId: 'taluks'
    })),
    // Economy
    {
      title: 'Poultry & Egg Industry (Egg City)',
      category: 'Economy',
      snippet: 'Produces over 4.5 crore eggs daily, NECC price fixing center and international export leader.',
      targetId: 'economy'
    },
    {
      title: 'Transport & Lorry Body Building',
      category: 'Economy',
      snippet: 'Home to 50,000+ commercial trucks and specialized body fabrication workshops.',
      targetId: 'economy'
    },
    {
      title: 'Kaveri River Agriculture & Tapioca',
      category: 'Economy',
      snippet: 'Paddy, betel vines, sugarcane, and Tamil Nadu’s leading sago tapioca factories.',
      targetId: 'economy'
    },
    {
      title: 'Kumarapalayam Textiles & Borewell Rigs',
      category: 'Economy',
      snippet: 'Powerlooms producing export towels and Tiruchengode borewell rig assembly.',
      targetId: 'economy'
    },
    // Culture
    {
      title: 'Kongu Nadu Food & Namakkal Kozhi Biryani',
      category: 'Culture & Food',
      snippet: 'Authentic Pallipalayam chicken, Kozhi Biryani, Rasipuram ghee, and Kaveri fish curry.',
      targetId: 'culture'
    },
    {
      title: 'Valvil Ori Tourism Vizha',
      category: 'Festivals',
      snippet: 'Celebration of Sangam King Valvil Ori with traditional archery and tribal dance in Kolli Hills.',
      targetId: 'events'
    },
    // Services
    {
      title: 'Ambulance & Hospital Emergency',
      category: 'Public Services',
      snippet: '108 Ambulance & Govt Medical College Hospital round-the-clock emergency support.',
      targetId: 'services'
    }
  ];

  function openSearchModal() {
    if (!searchModal) return;
    searchModal.classList.add('active');
    searchInput.value = '';
    searchInput.focus();
    renderSearchResults('');
  }

  function closeSearchModal() {
    if (!searchModal) return;
    searchModal.classList.remove('active');
  }

  function renderSearchResults(query) {
    if (!searchResultsList) return;
    const cleanQuery = query.toLowerCase().trim();

    if (!cleanQuery) {
      searchResultsList.innerHTML = `
        <div style="padding: 16px; color: var(--text-tertiary); font-size: 0.88rem;">
          <strong>Suggested Searches:</strong>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px;">
            <button class="prompt-pill" onclick="document.getElementById('searchInput').value='Kolli Hills'; document.getElementById('searchInput').dispatchEvent(new Event('input'))">Kolli Hills</button>
            <button class="prompt-pill" onclick="document.getElementById('searchInput').value='Anjaneyar'; document.getElementById('searchInput').dispatchEvent(new Event('input'))">Anjaneyar</button>
            <button class="prompt-pill" onclick="document.getElementById('searchInput').value='Poultry'; document.getElementById('searchInput').dispatchEvent(new Event('input'))">Poultry & Eggs</button>
            <button class="prompt-pill" onclick="document.getElementById('searchInput').value='Lorry'; document.getElementById('searchInput').dispatchEvent(new Event('input'))">Lorry Transport</button>
            <button class="prompt-pill" onclick="document.getElementById('searchInput').value='Ambulance'; document.getElementById('searchInput').dispatchEvent(new Event('input'))">Emergency 108</button>
          </div>
        </div>
      `;
      return;
    }

    const matches = searchIndex.filter(item => 
      item.title.toLowerCase().includes(cleanQuery) ||
      item.category.toLowerCase().includes(cleanQuery) ||
      item.snippet.toLowerCase().includes(cleanQuery)
    );

    if (matches.length === 0) {
      searchResultsList.innerHTML = `
        <div class="search-empty-state">
          <div style="font-size: 2rem; margin-bottom: 8px;">🔍</div>
          <h4>No results found for "${query}"</h4>
          <p style="font-size: 0.88rem; margin-top: 4px;">Try searching for "Kolli", "Fort", "Rasipuram", "Food", or "Hospital".</p>
        </div>
      `;
      return;
    }

    searchResultsList.innerHTML = matches.map(item => `
      <div class="search-result-item" data-target="${item.targetId}">
        <div class="search-item-info">
          <span class="search-item-cat">${item.category}</span>
          <h4 class="search-item-title">${item.title}</h4>
          <p style="font-size: 0.84rem; color: var(--text-secondary); margin-top: 2px;">${item.snippet.substring(0, 90)}...</p>
        </div>
        <span class="search-item-arrow">→</span>
      </div>
    `).join('');

    // Attach click to navigate
    searchResultsList.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', () => {
        const targetId = el.getAttribute('data-target');
        closeSearchModal();
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  if (searchTriggerBtn) searchTriggerBtn.addEventListener('click', openSearchModal);
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value);
    });
  }

  if (searchModal) {
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) closeSearchModal();
    });
  }

  /* ==========================================================================
     13. "ASK NAMAKKAL" AI ASSISTANT WIDGET
     ========================================================================== */
  function toggleAiChat() {
    if (!aiChatPanel) return;
    aiChatPanel.classList.toggle('open');
    if (aiChatPanel.classList.contains('open') && aiUserInput) {
      aiUserInput.focus();
    }
  }

  if (aiLauncherBtn) aiLauncherBtn.addEventListener('click', toggleAiChat);
  if (aiCloseBtn) aiCloseBtn.addEventListener('click', toggleAiChat);

  // Send message handler
  function handleAiSubmit(userQuestion) {
    const text = userQuestion || (aiUserInput ? aiUserInput.value.trim() : '');
    if (!text) return;

    // Append user message bubble
    appendMessage(text, 'user');
    if (aiUserInput) aiUserInput.value = '';

    // Show typing indicator
    showTypingIndicator();

    // Process answer with realistic conversational delay
    setTimeout(() => {
      hideTypingIndicator();
      const botAnswer = getAiResponse(text);
      appendMessage(botAnswer, 'bot');
    }, 600);
  }

  function getAiResponse(query) {
    const lower = query.toLowerCase();

    for (const item of aiKnowledgeBase) {
      if (item.keywords.some(k => lower.includes(k))) {
        return item.answer;
      }
    }

    return "Namakkal is known for its **Egg and Poultry Industry**, **Lorry Body Building**, the ancient **Rock Fort**, the sacred **18-ft Anjaneyar Temple**, and the cool **Kolli Hills** (70 hairpin bends & Agaya Gangai falls). You can ask me for specifics about places, food, transport, or travel tips!";
  }

  function appendMessage(text, sender) {
    if (!aiMessagesContainer) return;
    const msgEl = document.createElement('div');
    msgEl.className = `ai-msg ${sender}`;

    // Convert markdown bold and bullet points into HTML
    const formatted = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');

    msgEl.innerHTML = `<div class="ai-msg-bubble">${formatted}</div>`;
    aiMessagesContainer.appendChild(msgEl);
    aiMessagesContainer.scrollTop = aiMessagesContainer.scrollHeight;
  }

  function showTypingIndicator() {
    if (!aiMessagesContainer) return;
    const typing = document.createElement('div');
    typing.id = 'aiTypingIndicator';
    typing.className = 'ai-typing-indicator';
    typing.innerHTML = `
      <div class="ai-typing-dot"></div>
      <div class="ai-typing-dot"></div>
      <div class="ai-typing-dot"></div>
    `;
    aiMessagesContainer.appendChild(typing);
    aiMessagesContainer.scrollTop = aiMessagesContainer.scrollHeight;
  }

  function hideTypingIndicator() {
    const typing = document.getElementById('aiTypingIndicator');
    if (typing) typing.remove();
  }

  if (aiChatForm) {
    aiChatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleAiSubmit();
    });
  }

  // Quick Prompt Pills
  document.querySelectorAll('.ai-quick-prompts .prompt-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const prompt = pill.getAttribute('data-prompt');
      handleAiSubmit(prompt);
    });
  });

  /* ==========================================================================
     14. GLOBAL KEYBOARD SHORTCUTS
     ========================================================================== */
  window.addEventListener('keydown', (e) => {
    // Ctrl + K or / to open Search
    if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA')) {
      e.preventDefault();
      openSearchModal();
    }

    // Escape closes any open modal
    if (e.key === 'Escape') {
      if (searchModal && searchModal.classList.contains('active')) closeSearchModal();
      if (lightboxModal && lightboxModal.classList.contains('active')) closeLightbox();
      if (videoModal && videoModal.classList.contains('active')) closeVideoModal();
      if (detailModal && detailModal.classList.contains('active')) detailModal.classList.remove('active');
      if (aiChatPanel && aiChatPanel.classList.contains('open')) toggleAiChat();
    }

    // Lightbox Left/Right arrows
    if (lightboxModal && lightboxModal.classList.contains('active')) {
      if (e.key === 'ArrowRight') showNextLightbox();
      if (e.key === 'ArrowLeft') showPrevLightbox();
    }
  });

  /* ==========================================================================
     15. BOOTSTRAP APPLICATION
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    renderTaluks();
    renderPlaces('all');
    renderGallery('all');
    renderVideos();
    renderEvents('all');
    initInteractiveMap();
    console.log('Namma Namakkal District Information & Tourism Portal loaded successfully.');
  });

})();

// Scroll Reveal Animations (triggers only once per element, no repeated animation / no blinking)
const animObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target); // Unobserves immediately so it never repeats on scroll!
    }
  });
}, { threshold: 0.1 });

function registerScrollAnimations() {
  const selector = '.animate-on-scroll, .section-header, .discover-narrative, .history-timeline-box, .culture-feature-card, .pillar-card, .itinerary-card, .interactive-map-area, .map-info-sidebar, .reach-card, .service-card';
  document.querySelectorAll(selector).forEach(el => {
    if (!el.classList.contains('in-view')) {
      el.classList.add('animate-on-scroll');
      animObserver.observe(el);
    }
  });
}

registerScrollAnimations();