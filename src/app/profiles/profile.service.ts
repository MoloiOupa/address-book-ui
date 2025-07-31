import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Profile {
  id: number;
  firstName: string;
  surname: string;
  email: string;
  phone: string;
  profilePicture: string;
  coverLetter: string;
  profileWebsite: string;
}

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private apiUrl = '/api/Profiles';

  constructor(private http: HttpClient) {}

  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.apiUrl);
  }
}
