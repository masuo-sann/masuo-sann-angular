import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Observable, throwError, ErrorObserver } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { SearchRequest } from '../../interface/search-request';
import { Result } from 'src/app/interface/result';
import { ApiResponse } from 'src/app/interface/api-response';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private collectSearchingWordUri: string = "/api/collect-searching-word!request-searching-word";
  private searchRequestUri: string = "/api/search-request";
  private reportResultUri: string = "/api/report-result";
  
  constructor(private http: HttpClient) { }

  public collectSearchingWord(): Observable<ApiResponse<Result>> {
    console.log("[INFO] collectSearchingWord");
    return this.http.post<ApiResponse<Result>>(this.collectSearchingWordUri, {state: "#"}, httpOptions);
  }

  public searchRequest(searchRequest: SearchRequest): Observable<ApiResponse<null>> {
    console.log("[INFO] searchRequest");
    return this.http.post<ApiResponse<null>>(this.searchRequestUri, searchRequest, httpOptions);
  }

  public reportResult(datastoreId: number): Observable<ApiResponse<null>> {
    console.log("[INFO] reportResult");
    return this.http.post<ApiResponse<null>>(this.reportResultUri, {datastoreId: datastoreId}, httpOptions);
  }


}
