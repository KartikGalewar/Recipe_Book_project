import {  Injectable,Output, EventEmitter } from "@angular/core";

import { Recipe } from "../recipes/recipe.model";
import { Ingredients } from "../shared/ingredients.model";
import { ShoppingListService } from '../shoping-list.service';
import { Subject } from 'rxjs';

@Injectable()

export class RecipeService {
   // @Output() allItemWasSelected =  new EventEmitter<Recipe[]>(); 

  recipesChanged = new Subject<Recipe[]>();

   constructor(private slService: ShoppingListService) {}
    
   private recipes: Recipe[] = [];

    //     private recipes: Recipe[] = [
    // new Recipe(
    //   'Tasty Schnitzel',
    //   'A super-tasty Schnitzel - just awesome!',
    //   'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
    //   [new Ingredients('Meat', 1), new Ingredients('French Fries', 20)]
    // ),
    // new Recipe(
    //   'Big Fat Burger',
    //   'What else you need to say?',
    //   'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
    //   [new Ingredients('Buns', 2), new Ingredients('Meat', 1)]
    //  )
    // ];

    

      getRecipe(){
           return  this.recipes.slice();
      }

      getOneRecipe(i){
       return this.recipes[i];
      }

      addIngredientsToShoppingList(ingredients: Ingredients[]) {
        this.slService.addIngradients(ingredients);
      }
      
      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }
    
      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }
    
      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
        
      }

      setRecipes(recipes: Recipe[]) {
       this.recipes =  recipes;
        console.log('Data is added from recipe service');
        this.recipesChanged.next(this.recipes.slice());    
   
      }
      

}