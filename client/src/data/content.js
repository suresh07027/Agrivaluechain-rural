// All page copy lives here for now. When you're ready to add Postgres,
// this is exactly the shape you'd fetch from GET /api/options and
// GET /api/options/:id instead of importing it statically.

import capacityDevelopmentHero from "../assets/capacity/capacity.webp";
import capacityDevelopmentContentImage from "../assets/capacity/capacity-development-hero.webp";
import postHarvestHandbookCover from "../assets/capacity/post-harvest-handbook-cover.webp";
import collaborativeImage from "../assets/collabrative/collabrative.webp";
import linkingFarmersHero from "../assets/Linking-farmers/linking-farmers-hero.webp";
import packhouseFlowDiagram from "../assets/packhouse-flow-diagram.webp";
import integratedPackhouseLayout from "../assets/Linking-farmers/integrated-packhouse-layout.webp";
import ripeningChamberImage from "../assets/Linking-farmers/ripening-chamber.webp";
import reeferTransportImage from "../assets/Linking-farmers/reefer-transport-vehicle.webp";
import coldRoomSolarImage from "../assets/Linking-farmers/cold-room-solar.webp";
import coldRoomConventionalImage from "../assets/Linking-farmers/cold-room-conventional.webp";
import coldRoomTechImage from "../assets/Linking-farmers/cold-room-tech.webp";
import preCoolingUnitImage from "../assets/Linking-farmers/pre-cooling-unit.webp";

// Content for the two-column hero showcase panel (title + audience badge +
// feature list + photo) that sits over the hero background image.
export const heroShowcase = {
  titleLine: "Sustainable Rural Livelihood Development:",
  badgeTitle: "Agrivaluechain",
  audiences: ["Farmers", "Youth", "Women"],
  photo: "communityPhoto",
  photoAlt: "Agrivaluechain field team working alongside farmers and women's groups",
  features: [
 
    {
      icon: "sprout",
      text: "Sustainable rural livelihood development focuses ** on creating sustainable income opportunities** for rural communities through a better understanding of agri value chain opportunities."
    },
    {
      icon:"coins",
      text:"It empowers farmers to improve their earnings for better livelihoods."
    },
    {
      icon: "trendDown",
      text: " Technical Interventions in agri value chain systems lead to **reduced post-harvest losses and extended shelf life**, helping farmers decide whether to sell or process their produce for improved market access and linkage."
    },
    {
      icon: "box",
      text: "Developing product specific Post harvest management , Process, Protocols and Systems for connecting farmers directly to organised markets."
    },
    {
      icon: "people",
      text: "**Agrivaluechain works with stakeholders across the value chain — state and central government institutions, banking institutions, traders, super markets, and farmer groups — with capacity-building at the centre of our work.**"
    }
  ]
};

