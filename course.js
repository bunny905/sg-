document.addEventListener("DOMContentLoaded", () => {
    loadComments();
  });
  
  function postComment() {
    const nameInput = document.getElementById("commenter-name");
    const commentInput = document.getElementById("comment-text");
    const name = nameInput.value.trim();
    const comment = commentInput.value.trim();
  
    if (name === "" || comment === "") {
      alert("Please enter both your name and comment.");
      return;
    }
  
    const newComment = {
      id: Date.now(), // Unique ID for each comment
      name: name,
      text: comment,
      time: new Date().toLocaleString()
    };
  
    let comments = JSON.parse(localStorage.getItem("mathCourseComments")) || [];
    comments.push(newComment);
    localStorage.setItem("mathCourseComments", JSON.stringify(comments));
  
    nameInput.value = "";
    commentInput.value = "";
  
    renderComments(comments);
  }
  
  function loadComments() {
    const storedComments = JSON.parse(localStorage.getItem("mathCourseComments")) || [];
    renderComments(storedComments);
  }
  
  function renderComments(comments) {
    const section = document.getElementById("comments-section");
    section.innerHTML = "";
  
    if (comments.length === 0) {
      section.innerHTML = `<p class="text-muted">No comments yet. Be the first to comment!</p>`;
      return;
    }
  
    comments.forEach(comment => {
      const commentCard = document.createElement("div");
      commentCard.className = "card mb-2";
      commentCard.innerHTML = `
        <div class="card-body">
          <h6 class="card-title mb-1">${comment.name}
            <small class="text-muted float-end">${comment.time}</small>
          </h6>
          <p class="card-text">${comment.text}</p>
          <button class="btn btn-sm btn-danger" onclick="deleteComment(${comment.id})">Delete</button>
        </div>
      `;
      section.appendChild(commentCard);
    });
  }
  
  function deleteComment(id) {
    let comments = JSON.parse(localStorage.getItem("mathCourseComments")) || [];
    const updatedComments = comments.filter(comment => comment.id !== id);
    localStorage.setItem("mathCourseComments", JSON.stringify(updatedComments));
    renderComments(updatedComments);
  }
  