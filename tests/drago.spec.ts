import { Blockchain, SandboxContract, TreasuryContract } from '@ton-community/sandbox';
import { compile } from '@ton-community/blueprint';
import { toNano } from '@ton/core';
import { DragoToken } from '../wrappers/DragoToken';
import '@ton-community/test-utils';

describe('DragoToken', () => {
    let blockchain: Blockchain;
    let dragoToken: SandboxContract<DragoToken>;
    let deployer: SandboxContract<TreasuryContract>;

    beforeEach(async () => {
        // Initialize blockchain
        blockchain = await Blockchain.create();
        deployer = await blockchain.treasury('deployer');
        
        // Deploy contract
        const code = await compile('DragoToken');
        dragoToken = blockchain.openContract(DragoToken.createFromConfig(code));

        const deployResult = await dragoToken.sendDeploy(deployer.getSender());
        
        // Verify deployment
        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: dragoToken.address,
            success: true
        });
    });

    it('should initialize with 1,000,000 tokens', async () => {
        const supply = await dragoToken.getTotalSupply();
        expect(Number(supply)).toBe(1000000);
        
        const balance = await dragoToken.getTokenBalance();
        expect(Number(balance)).toBe(1000000);
    });

    it('should sell one token for 0.01 TON', async () => {
        // Setup buyer
        const buyer = await blockchain.treasury('buyer');
        const initialBalance = await dragoToken.getTokenBalance();
        
        // Buy token
        const buyResult = await dragoToken.sendBuyTokens(buyer.getSender());
        
        // Verify transaction
        expect(buyResult.transactions).toHaveTransaction({
            from: buyer.address,
            to: dragoToken.address,
            success: true
        });
        
        // Check token balance decreased
        const finalBalance = await dragoToken.getTokenBalance();
        expect(Number(finalBalance)).toBe(Number(initialBalance) - 1);
    });

    it('should fail if sent amount is less than token price', async () => {
        const buyer = await blockchain.treasury('buyer');
        
        // Try to buy with insufficient funds
        const buyResult = await dragoToken.sendBuyTokens(buyer.getSender(), toNano('0.005'));
        
        // Verify transaction failed
        expect(buyResult.transactions).toHaveTransaction({
            from: buyer.address,
            to: dragoToken.address,
            success: false,
            exitCode: 101 // ERROR_INSUFFICIENT_FUNDS
        });
    });
});