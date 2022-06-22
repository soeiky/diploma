import backpackImage from "../assets/lining.jpg";
import handbagImage from "../assets/nike.shoes.jpg";
import suitcaseImage from "../assets/new.b.jpg";


const categories = [
  {
    
    categoryId: "Basketball",
    title: "Li-ning",
    image: backpackImage,
    description:"Bags that are carried over the shoulders with the help of two thick straps are called backpacks. Traditionally, backpacks have been large-sized, especially used by students to carry books, or travelers and hikers to carry food, camera or water bottles.",
  
  },
  {
  
    categoryId: "Football",
    title: "Nike",
    image: handbagImage,
    description:"Bags that are carried over the shoulders with the help of two thick straps are called backpacks. Traditionally, backpacks have been large-sized, especially used by students to carry books, or travelers and hikers to carry food, camera or water bottles.",
    
  },
  {
  
    categoryId: "Sport",
    title: "New Balance",
    image: suitcaseImage,
    description:"Bags that are carried over the shoulders with the help of two thick straps are called backpacks. Traditionally, backpacks have been large-sized, especially used by students to carry books, or travelers and hikers to carry food, camera or water bottles.",
    
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
