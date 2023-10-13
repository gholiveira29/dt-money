import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default';
import { GlobalStyled } from './styles/global';
import { Transaction } from './pages/Transactions';
import { TransactionsProvider } from './contexts/TransactionsContext';

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyled />

            <TransactionsProvider>
                <Transaction />
            </TransactionsProvider>
        </ThemeProvider>
    );
}

export default App;
