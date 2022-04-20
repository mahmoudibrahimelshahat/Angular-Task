import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as videoActions from "../state/video.actions";
import { Video } from "../video.model";
import { VideoService } from "../video.service";

@Injectable()
export class VideoEffect {
  constructor(
    private actions$: Actions,
    private videoService:VideoService ,
  ) {}

  @Effect()
  loadVideos$: Observable<Action> = this.actions$.pipe(
    ofType<videoActions.LoadVideos>(
      videoActions.VideoActionTypes.LOAD_VIDEOS
    ),
    mergeMap((action: videoActions.LoadVideos) =>
      this.videoService.getVideos().pipe(
        map(
          (videos: Video[]) =>
            new videoActions.LoadVideosSuccess(videos)
        ),
        catchError(err => of(new videoActions.LoadVideosFail(err)))
      )
    )
  );

//   @Effect()
//   loadVideos$: Observable<Action> = this.actions$.pipe(
//     ofType<videoActions.LoadVideos>(
//         videoActions.VideoActionTypes.LOAD_VIDEOS
//     ),
//     mergeMap((action: videoActions.LoadVideos) =>
//       this.videoService.getCustomerById(action.payload).pipe(
//         map(
//           (video: Video) =>
//             new videoActions.LoadVideosSuccess(video)
//         ),
//         catchError(err => of(new videoActions.LoadVideosFail(err)))
//       )
//     )
//   );

//   @Effect()
//   createCustomer$: Observable<Action> = this.actions$.pipe(
//     ofType<customerActions.CreateCustomer>(
//       customerActions.CustomerActionTypes.CREATE_CUSTOMER
//     ),
//     map((action: customerActions.CreateCustomer) => action.payload),
//     mergeMap((customer: Customer) =>
//       this.customerService.createCustomer(customer).pipe(
//         map(
//           (newCustomer: Customer) =>
//             new customerActions.CreateCustomerSuccess(newCustomer)
//         ),
//         catchError(err => of(new customerActions.CreateCustomerFail(err)))
//       )
//     )
//   );

//   @Effect()
//   updateCustomer$: Observable<Action> = this.actions$.pipe(
//     ofType<customerActions.UpdateCustomer>(
//       customerActions.CustomerActionTypes.UPDATE_CUSTOMER
//     ),
//     map((action: customerActions.UpdateCustomer) => action.payload),
//     mergeMap((customer: Customer) =>
//       this.customerService.updateCustomer(customer).pipe(
//         map(
//           (updateCustomer: Customer) =>
//             new customerActions.UpdateCustomerSuccess({
//               id: updateCustomer.id,
//               changes: updateCustomer
//             })
//         ),
//         catchError(err => of(new customerActions.UpdateCustomerFail(err)))
//       )
//     )
//   );

//   @Effect()
//   deleteCustomer$: Observable<Action> = this.actions$.pipe(
//     ofType<customerActions.DeleteCustomer>(
//       customerActions.CustomerActionTypes.DELETE_CUSTOMER
//     ),
//     map((action: customerActions.DeleteCustomer) => action.payload),
//     mergeMap((id: number) =>
//       this.customerService.deleteCustomer(id).pipe(
//         map(() => new customerActions.DeleteCustomerSuccess(id)),
//         catchError(err => of(new customerActions.DeleteCustomerFail(err)))
//       )
//     )
//   );
}