import React, { useState } from "react";
import { Menu, Bell, ArrowLeft, Home, FileText, Heart, User, Gift, ChevronRight } from "lucide-react";

import banner from "./assets/banner.jpg";
import yukTashi from "./assets/icons/yuk_tashi.jpg";
import ovqatYetkazish from "./assets/icons/ovqat_yetkazish.jpg";
import bozorMahsulotlari from "./assets/icons/bozor_mahsulotlari.jpg";
import dorixona from "./assets/icons/dorixona.jpg";
import kuryer from "./assets/icons/kuryer.jpg";
import suvYetkazish from "./assets/icons/suv_yetkazish.jpg";
import gazBallon from "./assets/icons/gaz_ballon.jpg";
import uyTozalash from "./assets/icons/uy_tozalash.jpg";
import ustaChaqirish from "./assets/icons/usta_chaqirish.jpg";
import evakuator from "./assets/icons/evakuator.jpg";
import avtoyuvish from "./assets/icons/avtoyuvish.jpg";
import yoqilgiYetkazish from "./assets/icons/yoqilgi_yetkazish.jpg";
import shinaXizmati from "./assets/icons/shina_xizmati.jpg";
import mehmonxona from "./assets/icons/mehmonxona.jpg";
import aviaChipta from "./assets/icons/avia_chipta.jpg";
import poyezdChipta from "./assets/icons/poyezd_chipta.jpg";
import sartarosh from "./assets/icons/sartarosh.jpg";
import gulYetkazish from "./assets/icons/gul_yetkazish.jpg";

const services = [
  { name: "Yuk tashish", img: yukTashi },
  { name: "Ovqat yetkazish", img: ovqatYetkazish },
  { name: "Bozor mahsulotlari", img: bozorMahsulotlari },
  { name: "Dorixona", img: dorixona },
  { name: "Kuryer", img: kuryer },
  { name: "Suv yetkazish", img: suvYetkazish },
  { name: "Gaz ballon", img: gazBallon },
  { name: "Uy tozalash", img: uyTozalash },
  { name: "Usta chaqirish", img: ustaChaqirish },
  { name: "Evakuator", img: evakuator },
  { name: "Avtoyuvish", img: avtoyuvish },
  { name: "Yoqilg'i yetkazish", img: yoqilgiYetkazish },
  { name: "Shina xizmati", img: shinaXizmati },
  { name: "Mehmonxona", img: mehmonxona },
  { name: "Avia chipta", img: aviaChipta },
  { name: "Poyezd chipta", img: poyezdChipta },
  { name: "Sartarosh", img: sartarosh },
  { name: "Gul yetkazish", img: gulYetkazish },
];

function ServiceCard({ name, img }) {
  return (
    <button className="flex flex-col items-center justify-center gap-2 bg-white border border-gray-100 rounded-2xl py-4 px-2 shadow-sm active:scale-95 transition-transform">
      <img src={img} alt={name} className="w-9 h-9 object-contain" />
      <span className="text-xs font-medium text-gray-800 text-center leading-tight">{name}</span>
    </button>
  );
}

function BottomNav({ active }) {
  const items = [
    { key: "home", label: "Bosh sahifa", icon: Home },
    { key: "orders", label: "Buyurtmalar", icon: FileText },
    { key: "fav", label: "Sevimlilar", icon: Heart },
    { key: "profile", label: "Profil", icon: User },
  ];
  return (
    <div className="grid grid-cols-4 border-t border-gray-100 bg-white pt-2 pb-6">
      {items.map(({ key, label, icon: Icon }) => (
        <div key={key} className="flex flex-col items-center gap-1">
          <Icon size={22} className={active === key ? "text-yellow-500" : "text-gray-400"} strokeWidth={active === key ? 2.5 : 2} />
          <span className={text-[11px] ${active === key ? "text-yellow-500 font-semibold" : "text-gray-400"}}>{label}</span>
        </div>
      ))}
    </div>
  );
}

function HomeScreen({ onSeeAll }) {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <button className="w-9 h-9 flex items-center justify-center">
          <Menu size={22} />
        </button>
        <div className="text-center">
          <p className="font-bold text-lg text-gray-900">Salom, Ahmad!</p>
          <p className="text-sm text-gray-400">Qayerga boramiz?</p>
        </div>
        <button className="w-9 h-9 flex items-center justify-center">
          <Bell size={20} />
        </button>
      </div><div className="px-5 mt-2">
        <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl overflow-hidden h-44">
          <img src={banner} alt="Taksi banner" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="flex justify-center gap-1.5 mt-3">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-800" />
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
        </div>
      </div>

      <div className="px-5 mt-5 flex items-center justify-between">
        <p className="font-bold text-gray-900">Xizmatlar</p>
        <button onClick={onSeeAll} className="text-sm text-gray-400 flex items-center gap-0.5">
          Barchasi <ChevronRight size={16} />
        </button>
      </div>

      <div className="px-5 mt-3 grid grid-cols-4 gap-3 overflow-y-auto pb-3">
        {services.slice(0, 12).map((s) => (
          <ServiceCard key={s.name} {...s} />
        ))}
      </div>

      <div className="px-5 mt-2 mb-3">
        <div className="bg-yellow-50 rounded-2xl p-4 flex items-center justify-between">
          <div>
            <p className="font-bold text-gray-900 text-sm">Do'stlaringizni taklif qiling</p>
            <p className="text-xs text-gray-500 mt-1">10 000 so'mgacha bonus oling!</p>
          </div>
          <div className="flex items-center gap-1">
            <Gift size={32} className="text-yellow-500" />
            <ChevronRight size={18} className="text-gray-400" />
          </div>
        </div>
      </div>

      <BottomNav active="home" />
    </div>
  );
}

function AllServicesScreen({ onBack }) {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex items-center gap-4 px-5 pt-4 pb-3">
        <button onClick={onBack} className="w-8 h-8 flex items-center justify-center">
          <ArrowLeft size={22} />
        </button>
        <p className="font-bold text-lg text-gray-900">Barcha xizmatlar</p>
      </div>

      <div className="px-5 grid grid-cols-3 gap-3 overflow-y-auto pb-3">
        {services.map((s) => (
          <ServiceCard key={s.name} {...s} />
        ))}
      </div>

      <BottomNav active="home" />
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState("home");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-[380px] h-[780px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border-8 border-gray-900 relative">
        {screen === "home" ? (
          <HomeScreen onSeeAll={() => setScreen("all")} />
        ) : (
          <AllServicesScreen onBack={() => setScreen("home")} />
        )}
      </div>
    </div>
  );
}
