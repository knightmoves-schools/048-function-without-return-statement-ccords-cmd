var logUser = function (username) {
  console.log(username);
};

document.getElementById('result').innerHTML = logUser('${username}');

