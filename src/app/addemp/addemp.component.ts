import { Component, OnInit } from '@angular/core';
import { Empoyee } from '../model/employee';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit{

  addEmp:any=<Empoyee>{};
  allcountries:any[]=[];
  isUpdated:boolean=false;
   

  constructor(private service:HttpService,
              private rauter:Router,
              private rout:ActivatedRoute){}

  ngOnInit(): void {
  
  this.allCountry();
  this.getDataFromUrl();
  }

  allCountry(){
    this.service.getAllCountry()
    .subscribe((response:any)=>{
      // console.log(response);
      this.allcountries=response;
      
    })
    
  }


  onSubmit(){

    if(this.isUpdated){
      //update record
      this.addEmp.updatedBy="sam";
      this.addEmp.updatedDate=Date.now();
      this.service.updateEmpData(this.addEmp)
      .subscribe((response:any)=>{
        // console.log(response);
        this.rauter.navigate(['']);
      });

    }else{   
    this.addEmp.createdBy="Admin";
    this.addEmp.createdDate=Date.now();
    this.addEmp.updatedBy="Admin";
    this.addEmp.updatedDate=Date.now();
  console.log(this.addEmp);
  
  this.service.postAddEmp(this.addEmp)
  .subscribe((response)=>{
    // console.log(response);
    this.rauter.navigate(['']);
  })

    }

  }

  getDataFromUrl(){
    this.rout.paramMap
    .subscribe((param)=>{
      // console.log(param.get("id"));
      this.isUpdated=true;
      this.getParticulerEmpRecordById(param.get("id"));
    })
  }

  getParticulerEmpRecordById(id:any){
     this.service.getEmpById(id)
     .subscribe((response:any)=>{
      // console.log(response);
      this.addEmp=response;
     })
  }

}
