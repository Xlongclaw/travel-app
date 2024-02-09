// "use client";
import { signIn, useSession } from "next-auth/react";
import React from "react";
import Form from "./components/Form";

const page = () => {
  // const session = useSession();
  return (
    <div className="flex p-32">
      <Form />
      <div></div>
    </div>
  );
};

export default page;

{
  /* <button onClick={() => signIn("google")}>GOOGLE</button> */
}
{
  /* <h2>{session.data?.user?.name}</h2> */
}
