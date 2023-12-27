<script>
    export let post;
</script>

<a class="card" href={`/blog/${post.slug}`}>
    <h2>{post.data.title}</h2>
    <div class="card-description">{post.data.description}</div>
    <div class="card-description">{post.data.publishDate}</div>
</a>


<style>
    .card {
        display: flex;
        flex-direction: column;
        height: 150px;
        border-radius: 5px;
        padding: 16px;
        box-shadow: 2px 4px 8px hsl(0deg 0% 0% / 0.25);
        transition: transform 200ms;
        background-color: var(--secondary-color);
        margin-bottom: 10px;
    }

    a {
        text-decoration: none;
        color: inherit;
        font-weight: 200;
        font-size: 1rem;
    }

    a:hover h2 {
        text-decoration: underline;
        text-decoration-style: dotted;
        color: var(--primary-color);
        transition: 200ms ease-in;
        text-underline-offset: 8px;
    }

    h2 {
       align-self: start;
    }

    .card:hover {
        transform: translateY(-5px) ;
        will-change: transform;
        transition: 300ms ease-in;
    }

    .card-description {
        margin-top: 8px;
        overflow: auto;
    }
</style>
