import { StoreComponent } from './store/store.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';

const routes: Routes = [
  { path: 'store' , component: StoreComponent},
  { path: 'home' , component: HomeComponent},
  {path: 'stores/catalog/:id', component: CatalogComponent},
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: '**' , component: PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents =[StoreComponent,HomeComponent,CatalogComponent,PagenotfoundComponent]
