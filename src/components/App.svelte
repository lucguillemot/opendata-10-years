<script>
  import Section from "./Section.svelte";
  import doc from "$data/doc.json";
</script>

<Section>
  <h1>{@html doc.title}</h1>
</Section>

<style>
  h1 {
    font-family: "m3regular";
    font-size: 5.625rem;
    line-height: 1.2;
  }
</style>
