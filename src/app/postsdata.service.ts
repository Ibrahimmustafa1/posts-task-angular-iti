import { HttpClient } from '@angular/common/http';
import { Iposts } from './iposts';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsdataService {
  private postsurl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private _http: HttpClient) {}
  GetPosts(): Observable<Iposts[]> {
    return this._http.get<Iposts[]>(this.postsurl);
  }
  GetPostById(id: number): Observable<Iposts> {
    return this._http.get<Iposts>(`${this.postsurl}/${id}`);
  }
}
