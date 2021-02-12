import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild( 'nameInput', { static: false } ) nameInputRef: ElementRef;
  @ViewChild( 'amountInput', { static: false } ) amountInputRef: ElementRef;
  @Output() onValueAdded = new EventEmitter<Ingredient>();
  @Output() onDelete = new EventEmitter<{ remove: 'last' | 'all' }>();
  constructor() { }

  ngOnInit(): void {

  }

  onAddIngredients() {
    this.onValueAdded.emit({
      name: this.nameInputRef.nativeElement.value,
      amount: this.amountInputRef.nativeElement.value
    } );
  }

  onDeleteIngredient() {
    this.onDelete.emit({remove: 'last' });
  }
  onClearIngredients() {
    this.onDelete.emit({remove: 'all' });
  }

}
