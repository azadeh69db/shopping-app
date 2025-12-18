import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [MatInputModule,ReactiveFormsModule ,MatButtonModule
    ,MatFormFieldModule
  ],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css'
})
export class BillingComponent implements OnInit{

  @Output() formValid = new EventEmitter<FormGroup>();

  billingForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // تعریف فرم و فیلدها با اعتبارسنجی
    this.billingForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      country: ['', Validators.required]
    });
  }

  // گتتر کوتاه برای دسترسی به کنترل‌ها در HTML
  get f() {
    return this.billingForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.billingForm.valid) {
      // وقتی فرم معتبر است، داده‌ها را به پدر می‌فرستیم
      this.formValid.emit(this.billingForm);
      console.log(this.billingForm.value);
    }
      else {
      console.log('Form Invalid');
    }

    }
  }


 
  


