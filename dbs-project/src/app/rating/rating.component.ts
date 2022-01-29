import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
 public dbsForm:FormGroup;

  constructor(private formBuilder: FormBuilder,
    private http:HttpClient,
    private router: Router,) { }

  
  ngOnInit(){
    this.initializeForm();
  }
  initializeForm() {
    this.dbsForm=this.formBuilder.group({
      h1 : new FormControl(''),
      m1: new FormControl(''),
      l1: new FormControl(''),
      h2: new FormControl(''),
      m2: new FormControl(''),
      l2: new FormControl(''),
      h21: new FormControl(''),
      h3: new FormControl(''),
      m3: new FormControl(''),
      l3: new FormControl(''),
      h31: new FormControl(''),
      h4: new FormControl(''),
      m4: new FormControl(''),
      l4: new FormControl(''),
      h41: new FormControl(''),
    })
  }

  onSubmit(){
    const obj={
      country:"india",
      formData:this.dbsForm.value
    };
    console.log(obj);
    this.http.post("http://localhost:8080/",JSON.stringify(obj),{headers: {'Content-Type': 'application/json'}}).subscribe(data=>{
      console.log(obj);
      this.router.navigate(['/result']);
    });
  }
  
}
