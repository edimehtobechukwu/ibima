import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Solutions } from "./pages/Solutions";
import { Talent } from "./pages/Talent";
import { Locations } from "./pages/Locations";
import { Process } from "./pages/Process";
import { Team } from "./pages/Team";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { CaseStudy } from "./pages/CaseStudy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "solutions", Component: Solutions },
      { path: "talent", Component: Talent },
      { path: "locations", Component: Locations },
      { path: "process", Component: Process },
      { path: "team", Component: Team },
      { path: "contact", Component: Contact },
      { path: "about", Component: About },
      { path: "case-study", Component: CaseStudy },
    ],
  },
]);