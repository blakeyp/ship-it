var names;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


names = [];


document.getElementById('button').addEventListener('click', (event) => {
  names.push(getNumberOrString(document.getElementById('text').value));
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = names.slice(-1)[0];

  element_list.appendChild(new_li);

});

document.getElementById('select').addEventListener('click', (event) => {
  let element_selected = document.getElementById('selected');
  element_selected.innerText = randomMember(names);

});
