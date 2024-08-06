import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { SettingPage, DailyPage, DemoProdsPage, UsedProdsExpPage } from '.';
import ZaloPageLayout from '../components/zalo-page-layout';

const MyApp: React.FunctionComponent = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <ZaloPageLayout>
          <Routes>
            <Route path="/daily" element={<DailyPage></DailyPage>}></Route>
            <Route path="/demo-prods" element={<DemoProdsPage></DemoProdsPage>}></Route>
            <Route path="/used-prods-exp" element={<UsedProdsExpPage></UsedProdsExpPage>}></Route>
            <Route path="/setting" element={<SettingPage></SettingPage>}></Route>
            <Route
              path="*"
              element={<Navigate to="/daily" replace={true} />}
            />
          </Routes>
        </ZaloPageLayout>
      </BrowserRouter>
    </RecoilRoot>
  );
}
export default MyApp;