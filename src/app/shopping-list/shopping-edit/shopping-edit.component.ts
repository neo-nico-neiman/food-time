import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  nameInput: string = '';
  amountInput: number = null;
  @Output() onValueAdded = new EventEmitter<{ name: string, amount: number }>();
  @Output() onDelete = new EventEmitter<{ remove: 'last' | 'all' }>();
  constructor() { }

  ngOnInit(): void {

  }

  onAddIngredients() {
    this.onValueAdded.emit({ name: this.nameInput, amount: this.amountInput } );
  }

  onDeleteIngredient() {
    this.onDelete.emit({remove: 'last' });
  }
  onClearIngredients() {
    this.onDelete.emit({remove: 'all' });
  }

}
