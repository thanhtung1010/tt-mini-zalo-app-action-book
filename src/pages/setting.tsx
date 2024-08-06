import React from 'react';
import { Avatar, Icon, SettingList, SettingListItem } from '../components';

export const SettingPage: React.FunctionComponent = () => {
  return (
    <main className='tt-page tt-setting'>
      <section className="tt-setting-container tt-setting-user">
        <Avatar />
      </section>
      <section className="tt-setting-container">
        <SettingList>
          <SettingListItem suffix={<Icon icon="arrow-right" width="20px" />}>{'Profile'}</SettingListItem>
          <SettingListItem suffix={<Icon icon="arrow-right" width="20px" />}>{'Saved Address'}</SettingListItem>
          <SettingListItem suffix={<Icon icon="arrow-right" width="20px" />}>{'Payment Methods'}</SettingListItem>
          <SettingListItem suffix={<Icon icon="arrow-right" width="20px" />}>{'Language'}</SettingListItem>
        </SettingList>
      </section>
      <section className="tt-setting-container">
        <SettingList>
          <SettingListItem suffix={<Icon icon="arrow-right" width="20px" />}>{'Setting'}</SettingListItem>
          <SettingListItem suffix={<Icon icon="arrow-right" width="20px" />}>{'Account and Security'}</SettingListItem>
          <SettingListItem suffix={<Icon icon="arrow-right" width="20px" />}>{'Privacy'}</SettingListItem>
        </SettingList>
      </section>
    </main>
  );
}