import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/images/projects/libraryapi.png',
      alt: 'Library API',
      title: 'Library API',
      width: '100px',
      height: '51px',
      description: '<p>Uma API RESTful para gerenciar livros e autores. Desenvolvida com Java, Spring e PostgreSQL.</p>',
      links: [
        {
          name: 'Conheça o projeto',
          href: "https://github.com/jonasvlima/libraryapi",
        },
      ],
    },
  ]);
}
