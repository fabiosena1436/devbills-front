import { ComponentProps } from "react"
import { Container } from "./styles"
type ButtonProps = ComponentProps<'button'>

export function Button({ children }: ButtonProps) {
    return (
        <Container>{children}</Container>
    )
}