import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
    ngOnInit(): void {
      this.form = this.formBuilder.group({
        childInput1: ['',Validators.required],
        childInput2: ['',Validators.required]
        
      });
    }
  
  

}

