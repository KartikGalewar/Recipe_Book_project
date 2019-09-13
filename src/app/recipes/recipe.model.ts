import { Ingredients } from "../shared/ingredients.model";

export class Recipe {
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredient:Ingredients[];

   constructor(name:string,desc:string,imagepath:string,ingredient:Ingredients[]){
       this.name=name;
       this.description=desc;
       this.imagePath=imagepath;
       this.ingredient = ingredient;

   } 
}