import { Outlet, createRootRoute } from "@tanstack/react-router";
import { HelmetProvider } from "react-helmet-async";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <Outlet />
      </div>
    </HelmetProvider>
  );
}
