import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Video } from "./video.model";

@Injectable({
  providedIn: "root"
})
export class VideoService {
  private videosUrl = "https://signal.creatbots.com/";

  constructor(private http: HttpClient) {}

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.videosUrl);
  }

  // getVideoById(payload: number): Observable<Video> {
  //   return this.http.get<Video>(`${this.videosUrl}/${payload}`);
  // }

  // createVideo(payload: Video): Observable<Video> {
  //   return this.http.post<Video>(this.videosUrl, payload);
  // }

  // updateVideo(video: Video): Observable<Video> {
  //   return this.http.patch<Video>(
  //     `${this.videosUrl}/${video.id}`,
  //     video
  //   );
  // }

  // deleteVideo(payload: number) {
  //   return this.http.delete(`${this.videosUrl}/${payload}`);
  // }
}