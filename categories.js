/* ============================================================
   Bonito Handbook - Category Data
   This is the data structure that would live in a CMS.
   In production, this comes from an API. For now, it's a JS file.
   Adding a new category = adding a new object here.
   ============================================================ */

const CATEGORIES = {

  // ========== CATEGORY 1: PRELAM HDHMR ==========
  "prelam-hdhmr": {
    slug: "prelam-hdhmr",
    // Header
    breadcrumb: ["Material catalog", "Base materials", "Panels"],
    erp: "PLHD-16",
    tag: "Prelam · Category",

    // Hero
    eyebrow: "Material · Pre-laminated board",
    title: "Pre-Lam HDHMR",
    lede: "A factory-made engineered board where the laminate is already pressed and bonded during manufacturing. Not pasted later at the factory or on-site.",

    // Poster measurements - this category has thickness options rather than dimensions
    measurements: [
      { axis: "Thickness", range: "5.5", unit: "mm" },
      { axis: "Thickness", range: "16", unit: "mm" },
      { axis: "Production", range: "X<span class=\"m-dash\">−</span>2", unit: "days" },
    ],

    // Feature blocks - each is a titled section on the page
    blocks: [
      {
        num: "01",
        title: "What is Prelam HDHMR?",
        prose: "Pre-laminated HDHMR is the smart choice when the finish is already decided. Because the laminate is factory-pressed, there's no site pasting, no labour delay, and no risk of on-site mismatch. Best used for budget projects, modular furniture, and any large-scale production where consistency matters more than customisation."
      },
      {
        num: "02",
        title: "Prelam vs Regular HDHMR",
        subtitle: "Choose Prelam when finish is locked. Choose Regular when the client wants a custom laminate or acrylic that isn't in the standard 36.",
        // Comparison table - a different visual pattern per category
        comparisonTable: {
          headers: ["", "Prelam HDHMR", "Regular HDHMR"],
          rows: [
            ["Surface finish", "Laminate factory-pressed", "Raw board - finish applied later"],
            ["Customization", "36 pre-lam options only", "Any laminate, acrylic, PU"],
            ["Production time", "X − 2 days (faster)", "X days"],
            ["Thickness", "5.5mm, 16mm", "6mm, 18mm, 24mm"],
            ["Cost", "Economical", "Slightly higher (labour + material)"],
            ["Best for", "Budget projects, large-scale", "Premium interiors, custom design"]
          ]
        }
      },
      {
        num: "03",
        title: "Specification",
        specTable: [
          { key: "Board type", val: "Pre-laminated HDHMR (Exterior grade)" },
          { key: "Available thickness", val: "5.5 mm · 16 mm" },
          { key: "Warranty", val: "7 years + 3 years Bonito extended" },
          { key: "Approved brands", val: "Heritage · Plyneer · VIR · BD Classica · BPO · MWP · Apple Developers" },
          { key: "Standard laminate library", val: "36 pre-lam options" },
          { key: "Internal carcass finish", val: "Hazel Cambric 46P (only)" },
          { key: "Edge banding (E3 Prima)", val: "Almond Fabric 404" },
          { key: "Internal shutter backing", val: "Stylam Lam SL SD 0.72mm 5149", erp: "BD-LAM-2026-0024" }
        ]
      },
      {
        num: "04",
        title: "Critical rules - read every time",
        notes: [
          { title: "Thickness already includes laminate.", body: "Do not add extra thickness in your quote. 16 mm Prelam is 16 mm total, not 16 + laminate." },
          { title: "24 mm Prelam is not available.", body: "If the design needs 24 mm, switch to Regular HDHMR. No exceptions." },
          { title: "No custom design possible.", body: "Prelam cannot be used for any customised design solution. If the client wants something outside the 36 laminates, quote Regular HDHMR instead." }
        ]
      }
    ],

    // Cross-reference to the standard document (this is where a CMS would link to the PPT)
    reference: "Prelam HDHMR Training Document.pptx"
  },

  // ========== CATEGORY 2: SAINT GOBAIN GLASS SHUTTER ==========
  "saint-gobain-shutter": {
    slug: "saint-gobain-shutter",
    breadcrumb: ["Material catalog", "Kitchen shutters", "Glass"],
    erp: "SG-KGS",
    tag: "Shutter · Category",

    eyebrow: "Kitchen shutter · Lacquered glass",
    title: "Saint Gobain<br>Kitchen Shutters",
    lede: "Premium lacquered glass shutters for kitchen, storage and crockery units. A dedicated shutter category - not the same as regular glass and mirrors.",

    measurements: [
      { axis: "Width", range: "300<span class=\"m-dash\">−</span>500", unit: "mm" },
      { axis: "Height", range: "200<span class=\"m-dash\">−</span>1200", unit: "mm" },
      { axis: "Frame colours", range: "3", unit: "options" }
    ],

    blocks: [
      {
        num: "01",
        title: "What is Saint Gobain?",
        prose: "Saint Gobain Planilaque is lacquered glass - a coloured coating fused to the back of the glass sheet. The result is a premium, high-gloss surface that reads as depth, not as paint. Kitchen shutter category only. Frame profiles come in three colour options: champagne, grey, silver."
      },
      {
        num: "02",
        title: "Colour library",
        subtitle: "Colours must be picked from this palette or from the in-app catalog. Custom colours are not offered.",
        // Special: colour palette - this makes this page visually distinct
        colourPalette: [
          {
            group: "Planilaque colours",
            swatches: [
              { name: "Titanium Grey", hex: "#4B5058" },
              { name: "Aqua Blue", hex: "#3B7A99" },
              { name: "Black", hex: "#1A1A1A" },
              { name: "Pearl White", hex: "#F0EDE6" },
              { name: "Flame Red", hex: "#C0392B" },
              { name: "Atoll Blue", hex: "#1E5F8B" },
              { name: "Cappuccino", hex: "#9C7B5D" },
              { name: "Almond Green", hex: "#88A582" },
              { name: "Solar Yellow", hex: "#E4B84A" },
              { name: "Mint Green", hex: "#6FB89A" },
              { name: "Pista Green", hex: "#8FA872" },
              { name: "Lemon Green", hex: "#B5C244" },
              { name: "Fusion Orange", hex: "#D97D3E" },
              { name: "Opera Red", hex: "#B03A3A" },
              { name: "Calm Sky", hex: "#94B4C7" },
              { name: "Classic Purple", hex: "#6B5B84" }
            ]
          },
          {
            group: "Pastel colours",
            swatches: [
              { name: "Petal Pink", hex: "#E8C4C4" },
              { name: "Sky Blue", hex: "#B4D4E0" },
              { name: "Aquamarine", hex: "#A8D4C8" }
            ]
          },
          {
            group: "Metallic lacquered",
            swatches: [
              { name: "Argent Metallise", hex: "#B8B8B0" },
              { name: "Vert Onyx Metallise", hex: "#5A6660" }
            ]
          },
          {
            group: "Glass finish options",
            swatches: [
              { name: "Clear", hex: "#E8E8E8" },
              { name: "Frosty", hex: "#D0D6D0" },
              { name: "Tinted Grey", hex: "#7A7F85" },
              { name: "Tinted Bronze", hex: "#8B7355" },
              { name: "Champagne", hex: "#C4A78B" }
            ]
          }
        ]
      },
      {
        num: "03",
        title: "Specification",
        specTable: [
          { key: "Category type", val: "Kitchen shutter (not general glass)" },
          { key: "Width", val: "300 − 500 mm (single shutter)" },
          { key: "Height", val: "200 − 1200 mm (single shutter, wall units)" },
          { key: "Frame profile colours", val: "Champagne · Grey · Silver" },
          { key: "Applicable units", val: "Bottom · Top · Loft · Storage · Crockery" },
          { key: "Compatible mechanisms", val: "Tandem · Bottle pull-out · Wire basket" },
          { key: "VRM Template", val: "Saint Gobain Kitchen Shutters VRM", erp: "Required for ordering" }
        ]
      },
      {
        num: "04",
        title: "Critical rules - read every time",
        notes: [
          { title: "Do not mix with profiled laminated shutters.", body: "Saint Gobain shutters must not be placed next to profiled laminate shutters. Thickness variations at profile handles (G-profile, Lamezia, Gola) will create a visible seam that clients will call out." },
          { title: "Not for 24 mm side panels.", body: "Saint Gobain kitchen shutters cannot be provided when the adjacent side panel is 24 mm thick. Standard 18 mm side panels only." },
          { title: "No L-corners in kitchen.", body: "Do not provide L-corner configurations with Saint Gobain kitchen shutters. The corner detail is not manufacturable in this category." }
        ]
      }
    ],

    reference: "Saint Gobain Kitchen Shutters VRM Template"
  },

  // ========== CATEGORY 3: MODULAR WARDROBE & MECHANISM ==========
  "wardrobe-mechanism": {
    slug: "wardrobe-mechanism",
    breadcrumb: ["Material catalog", "Wardrobe", "Systems"],
    erp: "WM-SYS",
    tag: "Mechanism · Category",

    eyebrow: "Wardrobe system · Shutters + mechanism",
    title: "Modular Wardrobe<br>& Mechanism",
    lede: "Two shutter families - openable and sliding - with their compatible mechanisms. Selecting the shutter type constrains the mechanism, hardware, and infill options that follow.",

    measurements: [
      { axis: "Shutter type", range: "2", unit: "families" },
      { axis: "Slider brands", range: "3", unit: "options" },
      { axis: "Cane infill max", range: "1200", unit: "mm" }
    ],

    blocks: [
      {
        num: "01",
        title: "Two shutter families",
        prose: "The first decision is openable vs sliding - this cascades to every other choice. Openable uses hinges; sliding uses tracks. Aluminium profile shutters are a third path with Saint Gobain, Hettich, and Bonito Elite/Lite options. Each family has its own compatible mechanism set."
      },
      {
        num: "02",
        title: "System matrix",
        subtitle: "Pick a shutter family. The mechanism options that follow are constrained by that choice.",
        // Matrix-style comparison - different from Prelam's comparison table
        systemMatrix: [
          {
            family: "Openable shutter",
            heading: "Hinged, opens outward",
            options: [
              { label: "Aristo Classical Doors", type: "Sub-brand", note: "Aristo Nova - same construction as C&F slider" },
              { label: "Hinges: 0°, 8°, 16° crank", type: "Hardware", note: "All with soft-close · Bonito Elite pivot also available" },
              { label: "Standard shutter finish", type: "Compatibility", note: "Laminate, Acrylic, Crystal Acrylic, PU, Membrane" }
            ]
          },
          {
            family: "Sliding shutter",
            heading: "Track-mounted, low-clearance",
            options: [
              { label: "Bonito Elite (Aristo)", type: "Sub-brand", note: "Sliding wardrobe premium tier" },
              { label: "Bonito Lite (Aristo)", type: "Sub-brand", note: "Sliding wardrobe standard tier" },
              { label: "Hettich Slideline 18", type: "Mechanism", note: "Sliding wardrobe brand for mechanism" },
              { label: "Topline L", type: "System", note: "Alternative sliding system" }
            ]
          },
          {
            family: "Aluminium profile shutter",
            heading: "Frame + infill construction",
            options: [
              { label: "Saint Gobain Kitchen Shutters", type: "Brand", note: "Kitchen application only" },
              { label: "Hettich Aluminium Profile", type: "Brand", note: "Openable wardrobe + kitchen" },
              { label: "Bonito Elite & Lite Wardrobe", type: "Brand", note: "Wardrobe application" }
            ]
          }
        ]
      },
      {
        num: "03",
        title: "Cane infill - the exception rule",
        subtitle: "Aristo Cane shutters follow non-obvious size rules. Get this wrong and the panel warps.",
        // Callout with structured rule
        ruleCards: [
          {
            metric: "≤ 2100 mm",
            axis: "Cane height",
            rule: "Maximum cane infill width = 900 mm"
          },
          {
            metric: "≤ 900 mm",
            axis: "Cane height",
            rule: "Maximum cane infill width = 1200 mm"
          }
        ]
      },
      {
        num: "04",
        title: "Hardware & accessories",
        specTable: [
          { key: "Drawers", val: "Telescopic soft-close · Quadro · Push-to-open" },
          { key: "Hinges", val: "0° · 8° · 16° crank (all soft-close)" },
          { key: "Sliding systems", val: "Bonito Elite · Bonito Lite · Topline L · Slideline 18" },
          { key: "Top-lift mechanism", val: "Kessebohmer Lift up (kitchens) · Hydraulic lift" },
          { key: "Push-to-open", val: "Tip-On mechanism (Ebco)" },
          { key: "Wardrobe accessories", val: "Bonito Studio only - shirt / belt pullout / organisers / iron" },
          { key: "Freeflap / Freefold", val: "Folding bracket for wardrobe internal" }
        ]
      },
      {
        num: "05",
        title: "Critical rules - read every time",
        notes: [
          { title: "Cane width is height-dependent.", body: "Confirm the height first, then apply the width cap. 900 mm max for cane heights up to 2100 mm; 1200 mm max only for cane heights up to 900 mm." },
          { title: "Accessories from Bonito Studio only.", body: "Do not source wardrobe accessories (shirt/belt pullout, organisers, in-built iron) from anywhere except Bonito Studio. Compatibility is not guaranteed for non-Studio sources." },
          { title: "Aristo Nova uses C&F slider construction.", body: "Even though Nova has a visible track, the underlying construction is identical to Aristo C&F. Quote and design accordingly." }
        ]
      }
    ],

    reference: "Bonito Wardrobe Standard Document"
  },

  // ========== CATEGORY 4: HANDLES ==========
  "handles": {
    slug: "handles",
    breadcrumb: ["Material catalog", "Hardware", "Handles"],
    erp: "HDL-CAT",
    tag: "Hardware · Category",

    eyebrow: "Hardware · Grip + handleless",
    title: "Handles &<br>Handleless Systems",
    lede: "The final touch, and often the deal-breaker on-site. Two families: physical handles selected from Bonito Studio only, and handleless profiles built into the shutter itself. Category has strict compatibility rules - especially for kitchens.",

    measurements: [
      { axis: "Handle types", range: "3", unit: "families" },
      { axis: "Handleless", range: "3", unit: "profiles" },
      { axis: "Source", range: "Bonito Studio", unit: "only" }
    ],

    blocks: [
      {
        num: "01",
        title: "Handle families",
        subtitle: "Three physical-handle families and three handleless profiles. Physical handles must be sourced from Bonito Studio only.",
        // Handle types shown as a card grid - a fourth visual pattern
        handleGrid: [
          {
            family: "Physical handles",
            subheading: "Bonito Studio only",
            items: [
              { name: "Concealed handle", subline: "Slim, hidden grip", note: "Works with acrylic shutters" },
              { name: "Folding handle", subline: "Flush when closed", note: "Kitchen and wardrobe" },
              { name: "Surface handle", subline: "Traditional exposed", note: "All shutter finishes" }
            ]
          },
          {
            family: "Handleless profiles",
            subheading: "Built into shutter",
            items: [
              { name: "G-profile", subline: "Aluminium / Silver - Ebco", note: "Any shutter finish" },
              { name: "Edge profile / Lamezia", subline: "Kitchen shutters only", note: "Not for tall shutters or wardrobe" },
              { name: "Gola profile", subline: "Shutter extension for top / loft", note: "See Bonito Gola training" }
            ]
          }
        ]
      },
      {
        num: "02",
        title: "Compatibility matrix",
        subtitle: "Not all handles work with all shutter types. This is a common source of on-site rejection.",
        compatibilityTable: {
          headers: ["Handle type", "Kitchen shutter", "Kitchen tall", "Wardrobe", "Acrylic shutter"],
          rows: [
            ["Concealed handle", "Yes", "Yes", "Yes", "Yes - recommended"],
            ["Folding handle", "Yes", "Yes", "Yes", "Yes"],
            ["Surface handle", "Yes", "Yes", "Yes", "Yes"],
            ["G-profile", "Yes", "Yes", "Yes", "No"],
            ["Lamezia", "Yes - kitchen only", "No", "No", "No"],
            ["Gola profile", "Top / Loft only", "No", "Top / Loft only", "No"]
          ]
        }
      },
      {
        num: "03",
        title: "Critical rules - read every time",
        notes: [
          { title: "Lamezia is kitchen-shutter only.", body: "Not for kitchen tall shutters. Not for wardrobe shutters. Only for standard kitchen bottom and wall shutters." },
          { title: "No customised handles on shutters.", body: "Do not accept client requests for custom handle positioning or non-Studio handles. Compatibility with soft-close hinges and pull mechanisms will fail." },
          { title: "Factory-made wooden handles are not possible.", body: "If a client asks for wooden handles, offer surface handles in a wood-tone finish instead." },
          { title: "Concealed handles work best with acrylic.", body: "For acrylic shutters, concealed handles are the recommended choice. The grip pocket integrates cleanly with the acrylic edge." }
        ]
      }
    ],

    reference: "Bonito Training Document - Gola Profile"
  }
};

// Expose to global scope so category-template.html can access it
if (typeof window !== 'undefined') window.CATEGORIES = CATEGORIES;
