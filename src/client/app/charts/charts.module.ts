import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';

import { Ng2HighchartsModule } from 'ng2-highcharts';

@NgModule({
    imports: [ChartsRoutingModule, CommonModule, SharedModule, Ng2HighchartsModule],
    declarations: [ChartsComponent],
    exports: [ChartsComponent]
})

export class ChartsModule { }
