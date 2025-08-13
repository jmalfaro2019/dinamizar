import { Component } from '@angular/core';
import { CountUpDirective } from '../../utils/count-up.directive';


@Component({
  selector: 'app-inicio',
  imports: [CountUpDirective],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

  
}
