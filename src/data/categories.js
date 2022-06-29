import backpackImage from "../assets/lining.jpg";
import handbagImage from "../assets/nike.shoes.jpg";
import suitcaseImage from "../assets/new.b.jpg";


const categories = [
  {
    
    categoryId: "Sport shoes",
    title: "Li-ning",
    image: backpackImage,
    description:"China's premier sports brand. Named for and founded by, world class gymnast, Mr. Li Ning. Established in 1990.Moving Innovation Female Smart Moving Running Shoes, Standard Black/Standard White/Flashing Red/Turkish Sea.Li-Ning lining online shop sale original, authentic new badminton, table tennis, running, trainning, basketball shoes, clothing and accessory from shop lining.",
  
  },
  {
  
    categoryId: "Nike new",
    title: "Nike",
    image: handbagImage,
    description:"Nike shoes provide excellent support – Nike shoes comes with a herringbone pattern and a solid rubber, which adds to the comfort and support of users. – Nike shoes are lightweight and durable – Despite provides exceptional comfort, flexibility, of Nike shoes are very light.",
    
  },
  {
  
    categoryId: "Nb",
    title: "New Balance",
    image: suitcaseImage,
    description:"(NB), best known as simply New Balance, is one of the world's major sports footwear and apparel manufacturers.What are New Balance shoes known for New Balance is known for its comfortable sneakers. More and more athletes have been choosing to wear New Balance sneakers from basketball courts to soccer fields.",
    
  },
 

];

export function getCategories() {
  return categories;
}


export function getCategory(categoryId) {
  return categories[
    categories.findIndex((category) => category.categoryId === categoryId)
  ];
}