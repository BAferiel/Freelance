import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationService } from 'src/app/Service/reclamation.service';
import { Reclamation } from 'src/app/models/relclamation.model';

@Component({
  selector: 'app-listreclamation',
  templateUrl: './listreclamation.component.html',
  styleUrls: ['./listreclamation.component.css']
})
export class ListreclamationComponent implements OnInit {
  listeReclamations: Reclamation[] = [];
  reclamation: Reclamation = new Reclamation();
  rctoupdate:Reclamation={
    id_r:0,
    date:new Date(),
    description:"",
    subject:"",
    status:""
    }
  constructor(private router:Router, private route: ActivatedRoute,private reclamationService: ReclamationService) {}

  ngOnInit() {
    this.fetchReclamations();
  }

  fetchReclamations() {
    this.reclamationService.getReclamations().subscribe(
      (res: Reclamation[]) => {
        this.listeReclamations = res;
      },
      error => {
        // Handle errors here
        console.error('Error fetching reclamations:', error);
      }
    );
  }

 
  /* deleteReclamation(reclamation: Reclamation) {
    if (confirm('Are you sure you want to delete this reclamation?')) {
      this.reclamationService.deleteReclamation(reclamation.id_r).subscribe(
        () => {
          // Reload the current route
          this.router.navigate([], {
            relativeTo: this.route,
            queryParamsHandling: 'preserve'
          });
        },
        (error) => {
          console.error('Error deleting reclamation:', error);
        }
      );
    }} */
    deleteReclamation(reclamation: Reclamation) {
      console.log('Deleting reclamation:', reclamation);
    
      if (confirm('Are you sure you want to delete this reclamation?')) {
        console.log('User confirmed deletion. Proceeding...');
    
        this.reclamationService.deleteReclamation(reclamation.id_r).subscribe(
          () => {
            console.log('Reclamation deleted successfully.');
            
            // Refresh the current route
            this.router.navigateByUrl('/listreclamation', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/listreclamation']);
            });
          },
          (error) => {
            console.error('Error deleting reclamation:', error);
          }
        );
      } else {
        console.log('User canceled deletion.');
      }
    }
    
  
  information(reclamation:Reclamation){
    this.rctoupdate=reclamation;
  }  
 
  updateReclamation() {
    this.reclamationService.UpdateReclamation(this.rctoupdate.id_r, this.rctoupdate).subscribe(
      () => {
        console.log('Reclamation updated successfully.');
        
        // Show an alert for successful update
        alert('Update successful!');
  
        // Reset the form and fetch the updated list
        this.rctoupdate = {
          id_r: 0,
          date: new Date(),
          description: '',
          subject: '',
          status: ''
        };
  
        // Refresh the current route
        this.router.navigateByUrl('/reclamation/list', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/reclamation/list']);
        });
      },
      (error) => {
        console.error('Error updating reclamation:', error);
        // Handle errors here, e.g., display an error message to the user
      }
    );
  }
  
  
}
