import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { WordSearch } from 'src/app/interface/word-search';
import { ApiResponse } from 'src/app/interface/api-response';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private countHistoryUri: string = "/api/history-search!count-history";
  private collectHistoryListUri: string = "/api/history-search!collect-history-list";
  
  constructor(private http: HttpClient) { }

  public countHistory(): Observable<ApiResponse<number>> {
    console.log("[INFO] countHistory");
    return this.http.post<ApiResponse<number>>(this.countHistoryUri, {state: "#/result"});
  }

  public collectHistoryList(): Observable<ApiResponse<WordSearch[]>> {
    console.log("[INFO] collectHistoryList");
    return this.http.post<ApiResponse<null>>(this.collectHistoryListUri, null);
  }
}
