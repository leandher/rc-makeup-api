import React from 'react';

import ChevronDown from './assets/ChevronDown';
import ChevronUp from './assets/ChevronUp';

import './Table.css';

const renderIcon = orderBy => {
  switch (orderBy) {
    case 'asc':
      return <ChevronDown />;
    case 'desc':
      return <ChevronUp />;
    default:
      return null;
  }
};

export default function Cell({
  content,
  header,
  width,
  onSort,
  sortable,
  accessor,
  currentKey,
  orderBy,
}) {
  const onClick = () => {
    if (currentKey) {
      if (orderBy === 'asc') {
        onSort('', '');
      } else {
        onSort(accessor, 'asc');
      }
    } else {
      onSort(accessor, 'desc');
    }
  };

  const cellMarkup = header ? (
    <th
      className="Cell Cell-Header"
      width={width || '100px'}
      onClick={sortable ? onClick : () => {}}
      {...sortable && { style: { cursor: 'pointer' } }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="Cell-Header-Content">
          <span>{content}</span>
          {sortable && renderIcon(orderBy)}
        </div>
      </div>
    </th>
  ) : (
    <td className="Cell Cell-Body" width={width || '100px'}>
      {content}
    </td>
  );

  return cellMarkup;
}
