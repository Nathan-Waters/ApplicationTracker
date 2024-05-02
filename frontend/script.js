document.addEventListener('DOMContentLoaded', function() {
  const rootDiv = document.getElementById('root');
  
  // Create a button element
  const button = document.createElement('button');
  button.textContent = 'Fetch Data';
  
  // Add click event listener to the button
  button.addEventListener('click', function() {
      const url = 'http://127.0.0.1:8000/blogPosts/5/';
      
      fetch(url)
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(data => {
              // Process the data here
              console.log(data);
          })
          .catch(error => {
              console.error('There was a problem with the fetch operation:', error);
          });
  });
  
  // Append the button to the root div
  rootDiv.appendChild(button);
});
