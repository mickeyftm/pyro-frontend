import {customAlphabet} from 'nanoid'
import {getReferralLinkForWallet, Referral} from './mongodb'

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 8)

export const generateReferral = () => {
	return nanoid();
}

export const decodeWallet = (encodedWalletAddress: string) => {
	return atob(encodedWalletAddress);
}

export const createReferral = async (walletAddress: string) => {
	console.log("checking if I have to create a new ref")
	try {
		// Check if a referral link already exists for this wallet
		let referral = await getReferralLinkForWallet(walletAddress);
		if (referral === null) {
			const refCode = await generateReferral();
			referral = new Referral({
				referralCode: refCode,
				wallet: walletAddress,
				fullUrl: `https://pyroswap.com/?ref=${refCode}`,
				clickCount: 0
			});
			return referral.save();
		}
		return referral;
	} catch (error) {
		throw new Error(error)
	}

}
