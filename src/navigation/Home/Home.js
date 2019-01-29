import React, { Component } from 'react';

import { Container, Segment } from '../../components';
import style from './Home.module.css';

class Home extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Segment style={{ height: 'calc(100vh - 80px)' }}>
          <h1 className={style.title}>Makeup Api</h1>
          <div className={style.header_grid}>
            <div className={style.photo}>
              <img
                src="http://makeup-api.herokuapp.com/assets/brushes-6d2ab84631ecd47ced4fa07c47eb37521eb61c5a525965dafaf308f21338aa44.png"
                alt="Brushes"
              />
            </div>

            <div className={(style.photo, style.photo_lips)}>
              <img
                src="http://makeup-api.herokuapp.com/assets/lips-c35ec4a3350ec779c6bf6a785981ad9ef2e21bd9fe26a2be1c766d56edb2e11f.png"
                alt="Lips"
              />
            </div>

            <div className={style.photo}>
              <img
                src="http://makeup-api.herokuapp.com/assets/nail-polish-4c7ee1a5f7a5cbaff9757c3bcfa4f6e89d7a6f2ffc49d267e04e010ba94cfd7c.png"
                alt="Nail polish"
              />
            </div>

            <div className={style.photo}>
              <img
                src="http://makeup-api.herokuapp.com/assets/single-pot-4ce398e7d8c527ef248ace7a783cc52fd583375a25a7dcdb7b16f7a0958ccb17.png"
                alt="Single pot"
              />
            </div>

            <div className={style.photo}>
              <img
                src="http://makeup-api.herokuapp.com/assets/eyeshadow-18fa4bed267bec6a67506150d9574259d0dcc67700e69de4ba720d9afe8204a2.png"
                alt="Eyeshadow"
              />
            </div>
          </div>
        </Segment>
      </Container>
    );
  }
}

export default Home;
