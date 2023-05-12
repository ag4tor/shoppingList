import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() selectFeature = new EventEmitter<string>();


  onSelect(feature:string)
  {
    console.log('mi è arrivato questo', feature)
    this.selectFeature.emit(feature);

  }

}
