<script>
  const url = ``;

  const links = [
    { name: "about", url: "https://opendata.ch/about/" },
    { name: "events", url: "https://opendata.ch/events/" },
    { name: "news", url: "https://opendata.ch/news/" },
    {
      name: "contribute",
      url: "https://opendata.ch/support-us/"
    },
    { name: "imprint", url: "https://opendata.ch/imprint/" }
  ];
</script>

<footer>
  <div class="wrapper">
    <section class="contact">
      <div class="title">Contact</div>
      <p>
        Visit <a href="https://opendata.ch/contact/">Contact</a> for all inquiries in German, French
        and English.
      </p>
      <p>Opendata.ch <br />4000 Basel</p>
    </section>

    <section class="links">
      <div class="title">Links</div>

      <ul>
        {#each links as link}
          <li>
            <a href={link.url}>
              <span>{link.name}</span>
            </a>
          </li>
        {/each}
      </ul>
    </section>

    <section class="socialLinks">
      <div class="title">Social</div>
      <div class="socialAndDonate">
        <ul class="socials">
          <li>
            <a
              rel="noopener"
              target="_blank"
              title="Twitter"
              href="https://twitter.com/OpendataCH/"
            >
              <svg class="icon">
                <use xlink:href="#social--twitter" />
              </svg>
            </a>
          </li>
          <li>
            <a
              rel="noopener"
              target="_blank"
              title="Linkedin"
              href="https://www.linkedin.com/company/opendatach/"
            >
              <svg class="icon">
                <use xlink:href="#social--linkedin" />
              </svg>
            </a>
          </li>
          <li>
            <a
              rel="noopener"
              target="_blank"
              title="Youtube"
              href="https://www.youtube.com/channel/UC0pNMvPxgwuPccA9ARHNxEg/playlists"
            >
              <svg class="icon">
                <use xlink:href="#social--youtube" />
              </svg>
            </a>
          </li>
          <li>
            <a
              rel="noopener"
              target="_blank"
              title="Mastodon"
              href="https://mastodon.social/@OpendataCH"
            >
              <svg class="icon">
                <use xlink:href="#social--mastodon" />
              </svg>
            </a>
          </li>
        </ul>
        <div>
          <a
            class="Footer--button"
            target="_blank"
            title="Donate"
            href="https://opendata.ch/donation/"
          >
            Donate
          </a>
        </div>
      </div>
    </section>
    <symbol viewBox="0 0 56.693 56.693" id="social--twitter" xmlns="http://www.w3.org/2000/svg"
      ><path
        fill="currentColor"
        d="M28.348 5.157c-13.6 0-24.625 11.027-24.625 24.625 0 13.6 11.025 24.623 24.625 24.623s24.623-11.023 24.623-24.623c0-13.598-11.024-24.625-24.623-24.625zm12.404 19.66c.013.266.018.533.018.803 0 8.201-6.242 17.656-17.656 17.656a17.572 17.572 0 01-9.513-2.787c.486.057.979.086 1.48.086a12.45 12.45 0 007.707-2.656 6.214 6.214 0 01-5.796-4.311 6.06 6.06 0 001.167.111c.566 0 1.114-.074 1.635-.217a6.21 6.21 0 01-4.979-6.084l.001-.08a6.184 6.184 0 002.811.777 6.204 6.204 0 01-2.761-5.166c0-1.137.306-2.204.84-3.12a17.618 17.618 0 0012.792 6.483 6.206 6.206 0 016.045-7.619 6.2 6.2 0 014.529 1.959 12.395 12.395 0 003.941-1.506 6.223 6.223 0 01-2.73 3.433 12.407 12.407 0 003.565-.977 12.537 12.537 0 01-3.096 3.215z"
      /></symbol
    >
    <symbol
      fill="currentColor"
      viewBox="0 0 56.693 56.693"
      id="social--linkedin"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        d="M28.347 5.155c-13.6 0-24.625 11.025-24.625 24.625 0 13.602 11.025 24.625 24.625 24.625 13.598 0 24.623-11.023 24.623-24.625 0-13.599-11.026-24.625-24.623-24.625zm13.715 36.586c0 1.096-.91 1.982-2.031 1.982H16.613c-1.123 0-2.031-.887-2.031-1.982V18.052c0-1.094.908-1.982 2.031-1.982H40.03c1.121 0 2.031.889 2.031 1.982v23.689z"
      /><path
        d="M33.099 26.441c-2.201 0-3.188 1.209-3.74 2.061v.041h-.027a.223.223 0 00.027-.041v-1.768h-4.15c.055 1.17 0 12.484 0 12.484h4.15v-6.973c0-.375.027-.744.137-1.012.301-.744.984-1.52 2.129-1.52 1.504 0 2.104 1.146 2.104 2.824v6.68h4.15V32.06c-.001-3.836-2.05-5.619-4.78-5.619zm-12.235-5.729c-1.419 0-2.349.934-2.349 2.159 0 1.197.9 2.158 2.294 2.158h.027c1.447 0 2.348-.961 2.348-2.158-.027-1.225-.9-2.159-2.32-2.159zm-2.102 6.022h4.151v12.484h-4.151z"
      /></symbol
    >
    <symbol
      fill="currentColor"
      class="kbi kbi-mastodon"
      viewBox="0 0 16 16"
      id="social--mastodon"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 01-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z"
      /></symbol
    >
    <symbol
      fill="currentColor"
      viewBox="0 0 56.693 56.693"
      id="social--youtube"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        d="M43.911 28.21H12.782c-4.948 0-8.959 4.015-8.959 8.962v7.201c0 4.947 4.011 8.961 8.959 8.961h31.129c4.947 0 8.959-4.014 8.959-8.961v-7.201c0-4.947-4.012-8.962-8.959-8.962zm-24.589 5.606h-2.894v14.38h-2.796v-14.38H10.74V31.37h8.582v2.446zm8.175 14.38h-2.48v-1.36c-.461.503-.936.887-1.432 1.146-.496.27-.975.396-1.441.396-.576 0-1.004-.183-1.297-.555-.288-.371-.435-.921-.435-1.664V35.782h2.48v9.523c0 .294.055.505.154.636.107.135.277.197.51.197.18 0 .412-.086.691-.26a3.35 3.35 0 00.77-.668v-9.429h2.48v12.415zm9.004-2.563c0 .877-.195 1.551-.584 2.021-.387.47-.953.701-1.686.701-.488 0-.922-.088-1.299-.27a3.189 3.189 0 01-1.061-.841v.951h-2.51V31.37h2.51v5.419c.336-.375.691-.666 1.062-.861.379-.199.76-.295 1.146-.295.785 0 1.383.262 1.797.791.416.529.623 1.304.623 2.32v6.889zm8.603-3.345h-4.746v2.339c0 .652.08 1.106.242 1.359.166.254.445.378.842.378.412 0 .697-.107.863-.321.16-.216.246-.686.246-1.416v-.565h2.553v.637c0 1.272-.309 2.231-.936 2.878-.617.641-1.547.959-2.783.959-1.113 0-1.99-.339-2.627-1.021-.635-.678-.959-1.619-.959-2.815v-5.576c0-1.073.354-1.956 1.057-2.633.701-.677 1.604-1.015 2.715-1.015 1.137 0 2.01.313 2.619.941.609.629.914 1.529.914 2.706v3.165z"
      /><path
        d="M41.466 37.646c-.396 0-.678.111-.85.343-.176.218-.258.591-.258 1.112v1.255h2.193v-1.255c0-.521-.088-.895-.262-1.112-.167-.231-.446-.343-.823-.343zm-8.557-.042c-.176 0-.354.039-.525.12-.174.079-.344.21-.512.38v7.733c.199.2.396.354.588.442.191.085.389.133.6.133.305 0 .527-.088.67-.266.141-.176.213-.457.213-.854v-6.411c0-.422-.084-.738-.26-.955-.182-.214-.44-.322-.774-.322zM16.858 23.898h3.144v-7.69L23.663 5.36h-3.196l-1.946 7.41h-.198L16.28 5.36h-3.167l3.745 11.194zm11.065.345c1.27 0 2.266-.333 2.992-.999.721-.669 1.082-1.582 1.082-2.752v-7.064c0-1.041-.369-1.898-1.104-2.559-.74-.659-1.688-.991-2.844-.991-1.27 0-2.281.314-3.033.941-.75.627-1.127 1.468-1.127 2.531v7.088c0 1.163.367 2.083 1.1 2.773.733.687 1.713 1.032 2.934 1.032zm-1.158-10.997a.93.93 0 01.316-.725c.217-.184.492-.273.834-.273.369 0 .668.089.896.273.227.188.34.428.34.725v7.451c0 .365-.111.655-.336.864-.223.21-.523.313-.9.313-.369 0-.654-.1-.854-.31-.197-.205-.297-.493-.297-.868v-7.45zm9.449 10.852c.525 0 1.064-.15 1.619-.438.561-.292 1.098-.719 1.609-1.276v1.515h2.793V10.224h-2.793v10.38c-.26.297-.549.541-.859.735-.316.192-.576.288-.781.288-.262 0-.455-.072-.568-.221-.115-.143-.18-.377-.18-.698V10.224h-2.789v11.429c0 .815.164 1.424.488 1.828.33.41.812.617 1.461.617z"
      /></symbol
    >
  </div>
</footer>

<style>
  footer {
    background-color: #f9f9f9;

    font-family: var(--sans);
    font-size: 1.125rem;

    padding: 3em 1em;
    margin-top: 3em;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    max-width: 68rem;
  }
  section {
    margin-bottom: 2rem;
  }
  .title {
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 1.4;
    letter-spacing: 0.04em;
  }

  .socialAndDonate {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1em;
  }
  .Footer--button {
    width: 80px;
    height: 80px;
    border-radius: 200px;
    background: #e61414;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.90909rem;
    line-height: 1.27273rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-size: 17.6px;
    line-height: 24px;
    /* position: absolute;
    right: 1rem;
    transform: translateY(-50%);
    transform-origin: 50% 50%; */
  }

  p {
    margin: 0 0 1.125rem 0;
    line-height: 1.4;
  }
  .links ul,
  .socialLinks ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .links li,
  .socials li {
    display: flex;
    padding: 0 2rem 0.3rem 0;
    text-transform: capitalize;
  }

  .links a,
  .socials a {
    display: flex;
    border: none;
    align-items: center;
    text-decoration: underline;
  }

  .links a:hover {
    text-decoration: none;
  }

  .links span,
  .socials span {
    margin-left: 0;
  }

  .socials .icon {
    width: 2rem;
    height: 2rem;
  }

  @media only screen and (min-width: 30em) {
    footer {
      padding: 3rem 2rem 1rem 2rem;
    }
    .wrapper {
      flex-direction: row;
      margin: 0 auto;
    }
    p {
      max-width: 16em;
      font-size: 1.25rem;
    }
    .title {
      font-size: 1.25rem;
      margin-bottom: 2rem;
    }
    .contact {
      width: 40%;
    }
    .links {
      width: 20%;
    }

    .socialLinks {
      width: 40%;
    }
    .links ul,
    .socialLinks ul {
      flex-direction: column;
      font-size: 1.25rem;
    }
  }
  .Footer--button {
    width: 125px;
    height: 125px;
    font-size: 1.375rem;
    /* transform: translate(-100%, -100%); */
    /* transform: translateY(-100%); */
  }

  @media only screen and (min-width: 50em) {
  }
</style>
