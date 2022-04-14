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

<Section>
  <h1>{@html doc.future_title}</h1>
  <p>{@html doc.future_text}</p>
</Section>

<style>
  h1 {
    font-family: "m3regular";
    line-height: 1.2;
    text-align: center;
    font-size: 3.5rem;
  }
  p {
    font-family: "m3light";
    font-size: 1.5rem;
    line-height: 1.4;
    font-weight: 300;
    text-align: center;
    margin: 3rem 0;
  }

  @media only screen and (min-width: 30em) {
    h1 {
      font-size: 5rem;
    }
    p {
      font-size: 2rem;
    }
  }

  @media only screen and (min-width: 50em) {
    h1 {
      font-size: 6rem;
    }
  }
</style>
