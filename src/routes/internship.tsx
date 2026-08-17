import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/internship")({
  beforeLoad: () => {
    throw redirect({
      to: "/about",
    });
  },
});
