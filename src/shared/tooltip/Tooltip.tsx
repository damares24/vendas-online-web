import { Tooltip as TooltipAntnd } from 'antd';

import { ContainerExternal, ContainerTooltip } from './tooltip.style';
interface TooltipProps {
  children: React.ReactNode;
  tooltip?: React.ReactNode;
  title?: string;
}

const Tooltip = ({ children, tooltip, title }: TooltipProps) => {
  if (title) {
    <TooltipAntnd title={title}>{children}</TooltipAntnd>;
  }
  return (
    <ContainerTooltip>
      <ContainerExternal>{tooltip}</ContainerExternal>
      {children}
    </ContainerTooltip>
  );
};

export default Tooltip;
