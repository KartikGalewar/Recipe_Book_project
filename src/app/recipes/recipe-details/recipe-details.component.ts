import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Recipe } from "../../recipes/recipe.model";
import { ShoppingListService } from "../../shoping-list.service";
import { Ingredients } from "../../shared/ingredients.model";
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  id:number;
  oneSelectedItem:Recipe;
   //ingredient:Ingredients[];
    // ingredient:Ingredients[];

  constructor(private shopingListService:ShoppingListService,
              private recipeService:RecipeService ,
              private route:ActivatedRoute,
              private router:Router) {

               }

  ngOnInit() {
    this.route.params.subscribe(
     (params:Params) =>{
     this.id = params['id'];
     this.oneSelectedItem = this.recipeService.getOneRecipe(this.id);
     }
   )
  }

  addIngredient(){
    this.recipeService.addIngredientsToShoppingList( this.oneSelectedItem.ingredient);
  }

  onEditRecipe(){
  this.router.navigate(['edit'],{relativeTo:this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
 