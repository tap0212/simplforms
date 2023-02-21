import type { TabsProps as AntDTabsProps } from 'antd';
import { Tabs as AntDTabs } from 'antd';

export interface TabsProps {
  defaultActiveKey: string;
  items: AntDTabsProps['items'];
  onChange: (key: string) => void;
  activeKey: string;
  rootClassName?: string;
}
const Tabs = ({
  defaultActiveKey,
  items,
  activeKey,
  onChange,
  rootClassName,
}: TabsProps) => (
  <AntDTabs
    defaultActiveKey={defaultActiveKey}
    items={items}
    onChange={onChange}
    activeKey={activeKey}
    rootClassName={`w-full flex items-center justify-center ${rootClassName}`}
  />
);

export default Tabs;
