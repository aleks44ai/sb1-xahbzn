import { toNano } from '@ton/core';
import { DragoToken } from '../wrappers/DragoToken';
import { compile, NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const dragoToken = provider.open(DragoToken.createFromConfig(await compile('DragoToken')));

    await dragoToken.sendDeploy(provider.sender(), toNano('0.05'));
    
    console.log('DRAGO Token contract deployed at:', dragoToken.address);
}