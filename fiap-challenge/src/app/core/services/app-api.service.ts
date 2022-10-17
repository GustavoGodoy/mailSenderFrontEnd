import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, dematerialize, first, map, materialize, mergeMap, Observable, of, take, throwError } from 'rxjs';
import { Emails } from 'src/app/interfaces/emails';
import { HeaderList } from 'src/app/interfaces/header-list.interface';
import { Products } from 'src/app/interfaces/products';
import { environment } from 'src/environments/environment';
import { ConectorApiService } from './conector-api/conector-api.service';

export class User {
  constructor(
    public status: string
  ) { }
}
@Injectable({
  providedIn: 'root',
})
export class AppApiService {
  constructor(private conectorApi: ConectorApiService,
    private http: HttpClient) { }

  getAllProducts(): Observable<Products[]> {
    return this.http.get<Products[]>('http://localhost:8080/api/produto')
  }

  postProduct(product: Products) {
    return this.conectorApi.postApiByHttpClient('http://localhost:8080/api/produto', product)
    0
  }

  getAllEmails() {
    let username: string = 'aluno'
    let password: string = 'fiapsecurity'
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(username + ':' + password)
      }
    )
    return this.http.get<Emails[]>(
      'http://localhost:7070/v1/enviado',{headers}

    )
  }

  getByDate(date: string) {
    let username: string = 'aluno'
    let password: string = 'fiapsecurity'
    const headers = new HttpHeaders({
        Authorization: 'Basic ' + btoa(username + ':' + password)})

    return this.http.get<Emails[]>(
      `http://localhost:7070/v1/enviado/data/${date}`,{headers}
    )
  }
}
