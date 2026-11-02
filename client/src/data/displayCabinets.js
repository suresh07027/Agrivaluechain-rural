const images = import.meta.glob("../assets/display-cabinets/**/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default"
});

export const cabinetImage = (file) => {
  const imagePath = Object.keys(images).find((path) => path.endsWith(`/${file}`));
  return imagePath ? images[imagePath] : undefined;
};

export const cabinetIntro = {
  tag: "Retail Display Solutions",
  title: "Display cabinets for fresh fruits & vegetables",
  lead:
    "How produce is displayed decides how long it stays fresh and how well it sells. Based on our study of horticulture value-chain B2B models and modern fresh-produce stores, these are the display formats we recommend for supermarkets and organised retail outlets."
};

export const cabinetGroups = [
  {
    id: "tiered-displays",
    title: "Tiered & Sloping Open Displays",
    blurb: "Stepped shelves tilted towards the shopper show more produce at a glance, keep items easy to pick and make colour blocking simple. Best for high-footfall fresh-produce aisles.",
    items: [
      { file: "tiered-01.webp", caption: "Sloping tiered shelves with green backing for vegetables" },
      { file: "tiered-02.webp", caption: "Multi-tier shelving for mixed fruits and vegetables" },
      { file: "tiered-03.webp", caption: "Tiered fruit and vegetable display with colour grouping" }
    ]
  },
  {
    id: "crate-displays",
    title: "Crate-Based Modular Displays",
    blurb: "Reusable crates and modular racks let stores restock directly from the supply chain, reduce handling and re-arrange the layout as seasons change.",
    items: [
      { file: "crate-01.webp", caption: "Wooden crate display units in a modern fresh-produce store" },
      { file: "crate-02.webp", caption: "Shelf display with crates stacked at the base" },
      { file: "crate-03.webp", caption: "Shop-front display built with stacked plastic crates" },
      { file: "crate-04.webp", caption: "Green tiered racks with crates for loose produce" }
    ]
  },
  {
    id: "compact-displays",
    title: "Compact Shop & Counter Displays",
    blurb: "Space-saving wall racks and counter displays for small-format stores, kiosks and neighbourhood outlets.",
    items: [
      { file: "compact-01.webp", caption: "Compact wall racks in a small outlet" },
      { file: "compact-02.webp", caption: "Fruit and vegetable sales counter with shelved display" },
      { file: "compact-03.webp", caption: "Shelved display with rate list for loose vegetables" }
    ]
  },
  {
    id: "prepacked-displays",
    title: "Pre-Packed Produce Display",
    blurb: "Trays with film wrap give uniform weights, protect fruit and make self-service easy. They work well when paired with the eco-friendly packaging options on our packaging page.",
    items: [
      { file: "prepacked-01.webp", caption: "Pre-packed fruits and vegetables in trays" }
    ]
  }
];