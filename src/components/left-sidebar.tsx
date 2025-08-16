
'use client';

import {
  LayoutTemplate,
  Shapes,
  Type,
  Upload,
  Sparkles,
  MousePointer2,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import AIPanel from '@/components/ai-panel';
import { useDesign } from '@/contexts/design-context';

const LeftSidebar = () => {
  const { addElement } = useDesign();
  
  const handleAddText = (type: 'heading' | 'subheading' | 'body') => {
    let props;
    switch(type) {
      case 'heading':
        props = { text: 'Add a heading', fontSize: 50, fontWeight: 'bold' };
        break;
      case 'subheading':
        props = { text: 'Add a subheading', fontSize: 30, fontWeight: 'semibold' };
        break;
      case 'body':
        props = { text: 'Add a little bit of body text', fontSize: 16, fontWeight: 'normal' };
        break;
    }
    addElement('text', props);
  }

  const renderElements = () => (
    <div className="grid grid-cols-2 gap-2 p-4">
      <div className="aspect-square bg-muted rounded-md flex items-center justify-center cursor-pointer hover:bg-border transition-colors">
        <Shapes className="h-8 w-8 text-muted-foreground" />
      </div>
      <div className="aspect-square bg-muted rounded-md flex items-center justify-center cursor-pointer hover:bg-border transition-colors">
        <div className="w-12 h-12 rounded-full bg-muted-foreground/20"></div>
      </div>
       <div className="aspect-square bg-muted rounded-md flex items-center justify-center cursor-pointer hover:bg-border transition-colors">
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-muted-foreground" fill="currentColor"><path d="M95,50,5,95V5Z"></path></svg>
      </div>
       <div className="aspect-square bg-muted rounded-md flex items-center justify-center cursor-pointer hover:bg-border transition-colors">
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-muted-foreground" fill="currentColor"><path d="M50,5,95,95H5Z"></path></svg>
      </div>
    </div>
  );

  const renderTemplates = () => (
    <div className="grid grid-cols-1 gap-2 p-4">
      <div className="aspect-[3/4] bg-muted rounded-md flex items-center justify-center cursor-pointer hover:bg-border transition-colors">
        <Image src="https://placehold.co/150x200.png" alt="Template 1" width={150} height={200} className="rounded-md" data-ai-hint="poster design"/>
      </div>
      <div className="aspect-[3/4] bg-muted rounded-md flex items-center justify-center cursor-pointer hover:bg-border transition-colors">
        <Image src="https://placehold.co/150x200.png" alt="Template 2" width={150} height={200} className="rounded-md" data-ai-hint="flyer design"/>
      </div>
    </div>
  );
  
  const renderTextStyles = () => (
    <div className="flex flex-col gap-4 p-4">
      <Button onClick={() => handleAddText('heading')} variant="outline" className="w-full justify-start text-3xl font-bold h-auto py-2">Add a heading</Button>
      <Button onClick={() => handleAddText('subheading')} variant="outline" className="w-full justify-start text-xl font-semibold h-auto py-2">Add a subheading</Button>
      <Button onClick={() => handleAddText('body')} variant="outline" className="w-full justify-start text-base font-normal h-auto py-2">Add a little bit of body text</Button>
    </div>
  );

  const renderUploads = () => (
    <div className="p-4 flex flex-col gap-4">
      <Button className="w-full">
        <Upload className="mr-2 h-4 w-4"/>
        Upload from Computer
      </Button>
      <div className="grid grid-cols-2 gap-2">
        <div className="aspect-square bg-muted rounded-md">
            <Image src="https://placehold.co/150x150.png" alt="Uploaded image 1" width={150} height={150} className="rounded-md" data-ai-hint="logo company"/>
        </div>
        <div className="aspect-square bg-muted rounded-md">
            <Image src="https://placehold.co/150x150.png" alt="Uploaded image 2" width={150} height={150} className="rounded-md" data-ai-hint="product photo"/>
        </div>
      </div>
    </div>
  );

  return (
    <aside className="w-80 bg-card border-r flex shadow-lg flex-shrink-0">
      <Tabs defaultValue="templates" className="w-full flex">
        <div className="w-20 border-r bg-muted/50">
          <TabsList className="flex flex-col h-full justify-start bg-transparent p-2 gap-2">
            <TabsTrigger value="select" className="flex flex-col h-16 w-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <MousePointer2 className="h-5 w-5" />
              <span className="text-xs mt-1">Select</span>
            </TabsTrigger>
            <TabsTrigger value="templates" className="flex flex-col h-16 w-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <LayoutTemplate className="h-5 w-5" />
              <span className="text-xs mt-1">Templates</span>
            </TabsTrigger>
            <TabsTrigger value="elements" className="flex flex-col h-16 w-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Shapes className="h-5 w-5" />
              <span className="text-xs mt-1">Elements</span>
            </TabsTrigger>
            <TabsTrigger value="text" className="flex flex-col h-16 w-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Type className="h-5 w-5" />
              <span className="text-xs mt-1">Text</span>
            </TabsTrigger>
            <TabsTrigger value="uploads" className="flex flex-col h-16 w-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Upload className="h-5 w-5" />
              <span className="text-xs mt-1">Uploads</span>
            </TabsTrigger>
            <TabsTrigger value="ai" className="flex flex-col h-16 w-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Sparkles className="h-5 w-5" />
              <span className="text-xs mt-1">AI Tools</span>
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="flex-1">
          <ScrollArea className="h-full">
            <TabsContent value="select" className="mt-0">
               <div className="p-4 text-center h-full flex flex-col justify-center items-center">
                 <h3 className="font-semibold text-lg">Select Tool</h3>
                 <p className="text-sm text-muted-foreground">Click and drag on the canvas to select and move objects.</p>
               </div>
            </TabsContent>
            <TabsContent value="templates" className="mt-0">{renderTemplates()}</TabsContent>
            <TabsContent value="elements" className="mt-0">{renderElements()}</TabsContent>
            <TabsContent value="text" className="mt-0">{renderTextStyles()}</TabsContent>
            <TabsContent value="uploads" className="mt-0">{renderUploads()}</TabsContent>
            <TabsContent value="ai" className="mt-0"><AIPanel /></TabsContent>
          </ScrollArea>
        </div>
      </Tabs>
    </aside>
  );
};

export default LeftSidebar;
