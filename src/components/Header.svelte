<script>
  import logo from "$svg/logo.svg";
</script>

<header>
  <div class="wordmark">
    <a href="https://opendata.ch/" aria-label="Opendata.ch">{@html logo}</a>
  </div>
</header>

<style>
  header {
    border-top: 7px solid #e61414;
  }
  .wordmark {
    max-width: 10em;
    margin: 0 auto;
    padding: 1em 0;
  }

  .wordmark a {
    border: none;
    color: var(--color-fg);
  }

  .wordmark a:hover {
    background-color: transparent;
  }

  :global(.wordmark svg path) {
    fill: currentColor;
  }
</style>
