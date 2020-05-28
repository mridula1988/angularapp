import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categories } from 'src/app/models/categories';
import { Observable } from 'rxjs';
import { categoriesUrl } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categoriesUrl: string = '';
  constructor(private http: HttpClient) {
    this.categoriesUrl = categoriesUrl;
  }

  getCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(categoriesUrl);
  }
}
