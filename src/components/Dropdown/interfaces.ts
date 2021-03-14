import React from 'react';

export interface OptionProps {
  code: string | number;
  value: string;
}

export interface DropdownProps {
  style?: React.CSSProperties;
  itemStyle?: React.CSSProperties;
  show: boolean;
  data: OptionProps[];
  onSelect: (selected?: OptionProps) => void;
  onHide: () => void;
}
