
async function refreshTweets() {

    $('#allTweets').empty();

    const tweets = await axios.get('/api/post');

    for(let post of tweets.data){
        $('#allTweets').prepend(`<li>${post.content} <span style="color:grey">by</span>   <span style="color:#0099ff" >${post.postedBy}</span>  </li>`)
    }
}

refreshTweets();




$("#submitPostButton").click(async () => {
  const postText = $("#post-text").val();
  console.log(postText);

  const newPost = await axios.post("/api/post", {
    content: postText,
  });

  console.log(newPost);
  refreshTweets();

  $("#post-text").val("");

});
