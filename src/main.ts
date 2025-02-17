import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

import {HeaderComponent} from './app/header/header.component';
import { TasksComponent } from './app/tasks/tasks.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

bootstrapApplication(HeaderComponent)

