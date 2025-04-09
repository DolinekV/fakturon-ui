import { useMatches } from "react-router";
import { Fragment } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/atoms/breadcrumb";

export const AppBreadcrumb = () => {
  const routes = useMatches();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {routes.map((route, index) => (
          <Fragment key={route.id}>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink to={route.pathname}>
                {route.handle && (route.handle as any).crumb ? (route.handle as any).crumb : "Not specified crumb"}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {routes.length - 1 !== index && <BreadcrumbSeparator className="hidden md:block" />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
