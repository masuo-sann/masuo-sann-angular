import { Injectable } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  /**
   * getAnalyseOption
   
  */
  public getAnalyseOption(sentiment: boolean, entity: boolean): string {
    if(sentiment && entity){
      return "BOTH";
    } else if(sentiment && !entity){
      return "ONLY_SENTIMENT";
    } else if(!sentiment && entity){
      return "ONLY_ENTITY";
    } else {
      return "NONE";
    }
  };
}
