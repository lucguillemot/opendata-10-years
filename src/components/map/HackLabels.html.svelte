<!--
  @component
  Adds HTML text labels based features in the data or a custom GeoJSON Feature Collection.
 -->
<script>
  import { getContext } from "svelte";
  import HackCityLabel from "../HackCityLabel.svelte";

  const { data, width, height } = getContext("LayerCake");

  /** @type {Function} projection - A D3 projection function. Pass this in as an uncalled function, e.g. `projection={geoAlbersUsa}`. */
  export let projection;

  /** @type {Number} [fixedAspectRatio] - By default, the map fills to fit the $width and $height. If instead you want a fixed-aspect ratio, like for a server-side rendered map, set that here. */
  export let fixedAspectRatio = undefined;

  /** @type {Function} getLabel - An accessor function to get the field to display. */
  export let getCity;
  export let getTopic;
  export let getOffset;

  /** @type {Function} [getCoordinates=d => d.geometry.coordinates] - An accessor function to get the `[x, y]` coordinate field. Defaults to a GeoJSON feature format. */
  export let getCoordinates;

  /** @type {Array} [features] - A list of labels as GeoJSON features. If unset, the plotted features will defaults to those in `$data.features`, assuming this field a list of GeoJSON features. */
  export let features = undefined;

  export let fontSize = "1rem";
  export let opacity = 1;
  export let color = "black";

  $: fitSizeRange = fixedAspectRatio ? [100, 100 / fixedAspectRatio] : [$width, $height];

  $: projectionFn = projection().fitSize(fitSizeRange, $data);

  $: units = fixedAspectRatio ? "%" : "px";
</script>

<div class="map-labels" style:aspect-ratio={fixedAspectRatio ? 1 : null}>
  {#each features || $data.features as d}
    {@const coords = projectionFn(getCoordinates(d))}
    <div
      class="map-label"
      style="
      left: {coords[0]}{units};
      top: {coords[1]}{units};
      font-size: {fontSize};
      opacity: {opacity};
      color: {color};
    "
    >
      <HackCityLabel city={getCity(d)} topic={getTopic(d)} offset={getOffset(d)} />
    </div>
  {/each}
</div>

<style>
  .map-labels {
    pointer-events: none;
    position: relative;
  }
  .map-label {
    position: absolute;
    text-align: center;
    font-size: 8px;
    color: var(--color-highlight);
    margin-top: -3px;
    transform: translate(-50%, -50%);
  }
</style>
