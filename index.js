// Add your code here
function submitData(userName, userEmail)
{
  let formData = {
    name: userName,
    email: userEmail
  }
  
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
  
  return fetch()
  
}