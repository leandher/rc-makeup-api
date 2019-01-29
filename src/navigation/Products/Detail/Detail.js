import React, { Component } from 'react';
import { ArrowLeft } from 'react-feather';

import { Spinner, Container, Segment } from '../../../components';
import { Colors } from '../components';

import styles from './Detail.module.css';

const formatNumber = (value: Number) => Number((value * 100) / 5).toFixed(2);

type Props = {
  product: any,
  history: any,
};
class Detail extends Component<Props> {
  state = {};

  isEmpty = obj => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };

  goBack = () => {
    const { history } = this.props;

    history.goBack();
  };

  renderProduct = () => {
    const { product, history } = this.props;
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
        <h1 className={styles.Detail_Name}>{name}</h1>
        <hr />
        <div className={styles.Main_Details}>
          <img src={image_link} alt={name} className={styles.Detail_Image} />
          <div className={styles.Details}>
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
        {tag_list.map(tag => (
          <span
            className={styles.Tag}
            key={tag}
            role="presentation"
            onClick={() => {
              history.push(`/list/product_tags=${tag}`);
            }}
          >
            {tag}
          </span>
        ))}

        <div role="presentation" className={styles.GoBack} onClick={this.goBack}>
          <ArrowLeft />
          <span style={{ margin: '0 10px' }}>Go back</span>
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
