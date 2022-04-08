<script>
  import MapSvg from "$components/map/Map.svg.svelte";
  // import MapLabels from "$components/map/MapLabels.html.svelte";
  import chCombined from "$data/geo/ch-combined.json";
  import { geoMercator } from "d3-geo";
  import { LayerCake, Svg } from "layercake";
  import { feature } from "topojson-client";

  const cantons = feature(chCombined, chCombined.objects.cantons);
  const lakes = feature(chCombined, chCombined.objects.lakes);

  const projection = geoMercator;
</script>

<div class="chart-container">
  <LayerCake data={cantons}>
    <Svg>
      <MapSvg {projection} features={cantons.features} />
      <MapSvg {projection} features={lakes.features} fill="aliceblue" />
    </Svg>

    <!--   <Html pointerEvents={false}>
      <MapLabels
        {projection}
        features={labelsToDisplay}
        getCoordinates={(d) => d[labelCoordinatesKey]}
        getLabel={(d) => d[labelNameKey]}
      />
    </Html> -->
  </LayerCake>
</div>

<style>
  /*
    The wrapper div needs to have an explicit width and height in CSS.
    It can also be a flexbox child or CSS grid element.
    The point being it needs dimensions since the <LayerCake> element will
    expand to fill it.
  */
  .chart-container {
    width: 100%;
    height: 100%;
  }
</style>
