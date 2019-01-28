import React, { Component } from 'react';
import {
  Spinner, Table, Container, Segment,
} from '../../../components';
import { Colors, Filter, Image } from './components';

const formatNumber = (value: Number) => Number((value * 100) / 5).toFixed(2);

const columns = [
  {
    header: '#',
    accessor: 'image_link',
    renderCell: d => <Image src={d.image_link} name={d.name} />,
    sortable: false,
  },
  {
    header: 'Name',
    accessor: 'name',
    sortable: false,
  },
  {
    header: 'Price',
    accessor: 'price',
    renderCell: d => <span>{`${d.price_sign || '$'} ${d.price}`}</span>,
    sortable: false,
  },
  {
    header: 'Rating',
    accessor: 'rating',
    /* The original rating is a scale from null to 5, so I return 0 if null
    and (rating * 100) / 5 to put in a scale from 0 to 100 as the test requires */
    renderCell: d => <span>{formatNumber(d.rating) || 0}</span>,
    sortable: true,
  },
  {
    header: 'Colors',
    accessor: 'product_colors',
    renderCell: d => <Colors colors={d.product_colors} />,
    sortable: false,
  },
];

type Props = {
  products: Array<{}>,
  tags: Array<{}>,
  defaultFilters: any,
  handleFilter: () => {},
};
class List extends Component<Props> {
  state = {};

  render() {
    const {
      products, tags, handleFilter, defaultFilters,
    } = this.props;

    return (
      <Container>
        <Spinner />
        <Filter tags={tags} onSearch={handleFilter} defaultFilters={defaultFilters} />
        <Segment style={{ maxHeight: 'calc(100vh - 40px)' }}>
          <Table columns={columns} items={products} />
        </Segment>
      </Container>
    );
  }
}

export default List;