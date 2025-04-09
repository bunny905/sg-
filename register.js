document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    const alreadyExists = users.find(user => user.email === email);
  
    if (alreadyExists) {
      alert('User with this email already exists.');
      return;
    }
  
    const newUser = { name, email, password, enrolledCourses: [] };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
  
    alert('Registration successful! Redirecting to login...');
    window.location.href = 'login.html';
  });
  