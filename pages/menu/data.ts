import {tCategory} from "#build/pages/menu/products";

const products: Array<tCategory> = [
  {
    id: 1,
    path: 'rolls',
    title: 'Роллы',
    items: [
      {
        id: 1,
        name: "Острый тунец ролл",
        weight: "180г",
        composition: "тунец, острый майонез, огурец",
        price: 720,
        image: '/product.png'
      },
      {
        id: 2,
        name: "Дракон ролл",
        weight: "250г",
        composition: "угорь, авокадо, огурец",
        price: 600,
        image: '/product.png'
      },
      {
        id: 3,
        name: "Радужный ролл",
        weight: "220г",
        composition: "крабовое мясо, авокадо, разнообразные рыбы",
        price: 580,
        image: '/product.png'
      },
      {
        id: 4,
        name: "Филадельфия ролл",
        weight: "190г",
        composition: "копченый лосось, сливочный сыр, огурец",
        price: 440,
        image: '/product.png'
      },
      {
        id: 5,
        name: "Темпура ролл",
        weight: "230г",
        composition: "креветка темпура, авокадо, огурец",
        price: 460,
        image: '/product.png'
      },
      {
        id: 6,
        name: "Гусеничка ролл",
        weight: "240г",
        composition: "угорь, авокадо, огурец",
        price: 520,
        image: '/product.png'
      },
      {
        id: 7,
        name: "Паучий ролл",
        weight: "210г",
        composition: "мягкий краб, авокадо, огурец",
        price: 440,
        image: '/product.png'
      },
      {
        id: 8,
        name: "Вулкан ролл",
        weight: "260г",
        composition: "острый тунец, крабовое мясо, авокадо",
        price: 400,
        image: '/product.png'
      },
      {
        id: 9,
        name: "Лосось ролл",
        weight: "170г",
        composition: "лосось, авокадо, огурец",
        price: 580,
        image: '/product.png'
      },
      {
        id: 10,
        name: "Аляска ролл",
        weight: "200г",
        composition: "лосось, авокадо, огурец",
        price: 600,
        image: '/product.png'
      },
      {
        id: 11,
        name: "Овощной ролл",
        weight: "180г",
        composition: "авокадо, огурец, морковь",
        price: 600,
        image: '/product.png'
      },
      {
        id: 12,
        name: "Ролл с креветкой темпура",
        weight: "220г",
        composition: "креветка темпура, авокадо, огурец",
        price: 460,
        image: '/product.png'
      },
      {
        id: 13,
        name: "Радужный дракон ролл",
        weight: "270г",
        composition: "угорь, авокадо, разнообразные рыбы",
        price: 520,
        image: '/product.png'
      },
      {
        id: 14,
        name: "Футомаки ролл",
        weight: "250г",
        composition: "крабовое мясо, тамаго, огурец",
        price: 580,
        image: '/product.png'
      },
      {
        id: 15,
        name: "Калифорнийский ролл",
        weight: "200г",
        composition: "крабовое мясо, авокадо, огурец",
        price: 600,
        image: '/product.png'
      }
    ]
  },
  {
    id: 2,
    path: 'sushi-gunkans',
    title: 'Суши и гунканы',
    items: [
      {
        id: 16,
        name: "Сяке суши",
        weight: "30г",
        composition: "лосось, рис",
        price: 200,
        image: '/product.png'
      },
      {
        id: 17,
        name: "Магуро суши",
        weight: "30г",
        composition: "тунец, рис",
        price: 220,
        image: '/product.png'
      },
      {
        id: 18,
        name: "Эби суши",
        weight: "30г",
        composition: "креветка, рис",
        price: 190,
        image: '/product.png'
      },
      {
        id: 19,
        name: "Икура гункан",
        weight: "40г",
        composition: "икра лосося, рис",
        price: 150,
        image: '/product.png'
      },
      {
        id: 20,
        name: "Гункан спайси унаги",
        weight: "35г",
        composition: "угорь, спайси соус, рис",
        price: 250,
        image: '/product.png'
      }
    ]
  },
  {
    id: 3,
    path: 'sets',
    title: 'Сеты',
    items: [
      {
        id: 21,
        name: "Сет 'Дракон'",
        weight: '1000г',
        composition: "Дракон ролл, Гусеничка ролл, Вулкан ролл",
        price: 1500,
        image: '/product.png'
      },
      {
        id: 22,
        name: "Сет 'Филадельфия'",
        weight: '900г',
        composition: "Филадельфия ролл, Лосось ролл, Радужный дракон ролл",
        price: 1600,
        image: '/product.png'
      },
      {
        id: 23,
        name: "Сет 'Темпура'",
        weight: '1100г',
        composition: "Темпура ролл, Ролл с креветкой темпура, Паучий ролл",
        price: 1500,
        image: '/product.png'
      },
      {
        id: 24,
        name: "Сет 'Вегетарианский'",
        weight: '940г',
        composition: "Овощной ролл, Футомаки ролл, Калифорнийский ролл",
        price: 1400,
        image: '/product.png'
      },
      {
        id: 25,
        name: "Сет 'Эксклюзивный'",
        weight: '700г',
        composition: "Радужный ролл, Аляска ролл, Острый тунец ролл",
        price: 1800,
        image: '/product.png'
      },
      {
        id: 26,
        name: "Сет 'Легкий'",
        weight: '670г',
        composition: "Ролл с креветкой темпура, Овощной ролл, Гусеничка ролл",
        price: 1400,
        image: '/product.png'
      }
    ]
  },
  {
    id: 4,
    path: 'noodles-rice',
    title: 'Лапша и рис',
    items: [
      {
        id: 27,
        name: "Рис 'Басмати'",
        weight: "500г",
        composition: "рис, курица, креветки, овощи",
        price: 400,
        image: '/product.png'
      },
      {
        id: 28,
        name: "Рис 'Жасмин'",
        weight: "400г",
        composition: "рис, свинина, креветки, грибы",
        price: 350,
        image: '/product.png'
      },
      {
        id: 29,
        name: "Лапша 'Удон'",
        weight: "300г",
        composition: "лапша удон, курица, грибы",
        price: 450,
        image: '/product.png'
      },
      {
        id: 30,
        name: "Лапша 'Соба'",
        weight: "250г",
        composition: "лапша из гречневой муки, свинина",
        price: 480,
        image: '/product.png'
      },
      {
        id: 31,
        name: "Рисовая лапша",
        weight: "200г",
        composition: "китайская рисовая лапша, курица, грибы",
        price: 320,
        image: '/product.png'
      }
    ]
  },
  {
    id: 5,
    path: 'salads',
    title: 'Салаты',
    items: [
      {
        id: 32,
        name: "Цезарь с курицей",
        weight: "200г",
        composition: "курица, листья салата, помидоры, заправка",
        price: 280,
        image: '/product.png'
      },
      {
        id: 33,
        name: "Греческий салат",
        weight: "250г",
        composition: "огурцы, помидоры, сыр фета, оливки",
        price: 250,
        image: '/product.png'
      },
      {
        id: 34,
        name: "Летний свежий салат",
        weight: "180г",
        composition: "микс зелени, свежие овощи, заправка",
        price: 200,
        image: '/product.png'
      },
      {
        id: 35,
        name: "Азиатский салат с угрем",
        weight: "220г",
        composition: "угорь, авокадо, микс овощей, соевый соус",
        price: 320,
        image: '/product.png'
      },
      {
        id: 36,
        name: "Салат Нисуаз",
        weight: "230г",
        composition: "тунец, овощи, яйцо",
        price: 350,
        image: '/product.png'
      }]
  },
  {
    id: 6,
    path: 'soups',
    title: 'Супы',
    items: [
      {
        id: 37,
        name: "Борщ",
        weight: "300г",
        composition: "свекла, мясо, овощи",
        price: 380,
        image: '/product.png'
      },
      {
        id: 38,
        name: "Солянка",
        weight: "350г",
        composition: "мясо, огурцы, лимон",
        price: 300,
        image: '/product.png'
      },
      {
        id: 39,
        name: "Куриный бульон",
        weight: "250г",
        composition: "курица, лук",
        price: 350,
        image: '/product.png'
      },
      {
        id: 40,
        name: "Грибной крем-суп",
        weight: "200г",
        composition: "шампиньоны, сливки",
        price: 420,
        image: '/product.png'
      },
      {
        id: 41,
        name: "Томатный суп",
        weight: "280г",
        composition: "помидоры, овощи, зелень",
        price: 260,
        image: '/product.png'
      }
    ]
  }
];


export default products;