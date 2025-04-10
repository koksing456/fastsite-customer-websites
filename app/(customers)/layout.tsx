import type React from "react";

export default function CustomersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="customer-site-container">{children}</div>;
}
