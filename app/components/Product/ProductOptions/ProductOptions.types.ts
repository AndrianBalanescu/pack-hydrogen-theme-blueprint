import type {ProductOptionValue} from '@shopify/hydrogen/storefront-api-types';

import type {
  OptionWithGroups,
  ProductWithGrouping,
  SelectedVariant,
  SwatchesMap,
} from '~/lib/types';

export interface ProductOptionsProps {
  product: ProductWithGrouping;
  selectedVariant: SelectedVariant;
}

export type OnSelect = ({
  selectedVariant,
  optionName,
  optionValue,
  fromGrouping,
}: {
  selectedVariant: SelectedVariant;
  optionName: string;
  optionValue: Pick<ProductOptionValue, 'name'>;
  fromGrouping?: boolean;
}) => void;

export interface ProductOptionValuesProps {
  onSelect?: OnSelect;
  option: OptionWithGroups;
  product: ProductWithGrouping;
  selectedOptionsMap: Record<string, string>;
  setSelectedOption: (name: string, value: string) => void;
  swatchesMap: SwatchesMap;
}

export interface ProductOptionValuesLabelProps {
  name: string;
  selectedValue: string | null;
}