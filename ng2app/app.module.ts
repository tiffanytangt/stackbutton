import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component'
import { LeftNavComponent } from './components/left-nav/left-nav.component'
import { RightDrawerComponent } from './components/right-drawer/right-drawer.component'
import { ProjectListComponent } from './components/project-list/project-list.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'

const appRoutes: Routes = [
  {
    path: '',
    component: ProjectListComponent,
    data: { title: 'StackButton - Projects' }
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [BrowserModule, MaterialModule.forRoot(), FlexLayoutModule.forRoot(), RouterModule.forRoot(appRoutes)],
  declarations: [
    AppComponent,
    TopNavComponent,
    LeftNavComponent,
    RightDrawerComponent,
    ProjectListComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}
