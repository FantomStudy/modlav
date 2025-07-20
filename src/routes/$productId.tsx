import { createFileRoute } from "@tanstack/react-router";

import { ProductPage, fetchProductQuery } from "@/modules/product";

export const Route = createFileRoute("/$productId")({
  component: ProductPage,

  beforeLoad: async ({ context, params }) => {
    return await context.queryClient.ensureQueryData(
      fetchProductQuery(params.productId),
    );
  },

  head: ({ match }) => ({
    meta: [
      {
        title: match.context.title ?? "Товар",
      },
    ],
  }),
});
