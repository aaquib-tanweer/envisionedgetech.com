import * as React from "react";
import { Outlet, createRootRoute, redirect } from "@tanstack/react-router";
import { Layout } from "@/UI/pages/Layout";

export const Route = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
  beforeLoad: ({ location }) => {
    // Handle 404s
    if (location.pathname !== '/' && 
        !['/about', '/products', '/services', '/careers', '/projects', '/privacy-policy', '/terms-and-conditions'].includes(location.pathname)) {
      throw redirect({
        to: '/404',
        search: {
          from: location.pathname,
        },
      });
    }
    return {};
  },
});
