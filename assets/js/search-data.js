// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "Research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2.html";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-simple-ray-tracer",
          title: 'Simple Ray Tracer',
          description: "course project of computer graphics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-computational-fluid-dynamics",
          title: 'Computational Fluid Dynamics',
          description: "course project of CFD",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-stable-fluid",
          title: 'Stable Fluid',
          description: "A Taich implementation of stable fluid",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-a-taichi-implementation-of-discrete-shells",
          title: 'A Taichi implementation of Discrete Shells',
          description: "Yuchen Su, Mingxuan Liu  Course project of Physics Simulation, awarded &quot;Best Final Project&quot; by Dr. Kui Wu from Tencent  We built a finite element method (FEM)-based solver for simulating elastic deformation of thin shells with collision detection.  I set up the main codebase and collision detection module.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/large_time_step.html";
            },},{id: "research-computational-design-of-bio-inspired-fliers",
          title: 'Computational Design of Bio-Inspired Fliers',
          description: "guided by Professor Tao Du",
          section: "Research",handler: () => {
              window.location.href = "/research/2_project.html";
            },},{id: "research-computation-design-of-passive-swimmer",
          title: 'Computation Design of passive swimmer',
          description: "collaborated with Professor Bolei Deng",
          section: "Research",handler: () => {
              window.location.href = "/research/4_project.html";
            },},{id: "research-progressive-sound-synthesis",
          title: 'Progressive Sound Synthesis',
          description: "guided by Professor Doug James, mentored by Eris Zhang and Kangrui Xue",
          section: "Research",handler: () => {
              window.location.href = "/research/progressive.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
