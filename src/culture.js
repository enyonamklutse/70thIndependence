document.addEventListener('DOMContentLoaded', () => {
  const galleryByRegion = {
    'Greater Accra': [
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80'
    ],
    Ashanti: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1516031190212-da133013de50?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80'
    ],
    Western: [
      'https://images.unsplash.com/photo-1523901839036-a3030662f8d1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1464226184884-fa52ac9d5766?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1505761671935-60ebc1dfb8f9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80'
    ],
    Central: [
      'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80'
    ],
    Eastern: [
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1464226184884-fa52ac9d5766?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1516031190212-da133013de50?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80'
    ],
    Volta: [
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80'
    ],
    Northern: [
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1516031190212-da133013de50?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1464226184884-fa52ac9d5766?auto=format&fit=crop&w=900&q=80'
    ],
    'Upper East': [
      'https://images.unsplash.com/photo-1505761671935-60ebc1dfb8f9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80'
    ],
    'Upper West': [
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1516031190212-da133013de50?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1464226184884-fa52ac9d5766?auto=format&fit=crop&w=900&q=80'
    ],
    Bono: [
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1464226184884-fa52ac9d5766?auto=format&fit=crop&w=900&q=80'
    ],
    'Bono East': [
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1464226184884-fa52ac9d5766?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
    ],
    Ahafo: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1516031190212-da133013de50?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80'
    ],
    'Western North': [
      'https://images.unsplash.com/photo-1523901839036-a3030662f8d1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1464226184884-fa52ac9d5766?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80'
    ],
    Savannah: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1464226184884-fa52ac9d5766?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80'
    ],
    'North East': [
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1516031190212-da133013de50?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
    ],
    Oti: [
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1523901839036-a3030662f8d1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1521483450388-6d7f1f8f1d8d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1464226184884-fa52ac9d5766?auto=format&fit=crop&w=900&q=80'
    ]
  };

  const regionalCulture = {
    'Greater Accra': {
      title: 'Greater Accra: the capital spirit',
      note: 'Accra brings together Ga heritage, coastal life, public celebration, and the creative energy of a living capital city shaped by trade, migration and national pride.',
      highlights: ['Ga traditions', 'Chale Wote', 'Ada and coastal festivals', 'Waakye and seafood culture'],
      produce: 'cassava, fresh fish, okra, tomatoes, pepper, plantain',
      gallery: buildRegionGallery('Greater Accra')
    },
    Ashanti: {
      title: 'Ashanti: gold, heritage and royal pride',
      note: 'Asante culture is anchored in kente, chieftaincy, royal ceremonies, and a rich tradition of hospitality that continues to shape the region’s identity and national pride.',
      highlights: ['Kente weaving', 'Akwasidae', 'Asante culinary traditions', 'Royal leadership'],
      produce: 'yam, plantain, maize, cassava, palm nuts, cocoyam',
      gallery: buildRegionGallery('Ashanti')
    },
    Western: {
      title: 'Western: coast, food and festival life',
      note: 'The Western Region carries strong Fante and coastal identities, shaped by fishing, community celebrations, and a cuisine rooted in the sea and the land.',
      highlights: ['Fante identity', 'Coastal festivals', 'Fresh fish cuisine', 'Fishing communities'],
      produce: 'fish, cassava, coconut, pineapple, pepper, maize',
      gallery: buildRegionGallery('Western')
    },
    Central: {
      title: 'Central: history, harbour and tradition',
      note: 'The Central Region carries the memory of Cape Coast, the castle, schooling, trade and Fante cultural life, all woven together through celebration and remembrance.',
      highlights: ['Cape Coast heritage', 'Fante traditions', 'Harbour life', 'School and festival pride'],
      produce: 'rice, maize, cassava, groundnuts, pepper, vegetables',
      gallery: buildRegionGallery('Central')
    },
    Eastern: {
      title: 'Eastern: community roots and craftsmanship',
      note: 'The Eastern Region is known for farming, creative craft traditions, close-knit communities, and vibrant cultural ceremonies rooted in family and place.',
      highlights: ['Krobo and Akuapem traditions', 'Craftwork', 'Community festivals', 'Cocoa farming'],
      produce: 'plantain, cassava, maize, cocoa, palm oil, vegetables',
      gallery: buildRegionGallery('Eastern')
    },
    Volta: {
      title: 'Volta: music, livelihoods and identity',
      note: 'The Volta Region is deeply shaped by Ewe language, community music, resilient livelihoods and a strong sense of cultural continuity.',
      highlights: ['Ewe culture', 'Traditional music', 'Festival gatherings', 'Food crop farming'],
      produce: 'yam, plantain, maize, rice, cocoa, vegetables',
      gallery: buildRegionGallery('Volta')
    },
    Northern: {
      title: 'Northern: resilience and heritage',
      note: 'The Northern Region is shaped by Dagbani culture, drumming, farming traditions and the social power of community celebrations.',
      highlights: ['Dagbon heritage', 'Traditional drums', 'Durbar culture', 'Farming traditions'],
      produce: 'millet, sorghum, groundnuts, rice, yam, cowpea',
      gallery: buildRegionGallery('Northern')
    },
    'Upper East': {
      title: 'Upper East: tradition in motion',
      note: 'The Upper East Region is known for its strong social memory, language heritage, durbars and agricultural traditions that shape daily life.',
      highlights: ['Durbar culture', 'Oral tradition', 'Local dress', 'Community pride'],
      produce: 'millet, sorghum, groundnuts, cowpea, rice, yam',
      gallery: buildRegionGallery('Upper East')
    },
    'Upper West': {
      title: 'Upper West: communal strongholds and oral history',
      note: 'The Upper West Region is shaped by storytelling, strong family bonds, craft traditions and a resilient culture rooted in community leadership.',
      highlights: ['Dagaaba and Wa traditions', 'Storytelling', 'Craftmanship', 'Community leadership'],
      produce: 'groundnuts, millet, sorghum, cowpea, maize, yam',
      gallery: buildRegionGallery('Upper West')
    },
    Bono: {
      title: 'Bono: cultural memory and social life',
      note: 'Bono culture celebrates ancestry, ritual, drumming and community organisation, giving the region a strong sense of memory and belonging.',
      highlights: ['Brong traditions', 'Ancestral respect', 'Community festivals', 'Drumming culture'],
      produce: 'yam, cassava, maize, groundnuts, plantain, pepper',
      gallery: buildRegionGallery('Bono')
    },
    'Bono East': {
      title: 'Bono East: heritage in everyday life',
      note: 'Bono East blends craft traditions, local rituals and farming culture, making everyday life a living expression of regional identity.',
      highlights: ['Local rituals', 'Craftwork', 'Community memory', 'Festival life'],
      produce: 'cassava, maize, plantain, yam, cocoa, groundnuts',
      gallery: buildRegionGallery('Bono East')
    },
    Ahafo: {
      title: 'Ahafo: pride, craft and ceremony',
      note: 'Ahafo is shaped by close community relationships, agricultural pride, local ceremonies and a cultural continuity carried by elders and families.',
      highlights: ['Community ceremonies', 'Craft traditions', 'Family memory', 'Cultural pride'],
      produce: 'cassava, yam, maize, groundnuts, cocoa, pepper',
      gallery: buildRegionGallery('Ahafo')
    },
    'Western North': {
      title: 'Western North: forest communities and culture',
      note: 'Western North reflects forest livelihoods, local rituals and a deep attachment to land, craft and community identity.',
      highlights: ['Sefwi and Aowin traditions', 'Local festivals', 'Forest livelihoods', 'Craft heritage'],
      produce: 'cocoa, cassava, plantain, maize, palm oil, pepper',
      gallery: buildRegionGallery('Western North')
    },
    Savannah: {
      title: 'Savannah: expansive traditions and resilience',
      note: 'The Savannah Region carries ancestral knowledge, oral history and resilient community identity shaped by harvest, custom and storytelling.',
      highlights: ['Gonja heritage', 'Oral history', 'Harvest traditions', 'Community resilience'],
      produce: 'sorghum, millet, groundnuts, cowpea, yam, maize',
      gallery: buildRegionGallery('Savannah')
    },
    'North East': {
      title: 'North East: culture in motion',
      note: 'The North East Region is shaped by strong community networks, language heritage and agricultural traditions carried through yearly gatherings and family life.',
      highlights: ['Mamprusi heritage', 'Language culture', 'Festive gatherings', 'Agricultural identity'],
      produce: 'millet, sorghum, groundnuts, rice, cowpea, yam',
      gallery: buildRegionGallery('North East')
    },
    Oti: {
      title: 'Oti: pride rooted in identity',
      note: 'Oti brings together kinship, ritual, music and community traditions, creating a cultural landscape rooted in local identity and resilience.',
      highlights: ['Guan and Ewe influences', 'Local songs', 'Festival tradition', 'Community identity'],
      produce: 'cassava, maize, yam, plantain, pepper, vegetables',
      gallery: buildRegionGallery('Oti')
    }
  };

  const craftData = {
    'Greater Accra': {
      capital: 'Accra',
      occupations: 'Trading, fishing, garment making, metalwork, food processing and tourism services.',
      artsCrafts: 'Textile design, beadwork, basket weaving, leather goods and metal fabrication.',
      materials: 'Cotton, leather, glass, metal, straw and clay.',
      significance: 'These crafts support urban livelihoods while preserving the artistic identity of Ga, Fante and migrant communities in the capital.',
      photos: [
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80'
      ]
    },
    Ashanti: {
      capital: 'Kumasi',
      occupations: 'Farming, trading, cocoa production, weaving, wood carving and commerce.',
      artsCrafts: 'Kente weaving, wood carving, goldsmithing, basketry and beadwork.',
      materials: 'Cotton, gold, wood, leather, glass and clay.',
      significance: 'Ashanti craft traditions represent prestige, royal heritage and social memory, especially through kente and goldwork.',
      photos: [
        'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1516031190212-da133013de50?auto=format&fit=crop&w=900&q=80'
      ]
    },
    Western: {
      capital: 'Sekondi-Takoradi',
      occupations: 'Fishing, farming, logging, salt production and small-scale trade.',
      artsCrafts: 'Basket weaving, pottery, weaving, wood carving and coastal craft making.',
      materials: 'Wood, straw, clay, cotton and leather.',
      significance: 'Coastal and forest communities use craft to preserve identity, celebrate ancestry and support household livelihoods.',
      photos: [
        'https://images.unsplash.com/photo-1523901839036-a3030662f8d1?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=900&q=80'
      ]
    },
    Central: {
      capital: 'Cape Coast',
      occupations: 'Fishing, farming, trade, education, craft production and tourism.',
      artsCrafts: 'Fishing net making, weaving, pottery, clay work and beadwork.',
      materials: 'Cotton, clay, straw, wood and metal.',
      significance: 'These skills connect communities to coastal heritage, historical memory and the resilience of local trade.',
      photos: [
        'https://images.unsplash.com/photo-1505761671935-60ebc1dfb8f9?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80'
      ]
    },
    Eastern: {
      capital: 'Koforidua',
      occupations: 'Cocoa farming, trading, food processing, weaving and small commerce.',
      artsCrafts: 'Kente weaving, basket weaving, beadwork and wood carving.',
      materials: 'Cotton, straw, wood, clay and leather.',
      significance: 'Craftmaking strengthens community identity, preserves family knowledge and supports cocoa-growing economies.',
      photos: [
        'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1516031190212-da133013de50?auto=format&fit=crop&w=900&q=80'
      ]
    },
    Volta: {
      capital: 'Ho',
      occupations: 'Farming, fishing, weaving, trade and community-based service work.',
      artsCrafts: 'Textile weaving, basketry, drum making, leathercraft and pottery.',
      materials: 'Cotton, leather, wood, clay and straw.',
      significance: 'Volta crafts carry social memory, dance culture and community rituals across generations.',
      photos: [
        'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1521483450388-6d7f1f8f1d8d?auto=format&fit=crop&w=900&q=80'
      ]
    },
    Northern: {
      capital: 'Tamale',
      occupations: 'Farming, animal rearing, grain processing, weaving and trading.',
      artsCrafts: 'Weaving, leatherwork, pottery, basketry and traditional tailoring.',
      materials: 'Cotton, leather, clay, straw and wood.',
      significance: 'Northern craft practices embody resilience, identity and the continuity of cultural values in everyday life.',
      photos: [
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1464226184884-fa52ac9d5766?auto=format&fit=crop&w=900&q=80'
      ]
    },
    'Upper East': {
      capital: 'Bolgatanga',
      occupations: 'Agriculture, livestock rearing, trade and craft-based work.',
      artsCrafts: 'Pottery, basket weaving, leatherwork and weaving.',
      materials: 'Clay, straw, leather, cotton and wood.',
      significance: 'Craftwork supports community identity, ceremony and family traditions across the region.',
      photos: [
        'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=900&q=80'
      ]
    },
    'Upper West': {
      capital: 'Wa',
      occupations: 'Farming, animal husbandry, cloth weaving and informal trade.',
      artsCrafts: 'Weaving, basketry, pottery and leatherwork.',
      materials: 'Cotton, clay, leather, straw and wood.',
      significance: 'These crafts carry oral traditions and help maintain community pride, identity and continuity.',
      photos: [
        'https://images.unsplash.com/photo-1516031190212-da133013de50?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80'
      ]
    },
    Bono: {
      capital: 'Sunyani',
      occupations: 'Farming, trading, timber work, weaving and local services.',
      artsCrafts: 'Wood carving, weaving, basketry and metalwork.',
      materials: 'Wood, cotton, metal, straw and leather.',
      significance: 'Craft traditions connect communities to ancestry, ritual and the everyday beauty of homegrown design.',
      photos: [
        'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80'
      ]
    },
    'Bono East': {
      capital: 'Techiman',
      occupations: 'Farming, trade, cocoa production, small-scale manufacturing and craft work.',
      artsCrafts: 'Basket weaving, wood carving, pottery and cloth design.',
      materials: 'Wood, clay, straw, cotton and leather.',
      significance: 'These crafts are part of daily life and keep the region’s heritage visible in homes, ceremonies and markets.',
      photos: [
        'https://images.unsplash.com/photo-1464226184884-fa52ac9d5766?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80'
      ]
    },
    Ahafo: {
      capital: 'Goaso',
      occupations: 'Cocoa farming, trading, carpentry, weaving and craftmaking.',
      artsCrafts: 'Woodwork, weaving, basketry and small metal crafts.',
      materials: 'Wood, cotton, metal, straw and leather.',
      significance: 'Handcrafted objects embody skill, identity and pride in the region’s agricultural and social life.',
      photos: [
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80'
      ]
    },
    'Western North': {
      capital: 'Sefwi Wiawso',
      occupations: 'Farming, forest product gathering, trading and woven goods work.',
      artsCrafts: 'Basket weaving, wood carving, weaving and pottery.',
      materials: 'Wood, straw, clay, cotton and leather.',
      significance: 'Crafts are deeply tied to forest livelihoods, ritual celebration and family knowledge.',
      photos: [
        'https://images.unsplash.com/photo-1523901839036-a3030662f8d1?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1516031190212-da133013de50?auto=format&fit=crop&w=900&q=80'
      ]
    },
    Savannah: {
      capital: 'Damango',
      occupations: 'Farming, herding, trade and local processing of agricultural goods.',
      artsCrafts: 'Pottery, basketry, leatherwork and weaving.',
      materials: 'Clay, straw, leather, cotton and wood.',
      significance: 'Craft traditions carry ancestral knowledge and help maintain continuity in a region shaped by mobility and memory.',
      photos: [
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1464226184884-fa52ac9d5766?auto=format&fit=crop&w=900&q=80'
      ]
    },
    'North East': {
      capital: 'Nalerigu',
      occupations: 'Farming, livestock rearing, trade and craft-based livelihoods.',
      artsCrafts: 'Leatherwork, basketry, pottery and clothmaking.',
      materials: 'Leather, clay, straw, cotton and wood.',
      significance: 'These arts reflect lineage, respect for elders and the practical creativity of everyday community life.',
      photos: [
        'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80'
      ]
    },
    Oti: {
      capital: 'Dambai',
      occupations: 'Farming, weaving, small trade, fishing and local service work.',
      artsCrafts: 'Basketry, drum making, weaving and wood carving.',
      materials: 'Wood, cotton, straw, clay and leather.',
      significance: 'These forms of expression strengthen identity, support ceremonies and keep local creative heritage alive.',
      photos: [
        'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80'
      ]
    }
  };

  const festivalData = [
    {
      name: 'Homowo',
      region: 'Greater Accra',
      month: 'May',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
      description: 'Homowo is a joyful Ga festival held in remembrance of a time of hunger and survival. It is celebrated with drumming, dancing, food and community gratitude.'
    },
    {
      name: 'Akwasidae',
      region: 'Ashanti',
      month: 'June',
      image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80',
      description: 'Akwasidae is a major Asante festival that honours ancestors and celebrates lineage, leadership and unity across the kingdom.'
    },
    {
      name: 'Fetu Afahye',
      region: 'Central',
      month: 'August',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
      description: 'This festival is celebrated by the people of Cape Coast and nearby communities to thank the gods for blessings and protection.'
    },
    {
      name: 'Odwira',
      region: 'Eastern',
      month: 'September',
      image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80',
      description: 'Odwira brings together families and communities to honour ancestors and strengthen bonds through music, dance and shared meals.'
    },
    {
      name: 'Damba',
      region: 'Northern',
      month: 'August',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
      description: 'Damba is widely celebrated in the north as a time of prayer, family gathering and remembrance of Islamic and traditional heritage.'
    },
    {
      name: 'Aboakyir',
      region: 'Central',
      month: 'April',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
      description: 'Aboakyir is a hunting festival associated with the Efutu people, celebrated to honour ancestry, courage and community protection.'
    },
    {
      name: 'Kundum',
      region: 'Western',
      month: 'August',
      image: 'https://images.unsplash.com/photo-1523901839036-a3030662f8d1?auto=format&fit=crop&w=900&q=80',
      description: 'Kundum is a vibrant festival celebrated by coastal communities to honour the ancestors and seek peace, prosperity and abundance.'
    },
    {
      name: 'Agbadza',
      region: 'Volta',
      month: 'December',
      image: 'https://images.unsplash.com/photo-1521483450388-6d7f1f8f1d8d?auto=format&fit=crop&w=900&q=80',
      description: 'Agbadza is a traditional Ewe dance festival that celebrates community, social memory and the joy of gathering together.'
    },
    {
      name: 'Ngmayem',
      region: 'Upper East',
      month: 'March',
      image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=900&q=80',
      description: 'Ngmayem is a community festival that reflects gratitude, social harmony and the cultural traditions of the people of the north-east region.'
    }
  ];

  const words = [
    { language: 'Akan', word: 'Akwaaba', pronunciation: 'ah-KWAH-ba', meaning: 'Welcome. A greeting that expresses warmth and hospitality.' },
    { language: 'Ga', word: 'Mɛkɛ', pronunciation: 'meh-KEH', meaning: 'Thank you. A simple expression of appreciation and respect.' },
    { language: 'Ewe', word: 'Kpɔ', pronunciation: 'kpo', meaning: 'See/observe. A word that encourages awareness and attentiveness.' },
    { language: 'Akan', word: 'Medaase', pronunciation: 'meh-DAH-seh', meaning: 'Thank you. A common phrase used in everyday gratitude.' },
    { language: 'Twi', word: 'Yɛbɛka', pronunciation: 'yeh-beh-KAH', meaning: 'We will talk. A phrase that reflects togetherness and community.' },
    { language: 'Ga', word: 'Naa', pronunciation: 'nah', meaning: 'Yes/indeed. Frequently used to affirm verbally and socially.' }
  ];

  const quizData = [
    {
      question: 'Which festival is celebrated by the Ga people to honour harvest and resilience?',
      options: ['Homowo', 'Akwasidae', 'Kundum', 'Damba'],
      answer: 'Homowo'
    },
    {
      question: 'Which region is famously associated with Kente weaving and royal heritage?',
      options: ['Western', 'Ashanti', 'North East', 'Volta'],
      answer: 'Ashanti'
    },
    {
      question: 'What is the main purpose of many Ghanaian festivals?',
      options: ['To replace school holidays', 'To mark harvest, ancestry and community identity', 'To celebrate only music', 'To advertise tourism'],
      answer: 'To mark harvest, ancestry and community identity'
    }
  ];

  function buildRegionGallery(regionName) {
    const selectedImages = galleryByRegion[regionName] || galleryByRegion['Greater Accra'];
    const gallery = [
      { kind: 'Culture', title: 'Community heritage and local pride' },
      { kind: 'Food', title: 'Traditional meals and seasonal harvest' },
      { kind: 'Festival', title: 'Celebration, drums and togetherness' },
      { kind: 'Arts', title: 'Craft, textile and creative identity' },
      { kind: 'Produce', title: 'Farm produce and regional abundance' }
    ];

    return gallery.map((item, index) => ({
      ...item,
      image: selectedImages[index] || selectedImages[0]
    }));
  }

  const craftGrid = document.getElementById('craft-grid');
  if (craftGrid) {
    function renderCrafts() {
      const entries = Object.entries(craftData);

      craftGrid.innerHTML = entries.map(([region, data]) => `
        <article class="craft-card">
          <div class="craft-card-header">
            <h3>${region}</h3>
            <span>${data.capital}</span>
          </div>
          <div class="craft-photo-grid">
            <img class="craft-photo" src="${data.photos[0]}" alt="${region} craftsperson at work" loading="lazy">
            <img class="craft-photo" src="${data.photos[1]}" alt="Finished ${region} craft product" loading="lazy">
          </div>
          <div class="craft-body">
            <div class="craft-field">
              <strong>Traditional occupations</strong>
              <p>${data.occupations}</p>
            </div>
            <div class="craft-field">
              <strong>Arts and crafts</strong>
              <p>${data.artsCrafts}</p>
            </div>
            <div class="craft-field">
              <strong>Materials used</strong>
              <p>${data.materials}</p>
            </div>
            <div class="craft-field">
              <strong>Cultural significance</strong>
              <p>${data.significance}</p>
            </div>
          </div>
        </article>
      `).join('');
    }

    renderCrafts();
  }

  const festivalGrid = document.getElementById('festival-grid');
  const monthButtons = document.querySelectorAll('.festival-month');
  const festivalRegionButtons = document.querySelectorAll('.festival-region');

  let activeMonth = 'all';
  let activeRegion = 'all';

  function renderFestivals() {
    if (!festivalGrid) return;

    const filtered = festivalData.filter((festival) => {
      const monthMatch = activeMonth === 'all' || festival.month === activeMonth;
      const regionMatch = activeRegion === 'all' || festival.region === activeRegion;
      return monthMatch && regionMatch;
    });

    festivalGrid.innerHTML = filtered.map((festival) => `
      <article class="festival-card">
        <img src="${festival.image}" alt="${festival.name} festival in ${festival.region}" loading="lazy">
        <div class="festival-card-body">
          <div class="festival-meta">
            <span>${festival.month}</span>
            <span>${festival.region}</span>
          </div>
          <h3>${festival.name}</h3>
          <p>${festival.description}</p>
        </div>
      </article>
    `).join('');

    if (!filtered.length) {
      festivalGrid.innerHTML = '<p class="festival-empty">No festivals match this region and month combination.</p>';
    }
  }

  monthButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeMonth = button.dataset.month;
      monthButtons.forEach((item) => item.classList.toggle('active', item === button));
      renderFestivals();
    });
  });

  festivalRegionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeRegion = button.dataset.region;
      festivalRegionButtons.forEach((item) => item.classList.toggle('active', item === button));
      renderFestivals();
    });
  });

  renderFestivals();

  const regionDetail = document.getElementById('region-detail');
  const regionButtons = document.querySelectorAll('.region-chip');

  function renderRegion(regionName) {
    if (!regionDetail) return;

    const selected = regionalCulture[regionName] || regionalCulture['Greater Accra'];

    regionButtons.forEach((button) => {
      const active = button.dataset.region === regionName;
      button.classList.toggle('active', active);
    });

    regionDetail.innerHTML = `
      <div class="region-header">
        <span class="region-badge">Region spotlight</span>
        <h3>${selected.title}</h3>
      </div>
      <p>${selected.note}</p>
      <ul>
        ${selected.highlights.map((item) => `<li>${item}</li>`).join('')}
      </ul>
      <p class="region-produce"><strong>Common produce:</strong> ${selected.produce}</p>
      <div class="region-gallery">
        ${selected.gallery.map((item) => `
          <article class="region-gallery-item" data-title="${item.title}" data-image="${item.image}" data-kind="${item.kind}">
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="region-gallery-copy">
              <span>${item.kind}</span>
              <h4>${item.title}</h4>
            </div>
          </article>
        `).join('')}
      </div>
    `;

    regionDetail.querySelectorAll('.region-gallery-item').forEach((item) => {
      item.addEventListener('click', () => {
        openLightbox(item.dataset.image, item.dataset.title, item.dataset.kind);
      });
    });
  }

  regionButtons.forEach((button) => {
    button.addEventListener('click', () => renderRegion(button.dataset.region));
  });

  renderRegion('Greater Accra');

  const regionCardsGrid = document.getElementById('region-cards-grid');
  if (regionCardsGrid) {
    regionCardsGrid.innerHTML = Object.entries(regionalCulture).map(([region, info]) => `
      <button class="region-card" type="button" data-region="${region}">
        <span>${region}</span>
        <strong>${info.title}</strong>
      </button>
    `).join('');

    regionCardsGrid.querySelectorAll('.region-card').forEach((card) => {
      card.addEventListener('click', () => {
        const target = card.dataset.region;
        renderRegion(target);
        document.getElementById('regional-heritage').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  const wordCard = document.getElementById('word-card');
  const wordTag = document.getElementById('word-tag');
  const wordTitle = document.getElementById('word-title');
  const wordPronunciation = document.getElementById('word-pronunciation');
  const wordMeaning = document.getElementById('word-meaning');
  const nextWordButton = document.getElementById('next-word');

  let currentWordIndex = 0;

  function renderWord() {
    if (!wordTag || !wordTitle || !wordPronunciation || !wordMeaning) return;

    const currentWord = words[currentWordIndex];
    wordTag.textContent = currentWord.language;
    wordTitle.textContent = currentWord.word;
    wordPronunciation.textContent = currentWord.pronunciation;
    wordMeaning.textContent = currentWord.meaning;
    wordCard.classList.add('pulse');
    setTimeout(() => wordCard.classList.remove('pulse'), 300);
  }

  if (nextWordButton) {
    nextWordButton.addEventListener('click', () => {
      currentWordIndex = (currentWordIndex + 1) % words.length;
      renderWord();
    });
  }

  renderWord();

  const quizQuestion = document.getElementById('quiz-question');
  const quizCounter = document.getElementById('quiz-counter');
  const quizOptions = document.getElementById('quiz-options');
  const quizFeedback = document.getElementById('quiz-feedback');
  const nextQuestionButton = document.getElementById('next-question');

  let quizIndex = 0;
  let score = 0;
  let answeredCurrent = false;

  function renderQuiz() {
    if (!quizQuestion || !quizCounter || !quizOptions || !quizFeedback || !nextQuestionButton) return;

    const current = quizData[quizIndex];
    quizCounter.textContent = `Question ${quizIndex + 1} of ${quizData.length}`;
    quizQuestion.textContent = current.question;
    quizOptions.innerHTML = current.options.map((option) => `
      <button type="button" class="quiz-option" data-answer="${option}">${option}</button>
    `).join('');

    quizFeedback.textContent = '';
    quizFeedback.classList.add('hidden');
    answeredCurrent = false;
    nextQuestionButton.textContent = quizIndex === quizData.length - 1 ? 'See results' : 'Next Question';

    quizOptions.querySelectorAll('.quiz-option').forEach((optionButton) => {
      optionButton.addEventListener('click', () => {
        if (answeredCurrent) return;
        answeredCurrent = true;

        const chosen = optionButton.dataset.answer;
        const isCorrect = chosen === current.answer;
        if (isCorrect) score += 1;

        quizFeedback.classList.remove('hidden');
        quizFeedback.textContent = isCorrect
          ? 'Correct! Well done.'
          : `Not quite. The correct answer is: ${current.answer}`;

        quizOptions.querySelectorAll('.quiz-option').forEach((button) => {
          button.disabled = true;
          button.classList.toggle('is-correct', button.dataset.answer === current.answer);
          button.classList.toggle('is-wrong', button.dataset.answer === chosen && !isCorrect);
        });
      });
    });
  }

  if (nextQuestionButton) {
    nextQuestionButton.addEventListener('click', () => {
      if (!answeredCurrent && quizQuestion) {
        quizFeedback.classList.remove('hidden');
        quizFeedback.textContent = 'Please select an answer to continue.';
        return;
      }

      if (quizIndex < quizData.length - 1) {
        quizIndex += 1;
        renderQuiz();
        return;
      }

      quizFeedback.classList.remove('hidden');
      quizFeedback.textContent = `You scored ${score} out of ${quizData.length}. Keep exploring Ghana’s culture!`;
      nextQuestionButton.textContent = 'Quiz complete';
      nextQuestionButton.disabled = true;
    });
  }

  renderQuiz();

  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDescription = document.getElementById('lightbox-description');
  const closeLightbox = document.querySelector('.lightbox-close');

  function openLightbox(imageSrc, title, kind) {
    if (!lightbox || !lightboxImage || !lightboxTitle || !lightboxDescription) return;

    lightboxImage.src = imageSrc;
    lightboxImage.alt = title;
    lightboxTitle.textContent = title;
    lightboxDescription.textContent = kind ? `${kind} story from Ghana’s cultural heritage.` : 'A glimpse of Ghanaian heritage and identity.';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  }

  function closeDialog() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
  }

  if (closeLightbox) {
    closeLightbox.addEventListener('click', closeDialog);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) closeDialog();
    });
  }

  document.querySelectorAll('.story-link').forEach((button, index) => {
    button.addEventListener('click', () => {
      const storyCard = button.closest('.story-card');
      const image = storyCard ? storyCard.querySelector('img') : null;
      const heading = storyCard ? storyCard.querySelector('h3') : null;
      const text = storyCard ? storyCard.querySelector('p') : null;

      openLightbox(
        image ? image.src : 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
        heading ? heading.textContent : `Story ${index + 1}`,
        text ? text.textContent : 'Cultural story'
      );
    });
  });

  const cultureForm = document.getElementById('culture-form');
  const storyMessage = document.getElementById('story-message');

  if (cultureForm) {
    cultureForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (storyMessage) {
        storyMessage.classList.remove('hidden');
        storyMessage.textContent = 'Thank you for sharing your culture with 70 Chale.';
      }
      cultureForm.reset();
    });
  }

  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    const toggleBackToTop = () => {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', toggleBackToTop);
    toggleBackToTop();

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function escapeKeyClose(event) {
    if (event.key === 'Escape' && lightbox) {
      closeDialog();
    }
  }

  document.addEventListener('keydown', escapeKeyClose);
});
