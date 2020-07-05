import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponsePageableModel} from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  apiUrl = 'http://localhost:8080/lives';

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public getLivesWithFlag(flag: string): Observable<ResponsePageableModel> {
    return this.httpClient.get<ResponsePageableModel>(this.apiUrl + '?flag=' + flag);
  }
}
