/// <reference types="react" />
interface ButtonProps {
    label: string;
    acessToken: string;
    url: string;
    screen: any;
    setOpenModal: any;
    openModal: boolean;
}
declare const EvadamKit: (props: ButtonProps) => JSX.Element;

export { EvadamKit };
