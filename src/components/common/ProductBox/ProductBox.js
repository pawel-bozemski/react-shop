/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ProductBox.module.scss';

const Component = ({
  className, title, image, price,
}) => (
  <div className={clsx(className, styles.root)}>
    <Card className={styles.card}>
      <div>
        <img src={image} alt="alternative" className={styles.image} />
      </div>
      <CardActionArea className={styles.actionArea}>
        <CardContent className={styles.content}>
          <div className={styles.title}>
            {title}
          </div>
          <div className={styles.price}>
            $ {price}
          </div>
        </CardContent>

        <CardActions className={styles.actions}>
          <Button color="primary" variant="contained">More</Button>
          <Button color="primary" variant="contained">Add to cart</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ProductBox,
  // Container as ProductBox,
  Component as ProductBoxComponent,
};