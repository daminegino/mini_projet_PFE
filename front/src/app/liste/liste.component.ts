
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionMiniprojetService } from '../gestion-miniprojet.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  pfes:any=[];
  last_id:number;
  last_keyword:string;

  constructor(private route:Router,private ser:GestionMiniprojetService,private act:ActivatedRoute) { 
    this.check();

  }

  ngOnInit():void
  {}

  
  check(){


    if(this.act.snapshot.params["id"]) {
      //alert(this.act.snapshot.params["id"]);
      this.getPFEsByType(this.act.snapshot.params["id"]);
      this.last_id=this.act.snapshot.params["id"];
    }
    else if(this.act.snapshot.params["keyword"]){
    //alert("search works");
    this.searchPFE(this.act.snapshot.params["keyword"]);
    this.last_keyword=this.act.snapshot.params["keyword"];}
    else {this.getAllPFE();}
  }



  

 ngDoCheck():void{
  if(this.act.snapshot.params["id"] && this.act.snapshot.params["id"]!=this.last_id || 
     this.act.snapshot.params["keyword"] && this.act.snapshot.params["keyword"]!=this.last_keyword) {
    
    this.check();

}

}

    
  getAllPFE(){
    this.ser.getPFEs().subscribe(
      data=>{this.pfes=data;},
      error=>{console.log(error);alert("error get all pfes")}
    )
  }

  getPFEsByType(id:number){
    this.ser.getPFEByType(id).subscribe(
      data=>{this.pfes=data;},
      error=>{console.log(error);alert("error get pfes by type");}
    )
  }

  searchPFE(keyword:string){
    this.ser.searchPFE(keyword).subscribe(
      data=>{this.pfes=data;},
      error=>{console.log(error);alert("error search");}
    )
  }

  delPFE(id:number){
    this.ser.delPFE(id).subscribe(
      data=>{this.check();this.route.navigate(["/"]);},
      error=>{console.log(error);alert("error deleting");})
  }

  
}

