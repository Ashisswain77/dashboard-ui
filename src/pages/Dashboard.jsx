import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopReportSection from "../sections/TopReportSection";
import PlatformAnalyticsSection from "../sections/PlatformAnalyticsSection";


const Dashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        isMobileOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="p-4 lg:p-6">
          <TopReportSection />
          <PlatformAnalyticsSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
