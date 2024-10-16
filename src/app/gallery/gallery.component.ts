import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  images = [
    {
      url: '/image/1729025617863.jpg',
      alt: 'Nature Image 1',
    },
    {
      url: '/image/1729025617860.jpg',
      alt: 'Nature Image 2',
    },
    {
      url: '/image/1729025617855.jpg',
      alt: 'Nature Image 2',
    },
    {
      url: '/image/1729025617851.jpg',
      alt: 'Nature Image 2',
    },
    {
      url: '/image/1729025617848.jpg',
      alt: 'Nature Image 2',
    },
    {
      url: '/image/1729025617844.jpg',
      alt: 'Nature Image 2',
    },
    {
      url: '/image/1729027480813.jpg',
      alt: 'Nature Image 2',
    },
  ];

  isModalOpen = false;
  modalImageUrl: string | null = null;

  openModal(imageUrl: string): void {
    this.modalImageUrl = imageUrl;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.modalImageUrl = null;
  }
}
