import { InMemoryDbService } from 'angular-in-memory-web-api';

import * as moment from 'moment';

export class AppointmentsSeed implements InMemoryDbService {
  createDb() {
    const appointments = [
      { id: 1, date: '2017-12-01', weekDay: 'Friday', title: '' },
      { id: 2, date: '2017-12-02', weekDay: 'Saturday', title: 'Lollapalooza' },
      { id: 3, date: '2017-12-03', weekDay: 'Sunday', title: '' },
      { id: 4, date: '2017-12-04', weekDay: 'Monday', title: '' },
      { id: 5, date: '2017-12-05', weekDay: 'Tuesday', title: '' },
      { id: 6, date: '2017-12-06', weekDay: 'Wednesday', title: '' },
      { id: 7, date: '2017-12-07', weekDay: 'Thursday', title: '' },
      { id: 8, date: '2017-12-08', weekDay: 'Friday', title: '' },
      { id: 9, date: '2017-12-09', weekDay: 'Saturday', title: '' },
      { id: 10, date: '2017-12-10', weekDay: 'Sunday', title: 'Avanade'},
      { id: 11, date: '2017-12-11', weekDay: 'Monday', title: '' },
      { id: 12, date: '2017-12-12', weekDay: 'Tuesday', title: '' },
      { id: 13, date: '2017-12-13', weekDay: 'Wednesday', title: '' },
      { id: 14, date: '2017-12-14', weekDay: 'Thursday', title: 'Gama Academy'},
      { id: 15, date: '2017-12-15', weekDay: 'Friday', title: '' },
      { id: 16, date: '2017-12-16', weekDay: 'Saturday', title: '' },
      { id: 17, date: '2017-12-17', weekDay: 'Sunday', title: '' },
      { id: 18, date: '2017-12-18', weekDay: 'Monday', title: 'Never Forget'},
      { id: 19, date: '2017-12-19', weekDay: 'Tuesday', title: '' },
      { id: 20, date: '2017-12-20', weekDay: 'Wednesday', title: '' },
      { id: 21, date: '2017-12-21', weekDay: 'Thursday', title: '' },
      { id: 22, date: '2017-12-22', weekDay: 'Friday', title: 'Lorem Ipsum'},
      { id: 23, date: '2017-12-23', weekDay: 'Saturday', title: '' },
      { id: 24, date: '2017-12-24', weekDay: 'Sunday', title: '' },
      { id: 25, date: '2017-12-25', weekDay: 'Monday', title: 'Christmas'},
      { id: 26, date: '2017-12-26', weekDay: 'Tuesday', title: '' },
      { id: 27, date: '2017-12-27', weekDay: 'Wednesday', title: '' },
      { id: 28, date: '2017-12-28', weekDay: 'Thursday', title: '' },
      { id: 29, date: '2017-12-29', weekDay: 'Friday', title: '' },
      { id: 30, date: '2017-12-30', weekDay: 'Saturday', title: '' },
      { id: 31, date: '2017-12-31', weekDay: 'Sunday', title: '' },
    ];
    return {appointments};
  }
}
