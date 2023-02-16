import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'test',
      'test recipe',
      'https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=600'
    ),
    new Recipe(
      'test2',
      'test2 recipe',
      'https://images.pexels.com/photos/109274/pexels-photo-109274.jpeg?auto=compress&cs=tinysrgb&w=600'
    ),
  ];

  getRecipes() {
      return this.recipes.slice();
  }
}
