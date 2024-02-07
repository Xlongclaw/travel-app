import NavBar from "@/app/components/NavBar";
import React from "react";
import { getPackageDataByPackageId } from "../../../../sanity/sanity.query";
import { packageType } from "@/app/tourpackages/types/type";
import PackageDisplayWrapper from "./components/PackageDisplayWrapper";

const page = async ({ params }: { params: { packageId: string } }) => {
  const packageData:packageType = await getPackageDataByPackageId(params.packageId);
  if (!packageData) return <div>LOADING</div>;
  return (
    <div className="px-32 pt-8">
      <NavBar />
      <PackageDisplayWrapper packageData={packageData}/>
    </div>
  );
};

export default page;
