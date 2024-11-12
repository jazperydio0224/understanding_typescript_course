// Generic Utility Types - only exists in TypeScript
// These utility types are all Generic because they take some other value
// which of any type and do something with it

// 1. Partial Type
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  // Partial tells typescript that it will be an object
  // which in the end will be a CourseGoal
  // it's like the interface properties are optional only (TEMPORARILY)
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal; // Typecasting
}

// Readonly
// lock the array from being modified
const names1: Readonly<string[]> = ["Max", "Jazper"];
// names1.push("Ken");
// names1.pop();
