import { Link } from "react-router";

export function CustomLink({
  children,
  to = "#",
}: {
  children: React.ReactNode;
  to?: string;
}) {
  return (
    <Link to={to} className="text-red-500 underline">
      {children}
    </Link>
  );
}
