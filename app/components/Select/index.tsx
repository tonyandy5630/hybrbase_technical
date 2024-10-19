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
}

export default function ShadSelect({
  options,
  defaultValue,
  className = "",
  placeholder,
}: Props) {
  const selectItems = useMemo(() => {
    return options.map((item) => (
      <SelectItem value={item.value} key={item.value}>
        {item.label}
      </SelectItem>
    ));
  }, [options]);

  return (
    <Select>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>{selectItems}</SelectContent>
    </Select>
  );
}
