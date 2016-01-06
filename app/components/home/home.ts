import {Component, View} from 'angular2/core';
import {Ng2Highcharts} from 'ng2-highcharts/ng2-highcharts';

@Component({
	selector: 'home',
	properties: ['chartOptions']
})
@View({
	templateUrl: './components/home/home.html',
	styleUrls: ['./components/home/home.css'],
	directives: [Ng2Highcharts]
})
export class HomeCmp {
	chartOptions: Object;
	constructor() {
		this.chartOptions = {
			chart: {
				type: 'bar'
			},
			title: {
				text: 'Fruit Consumption'
			},
			xAxis: {
				categories: ['Apples', 'Bananas', 'Oranges']
			},
			yAxis: {
				title: {
					text: 'Fruit eaten'
				}
			},
			series: [{
				name: 'Jane',
				data: [1, 0, 4]
			}, {
					name: 'John',
					data: [5, 7, 3]
				}]
		};
	}
}
