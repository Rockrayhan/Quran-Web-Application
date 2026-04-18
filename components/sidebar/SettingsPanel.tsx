"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useSettings } from "@/context/SettingsContext";

export default function SettingsPanel() {
  const {
    arabicSize,
    translationSize,
    font,
    setArabicSize,
    setTranslationSize,
    setFont,
  } = useSettings();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Settings</Button>
      </SheetTrigger>

      <SheetContent side="left" className="space-y-6 p-5 w-52! md:w-80!">
        <SheetTitle className="border-gray-300 border-2 p-2 rounded-lg">
          Settings
        </SheetTitle>

             

        {/* Font Select */}
        <div className="space-y-2">
          <Label>Arabic Font</Label>
          <Select value={font} onValueChange={setFont}>
            <SelectTrigger>
              <SelectValue placeholder="Select font" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className="p-2" value="font-amiri">Amiri</SelectItem>
              <SelectItem className="p-2" value="font-scheherazade">Scheherazade</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Arabic Size */}
        <div className="space-y-2">
          <Label>Arabic Size ({arabicSize}px)</Label>
          <Slider
            value={[arabicSize]}
            min={16}
            max={40}
            step={1}
            onValueChange={(val) => setArabicSize(val[0])}
          />
        </div>

        {/* Translation Size */}
        <div className="space-y-2">
          <Label>Translation Size ({translationSize}px)</Label>
          <Slider
            value={[translationSize]}
            min={12}
            max={24}
            step={1}
            onValueChange={(val) => setTranslationSize(val[0])}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
