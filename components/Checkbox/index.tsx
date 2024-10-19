import React, { HTMLAttributes } from "react";
import { Checkbox } from "../ui/checkbox";

interface Props extends HTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}
export default function ShadCheckBox({ label, id }: Props) {
  return (
    <div className='items-top flex space-x-2'>
      <Checkbox id={id} />
      <div className='grid gap-1.5 leading-none'>
        <label
          htmlFor={id}
          className='text-normal capitalize font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          {label}
        </label>
      </div>
    </div>
  );
}
