import React from 'react';

import './Table.css';

const getClass = orderBy => {
  switch (orderBy) {
    case 'asc':
      return 'Down';
    case 'desc':
      return 'Up';
    default:
      return '';
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
      className={`Cell Cell-Header ${currentKey && getClass(orderBy)}`}
      width={width || '100px'}
      onClick={sortable ? onClick : () => {}}
      {...sortable && { style: { cursor: 'pointer' } }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="Cell-Header-Content">
          <span>{content}</span>
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
