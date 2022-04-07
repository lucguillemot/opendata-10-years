<script>
  import Section from "./Section.svelte";
  import doc from "$data/doc.json";
  import Years from "./Years.svelte";
</script>

<Section>
  <h1>{@html doc.title}</h1>
  <p>{@html doc.introduction}</p>
</Section>

<Years />

<style>
  h1 {
    font-family: "m3regular";
    font-size: 5.625rem;
    line-height: 1.2;
    text-align: center;
  }
  p {
    font-family: "m3light";
    font-size: 2rem;
    line-height: 1.4;
    font-weight: 300;
    text-align: center;
    margin: 3rem 0;
  }
</style>
