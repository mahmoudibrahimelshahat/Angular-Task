import { Component, OnInit } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { Observable } from "rxjs";
import * as videoActions from "../state/video.actions";
import * as fromVideo from "../state/video.reducer";
import { Video } from "../video.model";

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videos:any;

  constructor(private store:Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(new videoActions.LoadVideos)
    this.store.subscribe(state => (this.videos = state.videos.videos))
  }

}
