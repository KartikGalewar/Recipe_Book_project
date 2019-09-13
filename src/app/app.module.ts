import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { Dropdowndirective } from "./shared/dropdown.directive";
import { ShoppingListService } from "./shoping-list.service";
import { RecipeService } from "./recipes/recipe.service";
import { AppRouting } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { DataStorage } from './shared/data-storage.service';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    Dropdowndirective,
    RecipeStartComponent,
    RecipeEditComponent,
    AuthComponent
    
   
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    ReactiveFormsModule,
    HttpClientModule
   
  
  ],
  providers: [ShoppingListService,RecipeService,DataStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
