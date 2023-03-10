import Screen from '../../../shared/components/screen/Screen';
import { ProductRoutesEnum } from '../routes';

const ProductInsert = () => {
  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'PRODUTO',
          navigateTo: ProductRoutesEnum.PRODUCT,
        },
        {
          name: 'INSERIR PRODUTO',
        },
      ]}
    >
      Inserir Produto
    </Screen>
  );
};

export default ProductInsert;