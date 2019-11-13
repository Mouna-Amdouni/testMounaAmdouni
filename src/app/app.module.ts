import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import{FormsModule} from '@angular/forms';
import { TestComponent } from './test/test.component';
import { MeubleslistComponent } from './test/meubleslist/meubleslist.component';
import { MeubleComponent } from './test/meuble/meuble.component'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MeubleslistComponent,
    MeubleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
