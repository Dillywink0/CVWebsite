const blogData = [
    { title: "First Post", content: "This is the content of the first post." },
    { title: "Second Post", content: "This is the content of the second post." },
    // Add more posts as needed
];

// Function to create a blog post element
function createPostElement(post) {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    const titleElement = document.createElement("h2");
    titleElement.textContent = post.title;

    const contentElement = document.createElement("p");
    contentElement.textContent = post.content;

    postElement.appendChild(titleElement);
    postElement.appendChild(contentElement);

    return postElement;
}

// Function to initialize the blog section with posts
function initializeBlog() {
    const blogSection = document.getElementById("blog");

    blogData.forEach(post => {
        const postElement = createPostElement(post);
        blogSection.appendChild(postElement);
    });
}

// Call the function to initialize the blog when the page loads
window.onload = initializeBlog;