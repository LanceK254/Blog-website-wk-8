document.addEventListener("DOMContentLoaded", () => {
  const postsSection = document.getElementById("posts");

  if (postsSection) {
    const posts = [
      {
        title: "Top TikTok Trends in 2025",
        content: "Discover what’s popping on TikTok this year and how you can get viral."
      },
      {
        title: "Gen Z's Guide to AI",
        content: "How AI is changing everything from schoolwork to side hustles."
      },
      {
        title: "Aesthetic Vibes 101",
        content: "From cottagecore to dark academia, find your 2025 aesthetic."
      }
    ];

    posts.forEach(post => {
      const article = document.createElement("article");
      article.className = "post";
      article.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
      postsSection.appendChild(article);
    });
  }
});