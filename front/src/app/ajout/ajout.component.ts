import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { GestionMiniprojetService } from '../gestion-miniprojet.service';


@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  pfetypes:any=[];
  pfe:any={"id":0,"titre":null,"type_pfe":{"id":0}};
  
  constructor(private route:Router,private ser:GestionMiniprojetService) {
    //let j=new AppComponent(route,ser);
    //j.setState();
    //alert(this.appC.title);
    
    this.getAllTypes();
   }

  ngOnInit(): void {
    
  }

  getAllTypes(){
    this.ser.getPFETypes().subscribe(
      data=>{this.pfetypes=data;},
      error=>{console.log(error);alert("error retrieving types")}
    )
  }

  addPFE(){
    //alert("d5alna lel fonction add");
    this.ser.addPFE(this.pfe).subscribe(
      data=>{
        //this.appC.check();
        //alert("ref after add pfe");
        this.route.navigate(["/"]);
      },
      error=>{console.log(error);alert("error adding pfe");}
    )
  }

}
