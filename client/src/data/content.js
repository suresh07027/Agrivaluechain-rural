// All page copy lives here for now. When you're ready to add Postgres,
// this is exactly the shape you'd fetch from GET /api/options and
// GET /api/options/:id instead of importing it statically.

export const homeContent = {
  eyebrow: "Rural Livelihood Development",
  heroTitle: "Building sustainable income for India's farming communities",
  heroLede: [
    "Rural livelihood development focuses on creating sustainable income opportunities for rural communities through a better understanding of agri value chain opportunities. It empowers farmers, youth, and women to improve their earnings for better livelihoods.",
    "Interventions in agri value chain systems that reduce post-harvest losses and extend shelf life help farmers decide whether to sell or process their produce — improving market access and linkage. The key challenge is deploying these systems with product-specific post-harvest management and market understanding. We address this through a holistic approach, working closely with institutions and farmer groups."
  ],
  introText:
    "Agrivaluechain works with the full range of stakeholders across the value chain — state government and central institutions, banking institutions, traders, super markets, and farmer groups. Capacity-building is central to how we work, and our programs cover four core areas, set out below."
};

export const options = [
  {
    id: "option1",
    num: "01",
    title: "Technical Consultancy & Advisory Support",
    desc: "End-to-end technical support in post-harvest management and value chain creation for horticulture, food supply chains, pack houses and cold chains.",
    image: null,
    tag: "01 · Technical Consultancy & Advisory Support",
    heroTitle: "End-to-end technical support in post-harvest management",
    heroSub:
      "We provide end-to-end technical support in post-harvest management, with a strong focus on value chain creation for horticulture, food supply chains, pack houses, cold chains, and value-addition projects. From concept to implementation, we translate technical requirements into practical, financially viable project plans — for businesses, institutions, and stakeholders.",
    hasFullContent: true,
    // Renders the ProjectCarousel (photo-based, click-to-open) in the
    // "Projects we've worked on" section instead of the numbered project
    // cards below. Only this option uses the carousel for now.
    projectCarousel: true,
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
          { label: "We help with", text: "Appraising and sanctioning projects under horticulture, food processing, cold chain and post-harvest schemes; detailed process flow charts, layouts and technical standards for pack houses, pre-cooling, cold rooms and ripening chambers; clear documentation of infrastructure gaps in power, water, connectivity and effluent treatment." },
          { label: "We work for", text: "State Departments of Horticulture / Agriculture, NHB / NABARD-linked projects, district-level integrated post-harvest infrastructure plans, FPOs and cluster-based post-harvest projects." }
        ]
      },
      {
        slug: "private-companies",
        num: "02",
        name: "Private Companies",
        accent: "steel",
        teaser: "Bank- and investor-ready DPRs for pack houses, cold chain, ripening units, and value-addition plants.",
        quote: null,
        blocks: [
          { label: "We prepare", text: "DPRs for pack houses, cold storage, ripening units, primary processing, or integrated post-harvest hubs — to secure bank finance, investor funding, or internal approvals." },
          { label: "What we deliver", text: "Investor / bank-ready DPRs with robust techno-economic analysis (CAPEX/OPEX, revenue model); operational detail on product/process flow, capacity planning and SOPs for grading, packing, pre-cooling and storage; optional value-addition modules (pulping, slicing, dehydration) based on commodity and market." },
          { label: "We work for", text: "Agri-business companies planning cold chain or pack house networks; entrepreneurs seeking loans for ripening chambers, cold rooms, or mobile pre-cooling units." }
        ]
      },
      {
        slug: "educational-institutes",
        num: "03",
        name: "Educational Institutes",
        accent: "forest",
        teaser: "Structured technical reports, protocols, and technology packages for research, training, and extension.",
        quote: "\"Technical reports and project documentation for research and academic institutes.\"",
        blocks: [
          { label: "What we deliver", text: "Structured technical reports covering introduction, problem statement, objectives, methodology, expected outcomes and impact; detailed action plans and cost breakdowns for product/process development and infrastructure; documentation of post-harvest protocols and technology packages suitable for training and extension." },
          { label: "We work for", text: "Agricultural and horticulture universities, ICAR institutes, state agricultural research stations, NGOs and training centres running post-harvest technology programs." }
        ]
      }
    ],
    audiencePages: {
      "government-institutions": {
        heroTitle: "Technical advisory for public horticulture and post-harvest programmes",
        heroSub:
          "We support government institutions with the reports, layouts, and scheme-ready documentation needed to appraise, sanction, and implement post-harvest infrastructure that cuts losses and builds regional value chains.",
        photo: "government",
        relatedProjectNums: ["01", "02"]
      },
      "private-companies": {
        heroTitle: "DPRs and operational design for agri-business investment",
        heroSub:
          "We prepare investor- and bank-ready project reports for pack houses, cold storage, ripening units, and integrated hubs — with process flows, capacity planning, and CAPEX/OPEX models that stand up to financing and internal approval.",
        photo: "companies",
        relatedProjectNums: ["04", "05", "06"]
      },
      "educational-institutes": {
        heroTitle: "Research documentation and post-harvest technology packages",
        heroSub:
          "We work with universities, ICAR institutes, and training centres to structure technical reports, action plans, and extension-ready protocols — from field trials to technology packages used in teaching and outreach.",
        photo: "education",
        relatedProjectNums: ["03", "07"]
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
    // Kept as a fallback / data source (e.g. for the individual project detail
    // pages the carousel links to at /projects/:slug). Not rendered directly
    // on this page since projectCarousel is true above.
    projects: [
      {
        num: "01",
        title: "Tamil Nadu Warehousing Corporation",
        text: "A solar-supported, multi-commodity cold storage facility in Mettupalayam to store fruits and vegetables, with a capacity of 500 MT. Funded entirely by own capital without term loans, and featuring a 50 kW on-grid solar system to reduce power costs. Designed with four independent temperature and humidity-controlled chambers, an ante-room, and automated material handling systems — helping local farmers cut post-harvest losses and reach better domestic and international markets.",
        metrics: [
          { value: "500 MT", label: "Capacity" },
          { value: "₹332.77 lakhs", label: "Project cost" },
          { value: "50 kW", label: "On-grid solar" }
        ]
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
        title: "Lemon Value Chain",
        text: "Field work in Avinashi, Tirupur, with laboratory analysis at Tamil Nadu Agricultural University (TNAU), studying critical pathways in the citrus value chain to extend post-harvest longevity and marketability. Controlled trials show lime shelf life extending to 40–50 days, lemon shelf life to 60–80 days under standard cold storage, and up to 55 days of high quality when Modified Atmosphere Packaging (MAP) is paired with cold storage.",
        metrics: [
          { value: "40–50 days", label: "Lime shelf life" },
          { value: "60–80 days", label: "Lemon shelf life" },
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
        title: "Agro Food Supply",
        text: "A direct trade route connecting surplus farming regions in the north — Bihar, Chhattisgarh, Jharkhand — with high-demand southern markets including Tamil Nadu, Kerala and Karnataka. Products are sorted by shelf life and temperature needs, from durable goods like maize and makhana to perishables like litchi and green peas. Backed by the Ministry of Food Processing's backward and forward linkage funding, the project connects northern farmers with South Indian processors and kitchens.",
        metrics: []
      },
      {
        num: "06",
        title: "Carrot Value Chain",
        text: "Addressing 20–30% post-harvest losses in major producing regions — the Nilgiris in Tamil Nadu, and Kolar and Chikkaballapur in Karnataka. Designed for a throughput of 3–5 metric tons per hour, the project establishes an end-to-end post-harvest pack house, using smart telescopic belt conveyors that cut loading and unloading time by 50–70% while reducing manual labour and injury risk.",
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
    desc: "Joint research initiatives with universities and institutions to advance post-harvest technology and value chain solutions.",
    image: null,
    tag: "02 · Collaborative Research & Development",
    heroTitle: "Joint research to advance post-harvest technology and value chain design",
    heroSub:
      "Detailed content for this section wasn't included in the source document. Below is a placeholder — share the details and this page can be built out to match the Technical Consultancy page.",
    hasFullContent: false,
    placeholderText:
      "This page is ready to receive: an overview of your R&D approach, partner institutions, whom you serve, what you offer/deliver, and case studies — in the same structure used for Technical Consultancy."
  },
  {
    id: "option3",
    num: "03",
    title: "Linking Farmers to the Market — Project Development",
    desc: "Project development that connects farmer groups directly to markets, reducing dependence on middlemen and improving price realisation.",
    image: null,
    tag: "03 · Linking Farmers to the Market — Project Development",
    heroTitle: "Connecting farmer groups directly to markets",
    heroSub:
      "Detailed content for this section wasn't included in the source document. Below is a placeholder — share the details and this page can be built out to match the Technical Consultancy page.",
    hasFullContent: false,
    placeholderText:
      "This page is ready to receive: project development approach, target markets and buyers, whom you serve, what you offer/deliver, and case studies — in the same structure used for Technical Consultancy."
  },
  {
    id: "option4",
    num: "04",
    title: "Capacity Development Program",
    desc: "Training and extension programs that build lasting skills among farmers, youth, and women across the value chain.",
    image: null,
    tag: "04 · Capacity Development Program",
    heroTitle: "Building lasting skills across the value chain",
    heroSub:
      "Detailed content for this section wasn't included in the source document. Below is a placeholder — share the details and this page can be built out to match the Technical Consultancy page.",
    hasFullContent: false,
    placeholderText:
      "This page is ready to receive: training programs offered, target groups (farmers, youth, women), whom you serve, what you offer/deliver, and case studies — in the same structure used for Technical Consultancy."
  }
];

export const contact = {
  email: "agrivaluechain@gmail.com",
  phone: "+91 94450 53300"
};