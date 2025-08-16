'use client';

import type { FC } from 'react';
import AppHeader from '@/components/header';
import LeftSidebar from '@/components/left-sidebar';
import RightSidebar from '@/components/right-sidebar';
import Canvas from '@/components/canvas';

const DesignEditor: FC = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-background font-body overflow-hidden">
      <AppHeader />
      <div className="flex flex-1 overflow-hidden">
        <LeftSidebar />
        <main className="flex-1 overflow-auto p-4 lg:p-8">
          <Canvas />
        </main>
        <RightSidebar />
      </div>
    </div>
  );
};

export default DesignEditor;
