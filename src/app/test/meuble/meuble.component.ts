import { Component, OnInit ,Input} from '@angular/core';
import { ThenableWebDriver } from 'selenium-webdriver';

@Component({
  selector: 'app-meuble',
  templateUrl: './meuble.component.html',
  styleUrls: ['./meuble.component.css']
})
export class MeubleComponent implements OnInit {
  @Input() table:string;
  @Input()img:any;
  @Input()prix:number;
  @Input()etat:any;
  @Input()pp=this.prix;
  nombre="neuf";
  
  
  original(pp){
    this.pp=this.prix*0.15;
  }

  verif(){
    if(this.etat=="true"){
      return true;
    }
    else{
      return false;
    }
  }
titre="Liste des meubles a Vendre";
  constructor() { }

  ngOnInit() {
  }

}
