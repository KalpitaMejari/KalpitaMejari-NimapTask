import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../app/pop-up/pop-up.component';


@Component({
  selector: 'app-head',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeadComponent implements OnInit {
  title = 'NimapTask';
 
  constructor(private ref: MatDialog){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  openDialog(){
    this.ref.open(PopUpComponent);
  }

}