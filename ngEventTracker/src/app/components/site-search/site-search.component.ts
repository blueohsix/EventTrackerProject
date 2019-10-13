import { Component, OnInit } from '@angular/core';
import { Site } from 'src/app/models/site';
import { SiteService } from 'src/app/services/site.service';
import { NgForm } from '@angular/forms';
import { stringify } from 'querystring';
import { format } from 'url';

@Component({
  selector: 'app-site-search',
  templateUrl: './site-search.component.html',
  styleUrls: ['./site-search.component.css']
})
export class SiteSearchComponent implements OnInit {
sites: Site[] = [];
newSite = new Site();
modifiedSite = null;
selected = null;
danger: boolean;


  constructor(private siteService: SiteService) { }

  ngOnInit() {
    this.reload();
  }

  displaySite(site: Site) {
    this.selected = site;
  }
  editForm() {
    this.modifiedSite = this.selected;
  }
  addForm() {
    this.newSite = new Site();
  }

  reload() {
    this.newSite = null;
    this.siteService.index().subscribe(
      lifeIsGood => {
        this.sites = lifeIsGood;
        console.log(this.sites);

      },
      whenThingsGoBad => {
        console.error('error in reload()');
      }
    );
  }
  addSite(form: NgForm) {
    this.newSite.siteOwner = form.value.siteOwner;
    this.newSite.siteName = form.value.siteName;
    this.newSite.siteNumber = form.value.siteNumber;
    this.newSite.towerType = form.value.towerType;
    this.newSite.towerHeight = form.value.towerHeight;
    this.newSite.imageUrl = form.value.imageUrl;
    this.newSite.longitude = form.value.longitude;
    this.newSite.latitude = form.value.latitude;
    console.log(this.newSite);

    this.siteService.create(this.newSite).subscribe(
      lifeIsGood => {
        this.reload();
      },
      whenThingsGoBad => {
        console.error('error in addSite()');
      }
    );
    form.reset();
    this.newSite = null;
  }
  deleteSite(id: number) {
    console.log(id);
    this.siteService.destroy(id).subscribe(
      lifeIsGood => {
        this.reload();
      },
      whenThingsGoBad => {
        console.error('error in deleteSite()');
      }
    );
  }
  updateSite() {
    this.siteService.update(this.modifiedSite).subscribe(
      lifeIsGood => {
        this.modifiedSite = this.modifiedSite;
      },
      whenThingsGoBad => {
        console.error('error in updateSite()');
      }
    );
    this.selected = this.modifiedSite;
    this.modifiedSite = null;
  }
}
