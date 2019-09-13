import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredients } from "../shared/ingredients.model";
import { ShoppingListService } from "../shoping-list.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
ingredients: Ingredients[];
private igChanged:Subscription;

// ingradientsFunc(event){
// this.ingredients.push(event);
// }
 
  constructor(private shoppingList :ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingList.getIngrediets();

   this.igChanged = this.shoppingList.newIngredientAdd.subscribe(
      (ingredients : Ingredients[]) => {
        this.ingredients = ingredients;
      }
    )
    
  }
  
  onEditItem(index:number){
    this.shoppingList.editeItem.next(index);
  }
   
  ngOnDestroy(){
    this.igChanged.unsubscribe();
  }

}
