import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
    public arrayKnowledge = signal<IKnowledge[]> ([
      {
        src: 'assets/icons/knowledge/html5.svg',
        alt: 'HTML5',
      },
      {
        src: 'assets/icons/knowledge/css3.svg',
        alt: 'CSS3',
      },
      {
        src: 'assets/icons/knowledge/java.svg',
        alt: 'Java',
      },
      {
        src: 'assets/icons/knowledge/javascript.svg',
        alt: 'JavaScript',
      },
      {
        src: 'assets/icons/knowledge/mysql.svg',
        alt: 'MySQL',
      },
      {
        src: 'assets/icons/knowledge/postgres.svg',
        alt: 'PostgreSQL',
      },
      {
        src: 'assets/icons/knowledge/react.svg',
        alt: 'React',
      },
      {
        src: 'assets/icons/knowledge/spring.svg',
        alt: 'Spring Boot',
      },
      {
        src: 'assets/icons/knowledge/ts.svg',
        alt: 'TypeScript',
      },
    ])
}
