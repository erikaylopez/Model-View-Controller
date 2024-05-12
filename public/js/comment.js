const commentTextEl = document.querySelector("#comment");

// Post comment function
postCommentHandler = async (event) => {
    event.preventDefault();
    const content = commentTextEl.value
    // If the comment field isn't empty, post the comment to the post
    if (content.length > 0) {
        // Get the post id from the url
        const post_id = document.location.pathname.split("/")[2];
        const response = await fetch("/api/comments/", {
            method: "POST",
            body: JSON.stringify({ content, post_id }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert("Comment could not be saved to the post");
        }
    }
}
// Event listener
document.querySelector("#postComment").addEventListener("click", postCommentHandler);