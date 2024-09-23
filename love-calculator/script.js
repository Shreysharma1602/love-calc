function calculateLove() {
  const name1 = document.getElementById('name1').value;
  const name2 = document.getElementById('name2').value;

  if (!name1 || !name2) {
    document.getElementById('result').innerHTML = 'Please enter both names.';
    return;
  }

  const scriptURL = '/https://script.google.com/macros/s/AKfycbwWiNfd-RRqMB1P7WD66r8U1lJthuo-cixiihuE3crMBR7I2AgMv3imW3siPuNn7bRB/exec';

  fetch(scriptURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name1: name1, name2: name2 })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    document.getElementById('result').innerHTML = `Love percentage: ${data.percentage}%`;
  })
  .catch(error => {
    document.getElementById('result').innerHTML = 'Error calculating love!';
    console.error('Error:', error);
  });
}
