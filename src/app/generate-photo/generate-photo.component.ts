import { Component, OnInit } from "@angular/core";
import { PhotoFetchingService } from "../photo-fetching.service";

@Component({
  selector: "app-generate-photo",
  templateUrl: "./generate-photo.component.html",
  styleUrls: ["./generate-photo.component.css"]
})
export class GeneratePhotoComponent implements OnInit {
  photoUrl: string;

  constructor(private photoFetching: PhotoFetchingService) {
    this.fetchPhoto();
  }

  ngOnInit(): void {}

  generateNewPhoto() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photoFetching.getPhoto().subscribe(response => {
      this.photoUrl = response.urls.regular;
    });
  }
}
