import Navbar from "@/components/Navbar";
import Pagination from "@/components/Pagination";
import UsersTable from "@/components/UsersTable";
import React from "react";

function HomePage() {
  return (
    <>
      <Navbar />
      <UsersTable />
      <Pagination />
    </>
  );
}

export default HomePage;
