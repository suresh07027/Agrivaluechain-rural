// Where each stakeholder should be sent. Mirrors the hand-drawn map:
//   Farmers/FPOs          -> Linking Farmers + Capacity Development
//   Traders / Processors / Retailers -> Technical Support (Private) + Linking Farmers bundle (*)
//   Government            -> Technical Support (Government)
//   Financial institutions-> Government page + Private page (project points)
//   Technology partners   -> Collaborative R&D
//
// The (*) bundle is defined ONCE below and reused, so editing it updates every
// stakeholder that shares it.
//
// `children` render as indented deep links. The #ids must exist on the page:
//   #packhouse-capacity, #sustainable-techniques, #midh-guidelines  (ServicePage, option3)

const TECH_PRIVATE = {
  label: "Technical Support — Private Companies",
  to: "/technical-support/private-companies"
};

// Finance stakeholder: one page each for Government and Private (pages/FinancePage.jsx,
// content in data/content.js -> financePages).
const FINANCE_GOVERNMENT = { label: "Government", to: "/financial-institutions/government" };
const FINANCE_PRIVATE = { label: "Private", to: "/financial-institutions/private" };

const TECH_GOVERNMENT = {
  label: "Technical Support — Government",
  to: "/technical-support/government-institutions"
};

// The (*) bundle from the sketch.
const LINKING_BUNDLE = {
  label: "Linking Farmers to the Market",
  to: "/option3",
  children: [
    { label: "Pack house capacity models", to: "/option3#packhouse-capacity" },
    { label: "Adopting sustainable techniques", to: "/option3#sustainable-techniques" },
    { label: "MIDH guidelines", to: "/option3#midh-guidelines" }
  ]
};

export const stakeholderPaths = {
  "farmers-fpos": [
    { label: "Linking Farmers to the Market", to: "/option3" },
    { label: "Capacity Development Program", to: "/option4" }
  ],
  "traders-aggregators": [
    TECH_PRIVATE,
    { label: "Pack house capacity models", to: "/option3#packhouse-capacity" },
    { label: "Adopting sustainable techniques", to: "/option3#sustainable-techniques" },
    { label: "Government MIDH guidelines", to: "/option3#midh-guidelines" }
  ],
  processors: [
    TECH_PRIVATE,
    { label: "Pack house capacity models", to: "/option3#packhouse-capacity" },
    { label: "Adopting sustainable techniques", to: "/option3#sustainable-techniques" },
    { label: "Government MIDH guidelines", to: "/option3#midh-guidelines" }
  ],
  retailers: [TECH_PRIVATE, LINKING_BUNDLE, { label: "Eco-friendly Packaging Recommendations", to: "/eco-packaging" }, { label: "Display Cabinets for Fresh Produce", to: "/display-cabinets" }],
  
  government: [TECH_GOVERNMENT],
  "government-institutions": [TECH_GOVERNMENT],
  "financial-institutions": [FINANCE_GOVERNMENT, FINANCE_PRIVATE],
  "academic-institutions": [
    { label: "Collaborative Research & Development", to: "/option2" }
  ]
};