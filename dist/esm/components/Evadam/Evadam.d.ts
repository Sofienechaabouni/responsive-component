/// <reference types="react" />
import "./Evadam.css";
export interface ButtonProps {
    label: string;
    acessToken: string;
    url: string;
    screen: any;
    setOpenModal: any;
    openModal: boolean;
}
declare const EvadamKit: (props: ButtonProps) => JSX.Element;
export default EvadamKit;
