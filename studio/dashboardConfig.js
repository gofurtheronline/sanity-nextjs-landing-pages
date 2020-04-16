export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e981ad12be849c4afdd3c49',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5wgm3xso',
                  apiId: 'ac15925f-52ae-4a32-9325-4d5fa4708752'
                },
                {
                  buildHookId: '5e981ad288903bd8fd6c5fba',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-argehttw',
                  apiId: '73e9c49a-7d0d-4784-954c-b30b84e59d5d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gofurtheronline/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-argehttw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
