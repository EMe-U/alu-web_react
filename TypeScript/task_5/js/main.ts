// MajorCredits interface with brand
export interface MajorCredits {
  _majorCreditBrand: void;
  credits: number;
}

// MinorCredits interface with brand
export interface MinorCredits {
  _minorCreditBrand: void;
  credits: number;
}

// Sum MajorCredits function
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

// Sum MinorCredits function
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}

// Test cases
const major1: MajorCredits = { credits: 3 } as MajorCredits;
const major2: MajorCredits = { credits: 4 } as MajorCredits;
const minor1: MinorCredits = { credits: 2 } as MinorCredits;
const minor2: MinorCredits = { credits: 1 } as MinorCredits;

console.log(sumMajorCredits(major1, major2));
console.log(sumMinorCredits(minor1, minor2));
