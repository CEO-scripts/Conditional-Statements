let mood = 'sleepy';
let tirednessLevel = 6;

/*Creating an if..else statement with logical operators*/
if(mood === 'sleepy' && tirednessLevel > 8){
  console.log('time to sleep')
}
else{
  console.log('not bed time yet')
}

if(mood !== 'sleepy' || tirednessLevel < 8){
  console.log('Time to work')
}
else{
  console.log('Shit be real')
}