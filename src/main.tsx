import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
import "./index.css";

// Entry point for both the browser and the static build. `vite-react-ssg`
// hydrates on the client and, at build time, walks `routes` to emit a real HTML
// file per route.
export const createRoot = ViteReactSSG({ routes });
