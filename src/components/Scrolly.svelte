<script>
  export const ssr = false;

  import { setup } from "$components/scrolly-setup.js";

  // import Map from "$components/map/Map.svelte";
  import Section from "$components/Section.svelte";
  import doc from "$data/doc.json";
  import MapSvg from "$components/map/Map.svg.svelte";
  import MapLabels from "$components/map/MapLabels.html.svelte";
  import chCombined from "$data/geo/ch-combined.json";
  import chCities from "$lib/data/geo/ch-cities.json";

  import { geoMercator } from "d3-geo";
  import { LayerCake, Svg, Html } from "layercake";
  import { feature } from "topojson-client";

  import scrollama from "scrollama";
  import { onMount } from "svelte";

  let selected = null;
  let steps = doc.years;
  let activeStep = steps[0];

  const projection = geoMercator;
  const cantons = feature(chCombined, chCombined.objects.cantons);
  const lakes = feature(chCombined, chCombined.objects.lakes);
  const cities = feature(chCities, chCities.objects.cities);

  const handleStepEnter = (response) => {
    selected = response.index;
    activeStep = steps[response.index];
  };

  onMount(() => {
    const scroller = scrollama();
    scroller
      .setup({
        step: `div .step-year`,
        // debug: true,
        offset: 0.5
      })
      .onStepEnter(handleStepEnter);
  });

  const labels = chCities.objects.cities.geometries.map((city) => ({
    name: city.properties.name,
    coord: [city.properties.long, city.properties.lat]
  }));
  $: confCity = labels.filter((city) => city.name === setup[activeStep.year].conference);
</script>

<svelte:window />

<Section id="years-scrolly">
  <div id="scrolly">
    <figure>
      {activeStep.year}
      <!-- {activeStep.conference} -->

      <!-- <Map {yearConfCity} /> -->
      <div class="map-container">
        <LayerCake data={cantons}>
          <Svg>
            <MapSvg {projection} features={cantons.features} />
            <MapSvg {projection} features={lakes.features} fill="aliceblue" />
            <!-- <MapSvg {projection} features={confCity.features} fill="red" /> -->
          </Svg>

          <Html pointerEvents={false}>
            <MapLabels
              {projection}
              features={confCity}
              getCoordinates={(d) => d.coord}
              getLabel={(d) => d.name}
            />
          </Html>
        </LayerCake>
      </div>
    </figure>

    <div class="scroll-area">
      {#each steps as step, i}
        <div class="step step-year" class:selected={selected === i}>
          {#if step.year}
            <div class="step-title">
              {@html step.year}
            </div>
          {/if}
          {#each step.texts as content}
            {#if content.type === "paragraph"}
              <p class="step-text">{@html content.text}</p>
            {:else if content.type === "quote"}
              <quote class="step-text">{@html content.text}</quote>
            {:else if content.type === "image"}
              <img class="step-image" src="/assets/images/{content.src}" alt="" />
            {/if}
          {/each}
        </div>
      {/each}
    </div>
  </div>
</Section>

<style>
  #scrolly {
    position: relative;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
  figure {
    position: -webkit-sticky;
    position: sticky;

    width: 100%;
    height: 80vh;

    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    left: 0;
    top: 0;

    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    z-index: 0;
  }
  .map-container {
    width: 100%;
    height: 100%;
  }
  .scroll-area {
    position: relative;
  }
  h3 {
    font-size: 2rem;
    line-height: 1.4;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 500;
  }

  .step {
    width: 100%;
    /* max-width: 24rem; */
    margin: 30rem auto 2rem auto;
    padding: 1rem 1rem;

    opacity: 0.3;
    transition: opacity 400ms;

    pointer-events: all;
    position: relative;
  }
  .step:first-child {
    margin-top: 15rem;
  }
  .step:last-child {
    margin-bottom: 100vh;
  }
  .selected {
    opacity: 1;
  }
  .step-title {
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 1.5rem;
    border-bottom: 3px solid var(--color-highlight);
    padding: 1rem 0;
  }
  .step-text {
    font-size: 1.3rem;
    padding: 1rem 0;
    margin: 5rem 0;
  }
  @media only screen and (min-width: 30em) {
    h3 {
      font-size: 3rem;
    }
  }
  @media only screen and (min-width: 50em) {
    .step {
      margin: 50rem auto 2rem auto;
    }
  }
</style>
