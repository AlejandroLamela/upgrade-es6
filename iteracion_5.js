// ! Iteración #5: Filter

// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesNew = ages.filter((age) =>  age>18);
console.log(agesNew);

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean par.
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const ages1New = ages1.filter((age) => age%2===0);
console.log(ages1New);

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers3 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamers3New = streamers3.filter((streamer)=>streamer.gameMorePlayed.includes("League of Legends"));
console.log(streamers3New);

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
// usar la funcion .includes() para la comprobación.
const streamers1 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamers1New = streamers1.filter((streamer)=> streamer.name.includes("u"));
console.log(streamers1New);

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
// .age sea mayor que 35.

const streamers5New = streamers1.filter((streamer)=>{
    const incluesLegend = streamer.gameMorePlayed.includes("Legends");

    if(incluesLegend && streamer.age > 35){
        streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
    }

    return incluesLegend;

   
});



console.log(streamers5New);


