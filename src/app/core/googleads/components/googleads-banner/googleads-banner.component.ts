import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { GOOGLE_ADS_CONSTS } from '../../google-ads-constants';

@Component({
  selector: 'app-googleads-banner',
  templateUrl: './googleads-banner.component.html',
  styleUrls: ['./googleads-banner.component.scss']
})
export class GoogleadsBannerComponent implements OnInit {

  @Input() slot = null;
  adsClientId: string = '';
  layoutKey: string = '';
  format: string = 'fluid';
  style: string = 'display:block';

  
  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    this.adsClientId = GOOGLE_ADS_CONSTS.adsClientId;
  }

  ngAfterViewInit() {
    const script = this.document.createElement('script');
    script.async = true;
    script.src= 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8502228675682667';
    script.crossOrigin = 'anonymous';
    this.document.querySelector('body')?.appendChild(script);
    const script2 = this.document.createElement('script');
    script2.textContent = '(adsbygoogle = window.adsbygoogle || []).push({});';
    this.document.querySelector('body')?.appendChild(script2);
  }

}
