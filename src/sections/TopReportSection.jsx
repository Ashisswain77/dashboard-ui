const TopReportSection = () => {
  return (
    <section className="space-y-6">

      {/* HEADER STRIP */}
      <div className="bg-[#FBF7F5] rounded-[20px] px-1 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 max-w-lg relative">
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-3 shadow-sm">
              <span className="text-gray-400">🔍</span>
              <input
                type="text"
                placeholder='Try searching "insights"'
                className="w-full outline-none text-sm text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <IconCircle>☰</IconCircle>
            <IconCircle bg="bg-[#FADADD]">👩</IconCircle>
            <IconCircle bg="bg-red-500" text="text-white">+</IconCircle>
          </div>
        </div>
      </div>

      {/* MAIN REPORT CARD */}
      <div className="bg-white rounded-[32px] px-10 py-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] space-y-7">

        {/* USER CHIPS */}
        <div className="flex items-center gap-2">
          <ChipAdd />
          <UserChip name="Armin A." avatar="👨🏻" bg="bg-gray-100" text="text-gray-700" />
          <UserChip name="Eren Y." avatar="🧑🏻‍✈️" bg="bg-red-50" text="text-red-500" active />
          <UserChip name="Mikasa A." avatar="👩🏽" bg="bg-yellow-50" text="text-yellow-600" />
          <div className="w-9 h-9 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-semibold">
            C
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-[26px] font-semibold text-gray-900">
          New report
        </h1>

        {/* REVENUE */}
        <div className="flex items-start justify-between gap-6">
          <div className="space-y-2">
            <p className="text-[13px] text-gray-400">Revenue</p>

            <div className="flex items-center gap-3">
              <span className="text-[42px] font-semibold">$528,976</span>
              <span className="text-[24px] font-light text-gray-300">.82</span>
              <span className="px-2 py-1 rounded-full bg-red-500 text-white text-xs">↗ 7.9%</span>
              <span className="px-2 py-1 rounded-full bg-red-100 text-red-500 text-xs">
                $27,335.09
              </span>
            </div>

            <p className="text-sm text-gray-400">
              vs prev. $501,641.73 Jun 1 – Aug 31, 2023 ▾
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400">Timeframe</span>
            <div className="flex items-center gap-2">
              <div className="w-10 h-6 bg-gray-200 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full shadow absolute left-0.5 top-0.5" />
              </div>
              <span className="text-sm font-medium">
                Sep 1 – Nov 30, 2023 ▾
              </span>
            </div>
          </div>
        </div>

        {/* KPI GRID */}
        <div className="grid grid-cols-5 gap-4">

          <KpiCard>
            <KpiLabel>Top sales</KpiLabel>
            <KpiValue>72</KpiValue>
            <KpiFooter avatar="👩🏽" label="Mikasa" />
          </KpiCard>

          <KpiCard dark>
            <div className="flex justify-between">
              <KpiLabel dark>Best deal</KpiLabel>
              <span className="text-gray-400">☆</span>
            </div>
            <KpiValue dark>$42,300</KpiValue>
            <p className="text-sm text-gray-300">Rolf Inc.</p>
            <div className="flex items-center gap-1 text-xs text-gray-400">◆ 5</div>
          </KpiCard>

          <KpiCard>
            <KpiLabel>Deals</KpiLabel>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-gray-100 rounded-full font-semibold">
                256
              </span>
              <span className="text-xs text-gray-400">↑ 5</span>
            </div>
          </KpiCard>

          <KpiCard outline>
            <KpiLabel>Value</KpiLabel>
            <span className="px-3 py-1 rounded-full bg-red-500 text-white text-sm font-semibold">
              528k
            </span>
            <span className="text-xs text-red-500">↗ 7.9%</span>
          </KpiCard>

          <KpiCard>
            <KpiLabel>Win rate</KpiLabel>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-500 text-sm font-semibold">
              44%
            </span>
            <span className="text-xs text-red-500">↘ 1.2%</span>
          </KpiCard>
        </div>

        {/* SUMMARY */}
        <div className="flex items-center gap-3">
          <SummaryPill color="green" label="$209,633" percent="39.63%" />
          <SummaryPill color="gray" label="$156,841" percent="29.65%" />
          <SummaryPill color="yellow" label="$117,115" percent="22.14%" />
          <SummaryPill color="red" label="$45,386" percent="8.58%" />

          <button className="ml-auto px-6 py-3 rounded-full bg-[#0F172A] text-white font-medium">
            Details
          </button>
        </div>

        {/* THREE HORIZONTAL DATA CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">

          {/* PLATFORM LIST */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between mb-4 text-sm text-gray-400">
              <span className="grid grid-cols-2 gap-0.5">
                <span className="w-1.5 h-1.5 bg-gray-300 rounded" />
                <span className="w-1.5 h-1.5 bg-gray-300 rounded" />
                <span className="w-1.5 h-1.5 bg-gray-300 rounded" />
                <span className="w-1.5 h-1.5 bg-gray-300 rounded" />
              </span>
              <span>Filters ▾</span>
            </div>

            <PlatformRow name="Dribbble" value="$227,459" percent="43%" dot="bg-pink-500" />
            <PlatformRow name="Instagram" value="$142,823" percent="27%" dot="bg-pink-400" />
            <PlatformRow name="Behance" value="$89,935" percent="11%" dot="bg-blue-500" />
            <PlatformRow name="Google" value="$37,028" percent="7%" dot="bg-blue-400" />
          </div>

          {/* DEALS AMOUNT */}
          <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center">
            <div className="flex gap-3 mb-6">
              <CategoryIcon active label="●" />
              <CategoryIcon label="Be" />
              <CategoryIcon label="◎" />
              <CategoryIcon label="G" />
              <CategoryIcon label="…" />
            </div>
            <p className="text-sm font-medium text-gray-700">Deals amount</p>
            <p className="text-sm text-gray-400">by referrer category ▾</p>
          </div>

          {/* SALES TABLE */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="grid grid-cols-6 text-xs text-gray-400 mb-4">
              <span>Sales</span>
              <span>Revenue</span>
              <span>Leads</span>
              <span>KPI</span>
              <span>W/L</span>
              <span></span>
            </div>

            <SalesRow
              name="Armin A."
              revenue="$209,633"
              leads="118"
              kpi="0.84"
              wl="31%"
              wins="12"
              losses="29"
              badge="41"
              active
            />
            <SalesRow
              name="Mikasa A."
              revenue="$156,841"
              leads="103"
              kpi="0.89"
              wl="39%"
              wins="21"
              losses="33"
              badge="54"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TopReportSection;

/* ---------------- SUBCOMPONENTS ---------------- */

const IconCircle = ({ children, bg = "bg-white", text = "text-gray-700" }) => (
  <div className={`w-9 h-9 rounded-full shadow flex items-center justify-center ${bg} ${text}`}>
    {children}
  </div>
);

const ChipAdd = () => (
  <div className="w-10 h-10 rounded-full border border-dashed flex items-center justify-center text-gray-400">
    +
  </div>
);

const UserChip = ({ name, avatar, bg, text, active }) => (
  <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm ${bg} ${text} ${active ? "ring-1 ring-red-300" : ""}`}>
    <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs">{avatar}</span>
    {name}
  </div>
);

const KpiCard = ({ children, dark, outline }) => (
  <div className={`rounded-2xl p-4 min-h-[120px] flex flex-col justify-between ${dark ? "bg-[#0F172A] text-white" : outline ? "border border-red-200 bg-white" : "bg-white shadow-sm"}`}>
    {children}
  </div>
);

const KpiLabel = ({ children }) => (
  <p className="text-xs text-gray-400">{children}</p>
);

const KpiValue = ({ children, dark }) => (
  <p className={`text-2xl font-semibold ${dark ? "text-white" : "text-gray-900"}`}>{children}</p>
);

const KpiFooter = ({ avatar, label }) => (
  <div className="flex items-center gap-2 text-sm text-gray-600">
    <span className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center text-xs">{avatar}</span>
    {label}
    <span className="text-gray-400">›</span>
  </div>
);

const SummaryPill = ({ color, label, percent }) => {
  const map = {
    green: "bg-green-500",
    gray: "bg-gray-300",
    yellow: "bg-yellow-400",
    red: "bg-red-500",
  };
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-sm">
      <span className={`w-2 h-2 rounded-full ${map[color]}`} />
      <span className="font-medium">{label}</span>
      <span className="text-gray-400">{percent}</span>
    </div>
  );
};

const PlatformRow = ({ name, value, percent, dot }) => (
  <div className="flex items-center justify-between py-3">
    <div className="flex items-center gap-3">
      <span className={`w-2 h-2 rounded-full ${dot}`} />
      <span className="text-sm font-medium">{name}</span>
    </div>
    <span className="text-sm font-medium">{value}</span>
    <span className="text-sm text-gray-400">{percent}</span>
  </div>
);

const CategoryIcon = ({ label, active }) => (
  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-medium ${active ? "bg-pink-500 text-white" : "bg-gray-100 text-gray-600"}`}>
    {label}
  </div>
);

const SalesRow = ({ name, revenue, leads, kpi, wl, wins, losses, badge, active }) => (
  <div className="grid grid-cols-6 items-center py-3 text-sm">
    <div className="flex items-center gap-2">
      <span className={`w-2 h-2 rounded-full ${active ? "bg-green-500" : "bg-gray-300"}`} />
      <span className="font-medium">{name}</span>
    </div>
    <span className="font-medium">{revenue}</span>
    <div className="flex items-center gap-2">
      <span className="px-2 py-0.5 rounded bg-gray-800 text-white text-xs">{badge}</span>
      <span className="text-gray-400">{leads}</span>
    </div>
    <span>{kpi}</span>
    <span>{wl}</span>
    <div className="flex gap-1 text-green-600">
      <span>{wins}</span>
      <span className="text-gray-400">{losses}</span>
    </div>
  </div>
);
