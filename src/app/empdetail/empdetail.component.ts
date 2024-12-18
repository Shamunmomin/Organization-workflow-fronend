import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { HttpService } from '../http.service';
import { Empoyee } from '../model/employee';

@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.css']
})
export class EmpdetailComponent  implements OnInit{

  empObj:any=<Empoyee>{};

  constructor(private route:ActivatedRoute,
          private service:HttpService
  ){}

  ngOnInit(): void {
    this.getDataFromUrl();
  }

  getDataFromUrl(){
     this.route.paramMap
     .subscribe((para)=>{
      // console.log(para.get("id"));
      this.getParticularEmpDetail(para.get("id"));
     })
  }

  getParticularEmpDetail(id:any){
    this.service.getEmpById(id)
    .subscribe((response)=>{
      // console.log(response);  
      this.empObj=response;
    })
  }

}
