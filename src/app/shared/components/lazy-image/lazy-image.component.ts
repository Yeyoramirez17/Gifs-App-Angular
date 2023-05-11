import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if(!this.url) throw new Error("Url property is required");
  }

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  onLoad() {
    console.log('Image Loaded');
    this.hasLoaded = true;
  }

}
