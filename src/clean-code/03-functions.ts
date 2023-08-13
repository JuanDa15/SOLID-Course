(() => {

  // función para obtener información de una película por Id
  function getAllMovies(movieId: string) {
    console.log({ movieId });
  }
  function getMovieById(id: string) {
    console.log({ id });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getAllMovieActors(id: string) {
    console.log({ id });
  }
  function getMovieCastById(id: string) {
    console.log({ id });
  }

  // funcion para obtener el bio del actor por el id
  function getUsuario(ActorId: string) {
    console.log({ ActorId });
  }
  function getActorBioById(ActorId: string) {
    console.log({ ActorId });
  }

  // Crear una película
  function movie(title: string, description: string, rating: number, cast: string[]) {
    console.log({ title, description, rating, cast });
  }
  interface Movie {
    title: string,
    description: string,
    rating: number,
    cast: string[]
  }
  function createMovie({
    title,
    description,
    rating,
    cast,
  }: Movie) {
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function createActorIfActorNotExists(fullName: string, birthdate: Date): boolean {

    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === 'fernando') return false;

    console.log('Crear actor');
    return true;

  }

  interface Actor {
    birthdate: Date,
    fullName: string,
  }

  function checkName(fullName: string): boolean {
    if (fullName === 'fernando') return false;
    return true;
  }

  function createActor({ fullName, birthdate }: Actor): boolean {
    const actor = {
      fullName,
      birthdate
    }
    return true;

  }


  const getPayAmountLarge = ({ isDead = false, isSeparated = true, isRetired = false }) => {
    let result;
    if (isDead) {
      result = 1500;
    } else {
      if (isSeparated) {
        result = 2500;
      } else {
        if (isRetired) {
          result = 3000;
        } else {
          result = 4000;
        }
      }
    }

    return result;
  }

  interface UserStatus {
    isDead: boolean,
    isSeparated: boolean,
    isRetired: boolean,
  }
  const getPayAmount = ({ isDead, isSeparated, isRetired }: UserStatus) => {
    if (isDead) return 1500;
    if (isSeparated) return 2500;
    if (isRetired) return 3000;
    return 4000;
  }

  // Resolver sin la triple condicional dentro del if
  // includes? arrays?
  function isRedFruitBad(fruit: string): boolean {

    if (fruit === 'manzana' || fruit === 'cereza' || fruit === 'ciruela') {
      return true;
    } else {
      return false;
    }
  }

  function isRedFruit(fruit: string): boolean {
    return ['manzana', 'cereza', 'ciruela'].includes(fruit);
  }
  // Simplificar esta función
  // switch? Object literal? validar posibles colores
  function getFruitsByColorBad(color: string): string[] {

    if (color === 'red') {
      return ['manzana', 'fresa'];
    } else if (color === 'yellow') {
      return ['piña', 'banana'];
    } else if (color === 'purple') {
      return ['moras', 'uvas']
    } else {
      throw Error('the color must be: red, yellow, purple');
    }
  }

  type fruitColor = 'red' | 'yellow' | 'purple';
  function getFruitsByColor(color: fruitColor): string[] {
    const fruitsByColor: Record<string, string[]> = {
      'red': ['manzana', 'fresa'],
      'yellow': ['piña', 'banana'],
      'purple': ['moras', 'uvas'],
    }
    if (!Object.keys(fruitsByColor).includes(color)) 
      throw Error('the color must be: red, yellow, purple');
    
    return fruitsByColor[color]
  }

  // Simplificar esta función
  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;

  function workingStepsBad() {
    if (isFirstStepWorking === true) {
      if (isSecondStepWorking === true) {
        if (isThirdStepWorking === true) {
          if (isFourthStepWorking === true) {
            return 'Working properly!';
          }
          else {
            return 'Fourth step broken.';
          }
        }
        else {
          return 'Third step broken.';
        }
      }
      else {
        return 'Second step broken.';
      }
    }
    else {
      return 'First step broken.';
    }
  }

  function workingSteps() {
    if (!isFirstStepWorking) return 'First step broken'
    if (!isSecondStepWorking) return 'Second step broken'
    if (!isThirdStepWorking) return 'Third step broken'
    if (!isFourthStepWorking) return 'Fourth step broken'
    return 'Working properly!'
  }

})();


