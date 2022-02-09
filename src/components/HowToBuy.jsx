import React from "react";
import logo from "./images/logo.svg";
import { pancakeswap, binance, wallat, rabbit, updown } from "./";

const HowToBuy = () => {
  return (
    <div className="w-full">
      <div className="md:text-8xl text-6xl text-center text-yellow-500 code-font my-2 font-bold">
        How to Buy
      </div>
      <div className="flex justify-center items-center mt-8 md:flex-row flex-col">
        <img src={logo} alt="logo" width="80px" />
        <div className="text-white ml-7 md:mt-0 mt-6 md:text-left text-center">
          <div className="text-yellow-500 text-2xl font-bold">
            Token Contract
          </div>
          <div className="md:text-xl text-sm">Comming Soon</div>
        </div>
      </div>
      <div className="flex justify-center items-center md:flex-row flex-col w-full mt-16">
        <div className="flex justify-center items-start flex-col md:w-5/12 md:pl-10">
          <div className="text-yellow-500 text-4xl font-bold md:text-left text-center">
            Buy on PancakeSwap
          </div>

          <div className="flex justify-center md:items-start items-center mt-8 md:flex-row flex-col">
            <img src={binance} alt="logo" width="60px" />
            <div className="text-white md:ml-7 md:mt-0 mt-6 md:text-left text-center">
              <div className="text-yellow-500 text-2xl">
                Step 1: Get some BNB (BSC)
              </div>
              <div className="md:text-base text-sm p-4">
                If You don't have some BNB (BSC) in your wallet you can buy and
                transfer BNB (BSC) directly from exchanges/wallets like Binance,
                Crypto.com, TrustWallet or SafePal. You can also use a
                cross-chain swap like ChangeNow.io.
              </div>
            </div>
          </div>
          <div className="flex justify-center md:items-start items-center mt-8 md:flex-row flex-col">
            <img src={wallat} alt="logo" width="60px" />
            <div className="text-white md:ml-7 md:mt-0 mt-6 md:text-left text-center">
              <div className="text-yellow-500 text-2xl">
                Step 2: Connect Wallet
              </div>
              <div className="md:text-base text-sm p-4">
                Connect your wallet to PancakeSwap by following these
                Instructions. Import/Accept $Statship-x Token contract. You may
                opt to download MetaMask mobile app or install the Desktop
                extension for Chrome or FireFox browser, and create or import an
                existing wallet. Make sure to activate the BSC network if not
                already configured.
              </div>
            </div>
          </div>
          <div className="flex justify-center md:items-start items-center mt-8 md:flex-row flex-col">
            <img src={rabbit} alt="logo" width="60px" />
            <div className="text-white md:ml-7 md:mt-0 mt-6 md:text-left text-center">
              <div className="text-yellow-500 text-2xl">
                Step 3: Set Slippage and BNB (BSC)
              </div>
              <div className="md:text-base text-sm p-4">
                In the Slippage field, enter a value starting at 11%.{" "}
                <span className="text-red-500">
                  **Important Slippage Notice**
                </span>{" "}
                For the BNB field, enter the amount of BNB (BSC) you would like
                to swap.
              </div>
            </div>
          </div>
          <div className="flex justify-center md:items-start items-center mt-8 md:flex-row flex-col">
            <img src={updown} alt="logo" width="60px" />
            <div className="text-white md:ml-7 md:mt-0 mt-6 md:text-left text-center">
              <div className="text-yellow-500 text-2xl">
                Step 4: Swap Tokens
              </div>
              <div className="md:text-base text-sm p-4">
                Verify all fields to make sure everything is as desired and
                simply click the Swap button. Once completed, it may takes few
                minutes for the $Starship-x token to display in your wallet.
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col md:w-1/2 md:mt-0 mt-10">
          <img src={pancakeswap} alt="logo" className="w-9/12" />
          <div className="text-yellow-500 text-2xl font-bold mt-10 border-2 border-yellow-500 p-5 rounded-2xl">
            Buy Starship-X
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
