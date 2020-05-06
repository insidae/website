const config = {
  siteTitle: "insidae.com", // Site title.
  siteTitleShort: "insidae", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "insidae.com, home of Matt Thomas", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://www.insidae.com", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "My current personal website. Serves as a portfolio, journal, and introduction to who I am.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  googleAnalyticsID: "", // GA tracking ID.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Thoughts", // Default category for posts.
  dateFromFormat: "DD/MM/YYYY", // Date format used in the frontmatter.
  dateFormat: "MMMM Do, YYYY", // Date format for display.
  userName: "Matt", // Username to display in the author segment.
  userEmail: "matt@insidae.com", // Email used for RSS feed's author segment
  userTwitter: "lycanstrife", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "London, UK", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Tall, friendly, London-based web developer with a love for travel, good design, and all things geeky. Enjoys the delusion that he's eloquent and witty.", // User description to display in the author segment.
  menuLinks: [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/about/',
    },
    {
      name: 'Work',
      link: '/work/',
    },
    {
      name: 'Journal',
      link: '/journal/',
    }
  ],
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/insidae",
      iconClassName: "fa fa-github"
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/insidae",
      iconClassName: "fa fa-linkedin"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/lycanstrife",
      iconClassName: "fa fa-twitter"
    }
  ],
  copyright: "Copyright © 2020. Matt Thomas", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
