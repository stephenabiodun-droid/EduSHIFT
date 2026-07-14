import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Home } from "./pages/Home";
import { Events } from "./pages/Events";
import { About } from "./pages/About";
import { Fellowship } from "./pages/Fellowship";
import { Training } from "./pages/Training";
import { Partners } from "./pages/Partners";
import { Contact } from "./pages/Contact";
import { Apply } from "./pages/Apply";
import { Donate } from "./pages/Donate";

const Placeholder = ({ title }: { title: string }) => (
  <div className="flex min-h-[50vh] items-center justify-center">
    <h1 className="text-3xl font-heading font-bold text-primary-900">{title}</h1>
  </div>
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="fellowship" element={<Fellowship />} />
        <Route path="events" element={<Events />} />
        <Route path="training" element={<Training />} />
        <Route path="partners" element={<Partners />} />
        <Route path="contact" element={<Contact />} />
        <Route path="donate" element={<Donate />} />
        <Route path="apply" element={<Apply />} />
        <Route path="register" element={<Apply />} />
      </Route>
    </Routes>
  );
}
