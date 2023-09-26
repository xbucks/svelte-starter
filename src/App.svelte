<!-- App.svelte -->
<script>
  import { Router, Link, Route } from "svelte-routing";
  import { token } from "src/stores/app";
  import Home from "src/routes/Home.svelte";
  import About from "src/routes/About.svelte";
  import Blog from "src/routes/Blog/Blog.svelte";
  import BlogPost from "src/routes/Blog/BlogPost.svelte";
  import Login from "src/routes/Login.svelte";
  import Register from "src/routes/Register.svelte";

  export let url = "";
</script>

{#if $token}
  <Router {url}>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
    </nav>
    <div>
      <Route path="/blog/:id" let:params>
        <BlogPost id={params.id} />
      </Route>
      <Route path="/blog" component={Blog} />
      <Route path="/about" component={About} />
      <Route path="/"><Home /></Route>
    </div>
  </Router>
{:else}
  <Router {url}>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
    <div>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/"><Home /></Route>
    </div>
  </Router>
{/if}
