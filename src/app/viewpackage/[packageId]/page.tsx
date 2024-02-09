import NavBar from "@/app/components/NavBar";
import React from "react";
import { getPackageDataByPackageId } from "../../../../sanity/sanity.query";
import { packageType } from "@/app/type";
import { PackageDisplayWrapper } from "@/app/viewpackage/[packageId]/components";

const page = async ({ params }: { params: { packageId: string } }) => {
        const packageData: packageType = await getPackageDataByPackageId(
                params.packageId
        );
        if (!packageData) return <div>LOADING</div>;
        return (
                <div className="px-32 pt-0 flex flex-col gap-6 justify-center items-center h-screen">
                        <PackageDisplayWrapper packageData={packageData} />
                </div>
        );
};

export default page;