export const options = [
  {
    id: "option1",
    num: "01",
    title: "Technical Consultancy & Advisory Support",
    desc: "Technical support in post-harvest management and value chain creation for horticulture, food supply chains, pack houses and cold chains.",
    image: null,
    tag: "01 · Technical Consultancy & Advisory Support",
    heroTitle: " Technical support in post-harvest management",
    heroSub:
      "We provide end-to-end technical support in post-harvest management, with a strong focus on value chain creation for horticulture, food supply chains, pack houses, cold chains, and value-addition projects. From concept to implementation, we translate technical requirements into practical, financially viable project plans — for businesses, institutions, and stakeholders.",
    hasFullContent: true,
    offerings: [
      "Preparation of techno-economic feasibility reports for post-harvest infrastructure — pack houses, cold storage, ripening chambers, pre-cooling units, and more.",
      "Technical reports on post-harvest operations, process flows, and layouts."
    ],
    segments: [
      {
        slug: "government-institutions",
        num: "01",
        name: "Government Institutions",
        accent: "rust",
        teaser: "Scheme appraisal, cluster plans, and technical reports that reduce post-harvest losses across public programmes.",
        quote: "\"Technical report preparation for creating value chains and reducing post-harvest losses.\"",
        blocks: [
          {
            label: "Advisory services",
            list: [
              "To appraise and sanction projects under horticultural value chains, food processing, cold chain, and post-harvest schemes",
              "Detailed process flow charts, lay-out/floor plans, and technical standards for pack houses, pre-cooling, cold rooms, ripening chambers, etc.,",
              "Clear documentation of infrastructure gaps (power, water, connectivity, effluent treatment)"
            ]
          },
          { label: "Implemented services", text: "State Departments of Horticulture / Agriculture, NHB / NABARD-linked projects, District-level integrated post-harvest infrastructure plans, FPO's and cluster-based post-harvest projects" }
        ]
      },
      {
        slug: "private-companies",
        num: "02",
        name: "Private Companies",
        accent: "steel",
        teaser: "Bankable and investor-ready DPRs for pack houses, cold chain, ripening units, and value-addition plants.",
        quote: null,
        blocks: [
          { label: "Our focus on", text: " Guiding Agri-business companies planning integrated cold chain or pack house networks; entrepreneurs seeking loans for ripening chambers, cold rooms, or mobile pre-cooling units." },
          { label: "What we deliver", text: "Investor/bankable-ready Detailed Project Reports with robust techno-economic analysis: CAPEX/OPEX, revenue model. Product/process flow, capacity planning and standard operating procedures for post-harvest operations (grading, packing, pre-cooling, storage, etc.)." },
          { label: "Whom we work", list: ["Exporters", "Importers", "Super markets", "Agri entrepreneur"] }
        ]
      }
    ],
    audiencePages: {
      "government-institutions": {
        heroTitle: "Technical advisory for encouraging & guiding private public agriculture, horticulture, fisheries valuechain investments",
        heroSub:
          "We support government institutions by preparing technical feasibility reports, engineering specification, tendering documents for implementing post-harvest and cold chain infrastructure.",
        photo: "government",
        relatedProjectNums: ["01"]
      },
      "private-companies": {
        heroTitle: "Detailed Project Report preparation for agri-business investment",
        heroSub:
          "We prepare investor- and bankable ready project reports for pack houses, cold storage, ripening units, and integrated hubs — with process flows, capacity planning, and CAPEX/OPEX models that stand up to financing and internal approval.",
        photo: "companies",
        relatedProjectNums: ["06", "05"]
      }
    },
    scope: [
      "Project at a glance — summary, investment, key outcomes",
      "About the applicant / promoter",
      "Technical feasibility & market potential",
      "Post-harvest infrastructure scenario / geography of the state or region",
      "Process flow chart and layout / floor plan of operations",
      "Post-harvest operations — pre-cooling, grading, packaging, storage, cold chain, ripening",
      "Technical standards for civil infrastructure and plant & machinery",
      "Financial feasibility — capital, revenue and operating cost model; profitability evaluation",
      "Implementation plan",
      "Annexures — data sheets, quotations, technical drawings, references"
    ],
    projects: [
      {
        num: "01",
        slug: "tamil-nadu-warehousing-corporation",
        label: "Tamil Nadu Warehousing Corporation",
        heroImage: "/images/projects/twc-cold-storage.webp",
        title: "Tamil Nadu Warehousing Corporation",
        logo: "/images/projects/logos/tnwc-logo.webp",
        subtitle: "Solar-Powered Cold Storage",
        location: "Mettupalayam, Tamil Nadu",
        text: "A solar-supported, multi-commodity cold storage facility in Mettupalayam to store fruits and vegetables, with a capacity of 500 MT. Funded entirely by own capital without term loans, and featuring a 50 kW on-grid solar system to reduce power costs. Designed with four independent temperature and humidity-controlled chambers, an ante-room, and automated material handling systems — helping local farmers cut post-harvest losses and reach better domestic and international markets.",
        facilityText: [
          "It is a solar-supported multi-commodity cold storage facility planned in Mettupalayam and Theni for the benefits of farmers community. It amis to store fruits and vegetables, capacity of 10x50  MT chambers.",
          "The total estimated project cost reached Rs. 4606 lakhs, which was entirely funded by own capital without term loans and included a 50 kW on-grid solar system to reduce power costs.",
          "It aimed to help local farmers reduce post-harvest losses and access better domestic and international markets. The facility was designed featuring four independent temperature and humidity-controlled chambers, an ante-room, and automated material handling systems."
        ],
        highlights: [
          { icon: "snowflake", value: "500 MT", label: "Cold Storage Capacity" },
          { icon: "solar", value: "50 kW", label: "On-grid Solar System" },
          { icon: "coin", value: "₹460 Lakhs", label: "Total Project Cost" },
          { icon: "leaf", value: "100%", label: "Self-Funded Project" }
        ],
        impactText: "Empowering farmers by reducing post-harvest losses, ensuring quality storage, and opening doors to better domestic and international markets."
      },
      {
        num: "02",
        title: "Vegetable Cluster Development Program (Olakkur)",
        text: "Olakkur block, Tindivanam taluk, Villupuram district, Tamil Nadu — 52 villages, 6,000 acres of cultivable land of which only 10–12% is currently under cultivation. The region can supply roughly 40 tons of vegetables daily, with Chennai as the primary market, 125 km away. Modern warehousing and cold storage are projected to cut post-harvest and transit losses by 15%, while the cluster approach helps farmer groups plan production together, bypass middlemen, and execute schemes like MIDH and SHM.",
        metrics: [
          { value: "52 villages", label: "Coverage" },
          { value: "40 tons/day", label: "Supply potential" },
          { value: "15%", label: "Loss reduction target" }
        ]
      },
      {
        num: "03",
        slug: "lemon-value-chain",
        label: "Lemon Value Chain",
        heroImage: "/images/projects/lemon-value-chain.webp",
        title: "Lemon Value Chain Study",
        logo: "/images/projects/logos/lemon-value-chain-logo.webp",
        text: "Field work in Avinashi, Tirupur, with laboratory analysis at Tamil Nadu Agricultural University (TNAU), studying critical pathways in the citrus value chain to extend post-harvest longevity and marketability. Controlled trials show lime shelf life extending to 40–50 days, lemon shelf life to 60–80 days under standard cold storage, and up to 55 days of high quality when Modified Atmosphere Packaging (MAP) is paired with cold storage.",
        facilityText: [
          "Post-harvest management plays a vital role in minimizing agricultural losses and maximizing commercial value. Based on work conducted in Avinashi, Tirupur and comprehensive laboratory analyses carried out at Tamil Nadu Agricultural University (TNAU),Coimbatore, this study highlights critical pathways within the citrus value chain to enhance post-harvest longevity and marketability.",
          "Controlled trials demonstrate that implementing proper post-harvest handling and storage techniques significantly extends the market window for citrus fruits."
        ],
        highlights: [
          { icon: "leaf", value: "40–50 days", label: "Lemon Shelf Life" },
          { icon: "solar", value: "55 days", label: "MAP + Cold Storage" }
        ],
        impactText: "The role of temperature,  high relative humidity, ethylene management and Modified atmosphericpackaging (MAP) with cold storage increased the revenue to  farmers by extending shelf life of 40-50 days.",
        fullContent: [
          {
            type: "p",
            text: "Post-harvest management plays a vital role in minimizing agricultural losses and maximizing commercial value. Based on field work conducted in Avinashi, Tirupur and comprehensive laboratory analyses carried out at Tamil Nadu Agricultural University (TNAU), this study highlights critical pathways within the citrus value chain to enhance post-harvest longevity and marketability."
          },
          { type: "h3", text: "Key Research Findings & Storage Performance" },
          {
            type: "p",
            text: "Controlled trials demonstrate that implementing proper post-harvest handling and storage techniques significantly extends the market window for citrus fruits:"
          },
          {
            type: "list",
            items: [
              "Lemon Shelf Life: Extended up to 40–50 days under optimal storage conditions.",
              "Advanced Packaging: Pairing Modified Atmosphere Packaging (MAP) with cold storage maintains high lemon quality for up to 55 days, providing a reliable alternative for supply chain logistics."
            ]
          }
        ],
        metrics: [
          { value: "40–50 days", label: "Lemon shelf life" },
          { value: "55 days", label: "With MAP + cold storage" }
        ]
      },
      {
        num: "04",
        title: "Onion Value Chain",
        text: "Tamil Nadu is a major small-onion producer, yet loses up to 40% of commercial value to traditional storage limitations. The project introduces advanced farm-level productivity practices, specialised pack houses, mechanical dryers and controlled scientific storage, alongside value-added processing — pastes, powders and flakes — to diversify market offerings and align with central government schemes.",
        metrics: [{ value: "40%", label: "Current commercial losses" }]
      },
      {
        num: "05",
        slug: "agro-food-supply",
        label: "Agro Food Supply",
        heroImage: "/images/projects/agro-food-supply.webp",
        title: "Agro Food Supply",
        logo: "/images/projects/logos/agro-food-supply-logo.webp",
        text: "A direct trade route connecting surplus farming regions in the north — Bihar, Chhattisgarh, Jharkhand — with high-demand southern markets including Tamil Nadu, Kerala and Karnataka. Products are sorted by shelf life and temperature needs, from durable goods like maize and makhana to perishables like litchi and green peas. Backed by the Ministry of Food Processing's backward and forward linkage funding, the project connects northern farmers with South Indian processors and kitchens.",
        facilityText: [
          "Agro Food Supply Chain builds a direct trade route connecting surplus farming regions in the north—like Bihar, Chhattisgarh, and Jharkhand—with high-demand southern markets including Tamil Nadu, Kerala, and Karnataka. To keep food fresh and minimize waste, products are carefully sorted by their shelf life and temperature needs, ranging from durable goods like maize and makhana to perishable items like litchi and green peas.",
          "The project solves big problems like delivery delays, shifting prices, and a shortage of basic cold storage right on the farms."
        ],
        highlights: [
          { icon: "leaf", value: "North to South", label: "Direct Trade Route" },
          { icon: "snowflake", value: "Shelf Life", label: "Temperature Needs" },
          { icon: "target", value: "Backward and Forward", label: "Linkages" }
        ],
        impactText: "By utilizing government funding from the Ministry of Food Processing scheme for backward and forward linkages, the project bridges crucial gaps in the supply chain. This connects northern farmers directly with South Indian food processors and kitchens, helping farmers earn better income, giving processors a steady supply of products, and ensuring consumers get quality food at fair prices.",
        fullContent: [
          {
            type: "p",
            text: "Agro Food Supply Chain builds a direct trade route connecting surplus farming regions in the north—like Bihar, Chhattisgarh, and Jharkhand—with high-demand southern markets including Tamil Nadu, Kerala, and Karnataka. To keep food fresh and minimize waste, products are carefully sorted by their shelf life and temperature needs, ranging from durable goods like maize and makhana to perishable items like litchi and green peas."
          },
          {
            type: "p",
            text: "The project solves big problems like delivery delays, shifting prices, and a shortage of basic cold storage right on the farms. By utilizing government funding from the Ministry of Food Processing scheme for backward and forward linkages, the project bridges crucial gaps in the supply chain. This connects northern farmers directly with South Indian food processors and kitchens, helping farmers earn better income, giving processors a steady supply of products, and ensuring consumers get quality food at fair prices."
          },
          { type: "h3", text: "What we offer" },
          {
            type: "list",
            items: [
              "Agro cluster development project",
              "Linking farmers to the market",
              "Creating awareness programme on MIDH",
              "Promoting small scale agri business development"
            ]
          }
        ],
        metrics: []
      },
      {
        num: "06",
        slug: "carrot-value-chain",
        label: "Carrot Value Chain",
        heroImage: "/images/projects/carrot-value-chain.webp",
        title: "Carrot Value Chain",
        logo: "/images/projects/logos/carrot-value-chain-logo.webp",
        text: "Addressing 20–30% post-harvest losses in major producing regions — the Nilgiris in Tamil Nadu, and Kolar and Chikkaballapur in Karnataka. Designed for a throughput of 3–5 metric tons per hour, the project establishes an end-to-end post-harvest pack house, using smart telescopic belt conveyors that cut loading and unloading time by 50–70% while reducing manual labour and injury risk.",
        facilityText: [
          "The proposed carrot value chain development project addresses the 20% to 30% post-harvest losses currently caused by inadequate handling, storage, and transportation practices in major producing regions like the Nilgiris in Tamil Nadu, Kolar, and Chickkaballapur in Karnataka.",
          "Designed for a high-volume throughput capacity of 3 metric tons to 5 metric tons per hour, the initiative establishes an end-to-end post-harvest pack house solution aimed at preserving freshness, extending shelf life, and ensuring premium quality assurance."
        ],
        highlights: [
          { icon: "leaf", value: "20–30%", label: "Post-Harvest Losses" },
          { icon: "snowflake", value: "3–5 MT/hr", label: "Throughput Capacity" },
          { icon: "solar", value: "50–70%", label: "Faster Loading and Unloading" }
        ],
        impactText: "The project helps to optimize transport costs and back-end supplier logistics, alongside the preparation of techno-economic feasibility reports for banking purposes. Operational efficiency is maximized through innovative technologies such as smart telescopic belt conveyors that reach directly into transport trucks, cutting loading and unloading times by 50% to 70% while reducing manual labour requirements and physical injury risks.",
        fullContent: [
          {
            type: "p",
            text: "The proposed carrot value chain development project addresses the 20% to 30% post-harvest losses currently caused by inadequate handling, storage, and transportation practices in major producing regions like the Nilgiris in Tamil Nadu, Kolar, and Chickkaballapur in Karnataka. Designed for a high-volume throughput capacity of 3 metric tons to 5 metric tons per hour, the initiative establishes an end-to-end post-harvest pack house solution aimed at preserving freshness, extending shelf life, and ensuring premium quality assurance."
          },
          {
            type: "p",
            text: "The project helps to optimize transport costs and back-end supplier logistics, alongside the preparation of techno-economic feasibility reports for banking purposes. Operational efficiency is maximized through innovative technologies such as smart telescopic belt conveyors that reach directly into transport trucks, cutting loading and unloading times by 50% to 70% while reducing manual labour requirements and physical injury risks."
          }
        ],
        metrics: [
          { value: "20–30%", label: "Post-harvest losses addressed" },
          { value: "3–5 MT/hr", label: "Throughput capacity" },
          { value: "50–70%", label: "Faster loading/unloading" }
        ]
      },
      {
        num: "07",
        title: "Mango Drone Study",
        text: "Assessing mango quality and quantity ahead of harvest using drone and AI technology — counting fruit accurately and evaluating ripeness, size and health. Using RGB and NDVI cameras with machine learning models (YOLOv8, CNNs), the system tracks fruit count and maturity indicators with up to 99% accuracy, supplemented by on-site assessments and farmer questionnaires — helping farmers plan selective harvesting, export contracts and logistics.",
        metrics: [{ value: "99%", label: "Counting accuracy" }]
      }
    ]
  },
  {
    id: "option2",
    num: "02",
    title: "Collaborative Research & Development",
    desc: "Industry academic research with agricultural University.",
    image: collaborativeImage,
    tag: "02 · Collaborative Research & Development",
    heroTitle: "Industry academic research with agricultural University.",
    heroSub:
      "Agri Value Chain Services has been partnering with Tamil Nadu Agricultural University (TNAU), Coimbatore, to co-create practical, science-based solutions for post-harvest management, value addition, and rural livelihood enhancement. This collaboration brings together AVC's field implementation experience with TNAU's research and technical expertise to strengthen horticulture value chains in Tamil Nadu and beyond.",
    hasFullContent: true,
    offeringsTitle: "Our Work with Academic Institution in Collabrative Research in Training & Development",
    offeringsIntro:
      "Small and marginal horticulture farmers often face losses due to gaps in post-harvest handling, storage, grading, and market linkages. By working closely with TNAU, Agri Value Chain aims to:",
    offerings: [
      "Promote collaboration on scientific studies improving scientific storage systems adopted in value chain systems",
      "Research and development of establishing optimum controlled environment conditions to extend the post-harvest life of tropical horticultural produce",
      "Training and development of capacity building programs",
      "Developing innovative quality measurement systems to study and improve the shelf life of produce"
    ],
    mouText:
      "Agri Value Chain has signed a Memorandum of Understanding with Tamil Nadu Agricultural University, Coimbatore, to strengthen training and development programs."
  },
  {
    id: "option3",
    num: "03",
    title: "Linking Farmers to the Market — Project Development",
    desc: "Project development that connects farmer groups directly to markets, reducing dependence on middlemen and improving price realisation.",
    image: null,
    tag: " Linking Farmers to the Market — Project Development",
    heroTitle: "Linking farmer groups directly to markets",
    heroSub:
      "Small and marginal horticulture farmers often produce good quality crops but struggle to access profitable markets. AVC's project development approach bridges this gap by organising producers, strengthening value chains, and creating structured market linkages that improve farm-gate prices and reduce post-harvest losses.",
    hasFullContent: true,
    heroImage: linkingFarmersHero,
    heroImageAlt: "Farmers and vendors trading fresh produce directly at a rural market",
    solutionBlock: {
      image: packhouseFlowDiagram,
      imageAlt: "Six-stage flow of farm-level post-harvest infrastructure: collection centres, pack houses, sorting and grading, packaging, pre-cooling, and storage and transport",
    },
    capacityTitle: "Pack house capacities models for small, medium scale Farmers group.",
    capacityIntro: "A solar-supported pack house can reduce post-harvest losses and enhance value addition for fruits, vegetables, greens, spices, and millets. Key components include receiving, sorting, grading, and washing units; a pre-cool room and cold room powered by solar-assisted refrigeration; and value-addition units such as a solar dryer and a solar thresher.",
    capacityNote: "Includes receiving, sorting, grading, washing, pre-cool room, cold room, value-addition, packing, and storage.",
    capacityTiers: [
      {
        label: "Small farmers",
        sqft: "2,000",
        details: ["3 MT pre-cooling or cold room", "Sorting and grading area"]
      },
      {
        sqft: "5,000",
        label: "Small and Medium farmers",
        details: ["2–3 MT (pre-cooling) and 10 MT (cold room)", "Sorting and grading area", "Ripening rooms (if required)"]
      },
      {
        sqft: "10,000",
        label: "Large farmers groups",
        details: ["3 MT (pre-cooling) and 20 MT (cold room)", "Sorting and grading hall", "Receiving and delivery area"]
      }
    ],
    sustainableTechTitle: "Adopting sustainable technologies in Post-Harvestment Management",
    sustainableTech: [
      "Integration of solar panels system",
      "Evaporative cooling",
      "Ethylene & Carbon di-oxide management",
      "Natural refrigerants"
    ],
    midh: {
         midhTitle: "MIDH guidelines",
    midhGuidelines: [
      {
        number: "01",
        title: "Integrated Pack House",
        image: integratedPackhouseLayout,
        imageAlt: "3D layout of an integrated pack house showing receiving, sorting and grading, pre-cooling, ripening, packing material storage, and dispatch areas",
        components: "Integrated Pack house (IP) of size 18m x 22m with facilities of Receiving Area, weighing bridge, washing, and an enclosed sorting and grading area with a mechanised sorting/grading conveyor-based system.",
        costNorms: "Rs. 60 lakh / project",
        beneficiaries: "Individuals, group of farmers/growers/consumers, partnership/proprietary firms, Self Help Groups (SHGs), Farmers Producer Organizations (FPOs), Agricultural Produce Market Committees (APMC) & Marketing Boards, and State Governments."
      },
      {
        number: "02",
        title: "Pressurised and Non-Pressurised Ripening Chamber",
        image: ripeningChamberImage,
        imageAlt: "Crates of bananas stacked in a ripening chamber with ceiling-mounted cooling fans",
        components: "Pressurised and non-pressurised ripening chamber",
        costNorms: [
          "Pressurised ripening chamber: Rs. 1.20 lakh/MT upto 300 MT per project",
          "Non-pressurised ripening chamber: Rs. 1.0 lakh/MT upto 300 MT per project"
        ],
        beneficiaries: "Individual farmers and growers, FPOs, agri-entrepreneurs and startups, exporters and traders of perishable commodities, and state government agencies."
      },
      {
        number: "03",
        title: "Reefer Transport Vehicle",
        image: reeferTransportImage,
        imageAlt: "Refrigerated transport truck fitted with a cooling unit",
        components: "Refrigerated transport vehicles",
        costNorms: [
          "1 no. vehicle of min. 1 MT upto 2 MT",
          "Either 1 ICE-based — Rs. 12 lakh/vehicle",
          "or 1 EV-based — Rs. 14 lakh/vehicle"
        ],
        beneficiaries: "Farmer Producer Organizations (FPOs), individual agricultural and horticultural producers of perishable commodities such as fruits, vegetables, dairy, and meat, cold chain infrastructure developers in both private and public sectors, and logistics providers specialising in the transportation of perishable goods."
      },
      {
        number: "04",
        title: "Cold Room",
        images: [coldRoomSolarImage, coldRoomConventionalImage, coldRoomTechImage],
        imageAlts: [
          "Compact solar-powered cold room unit with rooftop solar panels",
          "Interior of a cold storage room stacked with crates of produce",
          "Cold room technology and refrigeration equipment"
        ],
        variants: [
          { label: "Solar cold room", components: "Decentralised cold storages based on solar technologies or hybrid systems running on batteries, solar PV panels, microcontrollers, etc.", capacity: "Max. 30 MT (2 chambers of 15 MT)", subsidy: "Rs. 26 lakh/chamber" },
          { label: "Biomass based cold room", components: "Cold rooms based on thermal storage type, where electric energy is available for 8 hrs/day.", capacity: "Max. 30 MT (2 chambers of 15 MT)", subsidy: "Rs. 15 lakh/chamber" },
          { label: "Cold room — conventional technology", components: "Conventional refrigerants with ante rooms, insulation, and doors necessary inside civil work and refrigeration systems.", capacity: "Max. 30 MT (2 chambers of 15 MT)", subsidy: "Rs. 7.5 lakh/chamber" }
        ],
        beneficiaries: "Individual farmers and growers, FPOs, cooperative societies, agri-entrepreneurs and startups, exporters and traders of perishable commodities, and state government agencies or boards implementing cold-chain projects."
      },
      {
        number: "05",
        title: "Pre-Cooling Unit",
        image: preCoolingUnitImage,
        imageAlt: "Stacked crates of produce inside a pre-cooling unit with ceiling-mounted fans",
        produce: "Fruits and vegetables",
        components: "Capacity of 3 metric tons (MT) pre-cooling unit in an integrated pack house",
        costNorms: "Upto a maximum cost of Rs. 5 lakh/MT",
        beneficiaries: "Group of farmers/growers/consumers, partnership/proprietary firms, Farmers Producer Organizations (FPOs), Agricultural Produce Market Committees (APMC) & Marketing Boards, and State Governments."
      }
    ]
    }
  },
  {
    id: "option4",
    num: "04",
    title: "Capacity Development Program",
    desc: "Skill development programs in post-harvest management and cold chain operations, preparing agri-entrepreneurs and rural youth for employment and enterprise opportunities.",
    image: null,
    tag: " Capacity and Skill Development Program",
    heroTitle: "Skill development for agri-entrepreneurs and rural youth",
    heroSub:
      "Agri Value Chain (AVC) implements skill development programs focused on Post-Harvest Management and Cold Chain Operations, preparing agri-entrepreneurs, students, and rural youth for employment and enterprise opportunities.",
    hasFullContent: true,
    heroImage: capacityDevelopmentHero,
    heroImageAlt:
      "Capacity Development Program: Agri Value Chain training scenes across cold chain operations, post-harvest handling and grading, and quality control and value addition units",
    contentImage: capacityDevelopmentContentImage,
    contentImageAlt: "Capacity development training in post-harvest management and cold chain operations",
    intro: [
      "The training programs are developed in consultation with industry experts and tailored to met the operational requirements & best practices: ",
      {
        label: "* Export & Market Linkages",
        text: "Export packhouses, cold chain logistics providers, food processing companies, organised retail outlets, and distribution markets."
      },
      {
        label: "* Post-Harvest Management & Value Addition",
        text: "Participants are trained in technical aspects such as handling, storage, and value addition of products."
      },
      {
        label: "*Quality, Safety & Environmental Sustainability",
        text: "Operational efficiency, quality assurance, and safety standards are essential in today's competitive agri-business environment."
      },
      "AVC is partnering with Tamil Nadu Agricultural University (TNAU) to conduct a training program on post-harvest management, and TNAU will give certificates to the participants who completes the course."
    ],
    coursesTitle: "Course details (Tentative)",
    courses: [
      {
        num: "i",
        category: "Post-harvest management",
        title: "Post-harvest management of horticulture produce",
        modules: [
          "Introduction on Post-Harvest Management",
          "Importance of Post-Harvest Science",
          "Pack house operations",
          "Post-Harvest Management Protocols",
          "Packing and bar coding standards for traceability"
        ],
        duration: "3 days",
        benefits: [
          "Graduates in science and agriculture",
          "Agri entrepreneurs",
          "Exporters and importers",
          "Cold chain services providers",
          "Farmers group"
        ]
      },
      {
        num: "ii",
        category: "Refrigeration plant operations",
        title: "Refrigeration plant operations.",
        modules: [
          "Introduction to Refrigeration",
          "Refrigeration System and Components",
          "Role of Refrigeration and Applications",
          "Refrigeration in Agri Logistics",
          "Advancement in Refrigeration"
        ],
        duration: "3 days",
        benefits: [
          "Agri entrepreneurs",
          "Diploma/graduates in engineering",
          "Exporters and importers",
          "Cold chain services providers",
          "Farmers groups"
        ]
      },
      {
        num: "iii",
        category: "Government support on promoting post-harvest andcold chain",
        title: "Post-harvest management and Cold chain support schemes and incentives provided to encourage investments",
        modules: [
          "Basics of cold chain",
          "Refrigeration equipment operations",
          "Maintenance of refrigeration plant and insulated doors",
          "Troubleshooting and servicing of refrigeration equipment"
        ],
        duration: "3 days",
        benefits: [
          "Agri entrepreneurs",
          "Exporters and importers",
          "Cold chain services providers",
          "Farmers Producers groups",
          "SHM officers"
        ]
      }
    ],
    book: {
      title:
        "Post-harvest management (A practical Hand Book for Agri Value Chain Stake Holders)",
      image: postHarvestHandbookCover,
      imageAlt:
        "Post-Harvest Management handbook cover — a practical handbook for Agri Value Chain stakeholders",
      intro:
        "We have published a book for a training program on Post-harvest management on the below chapters covered:",
      chapters: [
        "Introduction for Post-Harvest Management",
        "Importance of Post-Harvest Science",
        "Understanding the Market Demand and Preparation",
        "Post-Harvest Management Protocols",
        "Post-Harvest Safety Standards and Produce Quality",
        "Good Practice adopted in Post-Harvest Management for Fruits & Vegetables",
        "Small scale Food Processing and Value addition",
        "Government of India - Schemes and Guidelines on Post-harvest Management"
      ]
    }
  }
];

