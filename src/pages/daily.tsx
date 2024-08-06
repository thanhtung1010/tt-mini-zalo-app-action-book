import React from 'react';
import { ContainerProduct, Icon, TagType } from '../components';

export const DailyPage: React.FunctionComponent = () => {

  const goToProductType = (type: string) => {
    const htmlTypeId = 'tt-type-' + type.toLowerCase();
    const elm = document.getElementById(htmlTypeId);
    if (elm) {
      elm.scrollIntoView();
    }
  }
  return (
    <main className='tt-page tt-daily'>
      daily
      {/* <section className='tt-section-container tt-shoping-types'>
        {
          types.map(type => <TagType key={type.id} onClick={() => goToProductType(type.name)} suffix={type.type.toLowerCase()} iconWidth='20px'>{type.name}</TagType>)
        }
      </section>

      <section className='tt-section-container tt-shoping-prods'>
        {
          prods.map(prod => <ContainerProduct key={prod.id} prod={prod}></ContainerProduct>)
        }
      </section>

      <button className='tt-shoping-cart'>
        <Icon icon='cart' width='20px'></Icon>
      </button> */}
    </main>
  );
}