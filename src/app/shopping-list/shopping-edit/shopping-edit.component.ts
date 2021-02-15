import {Component, ElementRef, ViewChild} from '@angular/core';
import {ShoppingListService} from '../shoopingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild( 'nameInput', { static: false } ) nameInputRef: ElementRef;
  @ViewChild( 'amountInput', { static: false } ) amountInputRef: ElementRef;

  constructor( private shoppingListService: ShoppingListService ) { }

  onAddIngredients(): void {
    this.shoppingListService.newValueAdded({
      name: this.nameInputRef.nativeElement.value,
      amount: this.amountInputRef.nativeElement.value
    } );
  }

  onDeleteIngredient(): void {
    this.shoppingListService.onDeleteOrClear('last' );
  }
  onClearIngredients(): void {
    this.shoppingListService.onDeleteOrClear( 'all' );
  }

}
