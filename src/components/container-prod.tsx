import React from 'react';
import { IBaseProd } from '../pages';
import { ProductItem } from '.';

interface IContainerProductProps {
  prod: IBaseProd;
}

export const ContainerProduct: React.FunctionComponent<IContainerProductProps> = ({prod}) => {
  return (
    <section className='tt-shoping-prods-wrapper' id={'tt-type-' + prod.type.toLowerCase()}>
      <h4 className='tt-shoping-prods-title'>{prod.name}</h4>
      <main className='tt-shoping-prods-container'>
        {
          prod.products.map(child => <ProductItem key={child.id} prodItem={child}></ProductItem>)
        }
      </main>
    </section>
  );
}