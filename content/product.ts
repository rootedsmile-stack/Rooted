export interface ProductVariant {
  id: string;
  size: string;
  weight: string;
  price: number;
  compareAtPrice?: number;
  inStock: boolean;
}

export interface Product {
  productName: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  variants: ProductVariant[];
  benefits: {
    title: string;
    description: string;
    icon: string;
  }[];
  ingredients: {
    name: string;
    purpose: string;
  }[];
  howToUse: {
    step: number;
    instruction: string;
  }[];
  warnings: string[];
  disclaimers: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const product: Product = {
  productName: "Pure Herbal Tooth Powder",
  tagline: "Traditional oral care, naturally crafted",
  shortDescription: "A premium blend of traditional herbs and minerals for your daily oral care routine.",
  longDescription: "Our herbal tooth powder combines time-honored botanical ingredients with modern quality standards. Crafted with care, this powder offers a natural alternative to conventional oral care products. Each jar contains a carefully measured blend of herbs and minerals selected for their traditional use in oral hygiene.",
  
  variants: [
    {
      id: "tooth-powder-50g",
      size: "Small",
      weight: "50g",
      price: 2400, // $24.00 in cents
      compareAtPrice: 2800,
      inStock: true
    },
    {
      id: "tooth-powder-100g",
      size: "Large",
      weight: "100g",
      price: 3900, // $39.00 in cents
      compareAtPrice: 4800,
      inStock: true
    }
  ],

  benefits: [
    {
      title: "Traditional Formula",
      description: "Supports your oral care routine with a blend of herbs used traditionally for centuries in natural wellness practices.",
      icon: "leaf"
    },
    {
      title: "Gentle Cleansing",
      description: "Helps maintain a clean feeling with naturally derived ingredients that gently polish your teeth.",
      icon: "sparkles"
    },
    {
      title: "Fresh Feeling",
      description: "Leaves your mouth feeling fresh and clean with botanical ingredients known for their aromatic properties.",
      icon: "wind"
    },
    {
      title: "Natural Ingredients",
      description: "Made with carefully selected herbs and minerals, free from artificial colors and synthetic additives.",
      icon: "check"
    },
    {
      title: "Eco-Friendly",
      description: "Packaged in reusable glass jars, supporting a more sustainable approach to your oral care routine.",
      icon: "recycle"
    },
    {
      title: "Long Lasting",
      description: "A little goes a long way—each jar provides weeks of daily use for excellent value.",
      icon: "clock"
    }
  ],

  ingredients: [
    {
      name: "Calcium Carbonate",
      purpose: "Mild abrasive for gentle polishing"
    },
    {
      name: "Sea Salt",
      purpose: "Mineral-rich traditional ingredient"
    },
    {
      name: "Neem Leaf Powder",
      purpose: "Traditional Ayurvedic herb for oral care"
    },
    {
      name: "Clove Powder",
      purpose: "Aromatic spice with warming properties"
    },
    {
      name: "Peppermint Leaf Powder",
      purpose: "Provides fresh, cooling sensation"
    },
    {
      name: "Cinnamon Bark Powder",
      purpose: "Sweet, warming aromatic ingredient"
    },
    {
      name: "Activated Charcoal",
      purpose: "Natural powder for surface stain removal"
    },
    {
      name: "Bentonite Clay",
      purpose: "Mineral-rich clay for texture and consistency"
    },
    {
      name: "Myrrh Gum Powder",
      purpose: "Traditional resin used in oral care practices"
    }
  ],

  howToUse: [
    {
      step: 1,
      instruction: "Wet your toothbrush with clean water and shake off excess moisture."
    },
    {
      step: 2,
      instruction: "Dip the bristles into the powder, taking a small amount (about 1/4 teaspoon)."
    },
    {
      step: 3,
      instruction: "Brush gently in circular motions for 2 minutes, paying attention to all surfaces of your teeth."
    },
    {
      step: 4,
      instruction: "Rinse thoroughly with water and enjoy the fresh, clean feeling."
    },
    {
      step: 5,
      instruction: "Use twice daily or as desired. Close jar tightly after each use to maintain freshness."
    }
  ],

  warnings: [
    "For external use only. Do not swallow.",
    "Keep out of reach of children under 6 years of age.",
    "If irritation occurs, discontinue use and consult a healthcare professional.",
    "Avoid contact with eyes. If contact occurs, rinse thoroughly with water.",
    "Do not use if safety seal is broken or missing.",
    "Store in a cool, dry place away from direct sunlight."
  ],

  disclaimers: [
    "This product is a cosmetic oral care product and is not intended to diagnose, treat, cure, or prevent any disease or medical condition.",
    "This product is not intended to replace professional dental care. Regular dental checkups are recommended.",
    "Individual results may vary. This product supports routine oral hygiene practices.",
    "If you have dental concerns or oral health conditions, consult your dentist before use.",
    "Contains natural ingredients. If you have known allergies to any listed ingredients, do not use this product.",
    "The statements regarding this product have not been evaluated by the Food and Drug Administration."
  ],

  faqs: [
    {
      question: "How is tooth powder different from toothpaste?",
      answer: "Tooth powder is a traditional, water-free formula that you apply to a wet toothbrush. Unlike paste, it contains no water or binding agents, just concentrated herbal and mineral ingredients. Many users appreciate the natural texture and minimal packaging."
    },
    {
      question: "How long will one jar last?",
      answer: "With typical twice-daily use, a 50g jar lasts approximately 4-6 weeks, while a 100g jar lasts 8-12 weeks. The powder is concentrated, so only a small amount is needed per brushing."
    },
    {
      question: "Is it safe for sensitive teeth?",
      answer: "Our powder uses gentle, natural abrasives. However, if you have sensitive teeth or gums, we recommend starting slowly—perhaps once daily—and consulting your dentist if you have concerns. Everyone's sensitivity is different."
    },
    {
      question: "Does it contain fluoride?",
      answer: "No, this is a natural herbal formula that does not contain fluoride. It's designed for those seeking botanical alternatives. If fluoride is important to your oral care routine, please consult your dentist about complementary products."
    },
    {
      question: "Will the charcoal stain my sink or toothbrush?",
      answer: "The activated charcoal may temporarily darken your toothbrush bristles, but it rinses cleanly from sinks and surfaces with water. Simply rinse thoroughly after brushing."
    },
    {
      question: "Can children use this product?",
      answer: "This product is formulated for adults. For children, please consult a pediatric dentist to determine appropriate oral care products for their age and needs."
    },
    {
      question: "What does it taste like?",
      answer: "The powder has an earthy, herbal flavor with notes of peppermint and cinnamon. It's less sweet than conventional toothpaste. Most users find the taste pleasant and refreshing, though it may take a few uses to adjust if you're new to natural oral care."
    },
    {
      question: "Is the jar recyclable?",
      answer: "Yes! We use glass jars specifically because they're reusable and recyclable. Once empty, you can repurpose the jar or recycle it with your household glass."
    },
    {
      question: "Do I need to change my brushing technique?",
      answer: "No major changes needed. Just wet your brush, dip it in the powder, and brush as you normally would. You may notice the powder feels drier initially, but it activates with saliva during brushing."
    },
    {
      question: "How should I store the powder?",
      answer: "Keep the jar tightly sealed in a cool, dry place away from moisture and direct sunlight. Avoid introducing water into the jar—always use a dry or lightly dampened toothbrush."
    }
  ]
};
