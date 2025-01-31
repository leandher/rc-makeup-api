import React, { Component, ReactElement } from 'react';
import PaginationComponent from 'react-js-pagination';

import Cell from './Cell';
import styles from './Table.module.css';
import './pagination.css';

type Props = {
  hidePagination: Boolean,
  items: Array<{}>,
  columns: Array<{
    header: String,
    accessor: String,
    renderCell: ReactElement | String | Function,
    sortable: Boolean,
  }>,
  onRowClick: () => {},
};
class Table extends Component<Props> {
  state = {
    activePage: 1,
    sortKey: '',
    orderBy: '',
  };

  handlePageChange = currentPage => {
    this.setState({ activePage: currentPage });
  };

  handleSort = (sortKey, orderBy) => {
    this.setState({ sortKey, orderBy });
  };

  handlePaginationItems = items => {
    const { hidePagination } = this.props;

    if (hidePagination) return items;

    const { activePage } = this.state;

    const offset = (activePage - 1) * 10;
    const currentItems = items.slice(offset, offset + 10);

    return currentItems;
  };

  handleSortItems = items => {
    const { sortKey, orderBy } = this.state;

    switch (orderBy) {
      case 'desc':
        return items.sort((a, b) => (a[sortKey] <= b[sortKey] ? 1 : -1));
      case 'asc':
        return items.sort((a, b) => (a[sortKey] <= b[sortKey] ? -1 : 1));
      default:
        return items.sort((a, b) => (a.id <= b.id ? -1 : 1));
    }
  };

  renderPagination() {
    const { items } = this.props;
    const { activePage } = this.state;

    return (
      <div className={styles.Pagination_Container}>
        <PaginationComponent
          activePage={activePage}
          totalItemsCount={items.length}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }

  renderHeadingRow = (cell, cellIndex) => {
    const { sortKey, orderBy } = this.state;

    return (
      <Cell
        key={`heading-${cellIndex}`}
        content={cell.header}
        {...cell}
        onSort={this.handleSort}
        orderBy={orderBy}
        currentKey={sortKey === cell.accessor}
        header
      />
    );
  };

  renderRow = (row, rowIndex) => {
    const { columns, onRowClick } = this.props;

    return (
      <tr
        key={`row-${rowIndex}`}
        className={styles.Row}
        role="presentation"
        {...onRowClick && {
          onClick: () => {
            onRowClick(row);
          },
        }}
        style={onRowClick ? { cursor: 'pointer' } : {}}
      >
        {columns.map(cell => {
          if (cell.renderCell) {
            switch (typeof cell.renderCell) {
              case 'function':
                return (
                  <Cell key={cell.accessor} content={cell.renderCell(row)} width={cell.width} />
                );
              case 'string':
              default:
                return <Cell key={cell.accessor} content={cell.accessor} width={cell.width} />;
            }
          } else {
            return <Cell key={cell.accessor} content={row[cell.accessor]} width={cell.width} />;
          }
        })}
      </tr>
    );
  };

  render() {
    const { columns, items, hidePagination } = this.props;

    const theadContent = (
      <tr key="heading" className={styles.Row}>
        {columns.map(this.renderHeadingRow)}
      </tr>
    );

    const currentItems = this.handlePaginationItems(this.handleSortItems(items));

    const tbodyContent = currentItems.map(this.renderRow);

    return (
      <div className={styles.Wrapper}>
        <div className={styles.Table_Container}>
          <table className={styles.Table}>
            <thead>{theadContent}</thead>
            <tbody>{tbodyContent}</tbody>
          </table>
        </div>
        {hidePagination || this.renderPagination()}
      </div>
    );
  }
}

Table.defaultProps = {};

export default Table;
