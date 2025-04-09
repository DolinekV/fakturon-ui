import { Outlet, RouterProvider, createBrowserRouter, useLocation } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";

import { client } from "@/api/api";
import { CustomersPage } from "@/pages/customers/customers-page";
import { InvoicesPage } from "@/pages/invoices/invoices-page";
import { AppSidebar } from "@/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/atoms/sidebar";
import { Separator } from "@/atoms/separator";
import { AppBreadcrumb } from "@/atoms/app-breadcrumb";
import { SectionCards } from "@/pages/home/section-cards";
import { ProductsPage } from "@/pages/products/products-page";

const root = createRoot(document.body);

const App = () => {
  const { pathname } = useLocation();

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-col w-full">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <AppBreadcrumb />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {pathname === "/" ? (
            <div className="flex flex-1 flex-col">
              <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                  <SectionCards />
                </div>
              </div>
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </main>
    </SidebarProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    handle: {
      crumb: "Home",
    },
    children: [
      {
        path: "invoices",
        element: <InvoicesPage />,
        handle: {
          crumb: "Invoices",
        },
      },
      {
        path: "products",
        element: <ProductsPage />,
        handle: {
          crumb: "Products",
        },
      },
      {
        path: "/customers",
        element: <CustomersPage />,
        handle: {
          crumb: "Customers",
        },
      },
    ],
  },
]);

root.render(
  <QueryClientProvider client={client}>
    <RouterProvider router={router} />
  </QueryClientProvider>,
);
