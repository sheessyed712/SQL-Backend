import student from './students.js';
import identity from './identityCard.js';
import department from './department.js';
import studentCourses from './studentCourses.js';
import courses from './courses.js';

department.hasMany(student);
student.belongsTo(department);

//one to one
student.hasOne(identity);
identity.belongsTo(student);
//many to many
student.belongsToMany(courses,{through:studentCourses});
courses.belongsToMany(student,{through:studentCourses})

export { student, identity ,courses,studentCourses};