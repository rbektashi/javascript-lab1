const name = "Mitch";
const age = 25;
const birthday = "Janurary 24";
const detroitGC = true;
let lifeEvents = [
  "I was born in Troy, Michigan",
  "I went to Hope College",
  "I went to junior Olympics when I was 10 years old. I placed 14th in the nation in the 800 meter event.",
  "I'm a graduate of the front-end bootcamp.",
];

if (detroitGC === true) {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`
  );
} else {
  console.log(
    `my name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

while (true) {
  const randomNumber = getRandomInt(10);
  counter++;
  if (randomNumber !== 5) {
    console.log(`${randomNumber} !== 5`);
  } else {
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}
