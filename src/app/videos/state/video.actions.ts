import { Action } from "@ngrx/store";

import { Update } from "@ngrx/entity";

import { Video } from "../video.model";

export enum VideoActionTypes {
  LOAD_VIDEOS = "[Video] Load Video",
  LOAD_VIDEOS_SUCCESS = "[Video] Load Video Success",
  LOAD_VIDEOS_FAIL = "[Video] Load Videos Fail",
  LOAD_VIDEO = "[Video] Load Video",
  LOAD_VIDEO_SUCCESS = "[Video] Load Video Success",
  LOAD_VIDEO_FAIL = "[Video] Load Video Fail",
  CREATE_VIDEO = "[Video] Create Video",
  CREATE_VIDEO_SUCCESS = "[Video] Create Video Success",
  CREATE_VIDEO_FAIL = "[Video] Create Video Fail",
  UPDATE_VIDEO = "[Video] Update Video",
  UPDATE_VIDEO_SUCCESS = "[Video] Update Video Success",
  UPDATE_VIDEO_FAIL = "[Video] Update Video Fail",
  DELETE_VIDEO = "[Video] Delete Video",
  DELETE_VIDEO_SUCCESS = "[Video] Delete Video Success",
  DELETE_VIDEO_FAIL = "[Video] Delete Video Fail"
}

export class LoadVideos implements Action {
  readonly type = VideoActionTypes.LOAD_VIDEOS;
}

export class LoadVideosSuccess implements Action {
  readonly type = VideoActionTypes.LOAD_VIDEOS_SUCCESS;

  constructor(public payload: Video[]) {}
}

export class LoadVideosFail implements Action {
  readonly type = VideoActionTypes.LOAD_VIDEOS_FAIL;

  constructor(public payload: string) {}
}



export class LoadVideo implements Action {
  readonly type = VideoActionTypes.LOAD_VIDEOS;

  constructor(public payload: number) {}
}

export class LoadVideoSuccess implements Action {
  readonly type = VideoActionTypes.LOAD_VIDEOS_SUCCESS;

  constructor(public payload: Video) {}
}

export class LoadVideoFail implements Action {
  readonly type = VideoActionTypes.LOAD_VIDEOS_FAIL;

  constructor(public payload: string) {}
}

export class CreateVideo implements Action {
  readonly type = VideoActionTypes.CREATE_VIDEO;

  constructor(public payload: Video) {}
}

export class CreateVideoSuccess implements Action {
  readonly type = VideoActionTypes.CREATE_VIDEO_SUCCESS;

  constructor(public payload: Video) {}
}

export class CreateVideoFail implements Action {
  readonly type = VideoActionTypes.CREATE_VIDEO_FAIL;

  constructor(public payload: string) {}
}

export class UpdateVideo implements Action {
  readonly type = VideoActionTypes.UPDATE_VIDEO;

  constructor(public payload: Video) {}
}

export class UpdateVideoSuccess implements Action {
  readonly type = VideoActionTypes.UPDATE_VIDEO_SUCCESS;

  constructor(public payload: Update<Video>) {}
}

export class UpdateVideoFail implements Action {
  readonly type = VideoActionTypes.UPDATE_VIDEO_FAIL;

  constructor(public payload: string) {}
}

export class DeleteVideo implements Action {
  readonly type = VideoActionTypes.DELETE_VIDEO;

  constructor(public payload: number) {}
}

export class DeleteVideoSuccess implements Action {
  readonly type = VideoActionTypes.DELETE_VIDEO_SUCCESS;

  constructor(public payload: number) {}
}

export class DeleteVideoFail implements Action {
  readonly type = VideoActionTypes.DELETE_VIDEO_FAIL;

  constructor(public payload: string) {}
}








// Action here error 
export type videoActions =
  | LoadVideos
  | LoadVideosSuccess
  | LoadVideosFail 
  | LoadVideos
  | LoadVideosSuccess
  | LoadVideosFail
  | CreateVideo
  | CreateVideoSuccess
  | CreateVideoFail
  | UpdateVideo
  | UpdateVideoSuccess
  | UpdateVideoFail
  | DeleteVideo
  | DeleteVideoSuccess
  | DeleteVideoFail;