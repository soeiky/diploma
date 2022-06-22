import productImage from "../assets/nike.jpg";
import Products from "../pages/Products";

const products = [
  {
    image: productImage,
    productId: "Nike Waffle One",
    title: "Nike Waffle One",
    description: `Bringing a new look to the Waffle sneaker family, the Nike Waffle One balances everything you love about heritage Nike running with fresh innovations. Its new TPU heel clip adds energy while a mixture of transparent mesh (let that sock game shine) and retro suedes give texture and depth. The updated Waffle outsole provides a level of support and traction you have to feel to believe.`,
    price: 10,
  },
  {
    image: productImage,
    productId: "dark-roast",
    title: "Dark roast",
    categoryId: "Basketball",
    description: `The Asian palm civet eats coffee berries and excretes the beans. Because the civet prefers the taste of the ripest cherries, the civet selectively harvests the cherries. Its digestive system then processes the beans by breaking down the mucilage and pulp surrounding the seed. Once the seeds are excreted by the civet, they can be harvested, processed and sold as a niche product. Once they are finally processed, these beans are called kopi luwak, and are often marketed as a rare and expensive coffee.`,
    price: 12,
  },
  {
    image: productImage,
    productId: "house-blend",
    title: "House blend",
    description: `Two methods are primarily used to process coffee berries. The first, "wet" or "washed" process, has historically usually been carried out in Central America and areas of Africa. The flesh of the cherries is separated from the seeds and then the seeds are fermented – soaked in water for about two days. This softens the mucilage, which is a sticky pulp residue that is still attached to the seeds. Then this mucilage is washed off with water.`,
    price: 14,
  },
  {
    image: productImage,
    productId: "light-roast",
    title: "Light roast",
    description: `The "dry processing" method, cheaper and simpler, was historically used for lower-quality beans in Brazil and much of Africa, but now brings a premium when done well. Twigs and other foreign objects are separated from the berries and the fruit is then spread out in the sun on concrete, bricks or raised beds for 2–3 weeks, turned regularly for even drying.`,
    price: 13,
  },
  {
    image: productImage,
    productId: "medium-roast",
    title: "Medium roast",
    description: `Clinical research indicates that moderate coffee consumption is benign or mildly beneficial as a stimulant in healthy adults, with continuing research on whether long-term consumption reduces the risk of some diseases, although some of the long-term studies are of questionable credibility.`,
    price: 11,
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
export default Products;