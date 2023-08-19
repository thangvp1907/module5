import {Injectable} from '@angular/core';
import {Category} from '../model/category';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private API_URL = 'http://localhost:3000/categories';


  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Category[]>(this.API_URL);
  }

  save(category) {
    return this.http.post<Category>(this.API_URL, category);
  }

  findById(id: number) {
    return this.http.get<Category>(this.API_URL + '/' + id);
  }

  updateCategory(id: number, category: Category) {
    return this.http.patch<Category>(this.API_URL + '/' + category.id, category);
  }

  deleteCategory(id: number) {
    return this.http.delete<Category>(this.API_URL + '/' + id);
  }
}
