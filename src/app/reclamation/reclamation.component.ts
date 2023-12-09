import { Component } from '@angular/core';
import { Reclamation } from '../models/relclamation.model';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent {
  reclamation: Reclamation = new Reclamation();
  
  AddReclamation(){
    console.log(this.reclamation);
  }
}
