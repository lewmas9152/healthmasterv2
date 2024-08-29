import React from 'react';
import "../../sass/dashboard.scss";
import Sidenav from '../../components/layout/sidebar';
import Header from "../../components/layout/header";
export default function DashboardPage() {
  return (
    <div className="container bg-[#083A3C] !important">
      <div className="w-20 sidenav">
        <Sidenav />
      </div>
      <div className="content">
        <div className="header">
          <Header />
        </div>
        <div className="min-h-screen container-fluid">
          <h1 className="mb-4 text-2xl font-bold">Health Dashboard</h1>
          </div>
        </div>
      </div>
  );
}