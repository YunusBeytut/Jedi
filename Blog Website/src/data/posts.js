const posts = [
  {
    id: 1,
    title: "Building a Blog Site with React",
    date: "August 10, 2025",
    desc: "In this article, we'll explain how to build a modern and mobile-friendly blog site using React.",
    img: "/blog1.png",
    content: `
React is a powerful JavaScript library for building user interfaces. 
To create a blog site, start by setting up your React environment with create-react-app or Vite.
Design your components for posts, navigation, and comments.
Make your UI responsive using CSS Flexbox or Grid.
Finally, deploy your site to services like Vercel or Netlify for live access.
    `,
  },
  {
    id: 2,
    title: "CSS Animation Techniques",
    date: "August 8, 2025",
    desc: "Enhance user experience in your blog with effective CSS animation techniques!",
    img: "/blog2.png",
    content: `
CSS animations let you bring your website to life.
Use keyframes and transitions to animate elements like buttons, images, or backgrounds.
Always keep accessibility in mind and avoid overly flashy effects.
Experiment with hover animations to guide user attention and increase engagement.
    `,
  },
  {
    id: 3,
    title: "Tips for Mobile Responsive Design",
    date: "August 5, 2025",
    desc: "Create stunning interfaces that look great on every device using responsive CSS.",
    img: "/blog3.png",
    content: `
A mobile-responsive blog ensures a great user experience on smartphones and tablets.
Use media queries to adjust layouts for different screen sizes.
Favor flexible units like %, vw, or rem over fixed pixels.
Test your site on real devices and emulators to catch layout issues before launch.
    `,
  },
];

export default posts;