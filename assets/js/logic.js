// Shared logic for managing localStorage

/**
 * Get all blog posts from localStorage
 * @returns {Array} Array of blog posts
 */
function getBlogPosts() {
    return JSON.parse(localStorage.getItem('blogPosts')) || [];
}

/**
 * Save a new blog post to localStorage
 * @param {Object} post - Blog post object
 */
function saveBlogPost(post) {
    const blogPosts = getBlogPosts();
    blogPosts.push(post);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
}

/**
 * Clear all blog posts from localStorage
 */
function clearBlogPosts() {
    localStorage.removeItem('blogPosts');
}