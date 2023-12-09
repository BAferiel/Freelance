import { Component } from '@angular/core';
import { CommandeService } from 'src/app/Service/commande.service';
import { Commande, StatusCommande } from 'src/app/models/commande';
import { __values } from 'tslib';

@Component({
  selector: 'app-addcommande',
  templateUrl: './addcommande.component.html',
  styleUrls: ['./addcommande.component.css']
})
export class AddcommandeComponent {
  commande:Commande=new Commande();
  statusValues = Object.values(StatusCommande).filter(value =>typeof value === 'string');
  constructor(private cs:CommandeService){}

  addCommande(){
    this.cs.addCommandeFromDb(this.commande).subscribe();
  }

}
