import { asset } from "@/lib";
// Carta tomada de menu_purgatorio_vino_qr.pdf. Precios en pesos colombianos.

export type Item = { name: string; price: string; note?: string; detail?: string };
export type Category = {
  id: string;
  title: string;
  image: { src: string; alt: string };
  intro?: string;
  groups: { title?: string; items: Item[]; footnote?: string }[];
};

export type Sin = {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  glow: string;
};

export const sins: Sin[] = [
  {
    id: "lujuria",
    name: "Lujuria",
    price: "$42.000",
    description:
      "Chispeante y seductor. Vodka, granadina y limón arden con el picor de la ginger beer, suavizados por un toque dulce. Entra como un beso prohibido... y deja ganas de más.",
    image: asset("/img/gen/lujuria.webp"),
    glow: "#ff2b3f",
  },
  {
    id: "pereza",
    name: "Pereza",
    price: "$42.000",
    description:
      "Oscuro y lento como un atardecer sin prisa. Naranja dulce, vodka suave y un toque de granadina, envueltos en la negrura sigilosa del carbón activado. Te hunde en su calma.",
    image: asset("/img/gen/pereza.webp"),
    glow: "#8f6bff",
  },
  {
    id: "gula",
    name: "Gula",
    price: "$42.000",
    description:
      "Dulce, cítrico y atrevido. Gin, maracuyá y limón se funden con el amargo sutil del aperol, suavizados por sirope y espuma de clara. Un pecado que no se resiste... se repite.",
    image: asset("/img/gen/gula.webp"),
    glow: "#ffb347",
  },
  {
    id: "envidia",
    name: "Envidia",
    price: "$42.000",
    description:
      "Ron, blue curaçao, sirope de lychee, limón y triple sec. Dulce, cítrico y tan llamativo que hará que todos quieran el tuyo.",
    image: asset("/img/gen/envidia.webp"),
    glow: "#3d8bff",
  },
  {
    id: "soberbia",
    name: "Soberbia",
    price: "$42.000",
    description:
      "Tequila con limón y frambuesa en una mezcla que no pide aprobación... se impone. Ácida, dulce y desafiante, como quien sabe que siempre será el centro.",
    image: asset("/img/gen/soberbia.webp"),
    glow: "#ff3d8b",
  },
  {
    id: "avaricia",
    name: "Avaricia",
    price: "$42.000",
    description:
      "Brillante, amarga y codiciosa. Ron blanco, limón y miel se mezclan con el carácter del campari en un trago que lo tiene todo: dulzura, acidez y fuego. Y no deja nada para nadie.",
    image: asset("/img/gen/avaricia.webp"),
    glow: "#e8b64a",
  },
  {
    id: "ira",
    name: "Ira",
    price: "$42.000",
    description:
      "Tequila, campari, triple sec y miel arden con el filo del tabasco. Coronado con sal negra, es un cóctel intenso, amargo y picante, hecho para quienes disfrutan el fuego en cada sorbo.",
    image: asset("/img/gen/ira.webp"),
    glow: "#ff5a1f",
  },
];

export const classics: Item[] = [
  { name: "Old Fashion", price: "$45.000", detail: "Bourbon, azúcar y bitters. Una fórmula antigua que nunca pasa de moda." },
  { name: "Espresso Martini", price: "$42.000", detail: "Vodka, café y un toque dulce. Para quienes no duermen temprano." },
  { name: "Rosita", price: "$42.000", detail: "Vodka, crema, granadina y limón. Sedosa, dulce y fresca." },
];

