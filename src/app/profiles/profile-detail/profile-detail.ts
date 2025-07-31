import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProfileService, Profile } from '../profile.service';

@Component({
  selector: 'app-profile-detail',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './profile-detail.html',
  styleUrls: ['./profile-detail.scss']
})
export class ProfileDetail implements OnInit {
  profiles: Profile[] = [];
  currentIndex = 0;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    console.log('ProfileDetail ngOnInit');
    this.profileService.getProfiles().subscribe(data => {
      console.log('Profiles fetched:', data);
      this.profiles = data;
      this.currentIndex = 0;
    });
  }

  get currentProfile(): Profile | null {
    return this.profiles[this.currentIndex] || null;
  }

  next() {
    if (this.currentIndex < this.profiles.length - 1) {
      this.currentIndex++;
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  first() {
    this.currentIndex = 0;
  }

  last() {
    this.currentIndex = this.profiles.length - 1;
  }
}
