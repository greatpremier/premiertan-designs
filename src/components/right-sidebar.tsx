'use client';

import { Layers, Brush } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"


const RightSidebar = () => {
  return (
    <aside className="w-72 bg-card border-l p-4 shadow-lg overflow-y-auto flex-shrink-0">
      <Accordion type="multiple" defaultValue={['item-1', 'item-2']} className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-base font-semibold">
            <div className="flex items-center gap-2">
              <Brush className="h-5 w-5 text-primary" />
              <span>Properties</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4 space-y-4">
            <div>
                <Label htmlFor="color-picker">Color</Label>
                <div className="flex items-center gap-2 mt-1">
                    <Input id="color-picker" type="color" defaultValue="#6666B3" className="w-10 h-10 p-1"/>
                    <Input type="text" defaultValue="#6666B3" className="flex-1"/>
                </div>
            </div>
            <Separator/>
            <div>
                <Label>Typography</Label>
                <div className="space-y-2 mt-1">
                    <Select defaultValue="inter">
                        <SelectTrigger>
                            <SelectValue placeholder="Select a font" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="inter">Inter</SelectItem>
                            <SelectItem value="arial">Arial</SelectItem>
                            <SelectItem value="helvetica">Helvetica</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className="flex items-center gap-2">
                        <Input type="number" defaultValue="50" className="w-20"/>
                        <Button variant="outline" size="icon" className="w-10 h-10 font-bold">B</Button>
                        <Button variant="outline" size="icon" className="w-10 h-10 italic">I</Button>
                    </div>
                </div>
            </div>
             <Separator/>
            <div>
                <Label>Opacity</Label>
                 <Slider defaultValue={[100]} max={100} step={1} className="mt-2" />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-base font-semibold">
            <div className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-primary" />
              <span>Layers</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-2 space-y-1">
            <div className="p-2 rounded-md bg-secondary text-secondary-foreground text-sm cursor-pointer hover:bg-primary/10">
                Text: Your Design Title
            </div>
            <div className="p-2 rounded-md text-sm cursor-pointer hover:bg-primary/10">
                Shape: Rectangle
            </div>
            <div className="p-2 rounded-md text-sm cursor-pointer hover:bg-primary/10">
                Shape: Circle
            </div>
             <div className="p-2 rounded-md text-sm cursor-pointer hover:bg-primary/10">
                Text: Some subtitle
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
};

export default RightSidebar;
