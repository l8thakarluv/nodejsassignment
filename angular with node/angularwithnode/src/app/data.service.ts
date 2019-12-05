import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  selectedemp: employee;
  emplist : employee[];
  
  constructor(private http: HttpClient) { }

  /*public addemp(emplist){
    return this.http.post('http://localhost:8000/employees/','',{
      params: {user: emplist},
      observe: 'response' 
    });
  }*/
  
  public getemp(){
    return this.http.get('http://localhost:8080/employees/');
  }

  /*public delemp(_id: string){
    return this.http.delete('http://localhost:8000/employees/' + `/${_id}`);
  }*/
}
