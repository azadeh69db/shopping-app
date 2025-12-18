import { Component, EventEmitter, Output } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { FormBuilder,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-paypalform',
  standalone: true,
  imports: [MatInputModule,MatRadioModule,
    MatSelectModule,CommonModule,MatFormFieldModule
    ,MatButtonModule,ReactiveFormsModule
    
  ],
  templateUrl: './paypalform.component.html',
  styleUrl: './paypalform.component.css'
})
export class PaypalformComponent {
  paymentForm!: FormGroup;
  submitted = false;

  @Output() paymentChanged = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.paymentForm = this.fb.group({
      paymentMethod: ['', Validators.required],
      shippingMethod:['', Validators.required],
    });

    // وقتی کاربر انتخاب را تغییر می‌دهد، emit کن
    this.paymentForm.get('paymentMethod')?.valueChanges.subscribe(value => {
      this.paymentChanged.emit(value);
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.paymentForm.invalid) return;

    console.log('روش پرداخت انتخاب شده:', this.paymentForm.value.paymentMethod);
  }

  get f() {
    return this.paymentForm.controls;
  }
}



// export class PaypalformComponent {
// paymentForm!: FormGroup;
//   submitted = false;

//   constructor(private fb: FormBuilder) {}  // ✅ inject فرم بیلدر

//   ngOnInit() {
//     this.paymentForm = this.fb.group({
//       shippingMethod: ['', Validators.required],

//       paymentMethod: ['', Validators.required]
//     });
//   }

//   get f() {
//     return this.paymentForm.controls;
//   }

//   onSubmit() {
//     this.submitted = true;

//     if (this.paymentForm.invalid) {
//       return;
//     }

//     console.log(this.paymentForm.value);
//   }
// }


