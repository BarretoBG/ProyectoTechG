export const grupos: Record<string, string[]> = {
    "Beauty": ["beauty", "skin-care", "fragrances"],
    "Men": ["mens-shirts", "mens-shoes", "mens-watches"],
    "Women": ["womens-dresses", "womens-bags", "womens-shoes", "womens-watches", "womens-jewellery"],
    "Electronics": ["smartphones", "laptops", "tablets", "mobile-accessories"],
    "Home": ["furniture", "home-decoration", "kitchen-accessories"],
    "Sports": ["sports-accessories"],
    "Vehicles": ["motorcycle", "vehicle"]
  };
  
  export type Categories = keyof typeof grupos;