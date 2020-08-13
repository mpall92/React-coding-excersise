import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "antd";
import {Link} from 'react-router-dom'
import MenuData from "./menu-data.json";
import "./index.scss";


const ItemDetail = () => {
  console.log('item detail', MenuData)
  const [itemDetail, setitemDetail] = useState(JSON.parse(localStorage.getItem("itemData")) | null)

  useEffect(() => {
   setitemDetail(JSON.parse(localStorage.getItem("itemData")))
   }, []);

  return (
      <div className="item-detail">
        {itemDetail &&
            <Row type="flex" justify="space-around" gutter={24} className="detail-container">
                <Col span={12}>
                <img src={itemDetail.imageUrl} alt="detail-image"/>
                </Col>
                <Col span={12}>
                <h1>{itemDetail.name}</h1>
                <input type="checkbox" 
                id="available" 
                name="available" 
                value={itemDetail.available}
                />
                <label for={itemDetail.available}>is available</label>
                <h2>Description</h2>
                <p>{itemDetail.description}</p>
                <p>Price:<span> &nbsp; Rs.{itemDetail.price}</span></p>
                <Link to={{pathname: `/items`}}>
                <Button type="primary">Go To List</Button>
                </Link>
                
                </Col>
            </Row>
}  
      </div>
  );
};

export default ItemDetail;
