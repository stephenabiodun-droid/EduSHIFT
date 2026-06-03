import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Home } from "./pages/Home";
import { Events } from "./pages/Events";

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
        <Route path="about" element={<Placeholder title="About Us" />} />
        <Route path="fellowship" element={<Placeholder title="Fellowship Program" />} />
        <Route path="events" element={<Events />} />
        <Route path="partners" element={<Placeholder title="Partners" />} />
        <Route path="contact" element={<Placeholder title="Contact Us" />} />
        <Route path="donate" element={<Placeholder title="Donate" />} />
        <Route path="apply" element={<Placeholder title="Apply Now" />} />
        <Route path="register" element={<Placeholder title="Register Now" />} />
      </Route>
    </Routes>
  );
}
