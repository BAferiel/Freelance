import {Component, OnInit} from '@angular/core';
import { Route } from '@angular/router';
import { ServicefarahService } from 'src/app/Service/servicefarah.service';
import { Service } from 'src/app/models/servicefar';

@Component({
  selector: 'app-listservice',
  templateUrl: './listservice.component.html',
  styleUrls: ['./listservice.component.css']
})
export class ListserviceComponent implements OnInit{
  list: Service[] = [];
  servicefa: Service = new Service();
  servicetoupdate: Service = {
    idService: 0,
    title: "",
    description: "",
    tarif: 0,
    dure: 0,
    image: ""
  };

  constructor(private us: ServicefarahService) {}

  ngOnInit(): void {
    this.fetchService();
  }

  fetchService(): void {
    this.us.getServiceFromDB().subscribe(
        (res: Service[]) => {
          this.list = res;
        },
        (error) => {
          console.error('Error fetching services:', error);
        }
    );
  }

  information(service: Service): void {
    this.servicetoupdate = service;
  }

  updateService(): void {
    this.us.Updateservice(this.servicetoupdate.idService, this.servicefa).subscribe(
        (data) => {
          console.log(data);
          this.servicefa = new Service();
        },
        (error) => console.log(error)
    );
  }


  deleteSubscription(service: Service): void {
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
