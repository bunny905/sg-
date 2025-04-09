document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Temporary login check (simulate authentication)
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  
    const found = storedUsers.find(user => user.email === email && user.password === password);
  
    if (found) {
      localStorage.setItem('loggedInUser', JSON.stringify(found));
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid credentials. Please try again.');
    }
  });
  