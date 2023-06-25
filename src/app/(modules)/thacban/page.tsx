import dynamic from "next/dynamic";

import { data } from "./makeData";

const Table = dynamic(() => import("./table"), {
  loading: () => <p>Loading...</p>,
});

const Example = () => {
  return <Table data={data} />;
};

/*
const Example = () => {
  return <div>Hello</div>;
};
*/
export default Example;
