import React, { HTMLAttributes, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Options } from "@/types/option";

interface Props<T = string> extends HTMLAttributes<HTMLSelectElement> {
  options: Array<Options<T>>;
  placeholder: string;
  onValueChange: (value: T) => void;
}

export default function ShadSelect({
  options,
  defaultValue,
  className = "",
  placeholder,
  onValueChange,
}: Props) {
  const selectItems = useMemo(() => {
    return options.map((item) => (
      <SelectItem value={item.value.toLowerCase()} key={item.value}>
        {item.label}
      </SelectItem>
    ));
  }, [options]);

  return (
    <Select onValueChange={(e) => onValueChange(e)}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>{selectItems}</SelectContent>
    </Select>
  );
}
