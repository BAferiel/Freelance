import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReclamationService } from 'src/app/Service/reclamation.service';
import { Reclamation } from 'src/app/models/relclamation.model';

@Component({
  selector: 'app-addreclamation',
  templateUrl: './addreclamation.component.html',
  styleUrls: ['./addreclamation.component.css']
})
export class AddreclamationComponent {
  reclamation: Reclamation = new Reclamation();
   constructor(private reclamationService:ReclamationService, private router: Router){}
   AddReclamation() {
    this.reclamationService.addReclamation(this.reclamation).subscribe(
      () => {
        console.log('Reclamation added successfully.');
        
        // Navigate to the listereclamation page
        this.router.navigate(['/listreclamation']);
        
      },
      (error) => {
        console.error('Error adding reclamation:', error);
        // Handle errors here, e.g., display an error message to the user
      }
    );
  }
}
