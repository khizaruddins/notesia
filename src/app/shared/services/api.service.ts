import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public supabase: SupabaseClient = createClient(
    environment.supabaseCreds.url,
    environment.supabaseCreds.apiKey
  );
  constructor(private httpClient: HttpClient) {}

  async get(table: string, column: string) {
    const { data, error } = await this.supabase.from(table).select(column);
    if (error) {
      return throwError(error);
    }
    return data;
  }
  put(url: string): Observable<any> {
    return this.httpClient.put(url, '');
  }
  post(url: string, data: any): Observable<any> {
    return this.httpClient.post(url, data);
  }
  delete(url: string): Observable<any> {
    return this.httpClient.delete(url);
  }
}
