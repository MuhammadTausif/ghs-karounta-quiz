import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAuthService } from './my-auth.service';
import { MyAuthGuard } from './my-auth.guard';
import { NotifyService } from './notify.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [MyAuthService, MyAuthGuard, NotifyService]
})
export class CoreModule { }
