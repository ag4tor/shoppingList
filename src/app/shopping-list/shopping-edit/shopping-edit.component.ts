import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput',{static:false}) nameRef : ElementRef;
  @ViewChild('amountInput',{static:false}) amountRef : ElementRef;

  @Output() addIngredient = new EventEmitter<Ingredient>(); 

  onAddIngredient(){
    const newIngredient = new Ingredient( this.nameRef.nativeElement.value, this.amountRef.nativeElement.value );
    this.addIngredient.emit(newIngredient);
  }

}
