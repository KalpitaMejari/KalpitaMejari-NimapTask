import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegComponent } from './register.component'
import { MatDialogModule } from '@angular/material/dialog';
import { PopUpComponent } from 'src/app/pop-up/pop-up.component';
import { MatDividerModule } from '@angular/material/divider';
import { AppRoutingModule } from './register-routing.module';
 
@NgModule({
    declarations: [
    RegComponent
    ],
    providers: [],
    bootstrap: [RegComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatDialogModule,
        MatDividerModule
    ]
})
export class AppModule { }
