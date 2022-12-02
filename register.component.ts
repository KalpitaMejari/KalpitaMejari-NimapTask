import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-reg',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegComponent implements OnInit {
  title = 'NimapTask';
 
  constructor(private ref: MatDialog){}
  ngOnInit(): void {
   
  }
 

}