<template>
  <div class="container">
    <div>
      <h1 class="title">{{ title }}</h1>
      <p id="requireHTTPS" class="hidden">
        {{ warningHttps }}
        <a>{{ `reload this page via HTTPS` }}</a>
      </p>

      <p>
        {{ `Make me installable, follow the` }}
        <a href="https://web.dev/codelab-make-installable/">
          {{ `instructions` }}
        </a>
        {{ `here` }}
      </p>

      <!-- Install button, hidden by default -->
      <div id="installContainer" class="hidden">
        <button id="buttonInstall" type="button">{{ install }}</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "InstallableR",
        warningHttps:
          "STOP! This page must be served over HTTPS. Please reload this page via HTTPS",
        install: "Install",
      };
    },

    mounted() {
      const divInstall = document.getElementById("installContainer");
      const buttonInstall = document.getElementById("buttonInstall");
      console.log(divInstall, buttonInstall);
      window.addEventListener("beforeinstallprompt", (event) => {
        console.log("👍", "beforeinstallprompt", event);
        // Stash the event so it can be triggered later.
        window.deferredPrompt = event;
        // Remove the 'hidden' class from the install button container
        divInstall.classList.toggle("hidden", false);
      });

      buttonInstall.addEventListener("click", async () => {
        console.log("👍", "buttonInstall-clicked");
        const promptEvent = window.deferredPrompt;
        console.log(window.deferredPrompt);
        if (!promptEvent) {
          // The deferred prompt isn't available.
          return;
        }
        // Show the install prompt.
        promptEvent.prompt();
        // Log the result
        const result = await promptEvent.userChoice;
        console.log("👍", "userChoice", result);
        // Reset the deferred prompt variable, since
        // prompt() can only be called once.
        window.deferredPrompt = null;
        // Hide the install button.
        divInstall.classList.toggle("hidden", true);
      });

      window.addEventListener("appinstalled", (event) => {
        console.log("👍", "appinstalled", event);
        // Clear the deferredPrompt so it can be garbage collected
        window.deferredPrompt = null;
      });

      /* Only register a service worker if it's supported */
      // if ("serviceWorker" in navigator) {
      //   navigator.serviceWorker.register('@/')
      // }

      /**
       * Warn the page must be served over HTTPS
       * The `beforeinstallprompt` event won't fire if the page is served over HTTP.
       * Installability requires a service worker with a fetch event handler, and
       * if the page isn't served over HTTPS, the service worker won't load.
       */
      if (window.location.protocol === "http:") {
        const requireHTTPS = document.getElementById("requireHTTPS");
        const link = requireHTTPS.querySelector("a");
        link.href = window.location.href.replace("http://", "https://");
        requireHTTPS.classList.remove("hidden");
      }
    },
  };
</script>

<style lang="scss" scoped>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

  .hidden {
    display: none !important;
  }

  #installContainer {
    position: absolute;
    bottom: 1em;
    display: flex;
    justify-content: center;
    width: 100%;
    color: #000;
  }

  #installContainer button {
    background-color: #000;
    border: 1px solid white;
    color: white;
    font-size: 1em;
    padding: 0.75em;
  }
</style>
