// Handle form submission and light/dark mode toggle
const form = document.getElementById('blog-form');
const toggleModeButton = document.getElementById('toggle-mode');

// Initialize light/dark mode
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

toggleModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    // Validate input fields
    if (!username || !title || !content) {
        alert('Please fill out all fields.');
        return;
    }

    // Create a blog post object
    const blogPost = { username, title, content };

    // Save to localStorage
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    // Redirect to blog page
    window.location.href = 'blog.html';
});