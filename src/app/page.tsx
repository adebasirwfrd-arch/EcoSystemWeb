"use client"

import Link from "next/link"
import { useEffect, useState, useMemo } from "react"
import { Outfit, Inter } from "next/font/google"
import {
  Globe2,
  LayoutDashboard,
  ClipboardCheck,
  FileText,
  Droplets,
  Trash2,
  BarChart3,
  ShieldCheck,
  Trophy,
  Scale,
  Lock,
  Activity,
  Shield,
  Zap,
  Target,
  Clock,
  Wind,
  Layers,
  Calendar,
  AlertCircle,
  Database,
  TrendingUp,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Search,
  Settings,
  Bell,
  User,
  Plus,
  Filter,
  Download,
  Share2,
  MoreVertical,
  ExternalLink,
  PlusCircle,
  CheckCircle2,
  FileSearch,
  Send,
  Package,
  Users,
  Server,
  Cpu,
  ShieldAlert,
  Building2
} from 'lucide-react';
import "./landing-styles.css"

const outfit = Outfit({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

function CommandCenterDashboard() {
  const stats = [
    { label: "ESG PORTFOLIO", value: "0%", sub: "Initial Maturity", color: "text-emerald-500", trend: "0" },
    { label: "CARBON FOOTPRINT", value: "17.4", unit: "TCO2E", sub: "Monthly Emissions", color: "text-slate-900", trend: "17.4" },
    { label: "CIRCULARITY", value: "1,912.5", unit: "T", sub: "Waste Stream Total", color: "text-amber-500", trend: "1912.5" },
    { label: "WATER QUALITY", value: "7.0", unit: "PH", sub: "Monitoring Status", color: "text-blue-500", trend: "7.0" },
    { label: "PROPER RATING", value: "GOLD", sub: "Compliance Status", color: "text-emerald-500", trend: "GOLD" },
    { label: "ISO 14001:2015", value: "ACTIVE", sub: "EMS Certification", color: "text-blue-600", trend: "0" },
    { label: "AMDAL MILESTONES", value: "100%", sub: "Permit Progress", color: "text-emerald-500", trend: "100" },
    { label: "AUDIT REGISTRY", value: "CLEAR", sub: "Active Findings", color: "text-emerald-500", trend: "0" }
  ];

  return (
    <div className="command-center-dashboard animate-in fade-in zoom-in duration-1000 w-full pt-16 pb-6">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Hero Area */}
        <div className="col-span-12 lg:col-span-12">
          <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] px-10 py-10 mb-8 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
              <div className="max-w-2xl">
                <div className="inline-block px-5 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em] mb-6">
                  ENTERPRISE PERFORMANCE INDEX
                </div>
                <h3 className="text-5xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-6 leading-[0.9]">
                  Environmental <br /><span className="text-emerald-500">Impact Score.</span>
                </h3>
                <p className="text-base text-slate-400 font-light leading-relaxed max-w-xl">
                  Unified ESG intelligence hub. Synthesizing real-time telemetry into a single definitive health score for <span className="text-white font-bold tracking-tight">GLOBAL OPERATIONS</span>.
                </p>
              </div>

              <div className="relative flex items-center justify-center w-48 h-48 lg:w-56 lg:h-56 shrink-0 bg-white/5 rounded-full border border-white/5 overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="6" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#10b981" strokeWidth="6" strokeDasharray="160 283" className="drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]" />
                  <circle cx="50" cy="5" r="3" fill="#10b981" />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-5xl md:text-6xl font-black text-white italic">57%</span>
                  <span className="text-[9px] font-black text-emerald-500 uppercase tracking-[0.4em] mt-2">HEALTH SCORE</span>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-500/10 to-transparent opacity-50"></div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] p-6 shadow-xl border border-slate-100 hover:scale-[1.02] transition-all duration-500 group overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">{stat.label}</span>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                  <ArrowRight className="w-4 h-4 text-slate-300 transform -rotate-45 group-hover:text-emerald-500" />
                </div>
              </div>
              <div className="flex items-baseline gap-1.5 mb-3">
                <span className={`text-3xl font-black italic tracking-tighter leading-none ${stat.color}`}>{stat.value}</span>
                {stat.unit && <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest shrink-0">{stat.unit}</span>}
              </div>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-tight">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ComplianceDashboard() {
  return (
    <div className="compliance-dashboard animate-in fade-in slide-in-from-right duration-1000 w-full pt-20 pb-10">
      <div className="flex justify-between items-center mb-10">
        <div className="max-w-2xl">
          <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter">Compliance & <span className="text-emerald-500">Regulatory reporting</span></h3>
          <p className="text-[12px] text-slate-500 font-bold uppercase tracking-[0.2em]">Digitized reporting workflow precision-aligned with KLHK SIMPEL requirements.</p>
        </div>
        <div className="bg-red-600/10 border border-red-500/20 rounded-2xl p-6 flex items-center gap-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.4)]">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-[10px] font-black text-red-500 uppercase tracking-[0.3em] mb-1">CRITICAL RED FLAG</div>
              <div className="text-sm font-black text-white italic uppercase tracking-tight">2 OVERDUE SUBMISSIONS</div>
            </div>
          </div>
          <button className="relative z-10 bg-white text-red-600 px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-colors shadow-lg">
            RESOLVE NOW
          </button>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-500/20 to-transparent"></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-12">
        {[
          { label: "PENDING PREPARATION", value: "1", status: "DOCUMENT", icon: <Calendar className="text-amber-500 w-6 h-6" />, color: "text-amber-500" },
          { label: "SUBMITTED (IN REVIEW)", value: "1", status: "DOCUMENT", icon: <Send className="text-blue-500 w-6 h-6" />, color: "text-blue-500" },
          { label: "APPROVED BY AGENCY", value: "1", status: "DOCUMENT", icon: <CheckCircle2 className="text-emerald-500 w-6 h-6" />, color: "text-emerald-500" },
          { label: "OVERDUE DOCUMENTS", value: "2", status: "DOCUMENTS", icon: <AlertCircle className="text-red-500 w-6 h-6" />, color: "text-red-500" },
        ].map((item, idx) => (
          <div key={idx} className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-xl group hover:scale-[1.02] transition-all duration-500">
            <div className="flex justify-between items-start mb-6">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-tight w-2/3">{item.label}</span>
              {item.icon}
            </div>
            <div className="flex items-baseline gap-3">
              <span className={`text-5xl font-black italic tracking-tighter ${item.color}`}>{item.value}</span>
              <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{item.status}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="bg-white border border-slate-100 rounded-[3rem] p-12 shadow-xl">
          <div className="flex items-center gap-3 mb-10">
            <TrendingUp className="w-5 h-5 text-blue-500" />
            <h4 className="text-sm font-black text-slate-900 italic uppercase tracking-wider">OVERALL COMPLIANCE VECTOR</h4>
          </div>
          <div className="h-48 flex items-center justify-center bg-slate-50 border border-dashed border-slate-200 rounded-3xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
            <p className="relative z-10 text-[10px] text-slate-400 font-black uppercase tracking-[0.3em]">Radar Chart Viz</p>
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-[3rem] p-12 shadow-xl">
          <div className="flex items-center gap-3 mb-10">
            <TrendingUp className="w-5 h-5 text-emerald-500" />
            <h4 className="text-sm font-black text-slate-900 italic uppercase tracking-wider">SIMPEL SUBMISSION STATUS</h4>
          </div>
          <div className="h-48 flex items-center justify-center">
            <div className="relative w-40 h-40">
              <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#f1f5f9" strokeWidth="12" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="12" strokeDasharray="180 251" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="12" strokeDasharray="40 251" strokeDashoffset="-180" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-black text-slate-900 italic">82%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-[3rem] p-12 shadow-xl">
          <div className="flex items-center gap-3 mb-8">
            <RefreshCw className="w-5 h-5 text-blue-600" />
            <h4 className="text-sm font-black text-slate-900 italic uppercase tracking-wider">SIMPEL INTEGRATION LINK</h4>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-5 bg-slate-50 border border-slate-100 rounded-2xl">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">API CONNECTION</span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-600 text-[8px] font-black rounded-lg uppercase">ACTIVE</span>
            </div>
            <div className="flex items-center justify-between p-5 bg-slate-50 border border-slate-100 rounded-2xl">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">LAST SYNC</span>
              <span className="text-[10px] font-black text-slate-900 uppercase">2 MINS AGO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
function AmdalManagement() {
  return (
    <div className="amdal-management-container animate-in fade-in zoom-in duration-1000 w-full pt-20 pb-10">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter">AMDAL <span className="text-purple-400">Management.</span></h3>
          <p className="text-[12px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-2">Comprehensive tracking for EIA, RKL, and RPL implementation parameters.</p>
        </div>
        <button className="bg-purple-600 text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-purple-700 transition-all shadow-xl shadow-purple-600/20">
          <PlusCircle className="w-4 h-4" /> ADD REQUIREMENT
        </button>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-12">
        {[
          { label: "TRACKED PARAMETERS", val: "14", sub: "RKL & RPL", color: "text-blue-500", icon: <ShieldCheck className="w-5 h-5 text-blue-500" /> },
          { label: "COMPLIANCE RATE", val: "100%", sub: "Zero Violations", color: "text-emerald-500", icon: <CheckCircle2 className="text-emerald-500" /> },
          { label: "UPCOMING TASKS", val: "3", sub: "Due in < 30 Days", color: "text-amber-500", icon: <Calendar className="w-5 h-5 text-amber-500" /> },
          { label: "OVERDUE ITEMS", val: "0", sub: "Clear Protocol", color: "text-emerald-500", icon: <AlertCircle className="w-5 h-5 text-emerald-500" /> }
        ].map((card, idx) => (
          <div key={idx} className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-xl group hover:scale-[1.02] transition-all duration-500">
            <div className="flex justify-between items-start mb-6">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{card.label}</span>
              {idx === 1 ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : card.icon}
            </div>
            <div className="flex items-baseline gap-2">
              <span className={`text-5xl font-black italic tracking-tighter ${card.color}`}>{card.val}</span>
              <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{card.sub}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-4 bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden flex flex-col justify-between shadow-2xl">
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <ShieldCheck className="w-6 h-6 text-purple-400" />
              <h4 className="text-xl font-black italic uppercase tracking-tight">EIA ADVISORY</h4>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-black text-emerald-500 uppercase italic">OPERATIONAL COMPLIANT</span>
              </div>
              <p className="text-xs text-slate-400 font-light leading-relaxed">All statutory RKL-RPL obligations for the current semester are verified and logged.</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-4 border-b border-white/5">
                <span className="text-[10px] font-bold text-slate-500 uppercase">NEXT REPORT</span>
                <span className="text-[10px] font-black text-white uppercase italic">JULY 2026</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-white/5">
                <span className="text-[10px] font-bold text-slate-500 uppercase">VALIDITY</span>
                <span className="text-[10px] font-black text-white uppercase italic">90 DAYS REMAINING</span>
              </div>
            </div>
          </div>
          <ShieldCheck className="w-48 h-48 text-white/5 absolute -bottom-12 -right-12" />
        </div>

        <div className="col-span-8 bg-white border border-slate-100 rounded-[3rem] p-12 shadow-xl">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-4">
              <Calendar className="w-6 h-6 text-blue-500" />
              <h4 className="text-xl font-black text-slate-900 italic uppercase tracking-tight">Monitoring agenda</h4>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg border border-slate-100 hover:bg-slate-50"><ChevronLeft className="w-4 h-4" /></button>
              <span className="px-4 py-2 text-[11px] font-black text-slate-900 uppercase">MARCH 2026</span>
              <button className="p-2 rounded-lg border border-slate-100 hover:bg-slate-50"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-px bg-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <div key={`${d}-${i}`} className="bg-slate-50 p-4 text-center text-[10px] font-black text-slate-400">{d}</div>)}
            {Array.from({ length: 31 }).map((_, i) => (
              <div key={i} className="bg-white p-6 min-h-[100px] relative group hover:bg-slate-50 transition-colors cursor-pointer">
                <span className="text-[12px] font-black text-slate-900">{i + 1}</span>
                {i === 11 && <div className="absolute inset-0 flex items-center justify-center"><div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-black shadow-lg shadow-purple-600/30">{i + 1}</div></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
function GHGAccountingDashboard() {
  return (
    <div className="ghg-accounting-dashboard animate-in fade-in slide-in-from-bottom duration-1000 w-full pt-20 pb-10">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter">GHG <span className="text-emerald-500">Accounting.</span></h3>
          <p className="text-[12px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-2">SRN PPI / SIGN SMART protocol carbon footprint tracking.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 italic">Total Emissions</div>
            <div className="text-3xl font-black text-white italic tracking-tighter">12.450,22 <span className="text-sm text-slate-500 uppercase not-italic">tCO2e</span></div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
            <Globe2 className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 mb-12">
        <div className="col-span-8 bg-white border border-slate-100 rounded-[3rem] p-10 shadow-xl">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-emerald-500" />
              <h4 className="text-xl font-black italic uppercase tracking-tight">CARBON TRAJECTORY</h4>
            </div>
          </div>
          <div className="h-64 flex items-end gap-1 px-4 mb-8">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="flex-1 bg-emerald-500/20 rounded-t-sm hover:bg-emerald-500 transition-all duration-300" style={{ height: `${30 + 50 * Math.sin(i / 5) * Math.random()}%` }}></div>
            ))}
          </div>
          <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-slate-400 border-t border-slate-100 pt-6 italic">
            <span>JAN 2026 Baseline</span>
            <div className="flex gap-6">
              <div className="flex items-center gap-2.5"><div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div><span>SCOPE 1+2</span></div>
              <div className="flex items-center gap-2.5"><div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div><span>PROJECTION</span></div>
            </div>
            <span>DEC 2026 Target</span>
          </div>
        </div>

        <div className="col-span-4 space-y-8 text-white">
          <div className="bg-slate-900 rounded-[3rem] p-10 relative overflow-hidden h-full flex flex-col justify-between shadow-2xl">
            <div>
              <div className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-6 italic">SRN PPI Compliance</div>
              <h4 className="text-3xl font-black italic uppercase tracking-tighter mb-4">REDUCTION STATUS</h4>
              <div className="w-full h-4 bg-emerald-500/10 rounded-full border border-emerald-500/20 overflow-hidden mb-4">
                <div className="h-full bg-emerald-500 w-[68%]"></div>
              </div>
              <p className="text-sm text-slate-400 font-light leading-relaxed">Currently tracking 12.5% below historical baseline. On target for Tier 1 Certification.</p>
            </div>
            <div className="pt-8 border-t border-white/5 grid grid-cols-2 gap-6">
              <div>
                <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1 italic">Scope 1</div>
                <div className="text-lg font-black italic">8.2K <span className="text-[10px] not-italic text-slate-600">t</span></div>
              </div>
              <div>
                <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1 italic">Scope 2</div>
                <div className="text-lg font-black italic">4.25K <span className="text-[10px] not-italic text-slate-600">t</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-100 rounded-[3rem] p-12 shadow-xl">
        <div className="flex items-center gap-4 mb-10">
          <Layers className="w-6 h-6 text-emerald-500" />
          <h4 className="text-xl font-black italic uppercase tracking-tight">365-DAY CARBON INTENSITY MATRIX</h4>
        </div>
        <div className="grid grid-cols-[repeat(52,1fr)] gap-2">
          {Array.from({ length: 364 }).map((_, i) => (
            <div key={i} className={`h-4 rounded-sm transition-all hover:scale-150 cursor-pointer ${Math.random() > 0.9 ? 'bg-orange-500' : Math.random() > 0.7 ? 'bg-emerald-500' : 'bg-emerald-500/20'}`}></div>
          ))}
        </div>
      </div>
    </div>
  )
}

function WastewaterDashboard() {
  return (
    <div className="wastewater-dashboard animate-in fade-in slide-in-from-right duration-1000 w-full pt-20 pb-10">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter">Wastewater & <span className="text-blue-500">POPAL Mgmt.</span></h3>
          <p className="text-[12px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-2">Manage IPAL BMAL compliance, daily SPARING logs, and certified operators.</p>
        </div>
        <div className="bg-red-600/10 border border-red-500/20 rounded-2xl p-6 flex items-center gap-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.4)]">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-[10px] font-black text-red-500 uppercase tracking-[0.3em] mb-1">REGULATORY ALERT</div>
              <div className="text-sm font-black text-white italic uppercase tracking-tight">NO ACTIVE POPAL OPERATOR</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 mb-12">
        <div className="col-span-8 bg-white border border-slate-100 rounded-[3rem] p-10 shadow-xl">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <h4 className="text-xl font-black italic uppercase tracking-tight">BMAL PARAMETER TRENDS</h4>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div><span className="text-[9px] font-black text-slate-400 uppercase">PH</span></div>
              <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div><span className="text-[9px] font-black text-slate-400 uppercase">COD</span></div>
              <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div><span className="text-[9px] font-black text-slate-400 uppercase">TSS</span></div>
            </div>
          </div>
          <div className="h-60 flex items-end gap-1 px-2">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="flex-1 flex flex-col gap-1 items-center group">
                <div className="w-full bg-emerald-500/20 rounded-t-sm group-hover:bg-emerald-500 transition-colors" style={{ height: `${20 + Math.random() * 40}%` }}></div>
                <div className="w-full bg-blue-500/20 rounded-t-sm group-hover:bg-blue-500 transition-colors" style={{ height: `${10 + Math.random() * 30}%` }}></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-6 text-[9px] font-black text-slate-400 uppercase tracking-widest px-4 border-t border-slate-100 pt-6 italic">
            <span>START OF SHIFT</span>
            <span>REAL-TIME TELEMETRY STREAM</span>
            <span>END OF SHIFT</span>
          </div>
        </div>
        <div className="col-span-4 space-y-6">
          <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl h-full flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-6 italic">Compliance Score</div>
              <div className="text-6xl font-black italic tracking-tighter mb-4">98.2<span className="text-xl text-slate-500">%</span></div>
              <p className="text-xs text-slate-400 font-light leading-relaxed">Integrated SPARING telemetry verification confirms high boundary limit adherence.</p>
            </div>
            <div className="pt-8 border-t border-white/5 space-y-4">
              <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest italic">
                <span className="text-slate-500">SPARING Status</span>
                <span className="text-emerald-500">ONLINE</span>
              </div>
              <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest italic">
                <span className="text-slate-500">Last KLHK Sync</span>
                <span className="text-white">12 SEC AGO</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-100 rounded-[3rem] p-12 shadow-xl">
        <div className="flex items-center gap-4 mb-8">
          <Database className="w-6 h-6 text-blue-500" />
          <h4 className="text-xl font-black italic uppercase tracking-tight">365-day sparing compliance matrix</h4>
        </div>
        <div className="grid grid-cols-[repeat(52,1fr)] gap-2">
          {Array.from({ length: 364 }).map((_, i) => (
            <div key={i} className={`h-4 rounded-sm transition-all hover:scale-150 cursor-pointer ${i % 30 === 0 ? 'bg-red-500' : i % 7 === 0 ? 'bg-emerald-500' : 'bg-emerald-500/20'}`}></div>
          ))}
        </div>
      </div>
    </div>
  )
}

function B3WasteManagement() {
  const neraca = [
    { label: 'OILY SLUDGE / PIT', cat: 'CATEGORY 1', code: 'A351-1', val: '124.5', unit: 'T' },
    { label: 'CONTAMINATED SOIL', cat: 'CATEGORY 2', code: 'B104-d', val: '842.1', unit: 'T' },
    { label: 'USED CHEMICALS', cat: 'CATEGORY 1', code: 'A102-d', val: '12.8', unit: 'M3' },
    { label: 'MEDICAL WASTE', cat: 'CATEGORY 1', code: 'A337-1', val: '4.2', unit: 'KG' }
  ];

  return (
    <div className="b3-waste-management animate-in fade-in slide-in-from-left duration-1000 w-full pt-20 pb-10">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter">B3 Waste <span className="text-amber-500">Management.</span></h3>
          <p className="text-[12px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-2">End-to-end hazardous waste manifest lifecycle & Festronik integration.</p>
        </div>
        <button className="bg-amber-600 text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-amber-700 transition-all shadow-xl shadow-amber-600/20">
          <PlusCircle className="w-4 h-4" /> NEW MANIFEST
        </button>
      </div>

      <div className="grid grid-cols-12 gap-6 mb-12">
        <div className="col-span-4 bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-xl">
          <div className="flex items-center gap-3 mb-8">
            <Activity className="w-5 h-5 text-amber-500" />
            <h4 className="text-sm font-black text-slate-900 italic uppercase tracking-wider">WASTE CATEGORY SPLIT</h4>
          </div>
          <div className="relative flex justify-center mb-10">
            <svg viewBox="0 0 100 100" className="w-48 h-48 transform -rotate-90">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#f1f5f9" strokeWidth="12" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#f59e0b" strokeWidth="12" strokeDasharray="180 251" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#ef4444" strokeWidth="12" strokeDasharray="40 251" strokeDashoffset="-180" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-black text-slate-900 italic">72%</span>
              <span className="text-[8px] font-black text-slate-400 uppercase">CAT 1 / CAT 2</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
              <span className="text-slate-400">CLEARANCE RATE</span>
              <span className="text-emerald-500">OPTIMAL</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 w-[72%]"></div>
            </div>
          </div>
        </div>

        <div className="col-span-8 bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-orange-500" />
              <h4 className="text-xl font-black italic uppercase tracking-tight">GENERATION vs HANDOVER</h4>
            </div>
          </div>
          <div className="h-64 flex items-end gap-2">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="flex-1 flex flex-col gap-1 items-center">
                <div className="w-full bg-orange-500/40 rounded-t-sm" style={{ height: `${30 + Math.random() * 50}%` }}></div>
                <div className="w-full bg-blue-500/40 rounded-t-sm" style={{ height: `${20 + Math.random() * 40}%` }}></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-8 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] border-t border-white/5 pt-8">
            <div className="flex gap-6">
              <div className="flex items-center gap-2"><div className="w-3 h-1 bg-orange-500"></div><span>GENERATION</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-1 bg-blue-500"></div><span>HANDOVER</span></div>
            </div>
            <span>LAST 24 CYCLES</span>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-100 rounded-[3rem] p-12 shadow-xl">
        <div className="flex items-center gap-4 mb-10">
          <Database className="w-6 h-6 text-blue-500" />
          <h4 className="text-xl font-black italic uppercase tracking-tight">STORAGE TIMELINE MATRIX</h4>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="py-6 text-left text-[11px] font-black text-slate-400 uppercase tracking-widest">WASTE STREAM ORIGIN</th>
              {['JANURY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE'].map((m, i) => <th key={`${m}-${i}`} className="text-center text-[11px] font-black text-slate-400 uppercase tracking-widest">{m}</th>)}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {neraca.map((item, idx) => (
              <tr key={idx} className="group hover:bg-slate-50/50 transition-colors">
                <td className="py-8">
                  <div className="text-lg font-black text-slate-900 italic uppercase leading-none mb-2">{item.label}</div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase ${item.cat === 'CATEGORY 1' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'}`}>{item.cat}</span>
                    <span className="text-[10px] font-bold text-slate-400 tracking-widest">{item.code} • TPS: {item.val} {item.unit}</span>
                  </div>
                </td>
                {[...Array(6)].map((_, i) => (
                  <td key={i} className="px-4">
                    <div className={`h-3 rounded-full ${i === 2 ? 'bg-red-500' : i < 2 ? 'bg-emerald-500' : 'bg-slate-100'}`}></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function ISO14001Dashboard() {
  const cards = [
    { label: 'Audit Readiness', val: '97.4%', color: 'text-emerald-400', bar: true, trend: '+2.1%' },
    { label: 'Significant Aspects', val: '03', sub: 'Critical Impacts Identified', color: 'text-orange-400', trend: 'STABLE' },
    { label: 'Legal Compliance', val: '100%', sub: 'Obligations Verified', color: 'text-blue-400', trend: 'VERIFIED' },
    { label: 'Non-Conformities', val: '00', sub: 'Zero Pending CAPAs', color: 'text-emerald-500', trend: 'OPTIMAL' }
  ];

  return (
    <div className="w-full flex flex-col gap-8 pt-20 pb-10">
      <div className="grid grid-cols-4 gap-6">
        {cards.map((c, i) => (
          <div key={i} className="glass-panel rounded-[2rem] p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex justify-between items-center mb-8">
              <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.4em]">{c.label}</span>
              <span className="text-[8px] font-black text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">{c.trend}</span>
            </div>
            <div className={`text-5xl font-black italic tracking-tighter mb-4 ${c.color} drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]`}>{c.val}</div>
            {c.bar ? (
              <div className="mt-6">
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-emerald-500 w-[97.4%] shadow-[0_0_20px_rgba(16,185,129,0.6)]"></div>
                </div>
              </div>
            ) : (
              <div className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em] mt-6 pt-5 border-t border-white/5">{c.sub}</div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-10 flex-1 min-h-0">
        <div className="col-span-4 glass-panel rounded-[3rem] p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <Layers className="w-40 h-40 text-emerald-500" />
          </div>
          <h4 className="text-[11px] font-black text-emerald-500 uppercase tracking-[0.5em] italic mb-12">Aspect Significance Matrix</h4>
          <div className="aspect-square w-full grid grid-cols-5 gap-3 relative">
            <div className="absolute -left-12 top-0 h-full flex flex-col justify-between text-[9px] font-black text-white/10 italic py-2">
              <span>HI</span><span>MD</span><span>LO</span>
            </div>
            {Array.from({ length: 25 }).map((_, i) => {
              const row = Math.floor(i / 5);
              const col = i % 5;
              const isHigh = row < 2 && col > 2;
              const isActive = (row === 1 && col === 3) || (row === 0 && col === 4);
              return (
                <div key={i} className={`rounded-xl border transition-all duration-1000 flex items-center justify-center
                   ${isHigh ? 'bg-red-500/5 border-red-500/20' : 'bg-white/2 border-white/5'}
                   ${isActive ? 'bg-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.8)] border-emerald-400 scale-110 z-10' : ''}`}>
                  {isActive && <Activity className="w-6 h-6 text-white animate-pulse" />}
                </div>
              );
            })}
          </div>
          <div className="mt-12 flex justify-between items-center border-t border-white/5 pt-10">
            <span className="text-[10px] font-black text-white/30 uppercase">Probability × Severity</span>
            <span className="text-emerald-500 text-[10px] font-black">2 ACTIVE RISKS</span>
          </div>
        </div>

        <div className="col-span-8 grid grid-rows-2 gap-10">
          <div className="glass-panel rounded-[3rem] p-12 flex items-center gap-16 relative overflow-hidden">
            <div className="flex-1">
              <h4 className="text-[11px] font-black text-white/30 uppercase tracking-[0.4em] mb-10">CAPA Lifecycle Analytics</h4>
              <div className="space-y-8">
                {[
                  { label: 'Root Cause Identified', val: 100, color: 'bg-emerald-500' },
                  { label: 'Active Remediation', val: 78, color: 'bg-blue-500' },
                  { label: 'Technical Verification', val: 42, color: 'bg-white/10' }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[10px] font-black mb-3 uppercase tracking-widest">
                      <span className="text-white/60 italic">{item.label}</span>
                      <span className="text-white/40">{item.val}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <div className={`h-full ${item.color} shadow-[0_0_15px_currentColor] transition-all duration-1000`} style={{ width: `${item.val}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-64 h-64 relative flex items-center justify-center shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="12" />
                <circle cx="50" cy="50" r="42" fill="none" stroke="#10b981" strokeWidth="12" strokeDasharray="263.8" strokeDashoffset="26.3" strokeLinecap="round" className="drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-black italic tracking-tighter text-white">12</span>
                <span className="text-[9px] font-black text-white/40 uppercase tracking-widest mt-2">Active CAPA</span>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-[3rem] p-12 relative overflow-hidden">
            <div className="flex justify-between items-center mb-8 relative z-10">
              <h4 className="text-[11px] font-black text-blue-400 uppercase tracking-[0.5em] italic">Regulatory Vigilance Stream</h4>
              <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-xl text-[10px] font-black text-blue-400 uppercase">Live Stream</div>
            </div>
            <div className="h-24 flex items-end gap-2 relative z-10">
              {Array.from({ length: 48 }).map((_, i) => {
                const h = 20 + Math.random() * 80;
                return (
                  <div key={i} className="flex-1 bg-blue-500/20 hover:bg-blue-400/50 transition-colors rounded-t-sm" style={{ height: `${h}%` }}></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DomesticWasteDashboard() {
  const categories = [
    { label: 'ORGANIC WASTE', val: '42%', color: 'text-emerald-500', sub: 'Compostable Material' },
    { label: 'PLASTICS / PET', val: '28%', color: 'text-blue-500', sub: 'Recyclable Stream' },
    { label: 'PAPER / CARTON', val: '18%', color: 'text-amber-500', sub: 'Processing Hub' },
    { label: 'RESIDUE', val: '12%', color: 'text-slate-400', sub: 'Final Disposal' }
  ];

  return (
    <div className="domestic-waste-management animate-in fade-in slide-in-from-bottom duration-1000 w-full pt-20 pb-10">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter">Domestic <span className="text-emerald-500">Waste.</span></h3>
          <p className="text-[12px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-2">Circular economy tracking & Non-B3 waste processing metrics.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl">
            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest leading-none">RECYCLING RATE: 88%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-12">
        {categories.map((c, i) => (
          <div key={i} className="glass-panel rounded-[2rem] p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
              <Trash2 className="w-16 h-16" />
            </div>
            <div className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] mb-4 italic">{c.label}</div>
            <div className={`text-5xl font-black italic tracking-tighter ${c.color} mb-2`}>{c.val}</div>
            <div className="text-[8px] font-bold text-white/20 uppercase tracking-widest italic">{c.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 glass-panel rounded-[3rem] p-12 relative overflow-hidden">
          <div className="flex justify-between items-center mb-12">
            <h4 className="text-[11px] font-black text-white/30 uppercase tracking-[0.5em] italic">SEGREGATION EFFICIENCY TIMELINE</h4>
            <div className="flex gap-4">
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div><span className="text-[9px] font-black text-white/40 uppercase">Target</span></div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div><span className="text-[9px] font-black text-white/40 uppercase">Actual</span></div>
            </div>
          </div>
          <div className="h-64 flex items-end gap-3 px-4">
            {Array.from({ length: 30 }).map((_, i) => {
              const h = 40 + Math.random() * 60;
              return (
                <div key={i} className="flex-1 group relative">
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-emerald-500 text-white text-[8px] font-black px-2 py-1 rounded">
                    {h.toFixed(1)}%
                  </div>
                  <div className="w-full bg-blue-500/20 group-hover:bg-blue-500/40 transition-all rounded-t-lg" style={{ height: `${h}%` }}></div>
                </div>
              );
            })}
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 flex justify-between text-[9px] font-black text-white/10 uppercase tracking-[0.4em]">
            <span>DAY 01</span><span>DAILY MONITORING CYCLE</span><span>DAY 30</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProperDashboard() {
  return (
    <div className="w-full flex flex-col gap-4 pt-20 pb-10">
      <div className="glass-panel rounded-[3rem] p-10 flex justify-between items-center relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="flex-1 max-w-2xl relative z-10">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500/50 mb-3 block italic">Performance Maturity Tracker</span>
              <h3 className="text-5xl font-black italic tracking-tighter text-white uppercase leading-none">Indonesian Ministry <br /><span className="text-emerald-500">PROPER 2026.</span></h3>
            </div>
            <div className="text-right">
              <div className="text-5xl font-black italic text-white mb-2 tracking-tighter">32.8%</div>
              <div className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] px-4 py-1.5 bg-white/5 rounded-2xl border border-white/10 inline-block">Maturity Score</div>
            </div>
          </div>
          <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden relative border border-white/5">
            <div className="h-full bg-gradient-to-r from-blue-600 to-emerald-500 w-[32.8%] shadow-[0_0_30px_rgba(16,185,129,0.4)]"></div>
          </div>
          <div className="flex justify-between mt-6 text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">
            <span>STARTUP</span><span>BLUE (TAAT)</span><span>GREEN</span><span className="text-emerald-500">GOLD STATUS</span>
          </div>
        </div>

        <div className="ml-16 glass-panel rounded-[2.5rem] p-10 text-white w-[26rem] relative overflow-hidden group/ai active-glowing">
          <Zap className="absolute top-6 right-6 text-orange-400 w-6 h-6 animate-pulse" />
          <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500 mb-8">AI Predictive Insight</h5>
          <p className="text-[13px] leading-relaxed font-light italic text-white/80">"Current trajectory indicates a <span className="text-white font-bold text-base">12% shortfall</span> in Biodiversity Innovation metrics. Implementing <span className="text-emerald-400 underline decoration-dotted">MIGAS-TECH Protocols</span> will trigger a status elevation to <span className="text-emerald-500 font-bold uppercase tracking-[0.2em] px-2 bg-emerald-500/10 rounded-md">GOLD</span> by Q3 2026."</p>
          <div className="mt-8 flex items-center justify-between">
            <span className="text-[9px] font-black uppercase text-white/20 tracking-[0.3em]">Engine v4.28.0</span>
            <button className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-400 flex items-center gap-2.5 group/btn">
              Strategy Book <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 flex-1">
        <div className="col-span-8 glass-panel rounded-[2.5rem] p-10 relative overflow-hidden">
          <div className="flex justify-between items-center mb-10">
            <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em] italic">Regulatory Compliance Vault (Taat)</h4>
            <div className="px-4 py-1.5 bg-emerald-500 rounded-xl text-[9px] font-black text-white shadow-2xl shadow-emerald-500/30 italic">VALIDATED v2.4</div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { label: 'IPAL POPAL MONITORING', sub: 'Mandatory Blue Requirement', status: 'COMPLIANT', icon: <Droplets className="w-6 h-6" /> },
              { label: 'SIMPEL AIR EMISSION', sub: 'Technical Data Integrity', status: 'COMPLIANT', icon: <Wind className="w-6 h-6" /> },
              { label: 'FESTRONIK B3 MANIFEST', sub: 'End-to-End Traceability', status: 'COMPLIANT', icon: <Database className="w-6 h-6" /> }
            ].map((t, i) => (
              <div key={i} className="flex items-center justify-between p-8 bg-white/2 border border-white/5 hover:border-emerald-500/30 transition-all rounded-[2rem] group/item hover:bg-white/5">
                <div className="flex items-center gap-8">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-emerald-500 shadow-xl group-hover/item:scale-110 transition-transform">
                    {t.icon}
                  </div>
                  <div>
                    <span className="text-base font-black text-white italic uppercase tracking-tighter block mb-1">{t.label}</span>
                    <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em]">{t.sub}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black text-emerald-500 italic uppercase block mb-2 tracking-tighter">{t.status}</span>
                  <div className="flex gap-1 justify-end">
                    {[...Array(5)].map((_, j) => <div key={j} className="w-5 h-1 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] rounded-full"></div>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-4 glass-panel rounded-[2.5rem] p-10 relative overflow-hidden">
          <div className="flex justify-between items-center mb-10">
            <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em] italic">Compliance Trend</h4>
            <span className="text-[9px] font-black text-emerald-500 uppercase italic">12 Months</span>
          </div>
          <div className="h-48 w-full relative">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,80 Q10,75 20,60 T40,40 T60,50 T80,20 L100,10" fill="none" stroke="#10b981" strokeWidth="4" strokeLinecap="round" className="drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
              <path d="M0,80 Q10,75 20,60 T40,40 T60,50 T80,20 L100,10 L100,100 L0,100 Z" fill="url(#properGrad)" opacity="0.1" />
            </svg>
            <div className="absolute top-2 left-3/4">
              <div className="bg-emerald-500 w-5 h-5 rounded-full shadow-[0_0_30px_rgba(16,185,129,1)] animate-ping absolute"></div>
              <div className="bg-emerald-500 w-5 h-5 rounded-full relative border-4 border-slate-950"></div>
            </div>
          </div>
          <div className="mt-14 flex justify-between text-[11px] font-black text-white/10 uppercase tracking-[0.5em]">
            <span>JAN</span><span>STATUS</span><span>DEC</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function ESGIntelligenceDashboard() {
  return (
    <div className="w-full flex flex-col gap-6 pt-20 pb-10">
      <div className="glass-panel rounded-[3.5rem] p-10 flex justify-between items-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent"></div>
        <div className="flex items-center gap-12 relative z-10">
          <div className="w-28 h-28 rounded-[2.5rem] bg-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.5)] flex items-center justify-center border border-emerald-400">
            <BarChart3 className="w-14 h-14 text-white" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500/50 mb-3 block italic">Performance Indexing Engine</span>
            <h3 className="text-5xl font-black italic uppercase tracking-tighter mb-5 leading-none text-white">Advanced <br /><span className="text-emerald-500">ESG Intelligence.</span></h3>
            <div className="flex gap-4">
              <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] px-6 py-3 bg-white/5 rounded-2xl border border-white/10 italic">v4.0.0 Enterprise Core</span>
              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em] px-6 py-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 italic">Path: Net Zero 2050</span>
            </div>
          </div>
        </div>

        <div className="w-72 h-72 relative flex items-center justify-center z-10 mr-12">
          <svg viewBox="0 0 100 100" className="w-full h-full group-hover:scale-110 transition-transform duration-700">
            <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="2 4" />
            <path d="M50 10 L90 80 L10 80 Z" fill="none" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="0.5" />
            <path d="M50 20 L80 75 L20 75 Z" fill="rgba(16, 185, 129, 0.3)" stroke="#10b981" strokeWidth="2" strokeLinejoin="round" className="drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
            <circle cx="50" cy="20" r="3" fill="#10b981" className="animate-pulse" />
            <circle cx="80" cy="75" r="3" fill="#10b981" />
            <circle cx="20" cy="75" r="3" fill="#10b981" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-6xl font-black italic tracking-tighter leading-none mb-1 text-white">88.4</span>
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-emerald-500/50 italic">Index Status</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 flex-1">
        {['Standard Path', 'Maturity Curve', 'Master Level'].map((lvl, i) => (
          <div key={i} className="glass-panel rounded-[2.5rem] p-8 flex flex-col justify-between group/card hover:border-emerald-500/30 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/2 rounded-full -mr-24 -mt-24 blur-3xl"></div>
            <div>
              <div className="flex justify-between items-center mb-8">
                <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Protocol {String(i + 1).padStart(2, '0')}</span>
                <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center group-hover/card:bg-emerald-500 transition-colors border border-white/5">
                  <ArrowUpRight className="w-5 h-5 text-white/30 group-hover/card:text-white" />
                </div>
              </div>
              <h4 className="text-3xl font-black italic uppercase tracking-tighter mb-8 leading-tight text-white group-hover:text-emerald-400 transition-colors">{lvl}</h4>
              <button className="w-full py-4 rounded-xl bg-emerald-500 text-white text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl shadow-emerald-950/40 hover:scale-105 transition-transform italic">
                Initialize Matrix
              </button>
            </div>
            <div className="pt-8 border-t border-white/5 mt-8">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.3em] mb-5">
                <span className="text-white/30 italic">Mastery Completion</span>
                <span className="text-emerald-500">{32 + i * 24}%</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                <div className="h-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all duration-1000" style={{ width: `${32 + i * 24}%` }}></div>
              </div>
            </div>
          </div>
        ))}

        <div className="glass-panel rounded-[2.5rem] p-10 flex flex-col relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <Activity className="w-32 h-32 animate-pulse text-blue-500" />
          </div>
          <div className="mb-10 flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shadow-2xl">
              <Cpu className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.4em] text-white leading-none mb-2 italic">Context Engine</h4>
              <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">Active Processing</span>
            </div>
          </div>
          <div className="space-y-4 flex-1">
            <div className="h-12 bg-white/2 rounded-xl border border-white/5 flex items-center px-4 text-[10px] font-black text-white/20 italic tracking-widest uppercase">System Override Target...</div>
            <div className="h-12 bg-white/2 rounded-xl border border-white/5 flex items-center px-4 text-[10px] font-black text-white/20 italic tracking-widest uppercase">Global Variable Sync...</div>
            <button className="w-full py-6 mt-8 bg-blue-600 rounded-2xl text-white text-xs font-black uppercase tracking-[0.3em] shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:bg-blue-500 transition-all group-hover:scale-[1.02] italic">
              Verify Neural Link
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function LegalRegisterDashboard() {
  const laws = [
    { no: '01', type: 'ACT', sub: 'General Environment', title: 'Undang-Undang No. 32 Tahun 2009', desc: 'UU Perlindungan dan Pengelolaan Lingkungan Hidup (PPLH)', compliance: 'FULL' },
    { no: '02', type: 'ACT', sub: 'Carbon Economy', title: 'Undang-Undang No. 6 Tahun 2023', desc: 'Penetapan Perppu No. 2 Tahun 2022 tentang Cipta Kerja', compliance: 'FULL' },
    { no: '03', type: 'GOVT REG', sub: 'Wastewater BMAL', title: 'Peraturan Pemerintah No. 22 Tahun 2021', desc: 'Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup', compliance: 'FULL' },
    { no: '04', type: 'MINISTRY', sub: 'Hazardous Waste', title: 'Permen LHK No. 6 Tahun 2021', desc: 'Tata Cara dan Persyaratan Pengelolaan Limbah B3', compliance: 'REVIEW' }
  ];

  return (
    <div className="w-full flex flex-col gap-8 pt-20 pb-10">
      <div className="grid grid-cols-4 gap-6">
        {[
          { label: 'Total Regulations', val: '1,248', icon: <Scale className="w-6 h-6" />, color: 'text-blue-400' },
          { label: 'Implementation Avg', val: '98.2%', icon: <ShieldCheck className="w-6 h-6" />, color: 'text-emerald-400' },
          { label: 'Upcoming Reviews', val: '00', icon: <Clock className="w-6 h-6" />, color: 'text-orange-400' },
          { label: 'Supreme Acts', val: '03', icon: <Target className="w-6 h-6" />, color: 'text-red-400' }
        ].map((c, i) => (
          <div key={i} className="glass-panel rounded-[2rem] p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-all group-hover:scale-125 duration-700">
              {c.icon}
            </div>
            <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.4em] block mb-10 italic">{c.label}</span>
            <div className={`text-5xl font-black italic uppercase tracking-tighter ${c.color} drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]`}>{c.val}</div>
            <div className="mt-6 h-0.5 w-10 bg-white/10 rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="glass-panel rounded-[3.5rem] p-14 shadow-2xl relative overflow-hidden flex-1 border border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
        <div className="flex justify-between items-center mb-16 relative z-10">
          <div>
            <h4 className="text-emerald-500 text-[11px] font-black uppercase tracking-[0.5em] mb-4 italic">Enterprise Regulatory Vault</h4>
            <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] italic">Live Intelligence for Industrial Compliance</span>
          </div>
          <div className="flex gap-6">
            <div className="w-80 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center px-8 text-[11px] font-black text-white/20 italic tracking-widest uppercase">Search law or clause...</div>
            <div className="px-8 py-5 bg-emerald-500 rounded-2xl text-[10px] font-black text-white shadow-2xl shadow-emerald-500/30 flex items-center gap-4 hover:scale-105 transition-transform uppercase italic">
              <Download className="w-5 h-5" /> EXPORT COMPLIANCE LEDGER
            </div>
          </div>
        </div>

        <div className="space-y-4 relative z-10">
          {laws.map(l => (
            <div key={l.no} className="flex items-center justify-between p-8 bg-white/2 hover:bg-white/5 border border-white/5 hover:border-emerald-500/30 rounded-[2rem] transition-all group overflow-hidden relative">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
              <div className="flex items-center gap-12">
                <span className="text-2xl font-black italic text-white/10 w-8 shrink-0">{l.no}</span>
                <div className="flex flex-col gap-2 shrink-0">
                  <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[8px] font-black text-white/40 uppercase tracking-widest text-center">{l.type}</div>
                  <span className="text-[9px] font-black text-emerald-500 uppercase tracking-[0.2em] italic">{l.sub}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xl font-black italic uppercase text-white mb-1 group-hover:text-emerald-400 transition-colors tracking-tighter truncate">{l.title}</div>
                  <div className="text-[12px] font-light text-white/40 leading-tight italic truncate">{l.desc}</div>
                </div>
              </div>
              <div className="flex items-center gap-10 shrink-0">
                <div className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] italic border
                  ${l.compliance === 'FULL' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-orange-500/10 text-orange-400 border-orange-500/20'}`}>
                  {l.compliance} STATUS
                </div>
                <button className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 hover:bg-emerald-500 group/btn transition-all shadow-2xl">
                  <ArrowRight className="w-6 h-6 text-white/20 group-hover/btn:text-white transition-colors" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SecurityStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
      {[
        { title: "RLS Matrix", desc: "Global enforcement of Row-Level Security across all 12 edge nodes.", icon: <ShieldAlert className="w-10 h-10 text-emerald-500" /> },
        { title: "Operator Hub", desc: "Real-time personnel monitoring and multi-factor session validation.", icon: <User className="w-10 h-10 text-blue-500" /> },
        { title: "99.9% Uptime", desc: "Tier-4 infrastructure integrity with zero-downtime ledger failover.", icon: <Server className="w-10 h-10 text-emerald-500" /> },
        { title: "Quantum-Safe", desc: "TLS 1.3 hybrid encryption for all telemetry and document streams.", icon: <Lock className="w-10 h-10 text-blue-500" /> }
      ].map((s, i) => (
        <div key={i} className="glass-panel p-10 rounded-[3rem] text-left group hover:border-emerald-500/30 transition-all relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-all">{s.icon}</div>
          <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white/50 mb-8 group-hover:bg-emerald-500/10 group-hover:text-emerald-500 transition-all">
            {s.icon}
          </div>
          <h5 className="text-2xl font-black italic uppercase tracking-tight text-white mb-4">{s.title}</h5>
          <p className="text-sm text-slate-500 leading-relaxed font-light">{s.desc}</p>
        </div>
      ))}
    </div>
  )
}

function SecurityDashboard() {
  return (
    <div className="w-full">
      <div className="glass-panel rounded-[4rem] p-12 md:p-20 relative overflow-hidden border border-white/5">
        <div className="absolute top-0 right-0 w-[60rem] h-[60rem] bg-blue-500/5 rounded-full -mr-64 -mt-64 blur-3xl opacity-50"></div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-20 relative z-10 gap-10">
          <div className="flex items-center gap-12">
            <div className="w-32 h-32 rounded-[2.5rem] bg-slate-950 flex items-center justify-center text-emerald-500 shadow-2xl border border-white/10 shrink-0">
              <ShieldAlert className="w-16 h-16 drop-shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
            </div>
            <div>
              <h4 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-6 text-white uppercase">Advanced <br /><span className="text-emerald-500">Audit Ledger</span></h4>
              <p className="text-xs font-black text-white/30 uppercase tracking-[0.6em] italic">Precision Non-Repudiation Architecture</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-8">
            <div className="px-10 py-6 bg-emerald-500 rounded-3xl text-sm font-black text-white shadow-2xl shadow-emerald-500/30 flex items-center gap-6 italic uppercase tracking-widest">
              <div className="w-4 h-4 bg-white rounded-full animate-pulse shadow-[0_0_15px_white]"></div> SYSTEMS NOMINAL
            </div>
            <div className="px-10 py-6 bg-white/5 border border-white/10 rounded-3xl text-xs font-black text-white/40 uppercase tracking-[0.4em] italic flex items-center gap-4">
              <Zap className="w-5 h-5" /> 12MS LATENCY
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full overflow-x-auto pb-4">
          <table className="w-full border-separate border-spacing-y-4">
            <thead>
              <tr className="text-left">
                {['Event Horizon', 'Audit Protocol', 'Entity Context', 'Principal Actor', 'Integrity'].map(h => (
                  <th key={h} className="pb-4 sm:pb-8 px-4 sm:px-12 text-[10px] sm:text-xs font-black text-white/20 uppercase tracking-[0.4em] sm:tracking-[0.6em] italic whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { time: '12:58:24.012', action: 'CREATE_RECORD', entity: 'AMDAL_PARA_02', user: 'ADMIN_BASIR', details: 'HASH:f81d...4fae' },
                { time: '12:56:11.884', action: 'AUTH_SUCCESS', entity: 'USER_LOGIN_X', user: 'PIC_ENVIRONMENT', details: 'SECURE_CHANNEL' },
                { time: '12:54:02.331', action: 'UPDATE_BMAL', entity: 'IPAL_STREAM_A', user: 'SYSTEM_DAEMON', details: 'PARAM_PH:7.2' },
                { time: '12:52:19.904', action: 'FILE_COMMIT', entity: 'SIMPEL_Q4_RKL', user: 'ADMIN_BASIR', details: 'VERSION:v2.4' }
              ].map((row, i) => (
                <tr key={i} className="group hover:translate-x-1 sm:hover:translate-x-2 transition-all duration-500">
                  <td className="py-6 sm:py-10 px-4 sm:px-12 bg-white/2 rounded-l-2xl sm:rounded-l-[2.5rem] text-xs sm:text-sm font-mono text-white/40 tracking-wider sm:tracking-widest uppercase whitespace-nowrap">{row.time}</td>
                  <td className="py-6 sm:py-10 px-4 sm:px-12 bg-white/2 text-[10px] sm:text-xs font-black text-white italic uppercase whitespace-nowrap">
                    <span className="px-3 sm:px-6 py-2 sm:py-3 bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all uppercase inline-block">{row.action}</span>
                  </td>
                  <td className="py-6 sm:py-10 px-4 sm:px-12 bg-white/2 text-xs sm:text-sm font-black text-white/50 tracking-[0.2em] sm:tracking-[0.4em] uppercase italic whitespace-nowrap">{row.entity}</td>
                  <td className="py-6 sm:py-10 px-4 sm:px-12 bg-white/2 text-xs sm:text-sm font-black text-white uppercase italic whitespace-nowrap">{row.user}</td>
                  <td className="py-6 sm:py-10 px-4 sm:px-12 bg-white/2 rounded-r-2xl sm:rounded-r-[2.5rem] text-[8px] sm:text-[10px] font-black text-emerald-500 italic tracking-[0.2em] sm:tracking-[0.4em] uppercase whitespace-nowrap">
                    <div className="flex items-center gap-2 sm:gap-6">
                      <ShieldCheck className="w-5 h-5 sm:w-8 sm:h-8 shadow-[0_0_15px_rgba(16,185,129,0.5)] shrink-0" />
                      <span className="group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform">SHA-256 VALID</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function TechnicalVisual({ type }: { type: string }) {
  if (type === 'amdal') {
    return (
      <div className="technical-blueprint-container dash-mode">
        <div className="dash-wrapper relative z-10 w-full h-full p-12">
          <AmdalManagement />
        </div>
      </div>
    )
  }

  if (type === 'dashboard') {
    return (
      <div className="technical-blueprint-container dash-mode">
        <div className="dash-wrapper relative z-10 w-full h-full p-12">
          <CommandCenterDashboard />
        </div>
      </div>
    )
  }

  if (type === 'compliance') {
    return (
      <div className="technical-blueprint-container dash-mode">
        <div className="dash-wrapper relative z-10 w-full h-full p-12">
          <ComplianceDashboard />
        </div>
      </div>
    )
  }

  if (type === 'wastewater') {
    return (
      <div className="technical-blueprint-container dash-mode">
        <div className="dash-wrapper relative z-10 w-full h-full p-12">
          <WastewaterDashboard />
        </div>
      </div>
    )
  }

  if (type === 'ghg') {
    return (
      <div className="technical-blueprint-container dash-mode">
        <div className="dash-wrapper relative z-10 w-full h-full p-12">
          <GHGAccountingDashboard />
        </div>
      </div>
    )
  }

  if (type === 'waste') {
    return (
      <div className="technical-blueprint-container dash-mode">
        <div className="dash-wrapper relative z-10 w-full h-full p-12">
          <B3WasteManagement />
        </div>
      </div>
    )
  }

  if (type === 'iso') {
    return (
      <div className="technical-blueprint-container dash-mode">
        <div className="dash-wrapper relative z-10 w-full h-full p-12">
          <ISO14001Dashboard />
        </div>
      </div>
    )
  }

  if (type === 'proper') {
    return (
      <div className="technical-blueprint-container dash-mode">
        <div className="dash-wrapper relative z-10 w-full h-full p-12">
          <ProperDashboard />
        </div>
      </div>
    )
  }

  if (type === 'esg') {
    return (
      <div className="technical-blueprint-container dash-mode">
        <div className="dash-wrapper relative z-10 w-full h-full p-12">
          <ESGIntelligenceDashboard />
        </div>
      </div>
    )
  }

  if (type === 'legal') {
    return (
      <div className="technical-blueprint-container dash-mode">
        <div className="dash-wrapper relative z-10 w-full h-full p-12">
          <LegalRegisterDashboard />
        </div>
      </div>
    )
  }

  if (type === 'security') {
    return (
      <div className="technical-blueprint-container dash-mode">
        <div className="dash-wrapper relative z-10 w-full h-full p-12">
          <SecurityDashboard />
        </div>
      </div>
    )
  }

  if (type === 'domestic') {
    return (
      <div className="technical-blueprint-container dash-mode">
        <div className="dash-wrapper relative z-10 w-full h-full p-12">
          <DomesticWasteDashboard />
        </div>
      </div>
    )
  }

  return (
    <div className="technical-blueprint-container">
      <div className="grid-overlay"></div>
      <div className="blueprint-content">
        <svg viewBox="0 0 400 400" className="blueprint-svg">
          <circle cx="200" cy="200" r="150" className="outer-ring" />
          <circle cx="200" cy="200" r="120" className="inner-ring" />
          <path d="M 200 50 L 200 350 M 50 200 L 350 200" className="crosshair" />
          <rect x="100" y="100" width="200" height="200" rx="20" className="blueprint-rect" />
        </svg>
      </div>
    </div>
  )
}

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState("dashboard")

  // For Carousel Navigation
  const modules = useMemo(() => [
    {
      id: "amdal",
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "AMDAL Mgmt",
      subtitle: "Advisory & RKL-RPL",
      desc: "Comprehensive AMDAL lifecycle management. Real-time RKL-RPL status monitoring with automated semester reporting cycles and regulatory advisory engine.",
      details: [
        { label: "AMDAL Advisory", icon: <FileSearch className="w-4 h-4" /> },
        { label: "RKL-RPL Cycle", icon: <RefreshCw className="w-4 h-4" /> },
        { label: "Approval Logic", icon: <CheckCircle2 className="w-4 h-4" /> },
      ]
    },
    {
      id: "wastewater",
      icon: <Droplets className="w-8 h-8" />,
      title: "Discharge",
      subtitle: "PP 22/2021 Precision",
      desc: "Mission-critical wastewater monitoring integrated with SPARING hardware. Real-time telemetry for pH, COD, and TSS thresholds with automated violation prevention and daily logging.",
      details: [
        { label: "Hardware Sync", icon: <Database className="w-4 h-4" /> },
        { label: "Limit Guards", icon: <Shield className="w-4 h-4" /> },
        { label: "BMAL Audit", icon: <FileText className="w-4 h-4" /> },
        { label: "Action Tracker", icon: <Activity className="w-4 h-4" /> }
      ]
    },
    {
      id: "ghg",
      icon: <Globe2 className="w-8 h-8" />,
      title: "GHG Accounting",
      subtitle: "SRN PPI Protocol",
      desc: "Greenhouse Gas inventory and carbon footprint tracking based on Scope 1, 2, and 3. Fully compliant with SIGN SMART and SRN PPI reporting frameworks for global transparency.",
      details: [
        { label: "Scope Breakdown", icon: <Layers className="w-4 h-4" /> },
        { label: "SRN PPI Limit", icon: <AlertCircle className="w-4 h-4" /> },
        { label: "Emission Heatmap", icon: <Activity className="w-4 h-4" /> },
        { label: "Net Zero Path", icon: <TrendingUp className="w-4 h-4" /> }
      ]
    },
    {
      id: "waste",
      icon: <Package className="w-8 h-8" />,
      title: "B3 Waste",
      subtitle: "Festronik Digital Chain",
      desc: "End-to-end hazardous waste manifest lifecycle. Seamless Festronik integration ensuring 100% accountability from generation to final disposal with 90/180-day storage alerts.",
      details: [
        { label: "Festronik Sync", icon: <Zap className="w-4 h-4" /> },
        { label: "Storage Guard", icon: <Calendar className="w-4 h-4" /> },
        { label: "Neraca Limbah B3", icon: <FileText className="w-4 h-4" /> },
        { label: "Manifest Tracker", icon: <CheckCircle2 className="w-4 h-4" /> }
      ]
    },
    {
      id: "iso",
      icon: <Trophy className="w-8 h-8" />,
      title: "ISO 14001",
      subtitle: "Digital EMS Core",
      desc: "Digitized ISO 14001:2015 Management System. Full lifecycle mapping for Clause 6.1 (Aspects/Impacts), Clause 9.1 (Monitoring), and Clause 10.2 (CAPA engine).",
      details: [
        { label: "Clause 6.1 Matrix", icon: <Layers className="w-4 h-4" /> },
        { label: "Clause 10.2 CAPA", icon: <CheckCircle2 className="w-4 h-4" /> },
        { label: "Audit Readiness", icon: <ArrowRight className="w-4 h-4" /> },
        { label: "Digital Legality", icon: <Scale className="w-4 h-4" /> }
      ]
    },
    {
      id: "proper",
      icon: <Zap className="w-8 h-8" />,
      title: "PROPER",
      subtitle: "Predictive Scaling",
      desc: "Forecast Indonesian MOE PROPER ratings with AI-driven gap analysis. Drive your organization from compliance toward Green and Gold ratings with beyond-compliance tracking.",
      details: [
        { label: "SROI Community Log", icon: <Users className="w-4 h-4" /> },
        { label: "Gap Analysis AI", icon: <Activity className="w-4 h-4" /> },
        { label: "Rating Probability", icon: <BarChart3 className="w-4 h-4" /> },
        { label: "Criteria Mapping", icon: <FileText className="w-4 h-4" /> }
      ]
    },
    {
      id: "security",
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Security",
      subtitle: "Unified RBAC Protocol",
      desc: "Military-grade non-repudiation logging. Advanced Role-Based Access Control ensuring Specialists, Auditors, and Admins operate within strict data-level security policies.",
      details: [
        { label: "Better-Auth Multi-MFA", icon: <Lock className="w-4 h-4" /> },
        { label: "Immutable Audit Trail", icon: <FileSearch className="w-4 h-4" /> },
        { label: "Data Integrity", icon: <ShieldCheck className="w-4 h-4" /> },
        { label: "Tenant Isolation", icon: <Layers className="w-4 h-4" /> }
      ]
    },
    {
      id: "dashboard",
      icon: <LayoutDashboard className="w-8 h-8" />,
      title: "Command Center",
      subtitle: "Enterprise Performance",
      desc: "Unified ESG intelligence hub. Synthesizing real-time telemetry into a single definitive health score for GLOBAL OPERATIONS.",
      details: [
        { label: "Impact Score", icon: <Activity className="w-4 h-4" /> },
        { label: "Real-time Feed", icon: <Zap className="w-4 h-4" /> },
        { label: "Global Sync", icon: <Globe2 className="w-4 h-4" /> }
      ]
    },
    {
      id: "compliance",
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Compliance",
      subtitle: "Regulatory Reporting",
      desc: "Digitized reporting workflow precision-aligned with KLHK SIMPEL requirements. Direct API synchronization with government portals for seamless compliance.",
      details: [
        { label: "SIMPEL Sync", icon: <Zap className="w-4 h-4" /> },
        { label: "Submission Hub", icon: <FileText className="w-4 h-4" /> },
        { label: "History Log", icon: <ClipboardCheck className="w-4 h-4" /> }
      ]
    },
    {
      id: "esg",
      icon: <BarChart3 className="w-8 h-8" />,
      title: "ESG Intelligence",
      subtitle: "Performance Engine",
      desc: "Sophisticated data indexing and net-zero progression maps. Advanced AI engine analyzing disclosure metrics against global standards (GRI, SASB, TCFD).",
      details: [
        { label: "Net Zero Path", icon: <TrendingUp className="w-4 h-4" /> },
        { label: "Maturity Curve", icon: <Activity className="w-4 h-4" /> },
        { label: "AI Benchmarking", icon: <Zap className="w-4 h-4" /> }
      ]
    },
    {
      id: "legal",
      icon: <Scale className="w-8 h-8" />,
      title: "Legal Register",
      subtitle: "Regulatory Vault",
      desc: "Interactive regulatory vaults and compliance implementation tracking. Automated law-monitoring services ensuring zero regulatory breaches.",
      details: [
        { label: "Regulation Vault", icon: <Building2 className="w-4 h-4" /> },
        { label: "Mandate Tracker", icon: <CheckCircle2 className="w-4 h-4" /> },
        { label: "Implementation Gap", icon: <AlertCircle className="w-4 h-4" /> }
      ]
    },
    {
      id: "domestic",
      icon: <Trash2 className="w-8 h-8" />,
      title: "Domestic Waste",
      subtitle: "Circular Economy",
      desc: "Non-B3 and domestic waste management tracking with a focus on circular economy and recycling efficiency metrics.",
      details: [
        { label: "Recycling Rate", icon: <RefreshCw className="w-4 h-4" /> },
        { label: "Stream Split", icon: <Layers className="w-4 h-4" /> },
        { label: "Segregation Log", icon: <CheckCircle2 className="w-4 h-4" /> }
      ]
    }
  ], [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const reveals = document.querySelectorAll('.reveal-on-scroll')
      reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top
        if (revealTop < window.innerHeight - 100) {
          reveal.classList.add('active')
        }
      })
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`${inter.className} ${outfit.className} landing-body min-h-screen`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-4" : "py-8"}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/20">
              <Globe2 className="text-white w-7 h-7" />
            </div>
            <span className="text-2xl font-black tracking-tighter">EcoCompliant<span className="text-emerald-500">SYSTEM</span></span>
          </div>

          <div className="hidden lg:flex items-center">
            <div className="floating-nav-card bg-slate-900/50 backdrop-blur-xl border border-white/5 px-8 py-3 rounded-full flex gap-10">
              <a href="#ecosystem" className="nav-link text-xs">Platform</a>
              <a href="#features" className="nav-link text-xs">Fitur</a>
              <a href="#architecture" className="nav-link text-xs">Arsitektur</a>
              <a href="#security" className="nav-link text-xs">Keamanan</a>
            </div>
          </div>

          <Link href="https://eco-compliant-os.vercel.app/dashboard">
            <button className="px-8 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-black tracking-widest uppercase transition-all shadow-xl shadow-emerald-500/20">
              Live Demo
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 md:pt-64 md:pb-48 overflow-hidden bg-slate-950">
        <div className="orb orb-emerald"></div>
        <div className="orb orb-blue"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-400 text-[10px] font-black tracking-[0.3em] uppercase mb-12 reveal-on-scroll">
              <Zap className="w-4 h-4" />
              <span>The Next Era of Industrial OS</span>
            </div>

            <h1 className="hero-title text-7xl md:text-[10rem] font-black mb-12 leading-[0.85] reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
              ERADICATE <br />
              <span className="hero-gradient-text uppercase italic">COMPLEXITY.</span>
            </h1>

            <p className="text-xl md:text-3xl text-slate-400 mb-20 max-w-4xl mx-auto leading-relaxed font-light reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
              A high-performance operating system engineered for <span className="text-white font-bold">high-stakes industrial compliance</span>. Seamlessly merging technical depth with elegant automation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
              <Link href="https://eco-compliant-os.vercel.app/dashboard">
                <button className="cta-button px-16 py-8 rounded-3xl text-white font-black text-2xl flex items-center gap-4 transition-all">
                  Launch Command Center
                  <ChevronRight className="w-8 h-8" />
                </button>
              </Link>
              <div className="text-left">
                <div className="text-xs font-black text-slate-500 tracking-widest uppercase mb-1">Stack Status</div>
                <div className="flex gap-4 opacity-50">
                  <span className="text-xs font-mono text-emerald-500">REACT 19.0</span>
                  <span className="text-xs font-mono text-blue-500">NEXT.JS 16.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module Theater */}
      <section id="ecosystem" className="py-32 relative bg-slate-950 overflow-hidden">
        <div className="w-full px-8 md:px-12">
          <div className="max-w-7xl mx-auto mb-16 flex items-end justify-between reveal-on-scroll">
            <div>
              <h4 className="text-emerald-500 font-black tracking-[0.5em] uppercase mb-6 text-xs italic">Integrated Ecosystem</h4>
              <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-none">Module <span className="text-emerald-500">Theater.</span></h2>
            </div>

            <div className="flex gap-4 mb-4">
              <button
                onClick={() => {
                  const idx = modules.findIndex(m => m.id === activeTab);
                  const prevIdx = (idx - 1 + modules.length) % modules.length;
                  setActiveTab(modules[prevIdx].id);
                }}
                className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all group"
              >
                <ChevronLeft className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const idx = modules.findIndex(m => m.id === activeTab);
                  const nextIdx = (idx + 1) % modules.length;
                  setActiveTab(modules[nextIdx].id);
                }}
                className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all group"
              >
                <ChevronRight className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          <div className="theater-carousel reveal-on-scroll !max-w-[calc(100vw-4rem)] mx-auto" style={{ transitionDelay: '0.2s' }}>
            {modules.map((mod) => (
              <div
                key={mod.id}
                className={`carousel-slide ${activeTab === mod.id ? 'active' : 'inactive'}`}
              >
                <div className="theater-info-panel">
                  <div className="icon-label flex items-center mb-12">
                    <div className="w-20 h-20 rounded-3xl bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/20">
                      {mod.icon}
                    </div>
                    <div className="flex flex-col ml-8">
                      <span className="text-4xl font-black text-white italic uppercase tracking-tighter">{mod.title}</span>
                      <span className="text-emerald-500 font-black text-sm tracking-[0.3em] uppercase italic">{mod.subtitle}</span>
                    </div>
                  </div>

                  <div className="content-visible">
                    <p className="text-2xl text-slate-300 font-light mb-12 leading-relaxed max-w-xl">{mod.desc}</p>
                    <div className="detail-grid">
                      {mod.details.map((detail, idx) => (
                        <div key={idx} className="feature-pill py-4 px-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                          <div className="text-emerald-500">
                            {detail.icon}
                          </div>
                          <span className="text-xs font-black text-white/70 uppercase tracking-widest">{detail.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="theater-visual-panel">
                  {activeTab === mod.id && (
                    <TechnicalVisual type={mod.id} />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12 gap-3">
            {modules.map((mod) => (
              <button
                key={mod.id}
                onClick={() => setActiveTab(mod.id)}
                className={`h-1 rounded-full transition-all duration-500 ${activeTab === mod.id ? 'w-12 bg-emerald-500' : 'w-4 bg-white/10'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section id="architecture" className="py-48 relative overflow-hidden bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="reveal-on-scroll">
              <h2 className="text-6xl md:text-8xl font-black mb-10 uppercase tracking-tighter italic text-white leading-none">God-Tier <br /> <span className="text-emerald-500">Golden Stack.</span></h2>
              <p className="text-2xl text-slate-400 font-light mb-12 leading-relaxed">Built for elite scalability and 100% data integrity. Our infrastructure eliminates traditional client-side bottlenecks.</p>

              <div className="space-y-6">
                <div className="p-8 rounded-3xl bg-white/2 border border-white/5 flex gap-8 items-center hover:border-emerald-500/50 transition-all">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500">
                    <Layers className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">React Server Components</h4>
                    <p className="text-sm text-slate-500">Zero client-side JS for the initial load, providing instantaneous performance.</p>
                  </div>
                </div>
                <div className="p-8 rounded-3xl bg-white/2 border border-white/5 flex gap-8 items-center hover:border-blue-500/50 transition-all">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500">
                    <Database className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Drizzle & Turso Edge</h4>
                    <p className="text-sm text-slate-500">Globally distributed database with strict type-safe schemas at every level.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
              <div className="arch-card">
                <div className="text-xs font-mono text-emerald-500 mb-6 tracking-widest">// Schema Definition</div>
                <pre className="text-xs font-mono text-slate-500 bg-slate-900/50 p-6 rounded-2xl border border-white/5 overflow-x-auto">
                  {`export const wasteManifests = pgTable("waste_manifests", {
  id: uuid("id").primaryKey(),
  code: text("klhk_code").notNull(), 
  vessel: text("transporter").notNull(),
  festronikId: text("manifest_id").unique(),
  status: text("lifecycle").default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
});`}
                </pre>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Postgres Native", "Type-Safe", "RLS Protocols", "Edge Ready"].map(tag => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-48 relative bg-slate-950 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-32 reveal-on-scroll">
            <h4 className="text-emerald-500 font-black tracking-[0.5em] uppercase mb-6 text-xs italic">Capabilities Array</h4>
            <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-none mb-10">Product <br /><span className="text-emerald-500">Intelligence.</span></h2>
            <p className="text-2xl text-slate-400 font-light leading-relaxed">Beyond simple log-keeping. A sophisticated orchestration of environmental compliance and automated reporting.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "PROPER Scoring", desc: "Automated rating prediction based on real-time regulatory algorithms.", icon: <Trophy className="w-6 h-6" />, tag: "RegTech" },
              { title: "Brevo Alerts", desc: "Automated email reminders for RKL-RPL dates and manifest deadlines.", icon: <Bell className="w-6 h-6" />, tag: "Automation" },
              { title: "Compliance Agenda", desc: "Interactive calendar integration for all environmental milestones.", icon: <Calendar className="w-6 h-6" />, tag: "Planning" },
              { title: "ISO Clause Mapping", desc: "Digital implementation of Clause 6.1, 9.1, and 10.2 requirements.", icon: <ClipboardCheck className="w-6 h-6" />, tag: "Standards" },
              { title: "Digital Manifests", desc: "90/180-day hazardous waste lifecycle guards and Festronik sync.", icon: <Database className="w-6 h-6" />, tag: "Logistics" },
              { title: "GRI 11 Alignment", desc: "Standardized ESG disclosure engine for multi-sector reporting.", icon: <BarChart3 className="w-6 h-6" />, tag: "ESG" },
              { title: "GHG Accounting", desc: "Full Scope 1, 2, and 3 carbon tracking with built-in factors.", icon: <Globe2 className="w-6 h-6" />, tag: "Carbon" },
              { title: "IoT Telemetry", desc: "Direct SPARING/KLHK integration for water and air sensors.", icon: <Zap className="w-6 h-6" />, tag: "Real-time" }
            ].map((f, i) => (
              <div key={i} className="feature-card-premium group reveal-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="p-10 h-full rounded-[2.5rem] bg-slate-900 border border-white/5 hover:border-emerald-500/50 transition-all duration-500 relative overflow-hidden text-left">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                    {f.icon}
                  </div>
                  <div className="flex flex-col h-full justify-between gap-8 relative z-10">
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mb-8 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                        {f.icon}
                      </div>
                      <h4 className="text-xl font-black text-white italic uppercase tracking-tight mb-4">{f.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-light">{f.desc}</p>
                    </div>
                    <div className="text-[10px] font-black text-emerald-500/50 uppercase tracking-widest italic">{f.tag}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-48 relative bg-slate-950 overflow-hidden text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-20 text-center reveal-on-scroll">
            <h4 className="text-blue-500 font-black tracking-[0.5em] uppercase mb-6 text-xs italic">Cyber Sentinel</h4>
            <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-none mb-10">Defensive <br /><span className="text-blue-500">Infrastructure.</span></h2>
            <p className="text-2xl text-slate-400 font-light leading-relaxed mb-12">Tier-4 security orchestration ensuring absolute data sovereignty and regulatory compliance.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32 reveal-on-scroll text-left">
            {[
              { title: "Advanced RBAC", desc: "Granular access controls for Admins, Specialists, and Auditors.", icon: <Users className="w-5 h-5" /> },
              { title: "Row-Level Security", desc: "Database-level isolation for multi-tenant data integrity.", icon: <ShieldAlert className="w-5 h-5" /> },
              { title: "TLS 1.3 Hybrid", desc: "End-to-end encryption for all telemetry and document streams.", icon: <Lock className="w-5 h-5" /> },
              { title: "Immutable Audit", desc: "Non-repudiable transaction logs for all administrative actions.", icon: <FileSearch className="w-5 h-5" /> }
            ].map((s, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white/2 border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h5 className="text-lg font-bold text-white mb-2">{s.title}</h5>
                <p className="text-sm text-slate-500 font-light">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="relative reveal-on-scroll flex justify-center w-full max-w-[1200px] mx-auto overflow-hidden" style={{ transitionDelay: '0.3s' }}>
            <div className="w-full origin-top scale-[0.6] sm:scale-75 md:scale-[0.85] lg:scale-100">
              <SecurityDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-64 relative text-center bg-slate-950 overflow-hidden">
        <div className="orb orb-emerald opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10 reveal-on-scroll">
          <h2 className="text-8xl md:text-[12rem] font-black mb-16 italic uppercase tracking-tighter text-white leading-none">THE NEXT <br /><span className="text-emerald-500">STANDARD.</span></h2>
          <p className="text-2xl md:text-4xl text-slate-400 mb-20 max-w-4xl mx-auto font-light leading-relaxed">
            Transition from legacy environmental logging to a high-performance, predictive operating system.
          </p>
          <Link href="https://eco-compliant-os.vercel.app/dashboard">
            <button className="cta-button px-24 py-10 rounded-3xl font-black text-4xl text-white transition-all shadow-2xl shadow-emerald-500/20">
              Enter The Ecosystem
            </button>
          </Link>

          <div className="mt-48 flex flex-wrap justify-center gap-16 md:gap-32 opacity-20 filter grayscale hover:grayscale-0 transition-opacity">
            {["PP 22/2021", "ISO 14001:2015", "SIGN SMART", "GRI 11"].map(t => (
              <div key={t} className="text-3xl font-black tracking-tighter italic uppercase text-white">{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-white/5 relative z-10 bg-slate-950">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/20">
              <Globe2 className="text-white w-9 h-9" />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black tracking-tighter text-white uppercase italic">EcoCompliant</span>
              <span className="text-xs font-black text-emerald-500 tracking-[0.4em] uppercase">Operating System</span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <div className="text-sm font-black text-white italic uppercase tracking-[0.3em] mb-4">Precision-Engineered Compliance</div>
            <div className="text-xs font-mono text-slate-600 uppercase tracking-widest flex items-center justify-center md:justify-end gap-6">
              <span>© 2026 ADEBASIR ENTERPRISE</span>
              <span className="w-2 h-2 bg-slate-800 rounded-full"></span>
              <span>All Systems Nominal</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
