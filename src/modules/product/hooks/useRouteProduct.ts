import { useRouteContext } from "@tanstack/react-router";

export const useRouteProduct = () => {
  return useRouteContext({ from: "/$productId" });
};
