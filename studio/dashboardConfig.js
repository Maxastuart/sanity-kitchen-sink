export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601c5e9b6cc7a7818d00e2c7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-7wojfgsv',
                  apiId: 'fd10f3ee-07fb-4308-820b-0b3ec4b9df46'
                },
                {
                  buildHookId: '601c5e9bdc117aa5e0feacb4',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ok1mm2gi',
                  apiId: 'aac97d35-d461-4a5e-b4a1-db168aec0a65'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Maxastuart/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ok1mm2gi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
