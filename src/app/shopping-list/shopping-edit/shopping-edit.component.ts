import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Ingredients } from "../../shared/ingredients.model";
import { ShoppingListService } from "../../shoping-list.service";
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit ,OnDestroy {
  @ViewChild('f') formData:NgForm;
  subscription:Subscription;
  editMode=false;
  editedItemIndex:number;
  clickedItem:Ingredients;
  newIngredient:Ingredients[];

  constructor(private shoppingList :ShoppingListService) { 
    
 
  }

  ngOnInit() {
    
    this.subscription = this.shoppingList.editeItem.subscribe(
          (index)=>{
             this.editMode = true;
              this.editedItemIndex = index;
              this.clickedItem = this.shoppingList.getClickedItem(index);
              this.formData.setValue({
                itemName : this.clickedItem.name,
                itemAmt  : this.clickedItem.amount
              })
          }

     )

  }





  onAddItem(form:NgForm){

    const value = form.value; 
    this.newIngredient =[ new Ingredients(value.itemName , value.itemAmt) ] ;

   
    if(this.editMode){
    this.shoppingList.updateIngrdient(this.editedItemIndex,this.newIngredient);
     } else{
      this.shoppingList.addIngradients(this.newIngredient); 
     }
      
     this.editMode = false;
     form.reset(); 

   }

   onClear(){

     this.formData.reset();
     this.editMode = false;

   }

   onDelete(){
    this.shoppingList.deleteIngredient(this.editedItemIndex);
     this.onClear();
     
   }

   ngOnDestroy(){ 
     this.subscription.unsubscribe;
   }

   
}
