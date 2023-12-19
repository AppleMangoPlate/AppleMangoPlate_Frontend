import Layout from "@/components/Layout/layout";
import Loading from "@/components/search/Loading";
import Search from "@/components/search/Search";
import { Suspense } from "react";

export default function search() {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Search />
      </Suspense>
    </Layout>
  );
}
