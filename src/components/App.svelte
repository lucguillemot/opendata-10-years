<script>
  import Section from "./Section.svelte";
  import doc from "$data/doc.json";
  import Years from "./Years.svelte";
</script>

<Section>
  <h1>{@html doc.title}</h1>
</Section>

<Years />

<style>
  h1 {
    font-family: "m3regular";
    font-size: 5.625rem;
    line-height: 1.2;
  }
</style>
