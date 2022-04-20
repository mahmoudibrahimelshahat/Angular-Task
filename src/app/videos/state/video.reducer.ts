import * as videoActions from "./video.actions";
import { Video } from "../video.model";
import * as fromRoot from "../../state/app-state";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";


export interface VideoState {
  videos: Video[];
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
  videos: VideoState;
}

export const initialState: VideoState = {
    videos: [],
    loading: false,
    loaded: false,
    error: ""
}

export function VideoReducer(state = initialState,
    //videoActions instead video
     action: videoActions.videoActions): VideoState{

        switch(action.type){
            case videoActions.VideoActionTypes.LOAD_VIDEOS: {
                return {
                    ...state,
                    loading: true
                }
            }
            case videoActions.VideoActionTypes.LOAD_VIDEOS_SUCCESS: {
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    videos: action.payload
                }
            }
            case videoActions.VideoActionTypes.LOAD_VIDEOS_FAIL: {
                return {
                    ...state,
                    videos:[],
                    loading: false,
                    loaded: false,
                    error: action.payload
                }
            }
            default: {
                return state
            }
        }
}


// const getVideoFeatureState = createFeatureSelector<VideoState>(
//     "Videos"
//   );
  
// //   export const getVideos= createSelector(
// //     getVideoFeatureState,
// //     videoAdapter.getSelectors().selectAll
// //   );
  
//   export const getVideosLoading = createSelector(
//     getVideoFeatureState,
//     (state: VideoState) => state.loading
//   );
  
//   export const getVideosLoaded = createSelector(
//     getVideoFeatureState,
//     (state: VideoState) => state.loaded
//   );
  
//   export const getError = createSelector(
//     getVideoFeatureState,
//     (state: VideoState) => state.error
//   );
  
// //   export const getCurrentVideoId = createSelector(
// //     getVideoFeatureState,
// //     (state: VideoState) => state.selectedVideoId
// //   );
// //   export const getCurrentVideo = createSelector(
// //     getVideoFeatureState,
// //     getCurrentVideoId,
// //     state => state.entities[state.selectedVideoId]
// //   );