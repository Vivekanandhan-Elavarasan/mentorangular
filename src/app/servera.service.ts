import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ServeraService {

  students;
  mentor;
  constructor(private http: HttpClient) {
    this.listOfMentors();
    this.listOfStudents();
  }
  createMentor(data): Observable<any> {
    // console.log(data);
    return this.http.post('https://mentorstudent3.herokuapp.com/mentor', data);
  }
  createStudent(data): Observable<any> {
    return this.http.post('https://mentorstudent3.herokuapp.com/students', data);
  }
  assignStudent(data): Observable<any> {
    return this.http.post('https://mentorstudent3.herokuapp.com/assignstudent', data);
  }
  updateMentor(data): Observable<any> {
    return this.http.put('https://mentorstudent3.herokuapp.com/update', data);
  }
  listStudents(data): Observable<any> {
    return this.http.post('https://mentorstudent3.herokuapp.com/liststudents', data);
  }
  listOfStudents() {
    this.http.get('https://mentorstudent3.herokuapp.com/listofstudents').subscribe(
      (data) => {
        this.students = data;
        return of(true);
      
      },
      (err) => {
        console.log(err);
      }
    );
  }
  listOfMentors() {
    this.http.get('http://localhost:3000/listofmentors').subscribe(
      (data) => {
        this.mentor = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
