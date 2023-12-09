import { Component } from '@angular/core';
import { ReclamationService } from 'src/app/Service/reclamation.service';
import { Reclamation } from 'src/app/models/relclamation.model';

@Component({
  selector: 'app-addreclamation',
  templateUrl: './addreclamation.component.html',
  styleUrls: ['./addreclamation.component.css']
})
export class AddreclamationComponent {
  reclamation: Reclamation = new Reclamation();
   constructor(private reclamationService:ReclamationService){}
  AddReclamation(){
    this.reclamationService.addReclamation(this.reclamation).subscribe();
    
    
  }
}
