<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      This is a test site using Gridsome static site generator.
    </p>

    <p>
      Go to <g-link to="/emojis">Emojis</g-link> to see a dynamic list of emojis from local data retrieved with GraphML.
    </p>

    <p>
      Go to <g-link to="/external">External Data</g-link> to see a list of countries from an external API retrieved with GraphML.
    </p>
    
    <p>
      Go to <g-link to="https://github.com/jonhassall/gridsome-jonhassall">Github</g-link> to see the source.
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
