<template>
  <Layout>
    <h1>External Data page</h1>
    <p>List of countries retrieved by GraphML:</p>

    <ul v-for="edge in sortCountries($page.allCountry.edges)" :key="edge.node.slug">
      <li>{{ edge.node.country }}</li>
    </ul>
  </Layout>
</template>

<page-query>
query {
  allCountry {
    edges {
      node {
        country
        slug
        iso2
      }
    }
  }
}
</page-query>

<script>
const _ = require('lodash')

export default {
  metaInfo: {
    title: "External data page"
  },
  methods: {
    sortCountries: function(countries) {
        console.log(countries);
        return _.orderBy(countries, '[node.country]')
    }
  }
};
</script>
