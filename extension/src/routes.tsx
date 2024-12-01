import { createMemoryRouter } from "react-router-dom";
import App from "./App";
import AboutPage from "./pages/AboutPage";
import ExtensionLayout from "./Layout/ExtensionLayout";

// Define the routes
const router = createMemoryRouter([
  {
    path: "/",
    element: (
      <ExtensionLayout>
        <App />
      </ExtensionLayout>
    ),
  },
  {
    path: "/about",
    element: (
      <ExtensionLayout>
        <AboutPage />
      </ExtensionLayout>
    ),
  },
]);

export default router;
