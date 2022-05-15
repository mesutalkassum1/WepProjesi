fetch('https://www.breakingbadapi.com/api/charachter/1')
  .then(function(response){ response.json() })
  .then(data => console.log(data));