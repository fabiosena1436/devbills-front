import { InputMask } from "@react-input/mask";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { Logo } from "../components/logo";
import { Title } from "../components/title";
import { Filters, Header, InputGroup, Main, Section } from "./styles";
import { ButtonIcon } from "../components/button-icon";

export function Home() {
    return (
        <>
            <Header>
                <Logo />
                <div>
                    <Button> Nova transação </Button >
                    <Button> Nova categoria </Button >
                </div>
            </Header>

            <Main>
                <Section>
                    <Filters>
                        <Title title="Saldo" subtitle="Receitas e despesas no perildo" />
                        <InputGroup>
                            <InputMask
                                component={Input}
                                mask="dd/mm/aaaa"
                                replacement={{ d: /\d/, m: /\d/, a: /\d/, }}
                                variant="dark"
                                label="Inicio"
                                placeholder="dd/mm/aaaa"
                            />
                            <InputMask
                                component={Input}
                                mask="dd/mm/aaaa"
                                replacement={{ d: /\d/, m: /\d/, a: /\d/, }}
                                variant="dark"
                                label="Fim"
                                placeholder="dd/mm/aaaa"
                            />
                            <ButtonIcon />
                        </InputGroup>
                    </Filters>
                </Section>
            </Main>
        </>

    )
}