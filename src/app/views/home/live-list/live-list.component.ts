import { Component, OnInit } from '@angular/core';
import {LiveService} from '../../../shared/service/live.service';
import {LiveModel} from '../../../shared/model/live.model';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  livesPrevious: LiveModel[];
  livesNext: LiveModel[];

  constructor(
    public liveService: LiveService,
    public domSanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.getLives();
  }

  getLives() {
    this.liveService.getLivesWithFlag('previous').subscribe(data => {
      this.livesPrevious = data.content; // content is a field from responsepageable model
      console.log(this.livesPrevious);
      this.livesPrevious.forEach(live => {
        live.urlSafe = this.domSanitizer.bypassSecurityTrustResourceUrl(live.liveLink);
      });
    });

    this.liveService.getLivesWithFlag('next').subscribe(data => {
      this.livesNext = data.content; // content is a field from responsepageable model
      console.log(this.livesNext);
      this.livesNext.forEach(live => {
        live.urlSafe = this.domSanitizer.bypassSecurityTrustResourceUrl(live.liveLink);
      });
    });
  }
}
