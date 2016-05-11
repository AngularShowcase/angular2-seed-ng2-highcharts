import { join } from 'path';
import { SeedConfig } from './seed.config';
import { InjectableDependency } from './seed.config.interfaces';

export class ProjectConfig extends SeedConfig {
  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    this.APP_TITLE = 'angular2-seed and ng2-highcharts example';
    let additional_deps: InjectableDependency[] = [
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
      { src: 'highcharts/highstock', inject: 'libs' },
      { src: 'highcharts/modules/map', inject: 'libs' },
      { src: 'highcharts/modules/data', inject: 'libs' }
    ];

    const seedDependencies = this.NPM_DEPENDENCIES;

    this.NPM_DEPENDENCIES = seedDependencies.concat(additional_deps);
  }
}
