
async function request_trivia(nb) {
    let response = await fetch('http://numbersapi.com/'+nb+'?json');
    let json = await response.json();
    console.log(json);
}

async function request_math(nb) {
  let response = await fetch('http://numbersapi.com/'+nb+'/math?json');
  let json = await response.json();
  console.log(json);
}

async function request_date(nb) {
  let response = await fetch('http://numbersapi.com/'+nb+'/date?json');
  let json = await response.json();
  console.log(json);
}

async function request_year(nb) {
  let response = await fetch('http://numbersapi.com/'+nb+'/year?json');
  let json = await response.json();
  console.log(json);
}

//request_trivia(78);
//request_math(44);
request_date(22);
// request_year(4);
