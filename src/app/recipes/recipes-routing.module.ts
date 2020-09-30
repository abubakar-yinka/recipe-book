import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesResolverService } from './recipes-resolver.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGuard } from './../auth/auth.guard';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';

const routes: Routes = [
    {
        path: '',
        component: RecipesComponent,
        canActivate: [AuthGuard],
        children: [
            { 
              path: '', 
              component: RecipeStartComponent 
            },
            { 
                path: 'new', 
                component: RecipeEditComponent
            },
            {
              path: ':id',
              component: RecipeDetailComponent,
              resolve: [RecipesResolverService]
            },
            {
              path: ':id/edit',
              component: RecipeEditComponent,
              resolve: [RecipesResolverService]
            }
        ]
    }
]

@NgModule({
    declarations: [],
    imports: [ CommonModule, RouterModule.forChild(routes) ],
    exports: [RouterModule],
    providers: [],
})
export class RecipeRoutingModule {}