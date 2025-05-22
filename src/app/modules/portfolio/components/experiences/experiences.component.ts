import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Desenvolvedor Full Stack em Formação",
        p: "Centro Universitário União das Américas Descomplica | Maio de 2025"
      },
      text: "<p>Embora ainda não possua experiência profissional formal na área de tecnologia, desenvolvi diversos projetos pessoais e acadêmicos que evidenciam meu comprometimento com a aprendizagem contínua e a evolução técnica. Entre eles, destacam-se o LinkSaver, uma aplicação elaborada com TypeScript para a gestão de links, e o TodoList, um sistema de gerenciamento de tarefas com backend estruturado em Java 21, Spring Boot e PostgreSQL, utilizando Docker para implantação. Estou em busca da minha primeira oportunidade profissional, visando contribuir de forma significativa com minhas competências e ampliar minha experiência prática.</p>",
    },
  ]);
}
