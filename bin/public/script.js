async function addPost() {
  const text = document.getElementById('entry-text').value;

  
  if (!text.trim()) {
    alert('Please write something before posting!');
    return;
  }

  try {
   const response = await fetch('/api/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ content: text })
});

    if (!response.ok) throw new Error('Failed to save post');

    const savedPost = await response.json();

    const postContainer = document.getElementById('journal-entry');
    const post = document.createElement('div');
    post.classList.add('journal-post');

    post.innerHTML = `
      <strong>${new Date(savedPost.created_at || Date.now()).toLocaleString()}</strong>
      <p>${savedPost.content}</p>
    `;

    postContainer.prepend(post);

    document.getElementById('entry-text').value = '';
  } catch (err) {
    alert(err.message);
  }
}

async function loadPosts() {
  try {
    const response = await fetch('api/posts');
    if (!response.ok) throw new Error('Failed to load posts');
    const posts = await response.json();
    const postContainer = document.getElementById('journal-entry');
    postContainer.innerHTML = '';

    posts.forEach(post => {
      const div = document.createElement('div');
      div.classList.add('journal-post');
      div.innerHTML = `
        <strong>${new Date(post.created_at).toLocaleString()}</strong>
        <p>${post.content}</p>
      `;
      postContainer.appendChild(div);
    });
  } catch (error) {
    console.error(error);
  }
}

loadPosts();

