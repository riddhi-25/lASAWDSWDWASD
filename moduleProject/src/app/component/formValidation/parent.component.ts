import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ChildComponent } from "./child.component";


@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',

})

export class parentComponent implements OnInit, AfterViewInit{
  isDisabled = true;
    parentForm!: FormGroup;
    @ViewChild(ChildComponent) childComp!:ChildComponent;
    constructor(private formBuilder: FormBuilder) {}
      
    ngOnInit(): void {
        this.parentForm = this.formBuilder.group({
          mainInput1: ['',Validators.required],
          mainInput2: ['',Validators.required]
        });
      }
 
      ngAfterViewInit(): void {
        this.parentForm.addControl('childForm', this.childComp.form);
        
        // this.comp.form.setParent(this.pForm);
    
        this.parentForm.statusChanges.subscribe(status => {
          if (status === 'VALID') {
            this.isDisabled = false;
          } else {
            this.isDisabled = true;
          }
        });
      }

  }
