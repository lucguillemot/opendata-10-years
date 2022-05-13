<script>
  export const ssr = false;
  import { setup } from "$components/scrolly-setup.js";
  import Section from "$components/Section.svelte";
  import doc from "$data/doc.json";
  import MapSvg from "$components/map/Map.svg.svelte";
  import ConfLabels from "$lib/components/map/ConfLabels.html.svelte";
  import chCombined from "$data/geo/ch-combined.json";
  import chCities from "$lib/data/geo/ch-cities.json";

  import { geoMercator } from "d3-geo";
  import { LayerCake, Svg, Html } from "layercake";
  import { feature } from "topojson-client";

  import scrollama from "scrollama";
  import { onMount } from "svelte";
  import HackLabels from "./map/HackLabels.html.svelte";

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
        offset: 0.6
      })
      .onStepEnter(handleStepEnter);
  });

  // HTML LABELS
  const labels = chCities.objects.cities.geometries.map((city) => ({
    name: city.properties.name,
    coord: [city.properties.long, city.properties.lat],
    offset: city.properties.offset,
    offsetConf: city.properties.offset2
  }));
  $: confCity = labels.filter((city) => city.name === setup[activeStep.year].conference);

  $: hackTopics = labels
    .filter((city) => setup[activeStep.year].hackathon.map((hack) => hack.city).includes(city.name))
    .map((city) => ({
      topic: setup[activeStep.year].hackathon.find((hackCity) => hackCity.city === city.name).topic,
      ...city
    }));

  $: onlineHackathons = setup[activeStep.year].hackathon.filter((hack) => hack.city === "Online");

  // TOPOJSON
  $: hackDots = cities.features.filter((d) =>
    hackTopics.map((d) => d.name).includes(d.properties.name)
  );

  $: confCityDot =
    confCity.length > 0
      ? cities.features.filter((d) => confCity[0].name === d.properties.name)
      : [];
</script>

<svelte:window />

<Section id="years-scrolly" fullBleed>
  <div class="wrapper">
    <div id="scrolly">
      <figure class="map">
        <div class="map-container">
          <LayerCake data={cantons}>
            {#if setup[activeStep.year].conference === "Online"}
              <div class="online">Online</div>
            {/if}
            {#if onlineHackathons.length > 0}
              {#each onlineHackathons as hack, i}
                <div class="online-hackathon" style="top: {56 + 20 * i}px">
                  + {hack.topic}
                </div>
              {/each}
            {/if}
            <Svg>
              <MapSvg {projection} features={cantons.features} stroke="#ddd" />
              <MapSvg {projection} features={country.features} stroke="#888" fill="none" />
              <MapSvg {projection} features={lakes.features} fill="aliceblue" stroke="#ADD8FE" />
              <MapSvg
                {projection}
                features={confCityDot}
                fill={"#e61414"}
                strokeWidth={0}
                radius={5}
              />
              <MapSvg
                {projection}
                features={hackDots}
                fill={"#1d61db"}
                strokeWidth={0}
                radius={3}
              />
            </Svg>

            <Html pointerEvents={false}>
              <ConfLabels
                {projection}
                features={confCity}
                getCoordinates={(d) => d.coord}
                getCity={(d) => d.name}
                getOffset={(d) => d.offsetConf}
                opacity={1}
                color="#e61414"
              />

              <HackLabels
                {projection}
                features={hackTopics}
                getCoordinates={(d) => d.coord}
                getCity={(d) => d.name}
                getTopic={(d) => d.topic}
                getOffset={(d) => d.offset}
                color="#1d61db"
              />
            </Html>
          </LayerCake>
        </div>
        <div class="legend">
          {activeStep.year}
          <div class="legend-conference">Main conference</div>
          <div class="legend-hackathon">Hackathons</div>
        </div>
      </figure>

      <div class="scroll-area">
        {#each steps as step, i}
          <div class="step step-year" class:selected={selected === i}>
            <h2 class="step-title">
              {@html step.year}
            </h2>

            {#each step.texts as content}
              {#if content.type === "paragraph"}
                <p class="step-text">{@html content.text}</p>
              {:else if content.type === "quote"}
                <figure class="quote">
                  <blockquote>
                    <p>
                      {@html content.text}
                    </p>
                  </blockquote>
                  <cite><a href={content.source_url}>- {@html content.source_label}</a></cite>
                </figure>
              {:else if content.type === "image"}
                <img class="step-image" src="/assets/images/{content.src}" alt="" />
              {/if}
            {/each}
          </div>
        {/each}
      </div>
    </div>
  </div>
</Section>

<style>
  .wrapper {
    max-width: 126rem;
    margin: 0 auto;
  }
  #scrolly {
    position: relative;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
  }

  /* FIGURE */
  figure.map {
    position: -webkit-sticky;
    position: sticky;

    width: 100%;
    height: 100vh;

    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
    height: 60%;
  }
  .online {
    position: absolute;
    top: 0;
    left: 0;

    color: var(--color-highlight);
    font-size: 2.5rem;
  }
  .online-hackathon {
    position: absolute;
    left: 0;

    color: var(--color-secondary);
    font-size: 1rem;
  }
  .legend {
    align-self: flex-start;

    /* background: gold; */
  }
  .legend-conference {
    color: var(--color-highlight);
    font-size: 1rem;
  }
  .legend-hackathon {
    color: var(--color-secondary);
    font-size: 1rem;
  }

  /* SCROLLY */
  .scroll-area {
    position: relative;
  }

  .step {
    width: 100%;
    font-family: "m3light", Arial, Helvetica, sans-serif;
    margin: 20rem auto 2rem auto;
    padding: 1rem 1rem;

    opacity: 0.3;
    transition: opacity 400ms;

    pointer-events: all;
    position: relative;
  }
  .step:first-child {
    margin-top: 16rem;
  }
  .step:last-child {
    margin-bottom: 100vh;
  }
  .selected {
    opacity: 1;
  }
  .step-title {
    font-family: "m3", Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 2rem;
    text-align: center;
    padding: 1rem 0;
    background: rgba(255, 255, 255, 1);
  }
  .step-title::after {
    display: block;
    content: "";
    background: var(--color-highlight);
    height: 3px;
    width: 100px;
    margin: 0.5rem auto 1rem;
    border-radius: 2px;
  }
  .step-text {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    background: rgba(255, 255, 255, 0.8);
    padding: 1rem;
    border-radius: 2px;
  }
  .step-text:not(:first-of-type) {
    margin: 10rem 0;
  }
  .step-image {
    margin: 10rem 0;
  }

  figure.quote {
    background: #efefef;
    border-radius: 4px;
    padding: 1rem;
    margin: 10rem 0;
  }
  blockquote {
    margin: 0;
  }

  blockquote p {
    font-family: "m3light_italic", Arial, Helvetica, sans-serif;
    font-size: 1.3rem;
    margin: 0 0 0.3rem 0;
  }

  blockquote p::before {
    content: "\201C";
  }

  blockquote p::after {
    content: "\201D";
  }

  @media only screen and (min-width: 50em) {
    .step {
      margin: 50rem auto 2rem auto;
    }
    #scrolly {
      grid-template-columns: 2fr 1fr;
    }
    figure.map {
      justify-content: center;
      padding: 1rem;
    }
    .map-container {
      padding: 2rem;
      height: 80%;
    }

    .step-text {
      background: transparent;
      padding: 0;
    }
    .step-text:not(:first-of-type) {
      margin: 1rem 0;
    }
    .step-image {
      margin: 0 0 1rem 0;
    }

    figure.quote {
      margin: 1rem 0;
    }
  }
</style>
