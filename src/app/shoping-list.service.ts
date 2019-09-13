import { Ingredients } from "./shared/ingredients.model";
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable()

export class ShoppingListService {
    editeItem = new Subject<number>();
    newIngredientAdd = new Subject<Ingredients[]>();
    ingredients: Ingredients[] = [
        new Ingredients('Apples',5),new Ingredients('Banana',10)
    ];


    getIngrediets(){
        return this.ingredients.slice();
    }
     
    getClickedItem(index:number){
      return this.ingredients[index];
    }
     
    addIngradients(ingredients:Ingredients[]){
        this.ingredients.push(...ingredients);

        this.newIngredientAdd.next( this.ingredients.slice() );

    }

    updateIngrdient(index:number,newIngredient:Ingredients[]){
       for(let ingredient of newIngredient){
        this.ingredients[index] = ingredient;
       }
      
      this.newIngredientAdd.next(this.ingredients.slice());

    }

    deleteIngredient(index){
       this.ingredients.splice(index,1);
       this.newIngredientAdd.next(this.ingredients.slice());
    }
}