import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionMiniprojetService {

  constructor(private http:HttpClient) { }

  getPFETypes (){
    return this.http.get('http://localhost:8080/rest/getAllTypes');
    }

  getPFEsCountsPerType (){
      return this.http.get('http://localhost:8080/rest/typesCount');
      }

  getPFEsCounts (){
      return this.http.get('http://localhost:8080/rest/PFEsCount');
      }    

  getPFEs (){
      return this.http.get('http://localhost:8080/rest/getAllPFEs');
      }

  getPFEByType (type_id:number){
        return this.http.get('http://localhost:8080/rest/getPFEByTypeId/'+type_id);
        }  
        
  addPFE (pfe:any){
          return this.http.post('http://localhost:8080/rest/addPFE',pfe);
          }  
          
  delPFE(id:number){
    return this.http.delete('http://localhost:8080/rest/delPFE/'+id);
  }

  searchPFE(keyword:string){
    return this.http.get('http://localhost:8080/rest/search/'+keyword);
  }


}
