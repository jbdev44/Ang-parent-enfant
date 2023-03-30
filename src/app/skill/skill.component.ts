import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent implements OnInit {
  @Input() recepSkill: Skill = new Skill('', '', '');

  ngOnInit(): void {
    console.log('Enfant skill', this.recepSkill.name);
  }
}
