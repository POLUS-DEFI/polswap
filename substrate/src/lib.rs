#![cfg_attr(not(feature = "std"), no_std)]

use codec::{Encode, Decode};
use sp_runtime::{ModuleId};
use sp_runtime::traits::{
    Member, One, Zero, AtLeast32Bit, MaybeSerializeDeserialize, CheckedAdd,
    AccountIdConversion, SaturatedConversion,
};

use frame_support::{decl_module, decl_storage, decl_event, decl_error, dispatch,
                    ensure, Parameter,
};
use system::ensure_signed;

use pallet_fungible::{self as fungible};


#[derive(Clone, Eq, PartialEq, Encode, Decode)]
#[cfg_attr(feature = "std", derive(Debug))]
pub struct Swap<AccountId, TokenId> {
    tokenA_id: TokenId,
    tokenB_id: TokenId,

    // This swap account.
    account: AccountId,
}

/// The swap's module id, used for deriving sovereign account IDs.
const MODULE_ID: ModuleId = ModuleId(*b"mtg/swap");

pub trait Trait: system::Trait + token::Trait {
    /// The overarching event type.
    type Event: From<Event<Self>> + Into<<Self as system::Trait>::Event>;
}

// Storage items for the Swap pallet.
decl_storage! {
	trait Store for Module<T: Trait> as SwapStorage {
		TokenToSwap get(token_to_swap): map hasher(opaque_blake2_256) T::TokenId => T::SwapId;
		Swaps get(swaps): map hasher(opaque_blake2_256) T::SwapId => Option<Swap<T::AccountId, T::TokenId>>;
		SwapCount get(swap_count): T::SwapId;
	}
}

// Events for the Swap.
decl_event!(
	pub enum Event<T> 
	where
		AccountId = <T as system::Trait>::AccountId,

		Id = <T as Trait>::SwapId,
		TokenBalance = <T as fungible::Trait>::TokenBalance
	{
		/// Logs (SwapId, SwapAccount)
		SwapCreated(Id, AccountId),
		/// Logs (SwapId, x, x, x)
		LiquidityAdded(Id, AccountId, TokenBalance, TokenBalance),
		/// Logs (SwapId, x, x, x)
		LiquidityRemoved(Id, AccountId, TokenBalance, TokenBalance),

		TokenPurchase(),
	}
);

// Errors for the Swap pallet.
decl_error! {
	pub enum Error for Module<T: Trait> {
		/// Deadline hit.
		Deadline,
		/// Zero tokens supplied.
		ZeroTokens,
		/// Zero reserve supplied.
		ZeroAmount,
		/// No Swap exists at this Id.
		NoSwapExists,
		/// A Swap already exists for a particular TokenId.
		SwapAlreadyExists,
		/// Requested zero liquidity.
		RequestedZeroLiquidity,
		/// Would add too many tokens to liquidity.
		TooManyTokens,
		/// Not enough liquidity created.
		TooLowLiquidity,

		/// No tokens are being swapped.
		NoTokensSwapped,
		/// Trying to burn zero shares.
		BurnZeroShares,
		/// No liquidity in the swap.
		NoLiquidity,

		/// Not enough tokens will be returned.
		NotEnoughTokens,

		/// Swap would cost too much in tokens.
		TooExpensiveTokens,
	}
}

