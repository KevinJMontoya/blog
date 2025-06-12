
function addPost() {
    const text = document.getElementById('entry-text').value;
    const image = document.getElementById('entry-image').files[0];

    if (!text.trim()) {
        alert('Please write something before posting!');
        return;
    }

    const postContainer = document.getElementById('journal-entry');

    const date = new Date();
    const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

    const post = document.createElement('div');
    post.classList.add('journal-post');


    post.innerHTML = `
        <strong>${formattedDate}</strong>
        <p>${text}</p>
    `;

    if (image) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            post.appendChild(img);
        };
        reader.readAsDataURL(image);
    }

    postContainer.prepend(post);

    document.getElementById('entry-text').value = '';
    document.getElementById('entry-image').value = '';
}
