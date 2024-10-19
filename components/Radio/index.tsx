import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Options } from "@/types/option";
import { RadioGroupProps } from "@radix-ui/react-radio-group";
import { useMemo } from "react";

interface Props<T = string> extends RadioGroupProps {
  options: Array<Options<T>>;
}

export default function ShadRadioGroup({ options, ...props }: Props) {
  const renderRadioItem = useMemo(() => {
    return options.map((item) => (
      <div className='flex items-center space-x-2' key={item.value}>
        <RadioGroupItem value={item.value} id={item.value} />
        <Label className='capitalize' htmlFor={item.value}>
          {item.label}
        </Label>
      </div>
    ));
  }, [options]);

  return <RadioGroup {...props}>{renderRadioItem}</RadioGroup>;
}
