import React from 'react';
import { IBaseProdItem } from '../pages';

interface IProductItemProps {
  prodItem: IBaseProdItem;
}

export const ProductItem: React.FunctionComponent<IProductItemProps> = ({prodItem}) => {
  return (
    <section className='tt-shoping-prods-wrap-item'>
      <section className='tt-shoping-prods-item'>
        <img className='tt-shoping-prods-url' src={prodItem.url} alt={prodItem.name} />
        <p className='tt-shoping-prods-name'>{prodItem.name}</p>
        {/* <div className='tt-shoping-prods-rating'></div> */}
        {/* <div className='tt-shoping-prods-option'></div> */}
        <div className='tt-shoping-prods-btn'>
          <button>Chọn ngay</button>
        </div>
      </section>
    </section>
  );
};