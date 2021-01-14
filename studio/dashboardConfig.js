export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5fffa2e0ae7b49008cf7f2f4',
                  title: 'Sanity Studio',
                  name: 'jimmy-portfolio-studio',
                  apiId: 'c18a5fc2-2c1c-45f8-bc91-96709506d60c'
                },
                {
                  buildHookId: '5fffa2e0f74aab00ba13bd2b',
                  title: 'Portfolio Website',
                  name: 'jimmy-portfolio-web',
                  apiId: '28092e75-e9e7-4961-b535-9f44c2997e6b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ploogo/jimmy-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://jimmy-portfolio-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
