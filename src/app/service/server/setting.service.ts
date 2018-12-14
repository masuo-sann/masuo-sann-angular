import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiResponse } from 'src/app/interface/api-response';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  private checkJobStateUri: string = "/api/dataflow!check-job-state";
  private startDataflowJobUri: string = "/api/dataflow!start";
  private stopDataflowJobUri: string = "/api/dataflow!cancel-all";
  
  constructor(private http: HttpClient) { }

  public checkJobState(): Observable<ApiResponse<null>> {
    console.log("[INFO] checkJobState");
    return this.http.post<ApiResponse<null>>(this.checkJobStateUri, {state: "#"});
  }

  public startDataflowJob(): Observable<ApiResponse<null>> {
    console.log("[INFO] startDataflowJob");
    return this.http.post<ApiResponse<null>>(this.startDataflowJobUri, {state: "#"});
  }

  public stopDataflowJob(): Observable<ApiResponse<null>> {
    console.log("[INFO] stopDataflowJob");
    return this.http.post<ApiResponse<null>>(this.stopDataflowJobUri, {state: "#"});
  }
}


