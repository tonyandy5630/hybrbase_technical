import ShadCheckBox from "@/components/Checkbox";
import React, { useMemo } from "react";

interface Props {
  filters: Array<any>;
}

export default function Filters({ filters }: Props) {
  const filter = useMemo(() => {
    return filters.map((item) => (
      <ShadCheckBox key={item} id={item} label={item} />
    ));
  }, [filters]);
  return (
    <div className='flex flex-col h-full justify-start items-start w-56'>
      <div className='flex flex-col justify-between'>
        <h4 className='text-3xl'>Filters</h4>
        <p className='font-bold mb-3'>Categories</p>
        <div className='flex justify-between items-start flex-col gap-2'>
          {filter}
        </div>
      </div>
    </div>
  );
}
