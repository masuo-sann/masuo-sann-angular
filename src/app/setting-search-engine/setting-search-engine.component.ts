import { Component, OnInit } from '@angular/core';
import { SettingService } from "../service/server/setting.service";

@Component({
  selector: 'app-setting-search-engine',
  templateUrl: './setting-search-engine.component.html',
  styleUrls: ['./setting-search-engine.component.css']
})
export class SettingSearchEngineComponent implements OnInit {
  jobState: string;
  message: string;
  isActive: boolean;
  isLoaded: boolean = false;
  
  constructor(public settingService: SettingService) { }

  ngOnInit() {
    this.checkJobState();
  }

  checkJobState(): void {
    this.settingService.checkJobState().subscribe(
      resp => {
        this.jobState = resp.job_state;
        if(this.jobState === 'NO_ACTIVE_JOB') {
          this.isActive = false;
          this.message = '停止中です'
        } else if (this.jobState === 'RUNNING') {
          this.isActive = true;
          this.message = '検索中です'
        } else if (this.jobState === 'READY') {
          this.isActive = true;
          this.message = '検索できます'
        }
        this.isLoaded = true;
      },
      error => console.error(error)
    )
  }

  start(): void {
    this.settingService.startDataflowJob().subscribe(
      resp => {
        console.log(resp.result);
        this.checkJobState();
      }
    )
  }

  stop(): void {
    this.settingService.stopDataflowJob().subscribe(
      resp => {
        console.log(resp.result);
        this.checkJobState();
      }
    )
  }

}
