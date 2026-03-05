import React from 'react';
import TabItem from '@theme/TabItem';

type TabItemProps = React.ComponentProps<typeof TabItem>;

interface IconTabItemProps extends Omit<TabItemProps, 'label'> {
    label: React.ReactNode;
}

export function IconTabItem(props: IconTabItemProps) {
    return <TabItem {...(props as TabItemProps)} />;
}