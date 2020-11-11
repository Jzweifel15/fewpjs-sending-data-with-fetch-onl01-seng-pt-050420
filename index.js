// Add your code here
function submitData(userName, userEmail)
{
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail
    })
  };
  
  return fetch("http://localhost:3000/users", configObj).then(function(resp) {
    return resp.json();
  }).then(function(obj) {
    console.log(obj.id);
  }).catch(function(error) {
    console.log(error.message);
  });
}