// "use client";

import { notFound } from "next/navigation";
import { Key, useEffect, useState } from "react";

interface ThacBanProps {
  id: String;
  tb_qn: String;
  tb_hn: String;
}

// ************************
const PIM = {
  apiURL: "https://test1.vietdocs.org/wp-json/gf/v2/entries",
  userName: "ck_6e9d1a614080d36e5d6a076af6db3c7fbf1b613d",
  password: "cs_462f13f20db9db088fb41d1455e0824658c60c52",
};

// ************************
async function test() {
  const response = await fetch(PIM.apiURL, {
    method: "GET",
    headers: {
      Authorization: "Basic " + btoa(`${PIM.userName}:${PIM.password}`),
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();

  // (3) - third, reaching here means we can now extract the data
  // based on the given json key.
  const entries = result["entries"];
  if (!entries || entries.length === 0) notFound();

  // (4) - map raw object to Thác Bản object
  let tbobj = entries.map(
    (entry: any) =>
      ({
        id: entry["id"],
        tb_qn: entry["45.3"],
        tb_hn: entry["46.3"],
      } as ThacBanProps)
  );

  // console.log("sfsdfsdfdsf is", tbobj);

  return (
    <div>
      <ul>
        {tbobj.map((entry: ThacBanProps) => {
          return <li key={entry["id"] as Key}>{entry["tb_qn"]}</li>;
        })}
      </ul>
    </div>
  );
}

export default test;
