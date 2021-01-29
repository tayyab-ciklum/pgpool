/// <reference types="react" />
declare type Props = {
    collapsed: boolean;
    toggle: () => void;
};
declare const AppMenu: ({ collapsed, toggle }: Props) => JSX.Element;
export default AppMenu;
