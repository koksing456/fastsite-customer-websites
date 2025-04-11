import Link from "next/link";

export function BackToFastSite() {
  return (
    <div className="bg-gray-100 py-4 text-center">
      <Link
        href="https://fastsite.my"
        className="text-blue-600 hover:underline"
      >
        ← Back to FastSite
      </Link>
    </div>
  );
}
