// fetch
// tester également avec https://jsonplaceholder.typicode.com/
// et voir https://www.youtube.com/watch?v=z9pcgJX1DdY
// syntaxe avec then()
function request_normale() {
    fetch('https://api.clashroyale.com/v1/clans/%23G2RQJPL2/members',{
    method : "GET",
    withCredentials : true,
    headers: {
    "X-Auth-Token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjRiYzc0MTVlLWQ2YWItNDg5OS04ZjBiLTk4M2MwOGRjMzI0ZSIsImlhdCI6MTcwMTY4NjY4NCwic3ViIjoiZGV2ZWxvcGVyL2ZlZTJkODA4LWE1MTctOTFmZS04NmVmLTdhNTA1NDc2YzJhOSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxODUuMTQuMTc4LjE3NCIsIjc3LjIwNS4xMTYuMyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.mcB8AR0TF8qIoDMex9qIYeLuvFnHmPam1TEe0zgSADw7CqmvAjoB9yFoT6nOz621K7AvGdR_9rHwADag5ZaCeA",
    "Content-Type": "application/json"
  },
}
)
      .then(response => response.json())
      //.then(response => response.text())
      .then(json => console.log(json))
      .catch( err => {
        console.log("erreur : "+err)
        })
}
// syntaxe avec async/await : plus récent et state of the art
async function request_async() {
    let response = await fetch('http://numbersapi.com/42/math?json');
    let json = await response.json();
    console.log(json);
}
//request_normale();
request_async();
