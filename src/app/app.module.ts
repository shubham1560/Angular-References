import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


//Every component has to be added in parent to get the directive to be used
import { ProductListComponent } from '././Product/Product-list.component'
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent} from './shared/star.component'
import { ProductService } from './Product/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './Product/product-detail.component';
import { RouterModule, Router } from '@angular/router';
import { WelcomeComponent } from './Product/welcome.component';
import { FraudarticlesComponent } from './Product/fraudarticles.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
    FraudarticlesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'articles', component: FraudarticlesComponent},
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
