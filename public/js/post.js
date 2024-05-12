const titleEl = document.querySelector("#title");
const contentEl = document.querySelector("#content");
const createLink = document.querySelector("#createPost");
const cancelBtn = document.querySelector("#cancelPost");
const updateBtn = document.querySelector("#updatePost");
const deleteBtn = document.querySelector("#deletePost");

// Create post function
const cancelPostHandler = async (event) => {
    event.preventDefault();
    document.location.replace("/dashboard");
}
// Update post function
const updatePostHandler = async (event) => {
    event.preventDefault();
    const title = titleEl.value;
    const content = contentEl.value;
    // If the title and content fields aren't empty, update the post
    if (title.length > 0 && content.length > 0) {
        const id = document.location.pathname.split("/").at(-1);
        const response = await fetch(`/dashboard/post/${id}`, {
            method: "PUT",
            body: JSON.stringify({ title, content }),
            headers: { "Content-Type": "application/json" },
        });
// If the response is ok, redirect to the dashboard
        if (response.ok) document.location.replace(`/dashboard`);
        else alert("Failed to update post.");
    } else {
        alert("Your post must have a title and contents");
    }
}
// Delete post function
const deletePostHandler = async (event) => {
    event.preventDefault();
// Get the post id from the url
    const id = document.location.pathname.split("/").at(-1);
    const response = await fetch(`/dashboard/post/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    });
// If the response is ok, redirect to the dashboard
    if (response.ok) document.location.replace("/dashboard");
    else alert("Failed to delete post.");
}
// Event listeners
const createPostHandler = async (event) => {
    const title = titleEl.value;
    const content = contentEl.value;
    event.preventDefault();
    if (title.length > 0 && content.length > 0) {

// If the title and content fields aren't empty, post the post to the dashboard
        const response = await fetch("/dashboard/post", {
            method: "POST",
            body: JSON.stringify({ title, content }),
            headers: { "Content-Type": "application/json" },
        });
// If the response is ok, redirect to the dashboard
        if (response.ok) {
            document.location.replace(`/dashboard`);
        } else {
            alert("Failed to create post.");
        }

    }
}
// Event listeners
if (createLink) {
    createLink.addEventListener("click", createPostHandler);
    cancelBtn.addEventListener("click", cancelPostHandler);
} else {
    updateBtn.addEventListener("click", updatePostHandler);
    deleteBtn.addEventListener("click", deletePostHandler);
}