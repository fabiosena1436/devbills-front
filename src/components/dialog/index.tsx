import { Content, Overlay, Portal, Root, Trigger } from "./styles";
import { ReactNode } from "react";


type DialogProps = {
    children: ReactNode;
    trigger: JSX.Element;
    open?: boolean;
    onOpenChenge?: (open: boolean) => void
}

export function Dialog({ children, trigger, open, onOpenChenge }: DialogProps) {
    return (
        <Root open={open} onOpenChange={onOpenChenge}>
            <Trigger>{trigger}</Trigger>
            <Portal>
                <Overlay />
                <Content>{children}</Content>
            </Portal>
        </Root>
    )
}