export const contact = {
  email: "agrivaluechain@gmail.com",
  phone: "+91 94450 53300"
};

// Financial-institutions stakeholder -> one page each for Government and Private
// (route: /financial-institutions/:sectionId, rendered by pages/FinancePage.jsx).
// Source: "Project Report for Setting up Cold Chain & Distribution Center — AMA International".
//
// Sections (above the bills):
//   text   { kind, label, text }               paragraph (₹ amounts and % are auto-bolded)
//   chips  { kind, label, items: [string] }    pill list
//   cards  { kind, label, items: [{ label, text, chips? }] }   numbered cards
//
// Bills = the report's itemised tables, shown as invoice-style cards:
//   { id, title, note?, unit, index?, collapsed?, meter?, columns, rows, total, footnote? }
//   columns[].type : "text" (default) | "money" (number, shown 1,23,456) | "num" (string, right-aligned) | "status"
//   index: true    adds a Sl no. column
//   meter: "status" adds the progress bar + counts above the table (needs a "status" column)
//   total: { label, col, value, display }   col = key of the column the total sits under
export const financePages = {
  government: {
    id: "government",
    tag: "Financial institutions · Government",
    title: "Government",
    sub: "Subsidy, schemes and statutory clearances",
    lead: "Subsidy support, related schemes and the status of statutory clearances for the AMA International cold store project.",
    figures: [
      { value: "₹182.29 lakhs", label: "Capital subsidy", caption: "State Horticulture Mission, Kerala, under MIDH" },
      { value: "35%", label: "Subsidy rate", caption: "Cold rooms and pre-cooling" },
      { value: "100%", label: "Subsidy rate", caption: "Racking, handling equipment, docks and solar" }
    ],
    sections: [
      {
        kind: "text",
        label: "Capital subsidy",
        text: "₹182.29 lakhs from the State Horticulture Mission, Kerala, under MIDH. It is a back-end subsidy paid after the machinery is installed, and the loan is reduced by that amount once it arrives."
      },
      {
        kind: "chips",
        label: "Related schemes cited",
        items: ["PM Kisan SAMPADA", "National Horticulture Mission"]
      }
    ],
    billsLabel: "Project report bills",
    bills: [
      {
        id: "subsidy-estimation",
        title: "Subsidy estimation",
        note: "State Horticulture Mission-Kerala / MIDH guidelines",
        unit: "Amounts in Rs lakhs",
        columns: [
          { key: "item", label: "Item description" },
          { key: "capacity", label: "Capacity" },
          { key: "cost", label: "Eligible cost", type: "num" },
          { key: "pct", label: "Percentage", type: "num" },
          { key: "amount", label: "Subsidy amount", type: "num" }
        ],
        rows: [
          { item: "Pre-cooling unit", capacity: "6 MT", cost: "25", pct: "35%", amount: "8.75" },
          { item: "Cold rooms — 4 rooms, size 1797 m³", capacity: "2112 MT", cost: "168.96", pct: "35%", amount: "59.136" },
          { item: "Cold rooms (staging) — 3 rooms", capacity: "150 MT", cost: "45", pct: "35%", amount: "15.75" },
          { item: "Cold room (staging) — 1 room", capacity: "95 MT", cost: "15", pct: "35%", amount: "5.25" },
          { item: "Material storage", capacity: "1120 nos, 2000/MT", cost: "22.4", pct: "100%", amount: "22.4" },
          { item: "High reach material handling equipment — 1 no", capacity: "", cost: "17", pct: "100%", amount: "17" },
          { item: "Dock system — 2 nos", capacity: "", cost: "14", pct: "100%", amount: "14" },
          { item: "PLC system", capacity: "", cost: "10", pct: "50%", amount: "5" },
          { item: "Solar panel", capacity: "100 KW", cost: "35", pct: "100%", amount: "35" }
        ],
        total: { label: "Total subsidy", col: "amount", value: "182.29", display: "₹182.29 lakhs" },
        footnote: "3.4 m³/MT has been considered for storage capacity calculation as per Government guidelines."
      },
      {
        id: "statutory-clearances",
        title: "Statutory clearances",
        note: "Clearance from Government and other agencies",
        unit: "Status as per the project report",
        index: true,
        meter: "status",
        columns: [
          { key: "item", label: "Particulars" },
          { key: "agency", label: "Agency" },
          { key: "status", label: "Status", type: "status" }
        ],
        rows: [
          { item: "Approval of plan for civil works", agency: "Municipal / Village Panchayat", status: "Obtained" },
          { item: "Power sanction / construction power", agency: "KSEB", status: "Applied" },
          { item: "Pollution control", agency: "Kerala State Pollution Control Board", status: "Applied" },
          { item: "Fire Department", agency: "State Government", status: "Obtained" },
          { item: "Health Department", agency: "State Government", status: "Obtained" },
          { item: "SSI / Inspector of Factories", agency: "State Government", status: "Obtained" },
          { item: "FSSAI", agency: "Central Government", status: "Still to apply" }
        ]
      }
    ]
  },
  private: {
    id: "private",
    tag: "Financial institutions · Private",
    title: "Private",
    sub: "Promoter, funding and commercial partners",
    lead: "The promoter, how the project is funded, and the private partners involved in the AMA International cold store project.",
    figures: [
      { value: "₹668.37 lakhs", label: "Promoters’ capital", caption: "About 43% of the cost" },
      { value: "₹700 lakhs", label: "Bank term loan", caption: "Rising to ₹882.29 lakhs until the subsidy arrives" },
      { value: "6 partners", label: "AMA International", caption: "Family-run fruit traders" }
    ],
    sections: [
      {
        kind: "cards",
        label: "Promoter, funding and partners",
        items: [
          { label: "Promoter", text: "AMA International, a partnership firm owned by six partners (family-run fruit traders)." },
          { label: "Land", text: "Bought in the partners’ own names." },
          { label: "Promoters’ capital", text: "₹668.37 lakhs, about 43% of the cost." },
          { label: "Bank term loan", text: "₹700 lakhs, rising to ₹882.29 lakhs until the subsidy arrives." },
          { label: "Operations", text: "The cold store is mainly for the firm’s own fruit trading, with value-added retail packing." },
          { label: "Consultant", text: "Agri ValueChain Services Pvt. Ltd, a private company." },
          {
            label: "Suppliers and buyers",
            text: "Private firms such as Bitzer, Kion-Linde, Vikram Solar, Lulu Hypermarket and others.",
            chips: ["Bitzer", "Kion-Linde", "Vikram Solar", "Lulu Hypermarket"]
          }
        ]
      }
    ],
    billsLabel: "Project report bills",
    bills: [
      {
        id: "plant-machinery",
        title: "Plant and machinery",
        note: "Machinery items required for the project",
        unit: "Amounts in Rs",
        index: true,
        columns: [
          { key: "item", label: "Description of the item" },
          { key: "qty", label: "Qty" },
          { key: "supplier", label: "Supplier" },
          { key: "amount", label: "Amount (Rs)", type: "money" }
        ],
        rows: [
          { item: "Refrigeration plant (compressor, evaporators and accessories etc.)", qty: "14 sets", supplier: "Bitzer, Germany; Alfa LU-VE", amount: 15805220 },
          { item: "Electrical plant + transformer + DG set + lighting", qty: "1 set", supplier: "BK Power, Coimbatore", amount: 22160000 },
          { item: "Material storage system (racks and pallets)", qty: "1120 pallets", supplier: "Schafer, Malaysia", amount: 8727747 },
          { item: "Material handling equipment (reach trucks and BOPT)", qty: "3 nos", supplier: "Kion-Linde, Germany", amount: 7906000 },
          { item: "Solar PV system 100 kWp", qty: "1 set", supplier: "Vikram Solar", amount: 5000000 },
          { item: "Fire fighting", qty: "1 set", supplier: "Reputed make", amount: 2500000 },
          { item: "Cold storage operational management system", qty: "1 set", supplier: "Reputed make", amount: 1000000 },
          { item: "CCTV, weighing and barcoding machine", qty: "1 set", supplier: "Reputed make", amount: 2000000 }
        ],
        total: { label: "Total machinery cost", col: "amount", value: "6,50,98,967", display: "₹6,50,98,967" }
      },
      {
        id: "civil-works",
        title: "Building — civil works",
        note: "Cost break-up for building works, A",
        unit: "Amounts in Rs",
        index: true,
        collapsed: true,
        columns: [
          { key: "item", label: "Description of item" },
          { key: "amount", label: "Amount (Rs)", type: "money" }
        ],
        rows: [
          { item: "Mass cutting of earth and levelling", amount: 308000 },
          { item: "Filling and compacting", amount: 900000 },
          { item: "Plain cement concrete", amount: 2000000 },
          { item: "Footing, pedestal, plinth beam and retaining walls", amount: 4816000 },
          { item: "Ground floor columns, first floor columns, beams, slab, stairs and water tanks", amount: 6700000 },
          { item: "Underground tanks", amount: 1200000 },
          { item: "Electrical room trench R.C.C. work", amount: 600000 },
          { item: "Blockwork", amount: 1200000 },
          { item: "Plastering", amount: 700000 },
          { item: "Painting", amount: 500000 },
          { item: "Handrails", amount: 900000 },
          { item: "Flooring", amount: 5700000 },
          { item: "Wall tiling", amount: 150000 },
          { item: "Sanitary fitting, drainage and plumbing", amount: 250000 },
          { item: "Airconditioning", amount: 300000 },
          { item: "Electrification", amount: 400000 },
          { item: "Waterproofing", amount: 800000 },
          { item: "Doors and windows", amount: 400000 },
          { item: "External glazing", amount: 800000 },
          { item: "Automatic shutters", amount: 600000 },
          { item: "Boundary wall and gates", amount: 1000000 },
          { item: "Interior and furniture", amount: 500000 },
          { item: "Interlocking", amount: 800000 }
        ],
        total: { label: "Total amount", col: "amount", value: "3,15,24,000", display: "₹3,15,24,000" }
      },
      {
        id: "structural-steel",
        title: "Structural steel, roofing and wall cladding",
        note: "Cost break-up for building works, B",
        unit: "Amounts in Rs",
        index: true,
        columns: [
          { key: "item", label: "Description of item" },
          { key: "amount", label: "Amount (Rs)", type: "money" }
        ],
        rows: [
          { item: "Steel building including canopy", amount: 9225000 },
          { item: "Roof sheeting", amount: 1630000 },
          { item: "Roof insulation", amount: 836000 },
          { item: "Ridge", amount: 22000 },
          { item: "Gutter", amount: 125000 },
          { item: "Flashing", amount: 163000 },
          { item: "Cladding", amount: 1001000 }
        ],
        total: { label: "Total amount", col: "amount", value: "1,30,02,000", display: "₹1,30,02,000" }
      },
      {
        id: "insulated-building",
        title: "Insulated building, floor insulation, doors and docking system",
        note: "Cost break-up for building works, C",
        unit: "Amounts in Rs",
        index: true,
        columns: [
          { key: "item", label: "Description of item" },
          { key: "amount", label: "Amount (Rs)", type: "money" }
        ],
        rows: [
          { item: "Insulated panels", amount: 29071477 },
          { item: "Floor insulation", amount: null },
          { item: "Insulated doors", amount: 8695481 },
          { item: "Docking systems", amount: 1349098 }
        ],
        total: { label: "Total amount", col: "amount", value: "3,91,16,000", display: "₹3,91,16,000" },
        footnote: "The total estimated value for civil, structural and insulated building is ₹836.42 lakhs. The report does not state an amount for floor insulation."
      },
      {
        id: "cost-of-project",
        title: "Cost of project",
        note: "Estimated at ₹1550.66 lakhs",
        unit: "Amounts in Rs lakhs",
        columns: [
          { key: "item", label: "Cost of project" },
          { key: "amount", label: "Rs lakhs", type: "num" }
        ],
        rows: [
          { item: "Land and site development", amount: "0.00" },
          { item: "Building", amount: "836.42" },
          { item: "Plant and machinery", amount: "650.99" },
          { item: "Other miscellaneous assets", amount: "2.00" },
          { item: "Preliminary and pre-operative expenses", amount: "60.00" },
          { item: "Margin for working capital", amount: "1.25" }
        ],
        total: { label: "Total", col: "amount", value: "1550.66", display: "₹1,550.66 lakhs" },
        footnote: "Land is purchased in the name of the promoters, so its cost is not taken into the project cost."
      },
      {
        id: "means-of-finance",
        title: "Means of finance",
        note: "Promoters’ contribution works out to 43% of the total project cost",
        unit: "Amounts in Rs lakhs",
        columns: [
          { key: "item", label: "Means of finance" },
          { key: "amount", label: "Rs lakhs", type: "num" }
        ],
        rows: [
          { item: "Promoters’ capital", amount: "668.37" },
          { item: "Subsidy", amount: "182.29" },
          { item: "Term loan", amount: "700.00" }
        ],
        total: { label: "Total", col: "amount", value: "1550.66", display: "₹1,550.66 lakhs" }
      }
    ]
  }
};