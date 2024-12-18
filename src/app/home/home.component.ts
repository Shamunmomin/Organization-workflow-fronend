import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  empData:any[]=[];
  
  filtername:string='';

  isRadioClick:boolean=false;

  id!:any;

  constructor(private service:HttpService,
              private router:Router
  ){}

  ngOnInit(): void {
    this.getDataFromDackend();
  }

  getDataFromDackend(){
     this.service.getAllEmp()
     .subscribe((response:any)=>{
       console.log(response);

       this.empData=response;
     })
  }

  onRadioButton(id:any){
      this.isRadioClick=true;
      this.id=id;
  }

  onUpdate(){
    if(this.isRadioClick){
      //update employee logic
      this.router.navigate(['/updateEmp',this.id]);
    }else{
      alert("Plaese Select Employee To Be Update");
    }
  }
  onDelete(){
    if(this.isRadioClick){
      //Delete employee logic
      this.service.deleteEmp(this.id)
      .subscribe((response)=>{
        console.log(response);
        this.getDataFromDackend();
      })
     
    }else{
      alert("Plaese Select Employee To Be Delete");
    }
  }
}
