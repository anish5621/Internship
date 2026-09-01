import React, { forwardRef } from 'react';

export interface GenericListProps<T extends { id: string }> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  emptyMessage?: string;
}

function GenericListInner<T extends { id: string }>(
  { items, renderItem, emptyMessage = 'No items found.' }: GenericListProps<T>,
  ref: React.Ref<HTMLUListElement>
) {
  if (items.length === 0) return <p>{emptyMessage}</p>;

  return (
    <ul ref={ref}>
      {items.map((item) => (
        <li key={item.id}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export const GenericList = forwardRef(GenericListInner) as <T extends { id: string }>(
  props: GenericListProps<T> & { ref?: React.Ref<HTMLUListElement> }
) => React.ReactElement;