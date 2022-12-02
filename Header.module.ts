import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './Header-routing.module';
import { HeadComponent } from './Header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PopUpComponent } from 'src/app/pop-up/pop-up.component';
import { MatDividerModule } from '@angular/material/divider';
 

@NgModule({
    declarations: [
        HeadComponent,
        PopUpComponent
    ],
    providers: [],
    bootstrap: [HeadComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatDialogModule,
        MatDividerModule
    ]
})
export class AppModule { }
