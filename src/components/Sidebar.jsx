import { useState } from "react";
import {
  Star,
  Clock,
  Home,
  FileText,
  LayoutGrid,
  CheckSquare,
  Settings,
  Folder,
  ChevronRight,
  Plus,
} from "lucide-react";

const Sidebar = () => {
  const [sharedOpen, setSharedOpen] = useState(true);
  const [reportsShareOpen, setReportsShareOpen] = useState(true);
  const [reportsMyOpen, setReportsMyOpen] = useState(true);

  return (
    <aside className="flex h-screen bg-[#FBF7F5]">

      {/* LEFT ICON RAIL */}
      <div className="w-14 bg-[#F6EFEA] flex flex-col items-center justify-between py-4">
        <div className="flex flex-col items-center gap-4">
          <div className="w-9 h-9 rounded-lg bg-black text-white flex items-center justify-center font-bold">
            C
          </div>

          <RailIcon><Home size={18} /></RailIcon>
          <RailIcon active><LayoutGrid size={18} /></RailIcon>
          <RailIcon><FileText size={18} /></RailIcon>
          <RailIcon><LayoutGrid size={18} /></RailIcon>
          <RailIcon><CheckSquare size={18} /></RailIcon>
        </div>

        <div className="flex flex-col items-center gap-4 pb-2">
          <RailIcon alert />
          <RailIcon><Settings size={18} /></RailIcon>
        </div>
      </div>

      {/* MAIN SIDEBAR */}
      <div className="w-64 flex flex-col">

        {/* BRAND */}
        <div className="px-4 py-4 flex items-center gap-2">
          <span className="font-semibold text-sm">Codename.com</span>
          <ChevronRight size={14} className="text-gray-400 rotate-90" />
        </div>

        {/* NAV */}
        <nav className="flex-1 px-3 text-sm text-gray-700 overflow-y-auto sidebar-scroll space-y-1">

          <NavItem icon={<Star size={16} />} label="Starred" />
          <NavItem icon={<Clock size={16} />} label="Recent" />
          <NavItem icon={<LayoutGrid size={16} />} label="Sales list" />
          <NavItem icon={<CheckSquare size={16} />} label="Goals" />
          <NavItem icon={<LayoutGrid size={16} />} label="Dashboard" plus />

          <SectionLabel label="Codename" />

          <Dropdown
            label="Shared with me"
            open={sharedOpen}
            onToggle={() => setSharedOpen(!sharedOpen)}
          >
            <SubItem label="Cargo2go" />
            <SubItem label="Cloud3r" badge="2" />
            <SubItem label="Idioma" />
            <SubItem label="Syllables" />
            <SubItem label="x-0b" />
          </Dropdown>

          <SectionHeader label="Reports" />

          <Dropdown
            label="Share with me"
            open={reportsShareOpen}
            onToggle={() => setReportsShareOpen(!reportsShareOpen)}
          >
            <SubItem label="Deals by user" />
            <SubItem label="Deal duration" />
          </Dropdown>

          <Dropdown
            label="My reports"
            open={reportsMyOpen}
            onToggle={() => setReportsMyOpen(!reportsMyOpen)}
          >
            <SubItem label="Emails received" />
            <SubItem label="Deal duration" />
            <SubItem label="New report" highlight />
            <SubItem label="Analytics" badge="7" />
          </Dropdown>

          <NavItem icon={<Folder size={16} />} label="Manage folders" />
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

/* ---------------- COMPONENTS ---------------- */

const RailIcon = ({ children, active, alert }) => (
  <div
    className={`w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer
      ${active ? "bg-[#FFE4E6] text-red-500" : "text-gray-600 hover:bg-white"}
      ${alert ? "border border-red-400" : ""}
    `}
  >
    {children || <div className="w-2 h-2 rounded-full bg-red-500" />}
  </div>
);

const NavItem = ({ icon, label, active, plus }) => (
  <div
    className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer
      ${active ? "bg-white shadow-sm" : "hover:bg-white/70"}
    `}
  >
    <div className="flex items-center gap-3">
      {icon}
      <span>{label}</span>
    </div>
    {plus && <Plus size={14} className="text-gray-400" />}
  </div>
);

const SectionLabel = ({ label }) => (
  <div className="mt-6 mb-2 px-3 text-xs font-semibold text-gray-500 uppercase">
    {label}
  </div>
);

const SectionHeader = ({ label }) => (
  <div className="mt-6 mb-2 px-3 flex items-center justify-between text-xs font-semibold text-gray-500 uppercase">
    <span>{label}</span>
    <Plus size={14} />
  </div>
);

const Dropdown = ({ label, open, onToggle, children }) => (
  <div className="px-3">
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-black"
    >
      <span>{label}</span>
      <ChevronRight
        size={14}
        className={`transition-transform ${open ? "rotate-90" : ""}`}
      />
    </button>

    <div
      className={`ml-3 overflow-hidden transition-all duration-300
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
      `}
    >
      <div className="border-l border-gray-300 pl-3 space-y-1 py-1">
        {children}
      </div>
    </div>
  </div>
);

const SubItem = ({ label, badge, highlight }) => (
  <div
    className={`flex items-center justify-between px-2 py-1 rounded cursor-pointer
      ${highlight ? "text-red-500" : "text-gray-600 hover:text-black"}
    `}
  >
    <span>{label}</span>
    {badge && (
      <span className="bg-red-500 text-white text-xs px-1.5 rounded-full">
        {badge}
      </span>
    )}
  </div>
);
