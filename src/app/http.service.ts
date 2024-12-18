import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string='http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  getAllEmp(){
    return (this.http.get(`${this.baseUrl}getallemprecord`));
  }

  getEmpById(id:any){
    return (this.http.get(`${this.baseUrl}getparticuleremprecord/${id}`));
  }

  getAllCountry(){
    return (this.http.get(`${this.baseUrl}getallrecord`));
  }

  postAddEmp(obj:any){
    return (this.http.post(`${this.baseUrl}addrecord`,obj,{
      responseType:'text'
    }));
  }

  updateEmpData(obj:any){
   return (this.http.put(`${this.baseUrl}updateemprecord/${obj.id}`,obj,{
      responseType:'text'
    }));
  }

  deleteEmp(id:any){
    return (this.http.delete(`${this.baseUrl}deleteemprecord/${id}`,{
      responseType:'text'
    }));
  }

}
