export class Commande{
    idCommande!:number;
    id_user!:number;
    idService!:number;
    status_c!:StatusCommande;
    dateCommande!: Date;
    price!: number;

}

export enum StatusCommande{
    ACCEPTEE='ACCEPTEE',
    EN_ATTENTE='EN_ATTENTE',
    ANNULEE='ANNULEE',
}