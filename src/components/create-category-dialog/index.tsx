import { useCallback, useState } from "react";
import { Dialog } from "../dialog";
import { Button } from "../button";
import { Title } from "../title";
import { Input } from "../input";
import { Container } from "./styles";



export function CreateCategoryDialog() {
    const [open, setOpen] = useState(false)

    const handleClose = useCallback(() => {
        setOpen(false)
    }, [])

    const onSubmit = useCallback(() => {
       handleClose()
    }, [handleClose])

    return (
        <Dialog
            open={open}
            onOpenChenge={setOpen}
            trigger={<Button> Nova categoria </Button >}
        >

            <Container>
                <Title
                    title="Nova Categoria"
                    subtitle="Inicie uma nova categoria para suas transaçães"
                />

                <form >
                    <div>
                        <Input label="Nome" placeholder="Nome da categoria..." />
                        <Input label="Cor" type="color" />
                    </div>
                    <footer>
                        <Button  onClick={handleClose} variant="outline" type="button">
                            Cancelar
                        </Button>

                        <Button onClick={onSubmit} type="button">
                            Cadastrar
                        </Button>
                    </footer>
                </form>
            </Container>

        </Dialog>
    )
}