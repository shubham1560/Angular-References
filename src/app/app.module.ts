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


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
