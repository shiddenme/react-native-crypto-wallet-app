import React from 'react';
import { View } from 'react-native';

import { capitalizedCase, getCoinSymbol } from 'utils';

import Box from '../Box';
import Icon from '../Icon';
import StyledText from '../StyledText';

import CoinAssetStyle from './CoinAsset.style';

interface ICoinAssetProps {
  coin: string;
  amount: string;
  value: string;
  profitLoss: number;
}

const CoinAsset: React.FC<ICoinAssetProps> = ({ coin, amount, value, profitLoss }) => {
  const isProfit = profitLoss > 0;

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      height={60}
      backgroundColor="lightBlue"
      borderRadius="full"
      style={CoinAssetStyle.container}
    >
      <Box flexDirection="row" alignItems="center">
        <Icon name={coin} width="34" height="34" />
        <View style={CoinAssetStyle.amount}>
          <StyledText variant="label" color="titleHeadline">{`${capitalizedCase(
            coin,
          )} (${getCoinSymbol(coin)})`}</StyledText>
          <StyledText variant="paragraph">{`${amount} ${getCoinSymbol(coin)}`}</StyledText>
        </View>
      </Box>
      <Box alignItems="flex-end">
        <StyledText variant="label" color="titleHeadline">
          {`$${value}`}
        </StyledText>
        <StyledText variant="label" color={isProfit ? 'success' : 'error'}>
          {`${isProfit ? '+' : '-'}${profitLoss}`}
        </StyledText>
      </Box>
    </Box>
  );
};

export default CoinAsset;
