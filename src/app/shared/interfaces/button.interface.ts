export interface IButtonConfig {
    buttonClass?: string,
    type?: string,
    stroked?: boolean,
    label?: string,
    isLoading?: boolean,
    route?: string,
    isDisabled?: boolean, 
    iconClass?: string,
    icon?: string,                        // b for bootstrap icons or m for mat icons
    iconPlacement?: string,               // before or after content
    bootstrapIconClass?: string,          // excluding bi get from this link https://icons.getbootstrap.com/icons/123/
    matIcon?:string,                      // material icon name get from this link https://fonts.google.com/icons?selected:Material+Icons
    iconWrapperClass?: string,
}