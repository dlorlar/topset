// Login function
function login(username, password) {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
  
    // Set the request method and URL
    xhr.open("POST", "/login");
  
    // Set the request headers
    xhr.setRequestHeader("Content-Type", "application/json");
  
    // Create the request body
    var body = JSON.stringify({
      username: username,
      password: password
    });
  
    // Send the request
    xhr.send(body);
  
    // Handle the response
    xhr.onload = function() {
      if (xhr.status === 200) {
        // The login was successful
        console.log("Login successful");
      } else {
        // The login failed
        console.log("Login failed");
      }
    };
  }
  
  // Logout function
  function logout() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
  
    // Set the request method and URL
    xhr.open("POST", "/logout");
  
    // Set the request headers
    xhr.setRequestHeader("Content-Type", "application/json");
  
    // Send the request
    xhr.send();
  
    // Handle the response
    xhr.onload = function() {
      if (xhr.status === 200) {
        // The logout was successful
        console.log("Logout successful");
      } else {
        // The logout failed
        console.log("Logout failed");
      }
    };
  }