/// <reference path="../../../tools/typings/tsd/highcharts/highcharts.d.ts" />
import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
	selector: '[ng2-highcharts]'
})
export class Ng2Highcharts {
	hostElement: ElementRef;
	chart: HighchartsChartObject;
	renderTo: HighchartsOptions;
	constructor(ele: ElementRef) {
		this.hostElement = ele;
		this.renderTo = {
			chart: {
				renderTo: this.hostElement.nativeElement
			}
		};
	}

	@Input('ng2-highcharts') set options(opt:HighchartsOptions) {
		if(!opt) {
			console.log('No valid options...');
			console.log(opt);
			return;
		}
		if(opt.series || opt.data) {
			if(this.chart) {
				this.chart.destroy();
			}
			opt = Object.assign(opt, this.renderTo);
			this.chart = new Highcharts.Chart(opt);
		} else {
			console.log('No valid options...');
			console.dir(opt);
		}
	}
}
