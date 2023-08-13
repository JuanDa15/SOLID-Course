(() => {

  // Ejemplo
  // Archivos a evaluar - files to evaluate
  // BAD
  const fs = [
      { id: 1, f: false },
      { id: 2, f: false },
      { id: 3, f: true },
      { id: 4, f: false },
      { id: 5, f: false },
      { id: 7, f: true },
  ]; 
  
  // BETTER
  const filesToEvaluate = [
    { id: 1, flagged: false },
    { id: 2, flagged: false },
    { id: 3, flagged: true },
    { id: 4, flagged: false },
    { id: 5, flagged: false },
    { id: 7, flagged: true },
  ];
  
  // Archivos marcados para borrar - files to delete
  // BAD
  const arhivos = fs.map( f => f.f );
  // BETTER
  const filesToDelete = filesToEvaluate.map( file => file.flagged );


  // BAD
  class AbstractUser { };
  class UserMixin { };
  class UserImplementation { };
  interface IUser { };
  // Mejor
  class User { };
  interface User { };


  // Todo: Tarea
      
  // día de hoy - today
  // BAD
  const ddmmyyyy = new Date();
  // BETTER
  const today = new Date();
  
  // días transcurridos - elapsed time in days
  // BAD
  const d: number = 23;
  // BETTER
  const elapsedTimeInDays: number = 23;

  // número de archivos en un directorio - number of files in directory
  // BAD
  const dir = 33;
  // BETTER
  const filesInDirectory: number = 33;

  // primer nombre - first name
  // BAD
  const nombre = 'Fernando';
  // BETTER
  const firstName = 'XXXXXXXX';



  
  // primer apellido - last name
  // BAD
  const apellido = 'Herrera';
  // BETTER
  const lastName = 'XXXXXXXX';



  // días desde la última modificación - days since modification
  // BAD
  const dsm = 12;
  // BETTER
  const daysSinceModification: number = 12;



  // cantidad máxima de clases por estudiante - max classes per student
  // BAD
  const max = 6;
  // BETTER
  const maxClassesPerStudent: number = 6;

})();
