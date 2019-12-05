import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms';
import { employee } from '../employee';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  register: FormGroup;
  public empList: any;
  constructor(private data: DataService,private fb: FormBuilder) { }

  ngOnInit() {
    this.register = this.fb.group({
      name: new FormControl('',Validators.required),
      position: new FormControl('',Validators.required),
      office: new FormControl('',Validators.required),
      salary: new FormControl('',Validators.required)
    });

    this.data.getemp().subscribe((result: any)=> {
      this.empList = result;
    })
  }

  // add(){
  //   const a = this.register.value;

  //   this.data.addemp(a)
  //   .subscribe((result) => {
  //     alert("inserted!!");
  //   });
  // }

  // /*upd(emp: employee){
  //   this.data.selectedemp = emp;
  // }*/

  // del(_id: string){
  //   if(confirm('sure to delete??') == true){
  //     this.data.delemp(_id).subscribe((res) => {
  //       alert("Deleted");
  //     });
  //   }
  // }

}
