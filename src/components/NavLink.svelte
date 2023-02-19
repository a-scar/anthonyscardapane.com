<script>
  export let route;
  export let label;
  export let isSelected;
</script>

<span class="wrapper">
  <a class:selected={isSelected} href={route}>{label}</a>
  <span class="revealed">
    <a aria-hidden="true" href={route}>{label}</a>
  </span>
</span>

<style>
  .wrapper {
    display: block;
    position: relative;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    font-size: 1.5rem;
  }

  .revealed {
    color: var(--primary-color);
    position: absolute;
    top: 0;
    left: 0;
    clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
    transition: clip-path 1000ms;
  }

  .wrapper:hover > .revealed {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    transition: clip-path 300ms;
  }

  .selected {
    text-decoration-line: underline;
    text-decoration-thickness: 0.15rem;
    text-underline-offset: 7px;
    text-decoration-style: wavy;
    text-decoration-color: var(--primary-color);
  }
</style>
