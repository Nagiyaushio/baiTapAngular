import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectiveComponent } from './attribute-directive.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [AttributeDirectiveComponent, NgclassComponent, NgStyleComponent, HighlightDirective],
  exports: [AttributeDirectiveComponent],
  imports: [CommonModule],
})
export class AttributeDirectiveModule {}
