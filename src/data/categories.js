import backpackImage from "../assets/air-max.jpg";
import handbagImage from "../assets/air-max.jpg";
import suitcaseImage from "../assets/air-max.jpg";


const categories = [
  {
    
    categoryId: "Basketball",
    title: "Backpack",
    image: backpackImage,
    description:"Bags that are carried over the shoulders with the help of two thick straps are called backpacks. Traditionally, backpacks have been large-sized, especially used by students to carry books, or travelers and hikers to carry food, camera or water bottles.",
  
  },
  {
  
    categoryId: "Football",
    title: "Handbags",
    image: handbagImage,
    description:"Bags that are carried over the shoulders with the help of two thick straps are called backpacks. Traditionally, backpacks have been large-sized, especially used by students to carry books, or travelers and hikers to carry food, camera or water bottles.",
    
  },
  {
  
    categoryId: "Sport",
    title: "Suitcases",
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
