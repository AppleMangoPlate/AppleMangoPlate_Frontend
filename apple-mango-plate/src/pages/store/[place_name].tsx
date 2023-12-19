import React, { Suspense } from "react";
import { QueryClient, dehydrate } from "react-query";
import { GetServerSidePropsContext } from "next";
import { getPlaceSearch, useGetPlaceSearch } from "@/apis/search/placeSearch";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/layout";
import Store from "@/components/store/Store";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { place_name } = context.query;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["getPlaceSearch", place_name], () =>
    getPlaceSearch(place_name as string)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Index() {
  const router = useRouter();
  const { place_name } = router.query;
  const { data } = useGetPlaceSearch(place_name as string);

  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Store storeInfo={data} />
      </Suspense>
    </Layout>
  );
}
