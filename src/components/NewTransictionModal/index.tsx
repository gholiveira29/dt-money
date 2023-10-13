import * as Dialog from '@radix-ui/react-dialog';
import {
    CloseButton,
    Content,
    Overlay,
    TransactionButton,
    TransactionType,
} from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

export function NewTransactionModal() {
    return (
        <>
            <Dialog.Portal>
                <Overlay />
                <Content>
                    <Dialog.Title>Nova transação</Dialog.Title>
                    <CloseButton>
                        <X size={24} />
                    </CloseButton>
                    <form action="">
                        <input type="text" placeholder="Descrição" />
                        <input type="text" placeholder="Preço" />
                        <input type="text" placeholder="Categoria" />

                        <TransactionType>
                            <TransactionButton varient="income" value="income">
                                <ArrowCircleUp size={24} />
                                Entreda
                            </TransactionButton>
                            <TransactionButton
                                varient="outcome"
                                value="outcome"
                            >
                                <ArrowCircleDown size={24} />
                                Saida
                            </TransactionButton>
                        </TransactionType>

                        <button type="submit">Cadastrar</button>
                    </form>
                </Content>
            </Dialog.Portal>
        </>
    );
}
