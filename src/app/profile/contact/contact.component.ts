import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
  export class ContactComponent implements OnInit {
 
    submitted = false;

    form !: FormGroup;
  
    constructor(
      private formBuilder: FormBuilder,
      private toastr: ToastrService
    ){}
  
    ngOnInit() {
      this.form = this.formBuilder.group({
        fullname: ['', Validators.required ],
        message: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(500), ] ],
        subject: ['', Validators.required],
        email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        phone: ['', Validators.required],
  
      });
    }
       onSubmit() {
        this.submitted = true;
        if (this.form.valid) {
          this.toastr.success('Succéss!', 'Message envoyer avec succéss!');
          window.location.reload()
        }
        else{
          return;
        }
      } 


        get f(): { [key: string]: AbstractControl } {
          return this.form.controls;
        }
}
