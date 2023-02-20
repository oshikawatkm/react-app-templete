import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import timestampToTime from '../../utils/timeFormater'

const OrderItem = ({
  order: { id, tokenId, rewardWei, format, createdAt, updatedAt },
  index
}) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{rewardWei}</td>
      <td>Mike Doe</td>
      <td>{format}</td>
      <td>{timestampToTime(createdAt)}</td>
      <td>{timestampToTime(updatedAt)}</td>
      <td><Link to={"/orders/"+id} className="btn btn-primary"><i className="fas fa-plus"></i> 詳細</Link></td>
    </tr>
  );
};

OrderItem.defaultProps = {
  showActions: true
};


OrderItem.propTypes = {
  order: PropTypes.object.isRequired,
  showActions: PropTypes.bool
}


export default OrderItem;