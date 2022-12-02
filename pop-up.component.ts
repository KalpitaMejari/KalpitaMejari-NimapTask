import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegComponent } from 'src/register/register.component';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit{
  title = 'NimapTask';
 
  constructor(private ref: MatDialog){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  Profile(){
    this.ref.open(RegComponent);
  }
}
