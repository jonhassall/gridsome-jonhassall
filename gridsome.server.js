// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {
  //Data store (local)
  api.loadSource(actions => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const emojis = actions.addCollection({
      typeName: 'Emoji'
    })

    emojis.addNode({
      name: 'Smiley Face',
      content: '😀'
    })
    emojis.addNode({
      name: 'Grinning Face',
      content: '😁'
    })
    emojis.addNode({
      name: 'Cool Face',
      content: '😎'
    })
    emojis.addNode({
      name: 'Cowboy Face',
      content: '🤠'
    })
  })

  //External API
  api.loadSource(async actions => {
    const { data } = await axios.get('https://api.covid19api.com/countries')

    const collection = actions.addCollection('Country')

    for (const item of data) {
      collection.addNode({
        country: item.Country,
        slug: item.Slug,
        iso2: item.ISO2
      })
    }
  })

api.createPages(({ createPage }) => {
  // Use the Pages API here: https://gridsome.org/docs/pages-api/
})
}
