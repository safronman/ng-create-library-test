import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { HelloComponent } from './hello/hello.component';



@NgModule({
  declarations: [MyLibComponent, HelloComponent],
  imports: [
  ],
  exports: [MyLibComponent]
})
export class MyLibModule { }
