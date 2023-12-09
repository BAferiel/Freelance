import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { ServicefarahService } from 'src/app/Service/servicefarah.service';
import { Service } from 'src/app/models/servicefar';

@Component({
  selector: 'app-listservice',
  templateUrl: './listservice.component.html',
  styleUrls: ['./listservice.component.css']
})
export class ListserviceComponent {
  list:Service[]=[];
  servicefa:Service=new Service();

  servicetoupdate:Service={
    idService:0,
    title:"",
    description:"",
    tarif:0,
    dure:0,
    image:""
    
    }
  constructor( private us:ServicefarahService ){}
  ngOnInit(){
  this.fetchservice()
  }

  fetchservice(){
    this.us.getServiceFromDB().subscribe(
      (res: Service[]) => {
        console.log('Données reçues de l\'API : ', res);
        this.list = res;
      },
      (error) => {
        console.error('Erreur lors de la récupération des données : ', error);
      }
    );
      
   

  }
  information(service:Service){
    this.servicetoupdate=service;
  }  

  updateService(){
    this.us.Updateservice(this.servicetoupdate.idService,this.servicefa).subscribe(data =>{
      console.log(data);
      this.servicefa = new Service();
    },error =>console.log(error));
    
  }
 
 
  DeleteSubscription(service: Service): void {
    const isConfirmed = confirm('Are you sure you want to delete this service?');
    if (isConfirmed) {
      this.us.removeService(service.idService).subscribe(
        () => {
          this.list = this.list.filter(e => e.idService !== service.idService);
        },
        error => {
          console.error('Error during deletion:', error);
        }
      );
    }
  }


}