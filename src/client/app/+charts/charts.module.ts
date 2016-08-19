import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ChartsComponent } from './charts.component';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [ChartsComponent],
    exports: [ChartsComponent]
})

export class ChartsModule { }