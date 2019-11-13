import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meubleslist',
  templateUrl: './meubleslist.component.html',
  styleUrls: ['./meubleslist.component.css']
})
export class MeubleslistComponent implements OnInit {
meubles=[{libelle:'table',img:'../assets/table.jpg',prixttc:47,neuf:'true'}
,{libelle:'armoire' ,img:'../assets/armoire.jpg',prixttc:258.5,neuf:'false'},
{libelle:'fauteuil' ,img:'../assets/fauteuil.jpg',prixttc:113.8,neuf:'true'}];
  constructor() { }

  ngOnInit() {
  }

}
