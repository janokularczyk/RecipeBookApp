import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Ramen',
      'Ramen recipe',
      'https://images.pexels.com/photos/1907229/pexels-photo-1907229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      [
        new Ingredient('Noodles', 1),
        new Ingredient('Broth', 2),
        new Ingredient('Toppings', 5),
      ],
    ),
    new Recipe(
      'Burger',
      'Burger recipe',
      'https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Bun', 2),
        new Ingredient('Vegetables', 3),
        new Ingredient('Cheese', 1),
      ],
    ),
  ];

  getRecipes() {
      return this.recipes.slice();
  }
}
