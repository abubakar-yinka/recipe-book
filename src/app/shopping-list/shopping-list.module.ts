import { SharedModule } from './../shared/shared.module';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports: [ 
        SharedModule,
        RouterModule,
        ShoppingListRoutingModule,
        FormsModule 
    ],
    exports: [],
    providers: [],
})
export class ShoppingListModule {}