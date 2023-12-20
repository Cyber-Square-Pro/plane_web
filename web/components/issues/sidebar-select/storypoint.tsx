import React from "react";
// ui
import { CustomSelect, PriorityIcon } from "@plane/ui";
// types
import { TIssueStoryPoint } from "types";
// constants
import { STORYPOINTS } from "constants/project";

type Props = {
  value: TIssueStoryPoint;
  onChange: (val: TIssueStoryPoint) => void;
  disabled?: boolean;
 
};


export const SidebarStoryPointSelect: React.FC<Props> = ({ value, onChange, disabled = false }) => (
    <CustomSelect
      customButton={
        <div
          className={`flex items-center gap-1.5 text-left text-xs capitalize rounded px-2.5 py-0.5 ${
            value === 1
              ? "border-red-500/20 bg-red-500/20 text-red-500"
              : value === 2
              ? "border-orange-500/20 bg-orange-500/20 text-orange-500"
              : value === 3
              ? "border-yellow-500/20 bg-yellow-500/20 text-yellow-500"
              : value === 4
              ? "border-green-500/20 bg-green-500/20 text-green-500"
              : "bg-custom-background-80 border-custom-border-200 text-custom-text-200"
          }`}
        >
      
        <span>{value ?? 0}</span>
        </div>
      }
      value={value}
      onChange={onChange}
      optionsClassName="w-min"
      disabled={disabled}
    >
      {STORYPOINTS.map((option) => (
        <CustomSelect.Option key={option} value={option} className="capitalize">
        <>
             {option}
        </>
        </CustomSelect.Option>
      ))}
    </CustomSelect>
  );
  
