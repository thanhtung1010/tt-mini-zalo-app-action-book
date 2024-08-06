import React, { ReactNode } from 'react';
import { Button, Input } from 'zmp-ui';

interface ZaloSearchPageLayoutProps {
  prods: ReactNode;
  customFilter?: ReactNode;
  onChangeMainValueCB(): void;
  mainPlaceHolder: string;
  showExpand?: boolean;
}

export const ZaloSearchPageLayout: React.FunctionComponent<ZaloSearchPageLayoutProps> = ({
  prods,
  customFilter,
  onChangeMainValueCB,
  mainPlaceHolder,
  showExpand,
}) => {
  const onChangeMainValue = () => {
    onChangeMainValueCB();
  }

  return (
    <section className='tt-spl'>
      <section className="tt-spl-filter">
        <Input onChange={() => onChangeMainValue()} placeholder={mainPlaceHolder}></Input>
        <Button>Tìm kiếm</Button>
      </section>
      {
        showExpand
        ? <section className="tt-spl-custom-filter">{customFilter}</section>
        : null
      }
      <section className="tt-spl-prods">{prods}</section>
    </section>
  );
}