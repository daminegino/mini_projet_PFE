import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionMiniprojetService } from './gestion-miniprojet.service';
import { typePFE } from '../model/typePFE';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title = 'miniprojet';
  //pfetypes:typePFE[];
  pfetypes:any=[];
  pfeTotal:any;
  stateChange:boolean=false;
  pfeTotalPerType:any=[];
  pfeTitre:any;
  @ViewChild('keyword') inputName;
  
  pfe:any={"id":0,"titre":null,"type_pfe":{"id":0}};
  constructor(private route:Router,private ser:GestionMiniprojetService ) { 
  this.check();

  }

setState(){alert("mel class appC");this.stateChange=true;}

ngOnInit():void
  {
  
  }

  getAllTypes(){
    this.ser.getPFETypes().subscribe(
      data=>{this.pfetypes=data;this.pfeTotal=this.pfetypes.length},
      error=>{console.log(error);}
    )
  }

  getPFEsCountsPerType(){
    this.ser.getPFEsCountsPerType().subscribe(
      data=>{this.pfeTotalPerType=data;},
      error=>{console.log(error);}
    )
  }

  getPFEsCount(){
    this.ser.getPFEsCounts().subscribe(
      data=>{this.pfeTotal=data;},
      error=>{console.log(error);}
    )
  }


  check(){
  this.getAllTypes();
  this.getPFEsCountsPerType();
  this.getPFEsCount();
  this.route.navigate(["/listPFE"]);
}
/*
ngDoCheck():void{
  if(this.stateChange) {
  this.check();
  }
}
/*
ngDoCheck():void{
  if(this.stateChange) {
    
    this.check();
    this.stateChange=false;
  }
}
  */

  chercher(keyword:any){
    //alert(keyword);
    this.inputName.nativeElement.value = '';
    this.route.navigate(["listPFE/search/"+keyword]);
  }

}
