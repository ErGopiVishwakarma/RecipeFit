// Data Format - Only Copy title, category, img and images. Rest take help of chatGPT to save time.
let RecipesData = [
  {
    title: "Gado Gado on Toast",
    category: "Main",
    img: "https://cdn.pickuplimes.com/cache/96/3b/963b4da712066e5d68a0413f8b9ffa53.jpg",
    images: [
      "https://cdn.pickuplimes.com/cache/db/23/db236d6bf7af49f70395fcf8c49ed9d0.jpg",
      "https://cdn.pickuplimes.com/cache/88/2a/882a53c4bf5748d0446e37a1381aeb54.jpg",
      "https://cdn.pickuplimes.com/cache/f3/cb/f3cb10842b8f952c15e165160ec7100a.jpg",
      "https://cdn.pickuplimes.com/cache/db/69/db6960e0305407ae244c6bd69e1433d9.jpg",
    ],
    description:
      "This loaded toast is inspired by the Indonesian dish gado-gado, it's a salad with mixed vegetables served with peanut sauce on top. We simplified this amazing dish with peanut butter, cucumber, carrots and some deliciously spicy sambal.",
    ingredients: [
      { ingredient: "Bread slices", unit: "slices", quantity: 4 },
      { ingredient: "Peanut sauce", unit: "cup", quantity: 1 / 2 },
      { ingredient: "Tofu, cubed and fried", unit: "g", quantity: 200 },
      {
        ingredient: "Hard-boiled eggs, sliced",
        unit: "large eggs",
        quantity: 2,
      },
      {
        ingredient: "Boiled potatoes, sliced",
        unit: "medium potatoes",
        quantity: 2,
      },
      { ingredient: "Blanched bean sprouts", unit: "cup", quantity: 1 },
      { ingredient: "Blanched green beans", unit: "cup", quantity: 1 },
      { ingredient: "Blanched cabbage, shredded", unit: "cup", quantity: 1 },
      { ingredient: "Cucumber, sliced", unit: "medium cucumber", quantity: 1 },
      { ingredient: "Fried shallots", unit: "tablespoons", quantity: 2 },
      { ingredient: "Chopped peanuts", unit: "cup", quantity: 1 / 4 },
      { ingredient: "Lime wedges", unit: "wedges", quantity: 2 },
    ],
    directions: [
      "Toast the bread slices until they are golden brown and crispy.",
      "In a saucepan, warm the peanut sauce over low heat, stirring occasionally.",
      "Prepare the tofu by cutting it into cubes and frying it until it turns golden and crispy on the outside.",
      "Boil the eggs until they are hard-boiled, then slice them.",
      "Boil the potatoes until they are tender, then slice them into rounds.",
      "Blanch the bean sprouts and green beans in boiling water for a few minutes, then drain them.",
      "Shred the cabbage and slice the cucumber.",
      "Once all the ingredients are prepared, it's time to assemble the Gado Gado on Toast. Start by placing the toasted bread slices on a plate.",
      "Top the bread with the fried tofu cubes, sliced hard-boiled eggs, and potato rounds.",
      "Add the blanched bean sprouts, green beans, shredded cabbage, and sliced cucumber.",
      "Drizzle the warm peanut sauce over the top of the ingredients.",
      "Garnish with fried shallots, chopped peanuts, and a squeeze of lime juice.",
      "Serve the Gado Gado on Toast immediately and enjoy!",
    ],
  },
];

/* ChatGpt Prompt

I will mention some food recipes , give me description, ingredients and directions for the recipe in this javascript object format -  {
  description:
      "This loaded toast is inspired by the Indonesian dish gado-gado, it's a salad with mixed vegetables served with peanut sauce on top. We simplified this amazing dish with peanut butter, cucumber, carrots and some deliciously spicy sambal.",
  ingredients: [
      { ingredient: "Bread slices", unit: "slices", quantity: 4 },
      { ingredient: "Peanut sauce", unit: "cup", quantity: 1 / 2 },
      { ingredient: "Tofu, cubed and fried", unit: "g", quantity: 200 },
      {
        ingredient: "Hard-boiled eggs, sliced",
        unit: "large eggs",
        quantity: 2,
      },
      {
        ingredient: "Boiled potatoes, sliced",
        unit: "medium potatoes",
        quantity: 2,
      },
      { ingredient: "Blanched bean sprouts", unit: "cup", quantity: 1 },
      { ingredient: "Blanched green beans", unit: "cup", quantity: 1 },
      { ingredient: "Blanched cabbage, shredded", unit: "cup", quantity: 1 },
      { ingredient: "Cucumber, sliced", unit: "medium cucumber", quantity: 1 },
      { ingredient: "Fried shallots", unit: "tablespoons", quantity: 2 },
      { ingredient: "Chopped peanuts", unit: "cup", quantity: 1 / 4 },
      { ingredient: "Lime wedges", unit: "wedges", quantity: 2 },
    ],
    directions: [
      "Toast the bread slices until they are golden brown and crispy.",
      "In a saucepan, warm the peanut sauce over low heat, stirring occasionally.",
      "Prepare the tofu by cutting it into cubes and frying it until it turns golden and crispy on the outside.",
      "Boil the eggs until they are hard-boiled, then slice them.",
      "Boil the potatoes until they are tender, then slice them into rounds.",
      "Blanch the bean sprouts and green beans in boiling water for a few minutes, then drain them.",
      "Shred the cabbage and slice the cucumber.",
      "Once all the ingredients are prepared, it's time to assemble the Gado Gado on Toast. Start by placing the toasted bread slices on a plate.",
      "Top the bread with the fried tofu cubes, sliced hard-boiled eggs, and potato rounds.",
      "Add the blanched bean sprouts, green beans, shredded cabbage, and sliced cucumber.",
      "Drizzle the warm peanut sauce over the top of the ingredients.",
      "Garnish with fried shallots, chopped peanuts, and a squeeze of lime juice.",
      "Serve the Gado Gado on Toast immediately and enjoy!",
    ]}

    Note - Keep the discription short about 4-5 lines. Only generate the javascript object.

*/

// After giving prompt just send the recipe name. You dont have to give the whole prompt again and again.
// Don not store data in json file or directly in db for now, keep it in a js file.
