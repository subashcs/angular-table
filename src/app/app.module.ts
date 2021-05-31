import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { DetailPanelComponent } from './components/detail-panel/detail-panel.component';
import { MainService } from './services/main.service';
import { FindByKeyValuePipe } from './pipes/find-by-key-value/find-by-key-value.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DetailPanelComponent,
    FindByKeyValuePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
