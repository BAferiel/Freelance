import { Component } from '@angular/core';
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
  constructor(private us:ServicefarahService ){}
  ngOnInit(){
  this.fetchuniversite()
  }

  fetchuniversite(){
    this.us.getServiceFromDB().subscribe((res:Service[])=>this.list=res);

  }
  information(service:Service){
    this.servicetoupdate=service;
  }  
  updateservice(){
    this.us.Updateservice(this.servicetoupdate).subscribe();
  }
  deleteservice(event:any , service:Service){
    if(confirm('est ce que vous voulez vraiment supprimer')){
      event.target.innerText="Deleting..."

      this.us. deleteServiceFromDb(this.servicefa.idService).subscribe(()=> this.fetchuniversite());
      
      
    }
}
}