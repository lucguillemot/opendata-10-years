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
  const country = feature(chCombined, chCombined.objects.country);
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
  $: hackCities = labels.filter((city) =>
    setup[activeStep.year].hackathon.map((hack) => hack.city).includes(city.name)
  );
</script>

<svelte:window />

<Section id="years-scrolly" fullBleed>
  <div id="scrolly">
    <figure>
      <div class="map-container">
        <LayerCake data={cantons}>
          {#if setup[activeStep.year].conference === "Online"}
            <div class="online">Online</div>
          {/if}
          <Svg>
            <MapSvg {projection} features={cantons.features} stroke="#ddd" />
            <MapSvg {projection} features={country.features} stroke="black" fill="none" />
            <MapSvg {projection} features={lakes.features} fill="aliceblue" stroke="#ADD8FE" />
            <!-- <MapSvg {projection} features={confCity.features} fill="red" /> -->
          </Svg>

          <Html pointerEvents={false}>
            <MapLabels
              {projection}
              features={labels}
              getCoordinates={(d) => d.coord}
              getLabel={(d) => d.name}
              fontSize={"1.2rem"}
              opacity={0.5}
              color="rgb(215, 215, 215)"
            />
            <MapLabels
              {projection}
              features={confCity}
              getCoordinates={(d) => d.coord}
              getLabel={(d) => d.name}
              fontSize={"3rem"}
              opacity={1}
              color="#e61414"
            />
            <MapLabels
              {projection}
              features={hackCities}
              getCoordinates={(d) => d.coord}
              getLabel={(d) => d.name}
              fontSize={"1.2rem"}
              color="#1d61db"
            />
          </Html>
        </LayerCake>
      </div>
      <div class="legend">
        <div class="legend-conference">Main conference</div>
        <div class="legend-hackathon">Hackathons</div>
      </div>
    </figure>

    <div class="scroll-area">
      {#each steps as step, i}
        <div class="step step-year" class:selected={selected === i}>
          {#if step.year}
            <h2 class="step-title">
              {@html step.year}
            </h2>
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
    height: 100vh;

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

    /* background: orange; */
  }
  .map-container {
    width: 100%;
    height: 80%;
  }
  .online {
    position: absolute;
    top: 0;
    left: 0;

    color: var(--color-highlight);
    font-size: 3rem;
  }
  .legend {
    align-self: flex-start;
  }
  .legend-conference {
    color: var(--color-highlight);
    font-size: 1rem;
  }
  .legend-hackathon {
    color: var(--color-secondary);
    font-size: 1rem;
  }

  .scroll-area {
    position: relative;
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
    font-size: 2rem;
    text-align: center;
    padding: 1rem 0;
  }
  .step-title::after {
    display: block;
    content: "";
    background: var(--color-highlight);
    height: 3px;
    width: 100px;
    margin: 1.5rem auto 2rem;
    border-radius: 2px;
  }
  .step-text {
    font-size: 1.3rem;
    padding: 1rem 0;
    margin: 5rem 0;
  }
  @media only screen and (min-width: 30em) {
  }
  @media only screen and (min-width: 50em) {
    .step {
      margin: 50rem auto 2rem auto;
    }
  }
</style>
