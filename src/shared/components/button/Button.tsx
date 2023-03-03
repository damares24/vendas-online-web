import { ButtonProps } from 'antd';

import { BottonAntd } from './button.styles';

interface ButtonCurrentProps extends ButtonProps {
  margin?: string;
}

const Button = ({ margin, ...props }: ButtonCurrentProps) => {
  return <BottonAntd style={{ margin }} {...props} />;
};

export default Button;
