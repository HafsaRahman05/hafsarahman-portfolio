'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type ProjectTab = {
  value: string;
  label: string;
  content: React.ReactNode;
}

export function ProjectTabs({ tabs }: { tabs: ProjectTab[] }) {
  return (
    <Tabs defaultValue={tabs.length > 0 ? tabs[0].value : ''} className="mt-8">
      <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 md:grid-cols-5 bg-secondary/50">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
