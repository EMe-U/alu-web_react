// Teacher interface with readonly firstName and lastName, and index signature for additional properties
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Directors interface extending Teacher with numberOfReports
export interface Directors extends Teacher {
  numberOfReports: number;
}

// Type for the printTeacher function
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function to print teacher: first letter of firstName + full lastName
export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName[0]}. ${lastName}`;
};

// StudentConstructor interface for the StudentClass constructor
export interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

// StudentClassInterface for the StudentClass
export interface StudentClassInterface {
  displayName(): string;
  workOnHomework(): string;
}

// StudentClass implementation
export class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  displayName(): string {
    return this.firstName;
  }

  workOnHomework(): string {
    return "Currently working";
  }
}

// Test instances
const teacher1: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

const student1: StudentClass = new StudentClass('John', 'Doe');

console.log(printTeacher('John', 'Doe'));
console.log(student1.displayName());
console.log(student1.workOnHomework());
