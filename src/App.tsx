import React, { useState } from 'react';
import { TelehealthProvider, useTelehealth } from './context/TelehealthContext';
import { AscendHeader } from './components/layout/AscendHeader';
import { AscendFooter } from './components/layout/AscendFooter';
import { AscendHomePage } from './components/home/AscendHomePage';
import { PatientPortal } from './components/patient/PatientPortal';
import { DoctorPortal } from './components/doctor/DoctorPortal';
import { AdminPortal } from './components/admin/AdminPortal';
import { BrandPortal } from './components/brand/BrandPortal';
import { VideoCallModal } from './components/consultation/VideoCallModal';
import { BookAppointmentModal } from './components/booking/BookAppointmentModal';
import { BrandCustomizerModal } from './components/customizer/BrandCustomizerModal';
import { IntakeQuestionnaireModal } from './components/intake/IntakeQuestionnaireModal';

const MainLayout: React.FC = () => {
  const { currentRole, brand } = useTelehealth();
  const [activeView, setActiveView] = useState<string>('home');

  return (
    <div className="min-h-screen flex flex-col bg-[#050a15] text-slate-200 selection:bg-teal-500 selection:text-white">
      {/* Ascend Medical Header Bar */}
      <AscendHeader activeView={activeView} setActiveView={setActiveView} />

      {/* Main View Router */}
      <main className="flex-1 pb-16">
        {activeView === 'home' && (
          <AscendHomePage onNavigatePortal={(p) => setActiveView(p)} />
        )}
        {activeView === 'patient' && <PatientPortal />}
        {activeView === 'doctor' && <DoctorPortal />}
        {activeView === 'admin' && <AdminPortal />}
        {activeView === 'brand' && <BrandPortal />}
      </main>

      {/* Ascend Footer */}
      <AscendFooter />

      {/* Global Modals */}
      <VideoCallModal />
      <BookAppointmentModal />
      <BrandCustomizerModal />
      <IntakeQuestionnaireModal />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <TelehealthProvider>
      <MainLayout />
    </TelehealthProvider>
  );
};

export default App;
