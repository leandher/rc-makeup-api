import React, { Component } from 'react';

import { Spinner, Container, Segment } from '../../../components';
import { Colors } from '../components';

import './Detail.css';

const formatNumber = (value: Number) => Number((value * 100) / 5).toFixed(2);

type Props = {
  product: any,
};
class Detail extends Component<Props> {
  state = {};

  isEmpty = obj => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };

  renderProduct = () => {
    const { product } = this.props;
    const {
      name,
      image_link,
      brand,
      price_sign,
      price,
      rating,
      product_colors,
      tag_list,
      description,
    } = product;

    return (
      <Segment>
        <h1 className="Detail-Name">{name}</h1>
        <hr />
        <div className="Main-Details">
          <img src={image_link} alt={name} className="Detail-Image" />
          <div className="Details">
            <h4>
              <strong>Brand: </strong>
              {brand}
            </h4>
            <h4>
              <strong>Description: </strong>
              {description}
            </h4>
            <h4>
              <strong>Price: </strong>
              <span>{`${price_sign || '$'} ${price}`}</span>
            </h4>
            <h4>
              <strong>Rating: </strong>
              <span>{formatNumber(rating) || 0}</span>
            </h4>
            <h4 style={{ marginBottom: 5 }}>
              <strong>Colors: </strong>
            </h4>
            <Colors colors={product_colors} />
          </div>
        </div>
        <hr />
        <div className="Details">
          <h4>
            <strong>Tags: </strong>
            <ul>
              {tag_list.map(tag => (
                <li>{tag}</li>
              ))}
            </ul>
          </h4>
        </div>
      </Segment>
    );
  };

  render() {
    const { product } = this.props;
    return (
      <Container style={{ minHeight: '100vh' }}>
        <Spinner />
        {!this.isEmpty(product) && this.renderProduct()}
      </Container>
    );
  }
}

export default Detail;
