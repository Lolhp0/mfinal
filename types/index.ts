export interface ThemeButtonProps {
    title: string;
    style: "dark"|"light";
    handleClick?: () => void;
    containerStyles?: string;
    img?:string;
}

export interface CustomButtonProps {
    title: string;
    handleClick?: () => void;
    classNames?: string;
    image:boolean;
}