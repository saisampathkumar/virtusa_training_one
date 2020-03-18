import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ProductsModule } from './products/products.module';
// import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';

import { AppRoutingModule } from './app-routing.module';
import { RouteErrorComponent } from './error/route.error.component';
import { AuthService } from './auth.service';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ProductsModule,
    // HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AdminComponent,
    RouteErrorComponent,
  ],

  providers: [ AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
