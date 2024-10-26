import { Address, beginCell, Cell, Contract, contractAddress, ContractProvider, Sender, SendMode, toNano } from '@ton/core';

export class DragoToken implements Contract {
    constructor(
        readonly address: Address,
        readonly init?: { code: Cell; data: Cell }
    ) {}

    static createFromConfig(code: Cell) {
        const data = beginCell()
            .storeUint(0, 64)  // total_supply
            .storeUint(0, 64)  // token_balance
            .endCell();
        const init = { code, data };
        return new DragoToken(contractAddress(0, init), init);
    }

    async sendDeploy(provider: ContractProvider, via: Sender) {
        await provider.internal(via, {
            value: toNano('0.1'),
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body: beginCell().endCell(),
        });
    }

    async sendBuyTokens(provider: ContractProvider, via: Sender, value = toNano('0.01')) {
        await provider.internal(via, {
            value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body: beginCell().endCell(),
        });
    }

    async getTokenBalance(provider: ContractProvider) {
        const result = await provider.get('get_token_balance', []);
        return result.stack.readBigNumber();
    }

    async getTotalSupply(provider: ContractProvider) {
        const result = await provider.get('get_total_supply', []);
        return result.stack.readBigNumber();
    }

    async getTokenPrice(provider: ContractProvider) {
        const result = await provider.get('get_token_price', []);
        return result.stack.readBigNumber();
    }
}