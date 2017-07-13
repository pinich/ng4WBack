import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule, MdInputModule, MaterialModule } from '@angular/material';

@NgModule({
  imports: [MaterialModule ,MdButtonModule, MdCheckboxModule, MdInputModule],
  exports: [MaterialModule ,MdButtonModule, MdCheckboxModule , MdInputModule],
})
export class ngMaterialModule { }