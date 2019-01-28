import React, { Component } from 'react';
import {
  Spinner, Table, Container, Segment,
} from '../../../components';
import { Colors, Filter, Image } from '../components';
import Modal from '../Modal';

const formatNumber = (value: Number) => Number((value * 100) / 5).toFixed(2);

type Props = {
  products: Array<{}>,
  tags: Array<{}>,
  defaultFilters: any,
  productName: String,
  imageLink: String,
  modalVisible: Boolean,
  handleFilter: () => {},
  handleClickImage: () => {},
  handleRowClick: () => {},
  changeModalVisible: () => {},
};
class List extends Component<Props> {
  state = {
    columns: [
      {
        header: '#',
        accessor: 'image_link',
        renderCell: d => (
          <Image
            src={d.image_link}
            name={d.name}
            onClick={e => {
              const { handleClickImage } = this.props;
              handleClickImage(d.name, d.image_link);
              e.stopPropagation();
            }}
          />
        ),
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
    ],
  };

  render() {
    const {
      products,
      tags,
      defaultFilters,
      productName,
      imageLink,
      modalVisible,
      handleFilter,
      handleRowClick,
      changeModalVisible,
    } = this.props;

    const { columns } = this.state;

    return (
      <Container>
        <Spinner />
        <Modal
          product={productName}
          image={imageLink}
          onClose={() => {
            changeModalVisible(false);
          }}
          open={modalVisible}
        />
        <Filter tags={tags} onSearch={handleFilter} defaultFilters={defaultFilters} />
        <Segment style={{ maxHeight: 'calc(100vh - 40px)' }}>
          <Table columns={columns} items={products} onRowClick={handleRowClick} />
        </Segment>
      </Container>
    );
  }
}

export default List;
