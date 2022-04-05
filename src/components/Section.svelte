<script>
  export let id = undefined;
  export let fullBleed = false;
</script>

<section {id} class:centered={!fullBleed}>
  <slot />
</section>

<style>
  section {
    margin: 0 auto;
    padding: 2rem 0;
  }

  .centered {
    padding: 2rem 1rem;
    max-width: 75rem;
  }
</style>
