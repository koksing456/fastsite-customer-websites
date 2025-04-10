import { redirect } from "next/navigation";

export default function Home() {
  redirect("https://fastsite.my");

  // This code won't run due to the redirect
  return null;
}
