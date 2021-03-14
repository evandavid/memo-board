import React from 'react';

import { AsShadow, Container, DropdownItem } from './elements';
import { DropdownProps, OptionProps } from './interfaces';

const Dropdown = ({
  style = {},
  itemStyle = {},
  show,
  onHide,
  onSelect,
  data,
}: DropdownProps) => {
  const onItemClicked = (d: OptionProps) => {
    onSelect(d);
    onHide();
  };

  return show ? (
    <Container style={style}>
      <AsShadow
        onClick={() => {
          onHide();
        }}
      />
      {data &&
        data.map((datum) => (
          <DropdownItem
            style={itemStyle}
            className="item-dropdown"
            onClick={() => {
              onItemClicked(datum);
            }}
            key={datum.code}
          >
            {datum.value}
          </DropdownItem>
        ))}
    </Container>
  ) : null;
};

export default Dropdown;