export const menu: Category[] = [
  {
    id: "cafe",
    title: "Café",
    image: { src: asset("/img/v2/ht-taza-calavera.png"), alt: "Espresso cayendo en una taza con forma de calavera" },
    intro: "El café que usamos es exótico y de alta calidad.",
    groups: [
      {
        items: [
          { name: "Espresso", price: "$6.500" },
          { name: "Americano", price: "$7.300" },
          { name: "Capuchino", price: "$10.700" },
          { name: "Latte", price: "$11.000" },
          { name: "Flat white", price: "$9.500" },
          { name: "Mokaccino", price: "$14.500" },
          { name: "Filtrados", price: "$22.500" },
          { name: "Affogato", price: "$33.500" },
        ],
      },
      {
        title: "Otros",
        items: [
          { name: "Té", price: "$16.000" },
          { name: "Té en leche", price: "$20.000" },
          { name: "Matcha", price: "$12.000" },
          { name: "Chai latte", price: "$14.000", detail: "Masala, rosas, carbón activado o matcha" },
          { name: "Chocolate caliente", price: "$14.000", detail: "100% chocolate colombiano" },
        ],
      },
      {
        title: "Adiciones para tu bebida",
        items: [
          { name: "Leche de almendras", price: "$6.000" },
          { name: "Amaretto", price: "$3.000" },
          { name: "Caramelo", price: "$3.000" },
          { name: "Kahlúa", price: "$7.500" },
        ],
      },
    ],
  },
  {
    id: "frias",
    title: "Bebidas frías",
    image: { src: asset("/img/v2/ht-chai.png"), alt: "Chai rosa en copa con forma de corazón" },
    groups: [
      {
        items: [
          { name: "Ice latte", price: "$13.000", detail: "Espresso suave con leche fría y hielo." },
          { name: "Espuma eléctrica", price: "$17.500", detail: "Café espresso con agua tónica, hielo y un toque cítrico." },
          { name: "Matcha latte", price: "$14.000", detail: "Té verde japonés con leche." },
          { name: "Blueberry latte / matcha", price: "$18.500", detail: "Mermelada de fresa y mora, hielo, leche y espresso o matcha." },
          { name: "Lluvia dorada", price: "$18.500", detail: "Espresso con miel, hielo y un toque de espuma de leche." },
          { name: "Café naranja", price: "$13.500", detail: "Espresso con jugo de naranja." },
          { name: "Apple honey (limón)", price: "$16.500", detail: "Sirope de manzana, miel y hielo." },
          {
            name: "Bebida espirituosa",
            price: "$18.000",
            note: "Sin alcohol",
            detail: "Pulpa de fruta, soda, jengibre, yerbabuena, ralladura de limón y jugo de naranja.",
          },
        ],
      },
      {
        title: "Jugos y agua",
        items: [
          { name: "Jugo en agua", price: "$9.500" },
          { name: "Jugo en leche", price: "$12.000" },
          { name: "Agua con gas", price: "$4.500" },
        ],
      },
    ],
  },
  {
    id: "vino",
    title: "Vino",
    image: { src: asset("/img/v2/ht-vino.png"), alt: "Copa de vino tinto junto a un muñeco de terciopelo rojo" },
    groups: [
      {
        items: [
          {
            name: "Vino tinto de la casa",
            price: "$21.000 copa · $90.000 botella",
            detail: "Especiado, con notas de nuez moscada, frambuesas y un final de vainilla muy elegante.",
          },
          {
            name: "Vino blanco de la casa",
            price: "$21.000 copa · $90.000 botella",
            detail: "Herbáceo, con recuerdos a hierbabuena, tilo, mejorana y un cierre de peras en almíbar.",
          },
          {
            name: "Vino caliente",
            price: "$22.000",
            detail: "Vino tinto joven y afrutado con yerbabuena, canela y un toque de azúcar. Ideal para los fríos bogotanos.",
          },
          {
            name: "Tinto de verano",
            price: "$22.000",
            detail: "Vino tinto de cuerpo medio con soda de limón, jugo de naranja y mucho hielo.",
          },
          {
            name: "Lambrusco Remigio Rosso",
            price: "$90.000 botella",
            detail: "Afrutado y muy aromático, con notas jugosas de cerezas maduras. Suave en el paladar.",
          },
        ],
      },
    ],
  },
  {
    id: "cerveza",
    title: "Cerveza y licores",
    image: { src: asset("/img/v2/ht-coctel.png"), alt: "Cóctel espumoso con naranja deshidratada en el patio del castillo" },
    groups: [
      {
        items: [
          { name: "Stella", price: "$14.000" },
          { name: "Club Colombia", price: "$10.000" },
          {
            name: "Cerveza artesanal",
            price: "$16.500",
            detail: "Ramona sour frutos rojos o Ramona sour guayaba, durazno y sal.",
          },
          { name: "Cerveza Lino NE IPA", price: "$18.000" },
          {
            name: "Cerveza endiablada",
            price: "$35.000",
            detail: "Cerveza blanca con limón, un shot de tequila y labios de tajín. Pura tentación servida en vaso frío.",
          },
        ],
      },
      {
        title: "Otros",
        items: [
          { name: "Copa bourbon", price: "$30.000" },
          { name: "Copa whisky", price: "$30.000", note: "12 años" },
          { name: "Botella whisky", price: "$360.000", note: "12 años" },
          { name: "Botella whisky", price: "$420.000", note: "15 años" },
        ],
      },
    ],
  },
  {
    id: "pasteleria",
    title: "Pastelería",
    image: { src: asset("/img/v2/ht-torta.png"), alt: "Muñeco con la boca llena de torta de chocolate" },
    groups: [
      {
        items: [
          { name: "Croissant de almendras", price: "$13.500" },
          { name: "Pan de chocolate", price: "$10.800" },
          { name: "Porción de torta", price: "$18.400", detail: "Arándanos, red velvet o María Luisa." },
          { name: "Torta de chocolate", price: "$14.600", note: "Opción vegana" },
        ],
        footnote: "Porción de helado: + $9.000",
      },
      {
        title: "Pasabocas",
        items: [
          { name: "Empanada argentina", price: "$9.200", detail: "Tocineta y queso, carne o ricota y espinaca." },
          { name: "Porción de papas a la francesa", price: "$8.500" },
          { name: "Chorizo", price: "$13.500" },
          { name: "Choripapas", price: "$20.000" },
        ],
      },
    ],
  },
  {
    id: "cocina",
    title: "Cocina",
    image: { src: asset("/img/v2/ht-sala-roja.png"), alt: "Salón rojo con biblioteca, sillón morado y ventanales" },
    groups: [
      {
        title: "Sándwiches",
        items: [
          {
            name: "Italiano",
            price: "$28.000",
            detail: "Mozzarella, tomates cherry cocinados en aceite de oliva y ajo, sobre rúgula, con un toque de balsámico.",
          },
          { name: "Durazno", price: "$28.000", detail: "Mozzarella sobre rúgula, duraznos confitados, terminado con pesto." },
          { name: "Pesto", price: "$28.000", detail: "Mozzarella de búfala, tomate y pesto." },
          { name: "Jamón serrano", price: "$36.000", detail: "Queso de búfala, rúgula, tomates secos y jamón serrano." },
          { name: "Salmón", price: "$37.000", detail: "Queso crema, aguacate, rúgula y salmón curado." },
        ],
        footnote: "Adición de jamón serrano: + $6.000",
      },
      {
        title: "Cremas",
        items: [
          { name: "Tomate", price: "$18.000", detail: "Con un toque de picante y queso de búfala." },
          { name: "Lenteja y chorizo", price: "$20.000" },
        ],
        footnote: "Todas nuestras sopas tienen opción vegetariana y vegana.",
      },
      {
        title: "Fuertes",
        items: [
          { name: "Raviolis de carne", price: "$40.000" },
          { name: "Raviolis de ricotta y espinaca", price: "$40.000" },
          { name: "Raviolis de salmón", price: "$55.000" },
          { name: "Pasta boloñesa", price: "$35.000" },
          {
            name: "Hamburguesa",
            price: "$35.000",
            detail: "150 g de carne de res sobre salsa de pepinillos, doble cheddar, tomates cherry y mermelada de tocineta y cebolla.",
          },
          {
            name: "Hamburguesa queso azul",
            price: "$44.000",
            detail: "150 g de carne de res rellena de queso azul, salsa de pepinillos, rúgula y tocineta.",
          },
        ],
        footnote: "Hamburguesa en combo con papas y jugo natural o Club Colombia: + $7.000",
      },
    ],
  },
];
