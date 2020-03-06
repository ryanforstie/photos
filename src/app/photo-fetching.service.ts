import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { pluck } from "rxjs/operators";

interface PhotoFetchingResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: "root"
})
export class PhotoFetchingService {
  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http.get<PhotoFetchingResponse>(
      "https://api.unsplash.com/photos/random",
      {
        headers: {
          Authorization: "Client-ID l6Cxhg0d8K5og7R5tsFb4ZEB0c_JXZpFhNk-zgC0nRw"
        }
      }
    );
  }
}
