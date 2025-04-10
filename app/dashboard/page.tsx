import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const customerSites = [
    {
      name: "KL Green Garden",
      slug: "kl-green-garden",
      createdAt: "2023-10-15",
      status: "Published",
    },
    {
      name: "Beautiful Garden Landscape",
      slug: "beautiful-garden-landscape",
      createdAt: "2023-11-02",
      status: "Published",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">FastSite Dashboard</span>
          </div>
          <div>
            <Link href="/">
              <Button variant="outline">View Showcase</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Customer Websites</h1>
          <Button>Add New Website</Button>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-muted text-muted-foreground">
              <tr>
                <th className="p-4 text-left font-medium">Name</th>
                <th className="p-4 text-left font-medium">URL</th>
                <th className="p-4 text-left font-medium">Created At</th>
                <th className="p-4 text-left font-medium">Status</th>
                <th className="p-4 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customerSites.map((site) => (
                <tr key={site.slug} className="border-t">
                  <td className="p-4">{site.name}</td>
                  <td className="p-4">
                    <Link
                      href={`/${site.slug}`}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                    >
                      /{site.slug}
                    </Link>
                  </td>
                  <td className="p-4">{site.createdAt}</td>
                  <td className="p-4">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      {site.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600"
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FastSite. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
