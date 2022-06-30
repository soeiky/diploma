import setImage from "../assets/set.jpg";
import realImage from "../assets/real.jpg";
import bigImage from "../assets/big.jpg";
import ternImage from "../assets/tern.jpg";
import strangeImage from "../assets/strange.jpg";
import letImage from "../assets/let.jpg";
import blazerImage from "../assets/blazer.jpg";
import jordanImage from "../assets/jordan.jpg";
import nikyImage from "../assets/niky.jpg";
import summershoesImage from "../assets/summershoes.jpg";
import blackImage from "../assets/black.jpg";

const products = [
  {
    image: setImage,
    productId: "logo",
    categoryId: "Women",
    title: "Nike logo ",
    description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: 3999,
  },
  {
    image: realImage,
    productId: "Jordan",
    categoryId: "Women",
    title: "Jordan Nike",
    description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: 4399,
  },

  {
    image: bigImage,
    productId: "RU",
    categoryId: "Women",
    title: "Nike RU",
    description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: 2999,
  },
  {
    image: ternImage,
    productId: "Male",
    categoryId: "Men",
    title: "Nike Male",
    description: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: 5099,
  },
  {
    image: strangeImage,
    productId: "Blazer Mix",
    categoryId: "Men",
    title: "Nike Blazer Mix",
    description: `    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: 6099,
  },
  {
    image: letImage,
    productId: "SA",
    categoryId: "Men",
    title: "Nike ",
    description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: 2399,
  },
  {
    image: blazerImage,
    productId: "White air max",

    categoryId: "Max",
    title: "Nike white air max",
    description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: 2999,
  },
  {
    image: jordanImage,
    productId: "Black air max",

    categoryId: "Max",
    title: "Nike black air max",
    description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: 3299,
  },
  {
    image: nikyImage,
    productId: "Black-white air max",

    categoryId: "Max",
    title: "Nike black-white air max",
    description: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: 2560,
  },
  {
    image: summershoesImage,
    productId: "Max",

    categoryId: "Women",
    title: "Nike Women",
    description: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: 1299,
  },
  {
    image: nikyImage,
    productId: "Men",

    categoryId: "Men",
    title: "Nike Men",
    description: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: 1399,
  },
  {
    image: blackImage,
    productId: "Tr23",

    categoryId: "Max",
    title: "Nike max",
    description: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis animi dolor libero praesentium qui perspiciatis similique ipsum consequuntur corporis, quisquam, eum commodi, sunt aliquam veritatis quibusdam a deserunt eaque id.
    `,
    price: 1500,
  },
];

export function getProducts() {
  return products;
}

// dark-roast
export function getProduct(productId) {
  return products[
    products.findIndex(
      product =>  product.productId === productId
    )
  ];
}
export default products;