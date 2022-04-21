<script>
  import { onMount } from "svelte";

  let Scrolly;
  onMount(async () => {
    const module = await import("./Scrolly.svelte");
    Scrolly = module.default;
  });
</script>

<div class="wrapper">
  {#if !Scrolly}
    <div class="loader" />
  {:else}
    <svelte:component this={Scrolly} />
  {/if}
</div>

<style>
  .wrapper {
    position: relative;
    width: 100%;
    min-height: 150px;
    display: flex;
    justify-content: center;
  }
  .loader {
    border: 8px solid #f3f3f3;
    border-radius: 50%;
    border-top: 8px solid #bbb;
    width: 100px;
    height: 100px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
