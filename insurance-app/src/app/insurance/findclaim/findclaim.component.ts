import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormControl} from '@angular/forms';

@Component({
  selector: 'app-findclaim',
  templateUrl: './findclaim.component.html',
  styleUrls: ['./findclaim.component.css']
})
export class FindclaimComponent implements OnInit {

  constructor() { }

  form:FormGroup=new FormGroup({
    $key:new FormControl(null),
    patientName:new FormControl(''),
    patientDOB:new FormControl(''),
    patientAddress:new FormControl(''),
    policyNumber :new FormControl(''),
    coverageFrom:new FormControl(''),
    providerName:new FormControl(''),
    treatingDoctor:new FormControl(''),
    providerAddress:new FormControl(''),
    dateOfAdmission :new FormControl(''),
    dateOfDischarge:new FormControl(''),
    illnessDiseases:new FormControl(''),
    claimedAmount:new FormControl('')

  });

  ngOnInit(): void {
  }

}
