import { posts } from "../data/portfolioData";

function Blog() {
  return (
    <section id="blog" className="section section-light">
      <div className="container">
        <div className="section-heading">
          <span>From The Blog</span>
          <h2>Latest Posts</h2>
        </div>

        <div className="blog-grid">
          {posts.map((post) => (
            <article className="blog-card" key={post.title}>
              <div className="blog-date">
                {post.date}
              </div>

              <div>
                <div className="blog-meta">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3>{post.title}</h3>

                <p>{post.description}</p>

                <a href="#" className="read-more">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
