import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetapiService {

  constructor(private _http: HttpClient) { }

  getdata <T>(url: string)

{
  url='https://apisimpsons.fly.dev/api/personajes?limit=200&page=2'
  return this._http.get<T>(url);

}
}


