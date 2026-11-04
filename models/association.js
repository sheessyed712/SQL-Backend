import student from './students.js';
import identity from './identityCard.js';
import department from './department.js';

department.hasMany(student);
student.belongsTo(department);


student.hasOne(identity);
identity.belongsTo(student);

export { student, identity };