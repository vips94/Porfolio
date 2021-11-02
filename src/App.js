import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Skills from "./components/pages/Skills";
import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <Layout>
      <Home/>
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
