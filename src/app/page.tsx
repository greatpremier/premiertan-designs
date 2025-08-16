
'use client';

import DesignEditor from '@/components/design-editor';
import { DesignProvider } from '@/contexts/design-context';

export default function Home() {
  return (
    <DesignProvider>
      <DesignEditor />
    </DesignProvider>
  );
}
