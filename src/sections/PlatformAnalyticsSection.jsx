import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";

/* ---------------- MOCK DATA ---------------- */

const barData = [
  { month: "Sep", Armin: 6901, Eren: 5200, Mikasa: 6100 },
  { month: "Oct", Armin: 8900, Eren: 11035, Mikasa: 7800 },
  { month: "Nov", Armin: 9288, Eren: 8600, Mikasa: 9100 },
];

const lineData = [
  { week: "W3", revenue: 42000, kpi: 38 },
  { week: "W5", revenue: 45500, kpi: 41 },
  { week: "W7", revenue: 44000, kpi: 40 },
  { week: "W9", revenue: 47000, kpi: 43 },
  { week: "W11", revenue: 51000, kpi: 45 },
];

/* ---------------- COMPONENT ---------------- */

const PlatformAnalyticsSection = () => {
  const [mode, setMode] = useState("Revenue");

  return (
    <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">

      {/* LEFT COLUMN (UNCHANGED) */}
      <div className="xl:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs text-gray-400 mb-1">Platform value</p>
            <p className="text-sm font-medium">
              Dribbble <span className="text-gray-400">▾</span>
            </p>
          </div>

          <div className="flex gap-2 bg-gray-100 rounded-full p-1 text-xs">
            {["Revenue", "Leads", "W/L"].map((item) => (
              <button
                key={item}
                onClick={() => setMode(item)}
                className={`px-4 py-1.5 rounded-full transition
                  ${
                    mode === item
                      ? "bg-black text-white"
                      : "text-gray-500 hover:bg-white"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-6">
          <div className="w-56 shrink-0 bg-gray-900 text-white rounded-2xl p-5">
            <p className="text-xs opacity-70 mb-2">Average monthly</p>
            <Stat label="Revenue" value="$16,552" />
            <Stat label="Leads" value="373" meta="97/276" />
            <Stat label="Win/lose" value="16%" meta="51/318" />
          </div>

          <div className="flex-1">
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={barData} barGap={8}>
                <defs>
                  <pattern
                    id="stripe"
                    width="6"
                    height="6"
                    patternUnits="userSpaceOnUse"
                    patternTransform="rotate(45)"
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="6"
                      stroke="#111827"
                      strokeWidth="2"
                    />
                  </pattern>
                </defs>

                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip />

                <Bar dataKey="Armin" shape={(p) => WinnerBar(p, "Armin")} />
                <Bar dataKey="Eren" shape={(p) => WinnerBar(p, "Eren")} />
                <Bar dataKey="Mikasa" shape={(p) => WinnerBar(p, "Mikasa")} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN (IMPROVED) */}
      <div className="space-y-6">

        {/* WORK WITH PLATFORMS */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium text-gray-700">Work with platforms</p>
            <span className="px-3 py-1 rounded-lg bg-gray-900 text-white text-xs font-semibold">
              3 · $156,841
            </span>
          </div>

          <div className="flex items-end gap-3 mb-6">
            <span className="text-3xl font-semibold">45.3%</span>
            <span className="text-lg text-gray-300">$71,048</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <PlatformBox label="Dribbble" percent="28.1%" value="$44,072" />
            <PlatformBox label="Instagram" percent="14.1%" value="$22,114" />
            <PlatformBox label="Google" percent="5.4%" value="$8,469" />
            <PlatformBox label="Other" percent="7.1%" value="$11,125" />
          </div>
        </div>

        {/* SALES DYNAMIC */}
        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-700 mb-3">Sales dynamic</p>

          <div className="flex gap-4 text-xs mb-4">
            <span className="flex items-center gap-1 text-gray-600">
              <span className="w-2 h-2 rounded-full bg-gray-800" /> Revenue
            </span>
            <span className="flex items-center gap-1 text-gray-600">
              <span className="w-2 h-2 rounded-full bg-gray-400" /> KPI
            </span>
          </div>

          <ResponsiveContainer width="100%" height={160}>
            <LineChart data={lineData}>
              <XAxis dataKey="week" axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip />
              <Line dataKey="revenue" stroke="#111827" strokeWidth={2} dot />
              <Line dataKey="kpi" stroke="#9CA3AF" strokeWidth={2} dot />
            </LineChart>
          </ResponsiveContainer>

          <div className="flex items-center gap-2 text-xs mt-3">
            <span className="text-gray-900 font-semibold">+12%</span>
            <span className="text-gray-400">compared to prev period</span>
          </div>

          {/* USER KPI ROW */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t text-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
                👨‍✈️
              </div>
              <span className="font-medium">Eren Y.</span>
            </div>
            <span className="font-semibold">$117,115</span>
            <span className="px-2 py-0.5 bg-gray-900 text-white rounded-md text-xs">
              22
            </span>
            <span>84</span>
            <span>0.79</span>
            <span>32%</span>
            <span className="text-gray-900 font-semibold">7</span>
            <span className="text-gray-400">15</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformAnalyticsSection;

/* ---------------- HELPERS ---------------- */

const WinnerBar = ({ x, y, width, height, payload }, key) => {
  const max = Math.max(payload.Armin, payload.Eren, payload.Mikasa);
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={8}
      fill={payload[key] === max ? "url(#stripe)" : "#E5E7EB"}
    />
  );
};

const PlatformBox = ({ label, percent, value }) => (
  <div className="rounded-xl p-4 border bg-[repeating-linear-gradient(45deg,#fafafa,#fafafa_6px,#fff_6px,#fff_12px)]">
    <p className="text-xs text-gray-500">{label}</p>
    <p className="font-semibold">{percent}</p>
    <p className="text-xs text-gray-400">{value}</p>
  </div>
);

const Stat = ({ label, value, meta }) => (
  <div className="mb-4">
    <p className="text-xs opacity-70">{label}</p>
    <p className="text-2xl font-bold">
      {value}
      {meta && <span className="text-xs opacity-70 ml-2">{meta}</span>}
    </p>
  </div>
);