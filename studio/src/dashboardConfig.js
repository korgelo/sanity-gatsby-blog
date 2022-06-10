export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62a353339052f84f068c3376",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-y5ks524a",
                  apiId: "8d82bdff-945f-44b3-8421-264cfb334d70",
                },
                {
                  buildHookId: "62a35334b986f74a4b0f3e63",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-rmcjpeu3",
                  apiId: "9e64079b-8846-4d86-975a-043889591d2a",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/korgelo/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-rmcjpeu3.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
