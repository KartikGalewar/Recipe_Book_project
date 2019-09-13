import { Injectable} from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from './recipe.model';
import { DataStorage } from '../shared/data-storage.service';
import { RecipeService } from './recipe.service';
import { RecursiveTemplateAstVisitor } from '@angular/compiler';

@Injectable({ providedIn:'root' })

export class RecipeResolverService implements Resolve<Recipe[]> {
  
     constructor(private dataStorage:DataStorage,private recipeService:RecipeService){}
     
    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
  
       const recipe = this.recipeService.getRecipe();  
  
       if(recipe.length === 0){
        return  this.dataStorage.fetchData();
       }else{
         return recipe;   
       }   

         
    }

}