import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
