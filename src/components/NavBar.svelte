<style>
    nav {
        align-items: center;
        display: flex;
        flex: 1;
        font-family: var(--font-family-sans);
        font-weight: 700;
        justify-content: flex-end;
        gap: 20px;
    }

    .theme-toggle-container {
        width: 75px;
    }


</style>

<script>
    import ThemeToggleButton from './ThemeToggleButton.svelte';
    import NavLink from './NavLink.svelte';
    export let current;
</script>

<nav>
    <NavLink isSelected={current === ''} label="home" route="/"/>
    <NavLink isSelected={current === 'blog'} label="blog" route="/blog"/>


    <div class="theme-toggle-container">
        <ThemeToggleButton />
    </div>
</nav>
