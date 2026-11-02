// Eco-friendly packaging recommendations for supermarkets & organised retail.
// To add a photo: drop the file in src/assets/eco-packaging/<folder>/ and add
// { file: "filename.webp", caption: "..." } to the right category below.

const images = import.meta.glob("../assets/eco-packaging/**/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default"
});

// Finds the image even if the extension differs (.jpg / .jpeg / .png / .webp)
export const ecoImage = (folder, file) => {
  const path = `../assets/eco-packaging/${folder}/${file}`;
  if (images[path]) return images[path];
  const stem = path.replace(/\.[^.]+$/, "");
  const ext = ["jpg", "jpeg", "png", "webp"].find((e) => images[`${stem}.${e}`]);
  return ext ? images[`${stem}.${ext}`] : undefined;
};

export const ecoIntro = {
  tag: "Sustainable Retail Packaging",
  title: "Eco-friendly packaging recommendations for fresh fruits & vegetables",
  lead:
    "Supermarkets and organised retail outlets can cut plastic use, extend shelf life and strengthen their brand with sustainable packing. Below are the options we recommend, grouped by material, as part of our technical support to retail and private-sector buyers."
};

export const ecoCategories = [
  {
    id: "jute-bags", folder: "jute",
    title: "Jute & Natural-Fibre Bags",
    blurb: "Strong, reusable and biodegradable. Drawstring and see-through window styles show the produce while carrying a brand.",
    items: [
      { file: "jute-01.webp", caption: "Multi-compartment cloth bag" },
      { file: "jute-02.webp", caption: "Jute pouch with printed label" },
      { file: "jute-03.webp", caption: "Jute bag with mesh window" },
      { file: "jute-04.webp", caption: "Jute drawstring bags" },
      { file: "jute-05.webp", caption: "Jute and net combination bag" },
      { file: "jute-06.webp", caption: "Cotton drawstring bags" }
    ]
  },
  {
    id: "net-bags", folder: "net",
    title: "Net Bags",
    blurb: "Breathable bulk and consumer packs for potatoes, onions, citrus and garlic. Good airflow reduces moisture and rot.",
    items: [
      { file: "net-01.webp", caption: "Drawstring net bag" },
      { file: "net-02.webp", caption: "Tubular net bags for potatoes" },
      { file: "net-03.webp", caption: "Bulk potato net sacks" },
      { file: "net-04.webp", caption: "Printed panel net packs" },
      { file: "net-05.webp", caption: "Leno mesh bag" },
      { file: "net-06.webp", caption: "Net sleeves with clip closure" }
    ]
  },
  {
    id: "cotton-mesh-bags", folder: "cotton-mesh",
    title: "Reusable Cotton Mesh Bags",
    blurb: "Washable bags that customers reuse. Lightweight and ideal for loose-produce counters.",
    items: [
      { file: "cotton-mesh-01.webp", caption: "String shopping bags in colours" },
      { file: "cotton-mesh-02.webp", caption: "Long-handle mesh bags" },
      { file: "cotton-mesh-03.webp", caption: "Mesh tote for fruits" },
      { file: "cotton-mesh-04.webp", caption: "Mesh drawstring bag" },
      { file: "cotton-mesh-05.webp", caption: "Set of produce bags in sizes" },
      { file: "cotton-mesh-06.webp", caption: "Light mesh produce bags" }
    ]
  },
  {
    id: "paper-bags", folder: "paper",
    title: "Paper Bags",
    blurb: "Kraft paper bags with clear windows, so shoppers see the product while the pack stays fully recyclable.",
    items: [
      { file: "paper-01.webp", caption: "Kraft pack with handle and window" },
      { file: "paper-02.webp", caption: "Printed kraft bags with window" },
      { file: "paper-03.webp", caption: "Stand-up kraft bag, tomatoes" },
      { file: "paper-04.webp", caption: "Stand-up kraft bag, apples" }
    ]
  },
  {
    id: "compostable-trays", folder: "trays",
    title: "Biodegradable & Compostable Trays",
    blurb: "Plant-fibre trays and bowls that replace foam and plastic trays for pre-packed produce.",
    items: [
      { file: "leaf-tray.webp", caption: "Leaf tray" },
      { file: "compostable-bowl.webp", caption: "Compostable bowl" },
      { file: "bagasse-tray.webp", caption: "Sugarcane bagasse tray" },
      { file: "palm-leaf-tray.webp", caption: "Palm leaf tray" },
      { file: "grass-paper-box.webp", caption: "Grass paper packaging box" }
    ]
  },
  {
    id: "banana-leaf", folder: "banana-leaf",
    title: "Banana Leaf Packaging",
    blurb: "A zero-plastic, locally sourced wrap for leafy and bunched vegetables, tied with natural twine.",
    items: [
      { file: "banana-leaf-01.webp", caption: "Brinjal and gourds wrapped in leaf" },
      { file: "banana-leaf-02.webp", caption: "Cucumbers, ridge gourd and ginger" },
      { file: "banana-leaf-03.webp", caption: "Leafy greens and bottle gourd" },
      { file: "banana-leaf-04.webp", caption: "Beans and okra bundles" },
      { file: "banana-leaf-05.webp", caption: "Leaf cones: mushroom, tomato, potato, onion" }
    ]
  },
  {
    id: "wooden-baskets", folder: "baskets",
    title: "Wooden Sewn Baskets",
    blurb: "Light wood-veneer punnets in set sizes (mm). Strong, breathable and fully compostable.",
    items: [
      { file: "basket-1 (1).webp", caption: "Frozen vegetables · H7 · 180×145×75 mm" },
      { file: "basket-1 (2).webp", caption: "Mixed vegetables · H6 · 190×190×60 mm" },
      { file: "basket-1 (3).webp", caption: "Mixed vegetables · H6/2 · 190×190×70 mm" },
      { file: "basket-1 (4).webp", caption: "Root vegetables · H9/ · 190×140×50 mm" },
      { file: "basket-1 (5).webp", caption: "Root vegetables · H2 · 170×140×90 mm" },
      { file: "basket-1 (6).webp", caption: "Fruits · H2/3 · 185×185×95 mm" }
    ]
  }
];