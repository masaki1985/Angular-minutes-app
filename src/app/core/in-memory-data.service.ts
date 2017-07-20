import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  
  createDb() {
    let projects = [
      { id: 1, title: '第１回' },
      { id: 2, title: '第２回' },
      { id: 3, title: '第３回' },
      { id: 4, title: '第４回' },
      { id: 5, title: '第５回' }
    ];

    return { projects };
  }
}
