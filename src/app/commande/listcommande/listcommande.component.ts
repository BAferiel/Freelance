import { Component } from '@angular/core';
import { CommandeService } from 'src/app/Service/commande.service';
import { Commande, StatusCommande } from 'src/app/models/commande';
import {Router} from "@angular/router";
import {PaymentService} from "../../Service/payment.service";

@Component({
  selector: 'app-listcommande',
  templateUrl: './listcommande.component.html',
  styleUrls: ['./listcommande.component.css']
})
export class ListcommandeComponent {
  list!:Commande[];
  commande:Commande= new Commande();
  statusValues = Object.values(StatusCommande).filter(value =>typeof value === 'string');
  commandetoupdate:Commande={
    idCommande:0,
    id_user:0,
    idService:0,
    status_c: StatusCommande.EN_ATTENTE,
    dateCommande: new Date(),
    price:0,
  }


  constructor(private cs:CommandeService,private router: Router, private paymentService: PaymentService){}

  ngOnInit(): void{
    this.fetchcommande()
  }

  private fetchcommande(){
    this.cs.getCommandeFromDb().subscribe(data=> {
      console.log(data);
        this.list=data;
  })
}
  informationcommande(commande:Commande){
    this.commandetoupdate=commande;

  }

  updatecommande() {
    if (this.commandetoupdate.idCommande !== undefined) {
        this.cs.updateCommandeFromDb(this.commandetoupdate.idCommande, this.commande).subscribe(
            data => {
                console.log(data);
                this.commande = new Commande();
            },
            error => console.log(error)
        );
    } else {
        console.error("ID de commande non défini");
    }
}
  deletecommande(event:any, com:Commande){
    if(confirm('est ce que vous voulez vraiment supprimer cette commande?')){
      event.target.innerText="Deleting..."
      this.cs.deleteCommandeFromDb(com.idCommande).subscribe(()=>this.fetchcommande());
    }
  }

  payForCommande(commande: any){
    this.paymentService.updateAmount(commande.price)
    this.router.navigate(['/payment'])
  }



}
