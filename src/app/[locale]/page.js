import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home({ params: { locale } }) {
  redirect(`${locale}/stays`);
}
