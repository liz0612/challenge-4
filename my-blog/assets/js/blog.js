// Fetch blog posts from localStorage
const blogPostsContainer = document.getElementById('blog-posts');
const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

// Render blog posts
blogPosts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('blog-post');

    postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <small>By: ${post.username}</small>
    `;

    blogPostsContainer.appendChild(postElement);
});

// Handle light/dark mode toggle
const toggleModeButton = document.getElementById('toggle-mode');

// Set initial mode based on localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

toggleModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// Handle back button
function goBack() {
    window.location.href = 'index.html';
}