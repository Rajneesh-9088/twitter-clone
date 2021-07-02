$("#submitPostButton").click(async () => {
  const postText = $("#post-text").val();
  console.log(postText);

  const newPost = await axios.post("/api/post", {
    content: postText,
  });

  console.log(newPost);

  $("#post-text").val("");

});
