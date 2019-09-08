module.exports = {
  siteMetadata: {
    title: `KoreaBlogg`,
    description: `En story om tre män och en dröm.`,
    author: `Sebastian Anderberg, Henrik Hallgren och Fabian Sörqvist`,
  },
    plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-2888989-6",
      },
    },        
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
          plugins: [
      {
        resolve: "gatsby-remark-embed-video",
        options: {
          width: 800,
          ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
          height: 400, // Optional: Overrides optional.ratio
          related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
          noIframeBorder: true //Optional: Disable insertion of <style> border: 0
        }
      },              
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 980,
                quality: 95,
                showCaptions: true,
                withWebp: true,
            },
          },
        ],
      },
    },    
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
      
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-typescript`,    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
