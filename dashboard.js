document.addEventListener("DOMContentLoaded", () => {
    const courses = [
      {
        title: "Mathematics Basics",
        description: "Learn fundamentals of algebra, geometry, and arithmetic.",
        link: "course.html"
      },
      {
        title: "Science Essentials",
        description: "Explore physics, chemistry, and biology with real-life examples.",
        link: "course.html"
      },
      {
        title: "Computer Fundamentals",
        description: "Get introduced to computers, internet, and basic coding.",
        link: "course.html"
      }
    ];
  
    const courseList = document.getElementById("course-list");
  
    courses.forEach(course => {
      const card = document.createElement("div");
      card.className = "col-md-4 mb-4";
  
      card.innerHTML = `
        <div class="card h-100">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${course.title}</h5>
            <p class="card-text flex-grow-1">${course.description}</p>
            <a href="${course.link}" class="btn btn-primary mt-3">View Course</a>
          </div>
        </div>
      `;
  
      courseList.appendChild(card);
    });
  });
  