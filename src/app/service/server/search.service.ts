import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { SearchRequest } from '../../interface/search-request';
import { WordSearch } from 'src/app/interface/word-search';
import { ApiResponse } from 'src/app/interface/api-response';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private collectSearchingWordUri: string = "/api/collect-searching-word!request-searching-word";
  private searchRequestUri: string = "/api/search-request";
  private reportResultUri: string = "/api/report-result";
  
  constructor(private http: HttpClient) { }

  public collectSearchingWord(): Observable<ApiResponse<WordSearch[]>> {
    console.log("[INFO] collectSearchingWord");
    return this.http.post<ApiResponse<WordSearch[]>>(this.collectSearchingWordUri, {state: "#"});
  }

  public searchRequest(searchRequest: SearchRequest): Observable<ApiResponse<WordSearch[]>> {
    console.log("[INFO] searchRequest");
    return this.http.post<ApiResponse<null>>(this.searchRequestUri, searchRequest);
  }

  public reportResult(datastoreId: number): Observable<ApiResponse<null>> {
    console.log("[INFO] reportResult");
    return this.http.post<ApiResponse<null>>(this.reportResultUri, {datastoreId: datastoreId});
  }
}
