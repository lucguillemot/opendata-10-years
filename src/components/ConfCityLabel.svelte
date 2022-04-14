<script>
  export let city = "";
  export let offset = "top-center";

  const getTranslation = (offset) => {
    switch (offset) {
      case "top-left":
        return "translate(-50%, -55%)";
      case "top-center":
        return "translate(0, -55%)";
      case "top-right":
        return "translate(55%, -55%)";
      case "bottom-right":
        return "translate(65%, 25%)";
      case "bottom-center":
        return "translate(0, 75%)";
      case "bottom-left":
        return "translate(-50%, 75%)";
      case "middle-right":
        return "translate(63%, -75%)";
      default:
        "translate(0, -55%)";
    }
  };
</script>

<div class="wrapper" style="transform: {getTranslation(offset)};">
  <span style="font-weight: 600;">{city}</span>
</div>

<style>
  .wrapper {
    font-size: 0.5rem;
    line-height: 1;
  }
  @media only screen and (min-width: 30em) {
    .wrapper {
      font-size: 1.5rem;
    }
  }
</style>
