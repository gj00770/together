import React, { Suspense } from "react";
import { useQuery } from "react-query";
import { withSuspense } from "../hocs/withSuspense";

export function SuspenseTest() {
  return <UserListWithSuspens />;
}

// function UserList() {
//   try {
//     useQuery("key", getUserWithAxios, { suspense: true });
//     return <div>list</div>;
//   } catch (e) {
//     debugger;
//     throw e;
//   }
// }

function UserListWithSuspens() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <UserList />
    </Suspense>
  );
}

function UserList() {
  useQuery("key", getUserWithAxios, { suspense: true });

  return <div>list</div>;
}

const UserList3 = withSuspense(function UserList3() {
  useQuery("key", getUserWithAxios, { suspense: true });

  return <div>list</div>;
}, <>Loading ...</>);

function UserList2() {
  const query = useQuery("key", getUserWithAxios, { suspense: false });

  if (query.isLoading) {
    return <>Loading..</>;
  }

  return <div>list</div>;
}

async function getUserWithAxios() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return "1234";
}
