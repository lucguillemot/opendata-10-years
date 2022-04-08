<!--
  @component
  Generates an SVG map using the `geoPath` function from [d3-geo](https://github.com/d3/d3-geo).
 -->
<script>
  import { getContext, createEventDispatcher } from "svelte";
  import { geoPath } from "d3-geo";
  import { raise } from "layercake";

  const { data, width, height, zGet } = getContext("LayerCake");

  /** @type {Function} projection - A D3 projection function. Pass this in as an uncalled function, e.g. `projection={geoAlbersUsa}`. */
  export let projection;

  /** @type {Number} [fixedAspectRatio] - By default, the map fills to fit the $width and $height. If instead you want a fixed-aspect ratio, like for a server-side rendered map, set that here. */
  export let fixedAspectRatio = undefined;

  /** @type {String} [fill] - The shape's fill color. By default, the fill will be determined by the z-scale, unless this prop is set. */
  export let fill = "white";

  /** @type {String} [stroke='#333'] - The shape's stroke color. */
  export let stroke = "#333";

  /** @type {Number} [strokeWidth=0.5] - The shape's stroke width. */
  export let strokeWidth = 0.5;

  /** @type {Array} [features] - A list of GeoJSON features. Use this if you want to draw a subset of the features in `$data` while keeping the zoom on the whole GeoJSON feature set. By default, it plots everything in `$data.features` if left unset. */
  export let features = undefined;

  $: fitSizeRange = fixedAspectRatio ? [100, 100 / fixedAspectRatio] : [$width, $height];

  $: projectionFn = projection().fitSize(fitSizeRange, $data);
  $: geoPathFn = geoPath().projection(projectionFn);
</script>

<g>
  {#each features || $data.features as feature}
    <path class="feature-path" {fill} {stroke} stroke-width={strokeWidth} d={geoPathFn(feature)} />
  {/each}
</g>
