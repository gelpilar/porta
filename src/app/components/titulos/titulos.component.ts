import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrl: './titulos.component.css'
})
export class TitulosComponent {
        @Input() Titulo: string = "";

}
