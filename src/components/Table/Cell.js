import React from 'react';

import styles from './Table.module.css';

const getClass = orderBy => {
  switch (orderBy) {
    case 'asc':
      return { boxShadow: 'inset 0 3px 0 0 rgba(0, 0, 0, 0.6)' };
    case 'desc':
      return { boxShadow: 'inset 0 -3px 0 0 rgba(0, 0, 0, 0.6)' };
    default:
      return {};
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
      className={[styles.Cell, styles.Cell_Header].join(' ')}
      width={width || '100px'}
      onClick={sortable ? onClick : () => {}}
      {...sortable && { style: { cursor: 'pointer', ...(currentKey && getClass(orderBy)) } }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={styles.Cell_Header_Content}>
          <span>{content}</span>
        </div>
      </div>
    </th>
  ) : (
    <td className={[styles.Cell, styles.Cell_Body].join(' ')} width={width || '100px'}>
      {content}
    </td>
  );

  return cellMarkup;
}
