import {Component} from '@angular/core';
import {DougComponent} from './doug.component';
import {BubbleComponent} from './doug-bubble.component';
import {PlantComponent} from './doug-plant.component';
@Component({
  selector: 'doug-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [DougComponent,BubbleComponent,PlantComponent]
})
export class AppComponent { 
	
}