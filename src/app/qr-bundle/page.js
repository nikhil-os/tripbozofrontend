'use client';
import QRBundlePage from "@/components/QRcode/QRBundlePage";

export default function Page() {
  return(<Suspense fallback={<p>Loading…</p>}><QRBundlePage /></Suspense> );
}
