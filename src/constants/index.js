import { mail , personalizado , user, esclavavirgen, cadenaclasica, dijecruz, dijecristorey, dijepescado, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "catalogue",
    title: "Catálogo",
  },
  {
    id: "aboutUs",
    title: "Sobre nosotros",
  },
  // {
  //   id: "more",
  //   title: "Más",
  // }
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Calidad",
    content:
      "Nuestras piezas son de la más alta calidad sin importar el material que hayas seleccionado para tus piezas.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Seguro",
    content:
      "Buscamos que nuestros clientes tengan la confianza de que el producto que estan comprando es de cálidad.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Buen Precio",
    content:
      "Manejamos distintos de precio dado que trabajamos con diferentes materiales, pero siempre buscamos darle el mejor precio posible a nuestros clientes.",
  },
];

export const catalogue = [
  {
    id: "product-1",
    content:
      "Esclava de oro para niña 15 cm (chapa 14k)",
    name: "Classic esc",
    title: "Esclava de oro para niña",
    img: esclavavirgen,
    positionImage: "topCenter",
    positionText: "belowImage",
  },
  {
    id: "product-2",
    content:
      "Cadena barbada chapada en 14K oro",
    name: "Classic",
    title: "Cadena Barbada",
    img: cadenaclasica,
    positionImage: "left",
    positionText: "right"
  },
  {
    id: "product-3",
    content:
      "Dije cruz, en oro solido / chapa / acero",
    name: "Cruz",
    title: "Dije cruz",
    img: dijecruz,
    positionImage: "right",
    positionText: "left"
  },
  {
    id: "product-4",
    content:
      "Dije cristo rey en oro sólido / chapa / acero",
    name: "Rey",
    title: "Dije Cristo Rey",
    img: dijecristorey,
    positionImage: "left",
    positionText: "right"
  },
  {
    id: "product-5",
    content:
      "Dije Pez (Oro Solido 10k)",
    name: "Pez",
    title: "Dije Pez",
    img: dijepescado,
    positionImage: "right",
    positionText: "left"
  }
];

export const Characteristics = [
  {
    id: "characteristic-1",
    title: "Joyas Personalizadas",
    img: personalizado
  },
  {
    id: "characteristic-2",
    title: "Envíos a todo México",
    img: mail
  },
  {
    id: "characteristic-3",
    title: "Entregas personales en Guadalajara",
    img: user
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Instagram",
        link: "https://www.instagram.com/rutilans_mx/",
      },
      {
        name: "Facebook",
        link: "https://www.facebook.com/",
      }
    ],
  },
  // {
  //   title: "Community",
  //   links: [
  //     {
  //       name: "Help Center",
  //       link: "https://www.hoobank.com/help-center/",
  //     },
  //     {
  //       name: "Partners",
  //       link: "https://www.hoobank.com/partners/",
  //     },
  //     {
  //       name: "Suggestions",
  //       link: "https://www.hoobank.com/suggestions/",
  //     },
  //     {
  //       name: "Blog",
  //       link: "https://www.hoobank.com/blog/",
  //     },
  //     {
  //       name: "Newsletters",
  //       link: "https://www.hoobank.com/newsletters/",
  //     },
  //   ],
  // },
  // {
  //   title: "Partner",
  //   links: [
  //     {
  //       name: "Our Partner",
  //       link: "https://www.hoobank.com/our-partner/",
  //     },
  //     {
  //       name: "Become a Partner",
  //       link: "https://www.hoobank.com/become-a-partner/",
  //     },
  //   ],
  // },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/rutilans_mx/"
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  }
];