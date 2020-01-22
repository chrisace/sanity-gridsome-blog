export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5e280c521b6c5870826812c5',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-8zvshsbb',
                  apiId: 'e2ef917c-d766-4e53-aafa-473989c8f5bc'
                },
                {
                  buildHookId: '5e280c5244db5bc79929e2ea',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-xsdk8i21',
                  apiId: 'f45eec40-f60d-4bba-9c57-15b7844e4539'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chrisace/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-xsdk8i21.netlify.com', category: 'apps'}
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
