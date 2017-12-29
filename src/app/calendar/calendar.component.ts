import { Component, OnInit } from '@angular/core';

import { Appointments } from './../model/Appointments';
import { CalendarService } from './../calendar.service';

import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  appointment: Appointments;
  appointments: Appointments[];

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
    /* Carrega todos os appointments assim que o component for carregado na tela */
    this.getAll();
    /* Carrega um appointment com a data no dia 18, exibindo o dia 18 assim que o component for carregado */
    this.getOne(18);
  }

  /* Atualiza dia e dia da semana ao selecionar uma data no calendário */
  onSelect(day: Appointments): void {
    this.appointment = day;
  }

  /* Retorna todos os appointments disponível no banco */
  getAll(): void {
    this.calendarService.get().subscribe(appointments => this.appointments = appointments);
  }

  /* Retorna apenas um appointments */
  getOne(id): void {
    this.calendarService.getOne(id).subscribe(appointment => this.appointment = appointment);
  }

  /* Adiciona um novo appointments no calendário */
  addEvent(title: string, date: string, weekDay: string): void {
    title = title.trim();
    if (!title) { return; }
    this.calendarService.post({ title, date, weekDay } as Appointments).subscribe(appointment => this.appointment.title);
    this.getAll();
  }

  /* Faz a conversão da data para exibir no formato em dia */
  convertDate(date: string) {
    const format = 'DD';
    const result = moment(date).format(format);
    return result;
  }
}
