import ShadCheckBox from "@/components/Checkbox";
import ShadRadioGroup from "@/components/Radio";
import { Button } from "@/components/ui/button";
import { Options } from "@/types/option";
import React, { useMemo, useState } from "react";

interface Props {
  filters: any;
  onValueChange: (value: string) => void;
  value: string;
  onReset: () => void;
}

export default function Filters({
  filters,
  onValueChange,
  onReset,
  value,
}: Props) {
  const filterOptions: Array<Options<string>> = useMemo(() => {
    const opts = (filters[1].filter_options as Array<any>).map((item) => ({
      label: item,
      value: (item as string).toLowerCase(),
    }));
    opts.push({
      label: "All",
      value: "",
    });

    return opts;
  }, [filters]);

  return (
    <div className='flex flex-col h-full justify-start items-start w-56'>
      <div className='flex flex-col justify-between'>
        <div className='flex justify-between items-center'>
          <h4 className='text-3xl'>{filters[0].title_text}</h4>
          <Button variant='ghost' onClick={onReset}>
            Reset
          </Button>
        </div>
        <p className='font-bold mb-3'>{filters[1].filter_category}</p>
        <div className='flex justify-between items-start flex-col gap-2'>
          <ShadRadioGroup
            value={value}
            options={filterOptions}
            onValueChange={onValueChange}
          />
        </div>
      </div>
    </div>
  );
}
