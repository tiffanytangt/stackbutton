import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component'
import { SubNavComponent } from './components/sub-nav/sub-nav.component'
import { LeftNavComponent } from './components/left-nav/left-nav.component'
import { RightDrawerComponent } from './components/right-drawer/right-drawer.component'
import { ProjectListComponent } from './containers/project-list/project-list.component'
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component'

const appRoutes: Routes = [
  {
    path: 'projects',
    component: ProjectListComponent,
    data: { title: 'StackButton - Projects' }
  },
  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [BrowserModule, MaterialModule, FlexLayoutModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    AppComponent,
    TopNavComponent,
    SubNavComponent,
    LeftNavComponent,
    RightDrawerComponent,
    ProjectListComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}
