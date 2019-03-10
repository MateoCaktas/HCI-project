export default [
  {
    text: "Home",
    path: "/"
  },
  {
    text: "Find your movie",
    path: "/second-page"
  },
  {
    text: "List of movies",
    path: "/blog"
  },
  {
    text: "About",
    path: "/about"
  },
  {
    text: "Login/Register",
    path: "/private"
  },
  // Private routes
  {
    text: "Dashboard",
    path: "/private/dashboard",
    private: true
  },
  {
    text: "Personal pages",
    path: "/private/personal",
    private: true
  }
];
