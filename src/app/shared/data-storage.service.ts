import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from "../recipes/recipe.model";
import { map, tap } from 'rxjs/operators';
import { ReflectiveDependency } from '@angular/core/src/di/reflective_provider';
 
@Injectable()
  

export class DataStorage{

  constructor(private http:HttpClient,
              private recipeService :RecipeService){
    
  }


  saveData(){
   const recipe = this.recipeService.getRecipe();
   this.http.put('https://ng-project-recipe-book-71c52.firebaseio.com/recipes.json',recipe).subscribe(responseData =>{
       console.log(responseData);
   })
  }

  fetchData(){
    return this.http.get<Recipe[]>('https://ng-project-recipe-book-71c52.firebaseio.com/recipes.json').pipe( map( recipe=>{
           return recipe.map( recipe =>{
               return { ...recipe,ingredient:recipe.ingredient ? recipe.ingredient : [] }
           }  )   
       
      } ),tap(recipe =>{
        this.recipeService.setRecipes(recipe);
          }) ) 
        
 
  }

}