import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video/video.component';
import { VideoAddComponent } from './video-add/video-add.component';
import { VideoEditComponent } from './video-edit/video-edit.component';
import { VideoListComponent } from './video-list/video-list.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { VideoReducer } from './state/video.reducer';


import { EffectsModule, Actions } from '@ngrx/effects';

import { VideoEffect} from "./state/video.effect"


  const videoRoutes: Routes = [
    {path: '', component:VideoComponent }
  ]

@NgModule({
  declarations: [
    VideoComponent,
    VideoAddComponent,
    VideoEditComponent,
    VideoListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(videoRoutes),
    StoreModule.forFeature("videos", VideoReducer),
    EffectsModule.forFeature([VideoEffect])
  ]
})
export class VideosModule { }
