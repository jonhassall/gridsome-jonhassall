<template>
  <Layout>
    <h1>Emojis</h1>
    <p>This is the emoji page.</p>
    <p>Emoji list is retrieved from local data using GraphML:</p>
    <ul v-for="edge in $page.allEmoji.edges" :key="edge.node.name">
      <li>{{ edge.node.content }}</li>
    </ul>
  </Layout>
</template>

<page-query>
query {
  allEmoji {
    edges {
      node {
        name
        content
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Emojis'
  }
}
</script>
