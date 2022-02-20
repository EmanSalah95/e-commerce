import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
// import {MAT_DIALOG_DATA}from '@angular/material'
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogComponent implements OnInit {

  constructor(
    // @inject(MAT_DIALOG_DATA) public data:any
    ) { }

  ngOnInit(): void {
  }

}
