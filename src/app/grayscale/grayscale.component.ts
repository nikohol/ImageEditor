import { ImageService } from './../services/image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grayscale',
  templateUrl: './grayscale.component.html',
  styleUrls: ['./grayscale.component.css']
})
export class GrayscaleComponent implements OnInit {

  private strength: any;

  constructor(private imageService: ImageService) { }

  private grayscaleFilter = () => {

    for (var i = 0; i < this.imageService.numPixels; i++) {
      this.imageService.pixels[i * 4] = (this.imageService.pixels[i * 4] * 0.2126 / (101 - this.strength)); // Red
      this.imageService.pixels[i * 4 + 1] = (this.imageService.pixels[i * 4 + 1] * 0.7152 / (101 - this.strength)); // Green
      this.imageService.pixels[i * 4 + 2] = (this.imageService.pixels[i * 4 + 2] * 0.0722 / (101 - this.strength)); // Blue
    }

    this.imageService.context.clearRect(0, 0, this.imageService.canvas.width, this.imageService.canvas.height);
    this.imageService.context.putImageData(this.imageService.imageData, 0, 0);

  };

  ngOnInit() {
    this.imageService.functions.grayscaleFilter = this.grayscaleFilter;
  }

}
