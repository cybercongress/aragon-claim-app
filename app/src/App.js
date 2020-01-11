import React from 'react';
import styled from 'styled-components';
import { useAragonApi } from '@aragon/api-react';
import { Main, Text, Info } from '@aragon/ui';

import ClaimTable from './containers/ClaimTable';
import ClaimHistoryTable from './containers/ClaimHistoryTable';
import CreateClaim from './containers/CreateClaim';

function App() {
  const { appState } = useAragonApi();
  const { isSyncing } = appState;

  return (
    <Main>
      <AppContainer>
        <Header>
          <Text size="xlarge">Vesting application</Text>
          <ClaimButton />
        </Header>
        {isSyncing && <Syncing />}
        <Intro title="Information  ">After obtaining GOLs during Test of Thrones and Test~Auction you need to vest you GOL tokens until the end of Auction. In this case you will recieve 1 EUL for each vested GOL.</Intro>  
        <ClaimTable />
        <ClaimHistory />
      </AppContainer>
    </Main>
  );
}

const AppContainer = styled.div`
  padding: 0 60px;
`;

const Syncing = styled.div.attrs({ children: 'Syncing data…' })`
  position: absolute;
  top: 15px;
  right: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 30px 0;
`;

const Intro = styled(Info)`
  margin-bottom: 40px;
`;

const ClaimButton = styled(CreateClaim)`
  font-size: 16px;
  padding: 10px 40px;
`;

const ClaimHistory = styled(ClaimHistoryTable)`
  margin-top: 40px;
`;

export default App;
