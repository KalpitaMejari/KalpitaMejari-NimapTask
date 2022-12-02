import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadComponent } from 'src/Header/Header.component';
import { PopUpComponent } from 'src/app/pop-up/pop-up.component';

const routes: Routes = [
  {path:'', component : HeadComponent},
  {path:'', component : PopUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
