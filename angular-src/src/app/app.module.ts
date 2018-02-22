import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VisualizationComponent } from './visualization/visualization.component'
import { RouterModule,Routes } from '@angular/router';
import { Router } from "@angular/router";
import { RequestService } from "./services/request.service";
import { HttpModule } from '@angular/http';


const appRoutes: Routes = [
  { path: 'dashboard', component:DashboardComponent },
  { path: 'headlines', component: HeadlinesComponent },
  { path: 'analysis', component: AnalysisComponent },
  { path: 'visualization', component: VisualizationComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    ToolbarComponent,
    HeadlinesComponent,
    AnalysisComponent,
    VisualizationComponent,
    DashboardComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
