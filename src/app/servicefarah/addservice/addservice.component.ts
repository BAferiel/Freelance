import { Component } from '@angular/core';
import { ServicefarahService } from 'src/app/Service/servicefarah.service';
import { Service } from 'src/app/models/servicefar';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent {
servicefa:Service=new Service();
constructor(private us:ServicefarahService){}
  addService(){
   this.us.addServiceFromDb(this.servicefa).subscribe();
  }

}
