import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchTerm: string = '';
  paragraph: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus distinctio dolorem commodi explicabo quam totam reiciendis! Eos id est nihil sint, non, inventore debitis voluptas accusamus mollitia a molestias ipsa?';

  constructor(private sanitizer: DomSanitizer) {}

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
  }

  highlightText(text: string, term: string) {
    if (!term) {
      return text;
    }
    const regex = new RegExp(`(${term})`, 'gi');
    const highlightedText = text.replace(regex, '<span style="background-color: yellow;">$1</span>');
    return this.sanitizer.bypassSecurityTrustHtml(highlightedText); 
  }
}