decl_module! {
	/// The module declaration.
	pub struct Module<T: Trait> for enum Call where origin: T::Origin {

		type Error = Error<T>;

		fn deposit_event() = default;
		
		pub fn create_swap(origin,
			tokenA_id: T::TokenId,
			tokenB_id: T::TokenId,
		) -> dispatch::DispatchResult
		{
			let sender = ensure_signed(origin)?;
			ensure!(!TokenToSwap::<T>::contains_key(token_id), Error::<T>::SwapAlreadyExists);

			let swap_id = Self::swap_count();
			let next_id = swap_id.checked_add(&One::one())
				.ok_or("Overflow")?;

			let account: T::AccountId = MODULE_ID.into_sub_account(swap_token_id);

			let new_swap = Swap {
				tokenA_id: tokenA_id,
				tokenB_id: tokenB_id,
				account: account.clone(),
			};

			<TokenToSwap<T>>::insert(tokenA_id, swap_id);
			<TokenToSwap<T>>::insert(tokenB_id, swap_id);
			<Swaps<T>>::insert(swap_id, new_swap);
			<SwapCount<T>>::put(next_id);

			Self::deposit_event(RawEvent::SwapCreated(swap_id, account));

			Ok(())
		}
        
        pub fn add_liquidity(origin,
			swap_id: T::SwapId,				// ID of swap to access.
			amountA: T::TokenBalance,
			amountB: T::TokenBalance,
            min_liquidity: T::TokenBalance,	// Min amount of swap shares to create.
            deadline: T::BlockNumber,		// When to invalidate the transaction.
        ) -> dispatch::DispatchResult
        {
			// Deadline is to prevent front-running (more of a problem on Ethereum).
			let now = system::Module::<T>::block_number();
			ensure!(deadline > now, Error::<T>::Deadline);

			let who = ensure_signed(origin.clone())?;


			if let Some(swap) = Self::swaps(swap_id) {
				//TODO
				Ok(())
			} else {
				Err(Error::<T>::NoSwapExists)?
			}
		}
		
		pub fn remove_liquidity(origin,
			swap_id: T::SwapId,
			shares_to_burn: T::TokenBalance, 
			min_tokenA: T::TokenBalance,		// Minimum tokensA to withdraw.
			min_tokenB: T::TokenBalance,		// Minimum tokensB to withdraw.
			deadline: T::BlockNumber,
		) -> dispatch::DispatchResult
		{
			let now = system::Module::<T>::block_number();
			ensure!(deadline > now, Error::<T>::Deadline);
			let who = ensure_signed(origin.clone())?;

			ensure!(shares_to_burn > Zero::zero(), Error::<T>::BurnZeroShares);
			if let Some(swap) = Self::swaps(swap_id) {
			    //TODO



				Ok(())
			} else {
				Err(Error::<T>::NoSwapExists)?
			}
		}

		pub fn tokensA_to_tokensB(origin,
			tokens_sold: T::TokenBalance,
			min_bought: T::TokenBalance,
			deadline: T:: BlockNumber,
			recipient: T::AccountId,
		) -> dispatch::DispatchResult
		{
			let now = system::Module::<T>::block_number();
			ensure!(deadline >= now, Error::<T>::Deadline);

			let buyer = ensure_signed(origin)?;

			ensure!(tokens_sold > Zero::zero(), Error::<T>::NoTokensSwapped);

			if let Some(swap) = Self::swaps(swap_id) {
				//TODO

				let token_A_reserve = Self::get_token_reserve(&swap,&swap.tokenA_id);
				let token_B_reserve = Self::get_token_reserve(&swap, &swap.tokenB_id);
				let token_bought ;//= Self::get_input_price(tokens_sold, token_reserve, Self::convert(swap_balance));

				token::Module::<T>::do_transfer(swap.tokenA_id, buyer, swap.account, tokens_sold)?;
				token::Module::<T>::do_transfer(swap.tokenB_id, swap.account, buyer, token_bought)?;

				Ok(())
			} else {
				Err(Error::<T>::NoSwapExists)?
			}
		}

		pub fn tokensB_to_tokensA(origin,
			tokens_sold: T::TokenBalance,
			tokens_bought: T::TokenBalance,
			deadline: T:: BlockNumber,
			recipient: T::AccountId,
		) -> dispatch::DispatchResult
		{
			let now = system::Module::<T>::block_number();
			ensure!(deadline >= now, Error::<T>::Deadline);

			let buyer = ensure_signed(origin)?;

			ensure!(tokens_sold > Zero::zero(), Error::<T>::NoTokensSwapped);

			if let Some(swap) = Self::swaps(swap_id) {
				//TODO

                let token_B_reserve = Self::get_token_reserve(&swap, &swap.tokenB_id);
				let token_A_reserve = Self::get_token_reserve(&swap,&swap.tokenA_id);

				let token_bought ;//= Self::get_input_price(tokens_sold, token_reserve, Self::convert(swap_balance));

				token::Module::<T>::do_transfer(swap.tokenB_id, buyer, swap.account, tokens_sold)?;
				token::Module::<T>::do_transfer(swap.tokenA_id, swap.account, buyer, token_bought)?;
				Ok(())
			} else {
				Err(Error::<T>::NoSwapExists)?
			}
		}
	}
}

impl<T: Trait> Module<T> {
    fn get_token_reserve(swap: &Swap<T::AccountId, T::TokenId>, token_id: T::TokenId) -> T::TokenBalance {
        token::Module::<T>::balance_of((token_id.clone(), &swap.account))
    }
}
