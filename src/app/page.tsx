"use client"

import Link from "next/link"
import { useEffect, useState, useMemo } from "react"
import { Outfit, Inter } from "next/font/google"
import {
   ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, Globe2, LayoutDashboard, ShieldCheck, Zap, AlertCircle, Calendar, FileText, Send, TrendingUp, RefreshCw, PlusCircle, Droplets, Database, Grid3X3, Layers, Leaf, Trash2, XCircle, Trophy, BrainCircuit, Activity, BarChart3, ChevronLeft, ArrowDown, Download, Lock, MapPin, Scale, Search, Server, Shield, ShieldAlert, User, Wind, Cpu, FileSearch, Building2, Bell, ClipboardCheck, Clock, Target, Package, Users
} from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import "./landing-styles.css"

const outfit = Outfit({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

function CommandCenterDashboard({ t }: { t: (key: string) => string }) {
  const stats = [
    { label: t('stats.esg'), value: "0%", sub: t('stats.maturity'), color: "text-emerald-500", trend: "0" },
    { label: t('stats.carbon'), value: "17.4", unit: "TCO2E", sub: t('ghg.totalEmissions'), color: "text-slate-900", trend: "17.4" },
    { label: t('stats.circularity'), value: "1,912.5", unit: "T", sub: t('domestic.categories.residueSub'), color: "text-amber-500", trend: "1912.5" },
    { label: t('stats.water'), value: "7.0", unit: "PH", sub: t('wastewater.telemetry'), color: "text-blue-500", trend: "7.0" },
    { label: t('stats.proper'), value: "GOLD", sub: t('proper.status.gold'), color: "text-emerald-500", trend: "GOLD" },
    { label: t('stats.iso'), value: "ACTIVE", sub: t('stats.iso'), color: "text-blue-600", trend: "0" },
    { label: t('stats.amdal'), value: "100%", sub: t('amdal.cards.params'), color: "text-emerald-500", trend: "100" },
    { label: t('stats.audit'), value: "CLEAR", sub: t('security.stats.rls'), color: "text-emerald-500", trend: "0" }
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
                  {t('hero.dashboardBadge')}
                </div>
                <h3 className="text-5xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-6 leading-[0.9]">
                  {t('hero.title')} <br /><span className="text-emerald-500">{t('hero.subtitle')}</span>
                </h3>
                <p className="text-base text-slate-400 font-light leading-relaxed max-w-xl">
                  {t('hero.dashboardDesc')}
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
                  <span className="text-[9px] font-black text-emerald-500 uppercase tracking-[0.4em] mt-2">{t('hero.healthScore')}</span>
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
  const { t } = useLanguage();
  return (
    <div className="compliance-dashboard animate-in fade-in slide-in-from-right duration-1000 w-full pt-20 pb-10">
      <div className="flex justify-between items-center mb-10">
        <div className="max-w-2xl">
          <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter">{t('compliance.title')} <span className="text-emerald-500">{t('compliance.subtitle')}</span></h3>
          <p className="text-[12px] text-slate-500 font-bold uppercase tracking-[0.2em]">{t('compliance.desc')}</p>
        </div>
        <div className="bg-red-600/10 border border-red-500/20 rounded-2xl p-6 flex items-center gap-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.4)]">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-[10px] font-black text-red-500 uppercase tracking-[0.3em] mb-1">{t('compliance.alertBadge')}</div>
              <div className="text-sm font-black text-white italic uppercase tracking-tight">{t('compliance.alertMsg')}</div>
            </div>
          </div>
          <button className="relative z-10 bg-white text-red-600 px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-colors shadow-lg">
            {t('compliance.alertAction')}
          </button>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-500/20 to-transparent"></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-12">
        {[
          { label: t('compliance.cards.pending'), value: "1", status: t('compliance.cards.doc'), icon: <Calendar className="text-amber-500 w-6 h-6" />, color: "text-amber-500" },
          { label: t('compliance.cards.submitted'), value: "1", status: t('compliance.cards.doc'), icon: <Send className="text-blue-500 w-6 h-6" />, color: "text-blue-500" },
          { label: t('compliance.cards.approved'), value: "1", status: t('compliance.cards.doc'), icon: <CheckCircle2 className="text-emerald-500 w-6 h-6" />, color: "text-emerald-500" },
          { label: t('compliance.cards.overdue'), value: "2", status: t('compliance.cards.docs'), icon: <AlertCircle className="text-red-500 w-6 h-6" />, color: "text-red-500" },
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
            <h4 className="text-sm font-black text-slate-900 italic uppercase tracking-wider">{t('compliance.charts.vector')}</h4>
          </div>
          <div className="h-48 flex items-center justify-center bg-slate-50 border border-dashed border-slate-200 rounded-3xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
            <p className="relative z-10 text-[10px] text-slate-400 font-black uppercase tracking-[0.3em]">{t('compliance.charts.radar')}</p>
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-[3rem] p-12 shadow-xl">
          <div className="flex items-center gap-3 mb-10">
            <TrendingUp className="w-5 h-5 text-emerald-500" />
            <h4 className="text-sm font-black text-slate-900 italic uppercase tracking-wider">{t('compliance.charts.status')}</h4>
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
            <h4 className="text-sm font-black text-slate-900 italic uppercase tracking-wider">{t('compliance.charts.link')}</h4>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-5 bg-slate-50 border border-slate-100 rounded-2xl">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t('compliance.charts.api')}</span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-600 text-[8px] font-black rounded-lg uppercase">{t('compliance.charts.active')}</span>
            </div>
            <div className="flex items-center justify-between p-5 bg-slate-50 border border-slate-100 rounded-2xl">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t('compliance.charts.lastSync')}</span>
              <span className="text-[10px] font-black text-slate-900 uppercase">2 {t('security.audit.ago.mins')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
function AmdalManagement() {
  const { t } = useLanguage();
  return (
    <div className="amdal-management-container animate-in fade-in zoom-in duration-1000 w-full pt-20 pb-10">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter">{t('amdal.title')} <span className="text-purple-400">{t('amdal.subtitle')}</span></h3>
          <p className="text-[12px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-2">{t('amdal.desc')}</p>
        </div>
        <button className="bg-purple-600 text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-purple-700 transition-all shadow-xl shadow-purple-600/20">
          <PlusCircle className="w-4 h-4" /> {t('amdal.action')}
        </button>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-12">
        {[
          { label: t('amdal.cards.params'), val: "14", sub: t('amdal.cards.paramsSub'), color: "text-blue-500", icon: <ShieldCheck className="w-5 h-5 text-blue-500" /> },
          { label: t('amdal.cards.rate'), val: "100%", sub: t('amdal.cards.rateSub'), color: "text-emerald-500", icon: <CheckCircle2 className="text-emerald-500" /> },
          { label: t('amdal.cards.tasks'), val: "3", sub: t('amdal.cards.tasksSub'), color: "text-amber-500", icon: <Calendar className="w-5 h-5 text-amber-500" /> },
          { label: t('amdal.cards.overdue'), val: "0", sub: t('amdal.cards.overdueSub'), color: "text-emerald-500", icon: <AlertCircle className="w-5 h-5 text-emerald-500" /> }
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
              <h4 className="text-xl font-black italic uppercase tracking-tight">{t('amdal.advisory.title')}</h4>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-black text-emerald-500 uppercase italic">{t('amdal.advisory.status')}</span>
              </div>
              <p className="text-xs text-slate-400 font-light leading-relaxed">{t('amdal.advisory.desc')}</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-4 border-b border-white/5">
                <span className="text-[10px] font-bold text-slate-500 uppercase">{t('amdal.advisory.nextReport')}</span>
                <span className="text-[10px] font-black text-white uppercase italic">{t('common.months.6')} 2026</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-white/5">
                <span className="text-[10px] font-bold text-slate-500 uppercase">{t('amdal.advisory.validity')}</span>
                <span className="text-[10px] font-black text-white uppercase italic">90 {t('amdal.advisory.remaining')}</span>
              </div>
            </div>
          </div>
          <ShieldCheck className="w-48 h-48 text-white/5 absolute -bottom-12 -right-12" />
        </div>

        <div className="col-span-8 bg-white border border-slate-100 rounded-[3rem] p-12 shadow-xl">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-4">
              <Calendar className="w-6 h-6 text-blue-500" />
              <h4 className="text-xl font-black text-slate-900 italic uppercase tracking-tight">{t('amdal.agenda.title')}</h4>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg border border-slate-100 hover:bg-slate-50"><ChevronLeft className="w-4 h-4" /></button>
              <span className="px-4 py-2 text-[11px] font-black text-slate-900 uppercase">{t('common.months.2')} 2026</span>
              <button className="p-2 rounded-lg border border-slate-100 hover:bg-slate-50"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-px bg-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
            {t('common.daysShort').map((d: string, i: number) => <div key={`${d}-${i}`} className="bg-slate-50 p-4 text-center text-[10px] font-black text-slate-400">{d}</div>)}
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
  const { t } = useLanguage();
  return (
    <div className="ghg-accounting-dashboard animate-in fade-in slide-in-from-bottom duration-1000 w-full pt-20 pb-10">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter">{t('ghg.title')} <span className="text-emerald-500">{t('ghg.subtitle')}</span></h3>
          <p className="text-[12px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-2">{t('ghg.desc')}</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 italic">{t('ghg.totalEmissions')}</div>
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
              <h4 className="text-xl font-black italic uppercase tracking-tight">{t('ghg.trajectory')}</h4>
            </div>
          </div>
          <div className="h-64 flex items-end gap-1 px-4 mb-8">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="flex-1 bg-emerald-500/20 rounded-t-sm hover:bg-emerald-500 transition-all duration-300" style={{ height: `${30 + 50 * Math.sin(i / 5) * Math.random()}%` }}></div>
            ))}
          </div>
          <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-slate-400 border-t border-slate-100 pt-6 italic">
            <span>{t('common.monthsShort.0')} 2026 {t('ghg.baseline')}</span>
            <div className="flex gap-6">
              <div className="flex items-center gap-2.5"><div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div><span>SCOPE 1+2</span></div>
              <div className="flex items-center gap-2.5"><div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div><span>{t('ghg.projection')}</span></div>
            </div>
            <span>{t('common.monthsShort.11')} 2026 {t('ghg.target')}</span>
          </div>
        </div>

        <div className="col-span-4 space-y-8 text-white">
          <div className="bg-slate-900 rounded-[3rem] p-10 relative overflow-hidden h-full flex flex-col justify-between shadow-2xl">
            <div>
              <div className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-6 italic">SRN PPI Compliance</div>
              <h4 className="text-3xl font-black italic uppercase tracking-tighter mb-4">{t('ghg.reduction.title')}</h4>
              <div className="w-full h-4 bg-emerald-500/10 rounded-full border border-emerald-500/20 overflow-hidden mb-4">
                <div className="h-full bg-emerald-500 w-[68%]"></div>
              </div>
              <p className="text-sm text-slate-400 font-light leading-relaxed">{t('ghg.reduction.desc')}</p>
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
          <h4 className="text-xl font-black italic uppercase tracking-tight">{t('ghg.heatmap')}</h4>
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
  const { t } = useLanguage();
  return (
    <div className="wastewater-dashboard animate-in fade-in slide-in-from-right duration-1000 w-full pt-20 pb-10">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter">{t('wastewater.title')} <span className="text-blue-500">{t('wastewater.subtitle')}</span></h3>
          <p className="text-[12px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-2">{t('wastewater.desc')}</p>
        </div>
        <div className="bg-red-600/10 border border-red-500/20 rounded-2xl p-6 flex items-center gap-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.4)]">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-[10px] font-black text-red-500 uppercase tracking-[0.3em] mb-1">{t('wastewater.alertBadge')}</div>
              <div className="text-sm font-black text-white italic uppercase tracking-tight">{t('wastewater.alertMsg')}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 mb-12">
        <div className="col-span-8 bg-white border border-slate-100 rounded-[3rem] p-10 shadow-xl">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <h4 className="text-xl font-black italic uppercase tracking-tight">{t('wastewater.trends')}</h4>
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
            <span>{t('wastewater.shiftStart')}</span>
            <span>{t('wastewater.telemetry')}</span>
            <span>{t('wastewater.shiftEnd')}</span>
          </div>
        </div>
        <div className="col-span-4 space-y-6">
          <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl h-full flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-6 italic">{t('wastewater.complianceScore')}</div>
              <div className="text-6xl font-black italic tracking-tighter mb-4">98.2<span className="text-xl text-slate-500">%</span></div>
              <p className="text-xs text-slate-400 font-light leading-relaxed">{t('wastewater.telemetryDesc')}</p>
            </div>
            <div className="pt-8 border-t border-white/5 space-y-4">
              <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest italic">
                <span className="text-slate-500">{t('wastewater.sparingStatus')}</span>
                <span className="text-emerald-500">{t('compliance.charts.active')}</span>
              </div>
              <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest italic">
                <span className="text-slate-500">{t('wastewater.klhkSync')}</span>
                <span className="text-white">12 SEC {t('security.audit.ago.mins')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-100 rounded-[3rem] p-12 shadow-xl">
        <div className="flex items-center gap-4 mb-8">
          <Database className="w-6 h-6 text-blue-500" />
          <h4 className="text-xl font-black italic uppercase tracking-tight">{t('wastewater.matrix')}</h4>
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
  const { t } = useLanguage();
  const neraca = [
    { label: t('waste.neraca.oilySludge'), cat: t('waste.neraca.category1'), code: 'A351-1', val: '124.5', unit: 'T' },
    { label: t('waste.neraca.contaminatedSoil'), cat: t('waste.neraca.category2'), code: 'B104-d', val: '842.1', unit: 'T' },
    { label: t('waste.neraca.usedChemicals'), cat: t('waste.neraca.category1'), code: 'A102-d', val: '12.8', unit: 'M3' },
    { label: t('waste.neraca.medicalWaste'), cat: t('waste.neraca.category1'), code: 'A337-1', val: '4.2', unit: 'KG' }
  ];

  return (
    <div className="b3-waste-management animate-in fade-in slide-in-from-left duration-1000 w-full pt-20 pb-10">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter">{t('waste.title')} <span className="text-amber-500">{t('waste.subtitle')}</span></h3>
          <p className="text-[12px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-2">{t('waste.desc')}</p>
        </div>
        <button className="bg-amber-600 text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-amber-700 transition-all shadow-xl shadow-amber-600/20">
          <PlusCircle className="w-4 h-4" /> {t('waste.action')}
        </button>
      </div>

      <div className="grid grid-cols-12 gap-6 mb-12">
        <div className="col-span-4 bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-xl">
          <div className="flex items-center gap-3 mb-8">
            <Activity className="w-5 h-5 text-amber-500" />
            <h4 className="text-sm font-black text-slate-900 italic uppercase tracking-wider">{t('waste.category.title')}</h4>
          </div>
          <div className="relative flex justify-center mb-10">
            <svg viewBox="0 0 100 100" className="w-48 h-48 transform -rotate-90">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#f1f5f9" strokeWidth="12" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#f59e0b" strokeWidth="12" strokeDasharray="180 251" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#ef4444" strokeWidth="12" strokeDasharray="40 251" strokeDashoffset="-180" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-black text-slate-900 italic">72%</span>
              <span className="text-[8px] font-black text-slate-400 uppercase">{t('waste.category.split')}</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
              <span className="text-slate-400">{t('waste.category.clearance')}</span>
              <span className="text-emerald-500">{t('waste.category.optimal')}</span>
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
              <h4 className="text-xl font-black italic uppercase tracking-tight">{t('waste.generation.title')}</h4>
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
              <div className="flex items-center gap-2"><div className="w-3 h-1 bg-orange-500"></div><span>{t('waste.generation.label')}</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-1 bg-blue-500"></div><span>{t('waste.handover.label')}</span></div>
            </div>
            <span>{t('waste.cycles')}</span>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-100 rounded-[3rem] p-12 shadow-xl">
        <div className="flex items-center gap-4 mb-10">
          <Database className="w-6 h-6 text-blue-500" />
          <h4 className="text-xl font-black italic uppercase tracking-tight">{t('waste.timeline.title')}</h4>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="py-6 text-left text-[11px] font-black text-slate-400 uppercase tracking-widest">{t('waste.timeline.origin')}</th>
              {[t('common.months.0'), t('common.months.1'), t('common.months.2'), t('common.months.3'), t('common.months.4'), t('common.months.5')].map((m, i) => <th key={`${m}-${i}`} className="text-center text-[11px] font-black text-slate-400 uppercase tracking-widest">{m}</th>)}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {neraca.map((item, idx) => (
              <tr key={idx} className="group hover:bg-slate-50/50 transition-colors">
                <td className="py-8">
                  <div className="text-lg font-black text-slate-900 italic uppercase leading-none mb-2">{item.label}</div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase ${item.cat === t('waste.neraca.category1') ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'}`}>{item.cat}</span>
                    <span className="text-[10px] font-bold text-slate-400 tracking-widest">{item.code} • {t('waste.tps')}: {item.val} {item.unit}</span>
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
  const { t } = useLanguage();
  const cards = [
    { label: t('iso.cards.readiness'), val: '97.4%', color: 'text-emerald-400', bar: true, trend: '+2.1%' },
    { label: t('iso.cards.aspects'), val: '03', sub: t('iso.cards.aspectsSub'), color: 'text-orange-400', trend: t('iso.cards.stable') },
    { label: t('iso.cards.legal'), val: '100%', sub: t('iso.cards.legalSub'), color: 'text-blue-400', trend: t('iso.cards.verified') },
    { label: t('iso.cards.nc'), val: '00', sub: t('iso.cards.ncSub'), color: 'text-emerald-500', trend: t('iso.cards.optimal') }
  ];

  return (
    <div className="iso-dashboard animate-in fade-in slide-in-from-top duration-1000 w-full pt-20 pb-10">
      <div className="grid grid-cols-4 gap-6 mb-12">
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
          <h4 className="text-[11px] font-black text-emerald-500 uppercase tracking-[0.5em] italic mb-12">{t('iso.aspectMatrix.title')}</h4>
          <div className="aspect-square w-full grid grid-cols-5 gap-3 relative">
            <div className="absolute -left-12 top-0 h-full flex flex-col justify-between text-[9px] font-black text-white/10 italic py-2">
              <span>{t('iso.aspectMatrix.high')}</span><span>{t('iso.aspectMatrix.medium')}</span><span>{t('iso.aspectMatrix.low')}</span>
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
            <span className="text-[10px] font-black text-white/30 uppercase">{t('iso.aspectMatrix.probSeverity')}</span>
            <span className="text-emerald-500 text-[10px] font-black">{t('iso.aspectMatrix.activeRisks')}</span>
          </div>
        </div>

        <div className="col-span-8 grid grid-rows-2 gap-10">
          <div className="glass-panel rounded-[3rem] p-12 flex items-center gap-16 relative overflow-hidden">
            <div className="flex-1">
              <h4 className="text-[11px] font-black text-white/30 uppercase tracking-[0.4em] mb-10">{t('iso.capa.title')}</h4>
              <div className="space-y-8">
                {[
                  { label: t('iso.capa.rootCause'), val: 100, color: 'bg-emerald-500' },
                  { label: t('iso.capa.remediation'), val: 78, color: 'bg-blue-500' },
                  { label: t('iso.capa.technical'), val: 42, color: 'bg-white/10' }
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
                <span className="text-[9px] font-black text-white/40 uppercase tracking-widest mt-2">{t('iso.capa.active')}</span>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-[3rem] p-12 relative overflow-hidden">
            <div className="flex justify-between items-center mb-8 relative z-10">
              <h4 className="text-[11px] font-black text-blue-400 uppercase tracking-[0.5em] italic">{t('iso.vigilance.title')}</h4>
              <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-xl text-[10px] font-black text-blue-400 uppercase">{t('iso.vigilance.liveStream')}</div>
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
  const { t } = useLanguage();
  const categories = [
    { label: t('domestic.categories.organic'), val: '42%', color: 'text-emerald-500', sub: t('domestic.categories.organicSub') },
    { label: t('domestic.categories.plastic'), val: '28%', color: 'text-blue-500', sub: t('domestic.categories.plasticSub') },
    { label: t('domestic.categories.paper'), val: '18%', color: 'text-amber-500', sub: t('domestic.categories.paperSub') },
    { label: t('domestic.categories.residue'), val: '12%', color: 'text-slate-400', sub: t('domestic.categories.residueSub') }
  ];

  return (
    <div className="domestic-waste-dashboard animate-in fade-in slide-in-from-bottom duration-1000 w-full pt-20 pb-10">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter">{t('domestic.title')} <span className="text-emerald-500">{t('domestic.subtitle')}</span></h3>
          <p className="text-[12px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-2">{t('domestic.desc')}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl">
            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest leading-none">{t('domestic.recyclingRate')}: 88%</span>
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
            <h4 className="text-[11px] font-black text-white/30 uppercase tracking-[0.5em] italic">{t('domestic.segregation.title')}</h4>
            <div className="flex gap-4">
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div><span className="text-[9px] font-black text-white/40 uppercase">{t('domestic.segregation.target')}</span></div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div><span className="text-[9px] font-black text-white/40 uppercase">{t('domestic.segregation.actual')}</span></div>
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
            <span>{t('domestic.segregation.day')} 01</span><span>{t('domestic.segregation.cycle')}</span><span>{t('domestic.segregation.day')} 30</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProperDashboard() {
  const { t } = useLanguage();
  return (
    <div className="proper-dashboard animate-in fade-in slide-in-from-right duration-1000 w-full pt-20 pb-10">
      <div className="flex justify-between items-center mb-16">
        <div className="flex items-center gap-12">
          <div className="w-32 h-32 rounded-[2.5rem] bg-slate-950 flex items-center justify-center text-emerald-500 shadow-2xl border border-white/10 shrink-0">
            <Trophy className="w-16 h-16 drop-shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
          </div>
          <div>
            <h4 className="text-[11px] font-black text-emerald-500 uppercase tracking-[0.5em] mb-4 italic">{t('proper.maturityTracker')}</h4>
            <h3 className="text-5xl font-black italic uppercase tracking-tighter leading-none text-white">{t('proper.title')} <br /><span className="text-emerald-500">{t('proper.subtitle')}</span></h3>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="text-right">
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-3 italic">{t('proper.maturityScore')}</div>
            <div className="text-6xl font-black text-white italic tracking-[-0.05em]">84.2<span className="text-xl text-emerald-500">%</span></div>
          </div>
          <div className="w-px h-24 bg-white/5"></div>
          <div className="flex flex-col justify-center space-y-4">
            {[t('proper.status.startup'), t('proper.status.blue'), t('proper.status.green'), t('proper.status.gold')].map((status, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className={`w-2.5 h-2.5 rounded-full ${i <= 1 ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-white/5 border border-white/10'}`}></div>
                <span className={`text-[10px] font-black uppercase tracking-widest italic ${i <= 1 ? 'text-white' : 'text-white/20'}`}>{status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-panel rounded-[3.5rem] p-12 mb-10 relative overflow-hidden group border border-white/5">
        <div className="absolute top-0 right-0 p-12 opacity-5">
          <Zap className="w-48 h-48 text-emerald-500 animate-pulse" />
        </div>
        <div className="flex items-center gap-12">
          <div className="w-24 h-24 rounded-[2rem] bg-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.4)] flex items-center justify-center border border-emerald-400">
            <BrainCircuit className="w-12 h-12 text-white" />
          </div>
          <div className="flex-1">
            <span className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.4em] mb-3 block italic">{t('proper.aiInsight')}</span>
            <p className="text-lg text-white/80 leading-relaxed font-light italic max-w-4xl">"{t('proper.aiStrategy')}"</p>
            <div className="mt-8 flex items-center justify-between">
              <span className="text-[9px] font-black uppercase text-white/20 tracking-[0.3em]">Engine v4.28.0</span>
              <button className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-400 flex items-center gap-2.5 group/btn">
                {t('proper.strategyBook')} <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 flex-1">
        <div className="col-span-8 glass-panel rounded-[2.5rem] p-10 relative overflow-hidden">
          <div className="flex justify-between items-center mb-10">
            <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em] italic">{t('proper.vaultTitle')}</h4>
            <div className="px-4 py-1.5 bg-emerald-500 rounded-xl text-[9px] font-black text-white shadow-2xl shadow-emerald-500/30 italic">{t('proper.vaultValidated')}</div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { label: t('proper.vaultItems.ipal'), sub: t('proper.vaultItems.ipalSub'), status: t('proper.compliant'), icon: <Droplets className="w-6 h-6" /> },
              { label: t('proper.vaultItems.air'), sub: t('proper.vaultItems.airSub'), status: t('proper.compliant'), icon: <Wind className="w-6 h-6" /> },
              { label: t('proper.vaultItems.b3'), sub: t('proper.vaultItems.b3Sub'), status: t('proper.compliant'), icon: <Database className="w-6 h-6" /> }
            ].map((it, i) => (
              <div key={i} className="flex items-center justify-between p-8 bg-white/2 border border-white/5 hover:border-emerald-500/30 transition-all rounded-[2rem] group/item hover:bg-white/5">
                <div className="flex items-center gap-8">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-emerald-500 shadow-xl group-hover/item:scale-110 transition-transform">
                    {it.icon}
                  </div>
                  <div>
                    <span className="text-base font-black text-white italic uppercase tracking-tighter block mb-1">{it.label}</span>
                    <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em]">{it.sub}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black text-emerald-500 italic uppercase block mb-2 tracking-tighter">{it.status}</span>
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
            <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em] italic">{t('proper.trendTitle')}</h4>
            <span className="text-[9px] font-black text-emerald-500 uppercase italic">{t('proper.months')}</span>
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
            <span>{t('common.monthsShort.0')}</span><span>{t('proper.trendStatus')}</span><span>{t('common.monthsShort.11')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function ESGIntelligenceDashboard() {
  const { t } = useLanguage();
  return (
    <div className="w-full flex flex-col gap-6 pt-20 pb-10">
      <div className="glass-panel rounded-[3.5rem] p-10 flex justify-between items-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent"></div>
        <div className="flex items-center gap-12 relative z-10">
          <div className="w-28 h-28 rounded-[2.5rem] bg-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.5)] flex items-center justify-center border border-emerald-400">
            <BarChart3 className="w-14 h-14 text-white" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500/50 mb-3 block italic">{t('intelligence.badge')}</span>
            <h3 className="text-5xl font-black italic uppercase tracking-tighter mb-5 leading-none text-white">{t('intelligence.title')} <br /><span className="text-emerald-500">{t('intelligence.subtitle')}</span></h3>
            <div className="flex gap-4">
              <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] px-6 py-3 bg-white/5 rounded-2xl border border-white/10 italic">v4.0.0 Enterprise Core</span>
              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em] px-6 py-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 italic">{t('intelligence.path')}</span>
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
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-emerald-500/50 italic">{t('intelligence.indexStatus')}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 flex-1">
        {[t('intelligence.levels.standard'), t('intelligence.levels.maturity'), t('intelligence.levels.master')].map((lvl, i) => (
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
                {t('intelligence.initMatrix')}
              </button>
            </div>
            <div className="pt-8 border-t border-white/5 mt-8">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.3em] mb-5">
                <span className="text-white/30 italic">{t('intelligence.mastery')}</span>
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
              <h4 className="text-xs font-black uppercase tracking-[0.4em] text-white leading-none mb-2 italic">{t('intelligence.engine')}</h4>
              <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">{t('intelligence.active')}</span>
            </div>
          </div>
          <div className="space-y-4 flex-1">
            <div className="h-12 bg-white/2 rounded-xl border border-white/5 flex items-center px-4 text-[10px] font-black text-white/20 italic tracking-widest uppercase">{t('intelligence.placeholder1')}</div>
            <div className="h-12 bg-white/2 rounded-xl border border-white/5 flex items-center px-4 text-[10px] font-black text-white/20 italic tracking-widest uppercase">{t('intelligence.placeholder2')}</div>
            <button className="w-full py-6 mt-8 bg-blue-600 rounded-2xl text-white text-xs font-black uppercase tracking-[0.3em] shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:bg-blue-500 transition-all group-hover:scale-[1.02] italic">
              {t('intelligence.verifyLink')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function LegalRegisterDashboard() {
  const { t } = useLanguage();
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
          { label: t('legal.cards.total'), val: '1,248', icon: <Scale className="w-6 h-6" />, color: 'text-blue-400' },
          { label: t('legal.cards.avg'), val: '98.2%', icon: <ShieldCheck className="w-6 h-6" />, color: 'text-emerald-400' },
          { label: t('legal.cards.reviews'), val: '00', icon: <Clock className="w-6 h-6" />, color: 'text-orange-400' },
          { label: t('legal.cards.acts'), val: '03', icon: <Target className="w-6 h-6" />, color: 'text-red-400' }
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
            <h4 className="text-emerald-500 text-[11px] font-black uppercase tracking-[0.5em] mb-4 italic">{t('legal.vaultTitle')}</h4>
            <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] italic">{t('legal.vaultSub')}</span>
          </div>
          <div className="flex gap-6">
            <div className="w-80 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center px-8 text-[11px] font-black text-white/20 italic tracking-widest uppercase">{t('legal.search')}</div>
            <div className="px-8 py-5 bg-emerald-500 rounded-2xl text-[10px] font-black text-white shadow-2xl shadow-emerald-500/30 flex items-center gap-4 hover:scale-105 transition-transform uppercase italic">
              <Download className="w-5 h-5" /> {t('legal.export')}
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
                  {l.compliance} {t('legal.status')}
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
  const { t } = useLanguage();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
      {[
        { title: t('security.stats.rls'), desc: t('security.stats.rlsDesc'), icon: <ShieldAlert className="w-10 h-10 text-emerald-500" /> },
        { title: t('security.stats.hub'), desc: t('security.stats.hubDesc'), icon: <User className="w-10 h-10 text-blue-500" /> },
        { title: t('security.stats.uptime'), desc: t('security.stats.uptimeDesc'), icon: <Server className="w-10 h-10 text-emerald-500" /> },
        { title: t('security.stats.quantum'), desc: t('security.stats.quantumDesc'), icon: <Lock className="w-10 h-10 text-blue-500" /> }
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
  const { t } = useLanguage();
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
              <h4 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-6 text-white uppercase">{t('security.title')} <br /><span className="text-emerald-500">{t('security.subtitle')}</span></h4>
              <p className="text-xs font-black text-white/30 uppercase tracking-[0.6em] italic">{t('security.badge')}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-8">
            <div className="px-10 py-6 bg-emerald-500 rounded-3xl text-sm font-black text-white shadow-2xl shadow-emerald-500/30 flex items-center gap-6 italic uppercase tracking-widest">
              <div className="w-4 h-4 bg-white rounded-full animate-pulse shadow-[0_0_15px_white]"></div> {t('security.nominal')}
            </div>
            <div className="px-10 py-6 bg-white/5 border border-white/10 rounded-3xl text-xs font-black text-white/40 uppercase tracking-[0.4em] italic flex items-center gap-4">
              <Zap className="w-5 h-5" /> {t('security.latency')}
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full overflow-x-auto pb-4">
          <table className="w-full border-separate border-spacing-y-4">
            <thead>
              <tr className="text-left">
                {[t('security.table.time'), t('security.table.protocol'), t('security.table.context'), t('security.table.actor'), t('security.table.integrity')].map(h => (
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
                      <span className="group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform">{t('security.statusValid')}</span>
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

function TechnicalVisual({ activeModule }: { activeModule: string }) {
  const { t } = useLanguage();
  
  const renderDashboard = () => {
    switch (activeModule) {
      case 'dashboard': return <CommandCenterDashboard t={t} />;
      case 'compliance': return <ComplianceDashboard />;
      case 'amdal': return <AmdalManagement />;
      case 'ghg': return <GHGAccountingDashboard />;
      case 'wastewater': return <WastewaterDashboard />;
      case 'waste': return <B3WasteManagement />;
      case 'iso': return <ISO14001Dashboard />;
      case 'domestic': return <DomesticWasteDashboard />;
      case 'proper': return <ProperDashboard />;
      case 'intelligence': return <ESGIntelligenceDashboard />;
      case 'esg': return <ESGIntelligenceDashboard />;
      case 'legal': return <LegalRegisterDashboard />;
      case 'security': return <SecurityDashboard />;
      default: return (
        <div className="w-full h-full flex flex-col justify-center items-center p-8 sm:p-20 text-center">
            <div className="mb-12 inline-block">
              <div className="px-6 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] italic mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                {t(`modules.${activeModule}.badge`)}
              </div>
              <h2 className="text-6xl sm:text-8xl font-black italic uppercase tracking-tighter text-white leading-none">
                {t(`modules.${activeModule}.title`)} <span className="text-emerald-500">{t(`modules.${activeModule}.subtitle`)}</span>
              </h2>
            </div>
            
            <p className="text-lg sm:text-xl text-slate-400 font-light leading-relaxed max-w-3xl mx-auto italic mb-16">
              {t(`modules.${activeModule}.descLong`)}
            </p>

            <div className="detail-cards-container flex justify-center gap-6">
              {[1, 2, 3].map((i) => (
                 <div key={i} className="px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black text-white/40 uppercase tracking-[0.3em] italic">
                   {t(`modules.${activeModule}.details.${i-1}`)}
                 </div>
              ))}
            </div>
        </div>
      );
    }
  };

  return (
    <div className="technical-blueprint-container dash-mode relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-3xl"></div>
      <div className="dash-wrapper relative z-10 w-full h-full p-6 sm:p-12 overflow-y-auto custom-scrollbar">
        {renderDashboard()}
      </div>
    </div>
  );
}

export default function LandingPage() {
  const { language, setLanguage, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState("dashboard")

  // For Carousel Navigation
  const modules = useMemo(() => [
    {
      id: "amdal",
      icon: <ShieldCheck className="w-8 h-8" />,
      title: t('modules.amdal.title'),
      subtitle: t('modules.amdal.subtitle'),
      desc: t('modules.amdal.descLong'),
      details: [
        { label: t('modules.amdal.details.0'), icon: <FileSearch className="w-4 h-4" /> },
        { label: t('modules.amdal.details.1'), icon: <RefreshCw className="w-4 h-4" /> },
        { label: t('modules.amdal.details.2'), icon: <CheckCircle2 className="w-4 h-4" /> },
      ]
    },
    {
      id: "wastewater",
      icon: <Droplets className="w-8 h-8" />,
      title: t('modules.wastewater.title'),
      subtitle: t('modules.wastewater.subtitle'),
      desc: t('modules.wastewater.descLong'),
      details: [
        { label: t('modules.wastewater.details.0'), icon: <Database className="w-4 h-4" /> },
        { label: t('modules.wastewater.details.1'), icon: <Shield className="w-4 h-4" /> },
        { label: t('modules.wastewater.details.2'), icon: <FileText className="w-4 h-4" /> },
        { label: t('modules.wastewater.details.3'), icon: <Activity className="w-4 h-4" /> }
      ]
    },
    {
      id: "ghg",
      icon: <Globe2 className="w-8 h-8" />,
      title: t('modules.ghg.title'),
      subtitle: t('modules.ghg.subtitle'),
      desc: t('modules.ghg.descLong'),
      details: [
        { label: t('modules.ghg.details.0'), icon: <Layers className="w-4 h-4" /> },
        { label: t('modules.ghg.details.1'), icon: <AlertCircle className="w-4 h-4" /> },
        { label: t('modules.ghg.details.2'), icon: <Activity className="w-4 h-4" /> },
        { label: t('modules.ghg.details.3'), icon: <TrendingUp className="w-4 h-4" /> }
      ]
    },
    {
      id: "waste",
      icon: <Package className="w-8 h-8" />,
      title: t('modules.waste.title'),
      subtitle: t('modules.waste.subtitle'),
      desc: t('modules.waste.descLong'),
      details: [
        { label: t('modules.waste.details.0'), icon: <Zap className="w-4 h-4" /> },
        { label: t('modules.waste.details.1'), icon: <Calendar className="w-4 h-4" /> },
        { label: t('modules.waste.details.2'), icon: <FileText className="w-4 h-4" /> },
        { label: t('modules.waste.details.3'), icon: <CheckCircle2 className="w-4 h-4" /> }
      ]
    },
    {
      id: "iso",
      icon: <Trophy className="w-8 h-8" />,
      title: t('modules.iso.title'),
      subtitle: t('modules.iso.subtitle'),
      desc: t('modules.iso.descLong'),
      details: [
        { label: t('modules.iso.details.0'), icon: <Layers className="w-4 h-4" /> },
        { label: t('modules.iso.details.1'), icon: <CheckCircle2 className="w-4 h-4" /> },
        { label: t('modules.iso.details.2'), icon: <ArrowRight className="w-4 h-4" /> },
        { label: t('modules.iso.details.3'), icon: <Scale className="w-4 h-4" /> }
      ]
    },
    {
      id: "proper",
      icon: <Zap className="w-8 h-8" />,
      title: t('modules.proper.title'),
      subtitle: t('modules.proper.subtitle'),
      desc: t('modules.proper.descLong'),
      details: [
        { label: t('modules.proper.details.0'), icon: <Users className="w-4 h-4" /> },
        { label: t('modules.proper.details.1'), icon: <Activity className="w-4 h-4" /> },
        { label: t('modules.proper.details.2'), icon: <BarChart3 className="w-4 h-4" /> },
        { label: t('modules.proper.details.3'), icon: <FileText className="w-4 h-4" /> }
      ]
    },
    {
      id: "security",
      icon: <ShieldCheck className="w-8 h-8" />,
      title: t('modules.security.title'),
      subtitle: t('modules.security.subtitle'),
      desc: t('modules.security.descLong'),
      details: [
        { label: t('modules.security.details.0'), icon: <Lock className="w-4 h-4" /> },
        { label: t('modules.security.details.1'), icon: <FileSearch className="w-4 h-4" /> },
        { label: t('modules.security.details.2'), icon: <ShieldCheck className="w-4 h-4" /> },
        { label: t('modules.security.details.3'), icon: <Layers className="w-4 h-4" /> }
      ]
    },
    {
      id: "dashboard",
      icon: <LayoutDashboard className="w-8 h-8" />,
      title: t('modules.compliance.title'),
      subtitle: t('modules.compliance.subtitle'),
      desc: t('modules.compliance.descLong'),
      details: [
        { label: t('modules.compliance.details.0'), icon: <Activity className="w-4 h-4" /> },
        { label: t('modules.compliance.details.1'), icon: <Zap className="w-4 h-4" /> },
        { label: t('modules.compliance.details.2'), icon: <Globe2 className="w-4 h-4" /> }
      ]
    },
    {
      id: "compliance",
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: t('modules.compliance.title'),
      subtitle: t('modules.compliance.subtitle'),
      desc: t('modules.compliance.descLong'),
      details: [
        { label: t('modules.compliance.details.0'), icon: <Zap className="w-4 h-4" /> },
        { label: t('modules.compliance.details.1'), icon: <FileText className="w-4 h-4" /> },
        { label: t('modules.compliance.details.2'), icon: <ClipboardCheck className="w-4 h-4" /> }
      ]
    },
    {
      id: "esg",
      icon: <BarChart3 className="w-8 h-8" />,
      title: t('modules.intelligence.title'),
      subtitle: t('modules.intelligence.subtitle'),
      desc: t('modules.intelligence.descLong'),
      details: [
        { label: t('modules.intelligence.details.0'), icon: <TrendingUp className="w-4 h-4" /> },
        { label: t('modules.intelligence.details.1'), icon: <Activity className="w-4 h-4" /> },
        { label: t('modules.intelligence.details.2'), icon: <Zap className="w-4 h-4" /> }
      ]
    },
    {
      id: "legal",
      icon: <Scale className="w-8 h-8" />,
      title: t('modules.legal.title'),
      subtitle: t('modules.legal.subtitle'),
      desc: t('modules.legal.descLong'),
      details: [
        { label: t('modules.legal.details.0'), icon: <Building2 className="w-4 h-4" /> },
        { label: t('modules.legal.details.1'), icon: <CheckCircle2 className="w-4 h-4" /> },
        { label: t('modules.legal.details.2'), icon: <AlertCircle className="w-4 h-4" /> }
      ]
    },
    {
      id: "domestic",
      icon: <Trash2 className="w-8 h-8" />,
      title: t('modules.domestic.title'),
      subtitle: t('modules.domestic.subtitle'),
      desc: t('modules.domestic.descLong'),
      details: [
        { label: t('modules.domestic.details.0'), icon: <RefreshCw className="w-4 h-4" /> },
        { label: t('modules.domestic.details.1'), icon: <Layers className="w-4 h-4" /> },
        { label: t('modules.domestic.details.2'), icon: <CheckCircle2 className="w-4 h-4" /> }
      ]
    }
  ], [t])

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
              <a href="#ecosystem" className="nav-link text-xs">{t('nav.platform')}</a>
              <a href="#features" className="nav-link text-xs">{t('nav.features')}</a>
              <a href="#architecture" className="nav-link text-xs">{t('nav.architecture')}</a>
              <a href="#security" className="nav-link text-xs">{t('nav.security')}</a>
            </div>
            
            {/* Language Toggle */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 ml-6">
              <button 
                onClick={() => setLanguage('id')}
                className={`px-3 py-1 rounded-full text-[9px] font-black transition-all ${language === 'id' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' : 'text-slate-500 hover:text-white'}`}
              >
                ID
              </button>
              <button 
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-[9px] font-black transition-all ${language === 'en' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' : 'text-slate-500 hover:text-white'}`}
              >
                EN
              </button>
            </div>
          </div>

          <Link href="https://eco-compliant-os.vercel.app/dashboard">
            <button className="px-8 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-black tracking-widest uppercase transition-all shadow-xl shadow-emerald-500/20">
              {t('nav.demo')}
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
              <span>{t('hero.badge')}</span>
            </div>

            <h1 className="hero-title text-7xl md:text-[10rem] font-black mb-12 leading-[0.85] reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
              {t('hero.title')} <br />
              <span className="hero-gradient-text uppercase italic">{t('hero.subtitle')}</span>
            </h1>

            <p className="text-xl md:text-3xl text-slate-400 mb-20 max-w-4xl mx-auto leading-relaxed font-light reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
              {t('hero.desc')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
              <Link href="https://eco-compliant-os.vercel.app/dashboard">
                <button className="cta-button px-16 py-8 rounded-3xl text-white font-black text-2xl flex items-center gap-4 transition-all">
                  {t('hero.launch')}
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
              <h4 className="text-emerald-500 font-black tracking-[0.5em] uppercase mb-6 text-xs italic">{t('modules.integratedBadge')}</h4>
              <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-none">{t('modules.title')} <span className="text-emerald-500">{t('modules.subtitle')}</span></h2>
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
                    <TechnicalVisual activeModule={mod.id} />
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
              <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-none">God-Tier <br /> <span className="text-emerald-500">Golden Stack.</span></h2>
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
              { title: t('features.properScoring.title'), desc: t('features.properScoring.desc'), icon: <Trophy className="w-6 h-6" />, tag: "RegTech" },
              { title: t('features.brevoAlerts.title'), desc: t('features.brevoAlerts.desc'), icon: <Bell className="w-6 h-6" />, tag: "Automation" },
              { title: t('features.complianceAgenda.title'), desc: t('features.complianceAgenda.desc'), icon: <Calendar className="w-6 h-6" />, tag: "Planning" },
              { title: t('features.isoMapping.title'), desc: t('features.isoMapping.desc'), icon: <ClipboardCheck className="w-6 h-6" />, tag: "Standards" },
              { title: t('features.digitalManifests.title'), desc: t('features.digitalManifests.desc'), icon: <Database className="w-6 h-6" />, tag: "Logistics" },
              { title: t('features.griAlignment.title'), desc: t('features.griAlignment.desc'), icon: <BarChart3 className="w-6 h-6" />, tag: "ESG" },
              { title: t('features.ghgAccounting.title'), desc: t('features.ghgAccounting.desc'), icon: <Globe2 className="w-6 h-6" />, tag: "Carbon" },
              { title: t('features.iotTelemetry.title'), desc: t('features.iotTelemetry.desc'), icon: <Zap className="w-6 h-6" />, tag: "Real-time" }
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
          <h2 className="text-8xl md:text-[12rem] font-black mb-16 italic uppercase tracking-tighter text-white leading-none">{t('cta.title')} <br /><span className="text-emerald-500">{t('cta.subtitle')}</span></h2>
          <p className="text-2xl md:text-4xl text-slate-400 mb-20 max-w-4xl mx-auto font-light leading-relaxed">
            {t('cta.desc')}
          </p>
          <Link href="https://eco-compliant-os.vercel.app/dashboard">
            <button className="cta-button px-24 py-10 rounded-3xl font-black text-4xl text-white transition-all shadow-2xl shadow-emerald-500/20">
              {t('cta.button')}
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
              <span className="text-xs font-black text-emerald-500 tracking-[0.4em] uppercase">{t('nav.platform')}</span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <div className="text-sm font-black text-white italic uppercase tracking-[0.3em] mb-4">{t('footer.tagline')}</div>
            <div className="text-xs font-mono text-slate-600 uppercase tracking-widest flex items-center justify-center md:justify-end gap-6">
              <span>{t('footer.copyright')}</span>
              <span className="w-2 h-2 bg-slate-800 rounded-full"></span>
              <span>{t('footer.allSystemsNominal')}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
