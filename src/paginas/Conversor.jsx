import { Button, Card, CardContent, Container, FormControl, Grid, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles({
    grid: {
        marginTop: '150px',
        marginBottom: '20px'
    },
    select: {
        width: '100px',
        marginRight: '20px',
    },
    textfield: {
        width: '200px'
    },
    card: {
        height: '500px',
        width: '600px',
        marginTop: '50px',
    },
    button: {
        marginTop: '20px',
        width: '200px',
        borderStyle: 'solid',
        borderRadius: '16px',
        backgroundColor: 'aqua',
        '&:hover': {
            backgroundColor: 'indigo',
            color: 'white'
        }
    }
})

const Conversor = () => {
    const classes = useStyles()

    const [valor, setValor] = useState('')
    const [valorConvertido, setValorConvertido] = useState('')
    const [selected, setSelected] = useState('')
    const [error, setError] = useState('Valor Invalido')

    const handleConverter = () => {
        try {
            if (selected === 'Dolar') {
                setValorConvertido((valor * 5.66).toFixed(2).toString().replace(".",","))
                setValor('')
            }
            if (selected === 'Euro') {
                setValorConvertido((valor * 6.53).toFixed(2).toString().replace(".",","))
                setValor('')
            }
            if (selected === 'Libra') {
                setValorConvertido((valor * 7.74).toFixed(2).toString().replace(".",","))
                setValor('')
            }
        } catch(e) {
            setError(error)
        }

    }

    return (
        <Container>
            <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
                <Typography variant="h4" color="textPrimary">
                    Conversor de valores
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography variant="h5" color="textSecondary">
                    Utilize abaixo para converter valores
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Card elevation={10} className={classes.card}>
                    <CardContent>
                        <Grid container justifyContent="center" className={classes.grid}>
                            <FormControl>
                                <Select className={classes.select}
                                    onChange={e => setSelected(e.target.value)}>
                                    <MenuItem value='Dolar'>Dólar</MenuItem>
                                    <MenuItem value='Euro'>Euro</MenuItem>
                                    <MenuItem value='Libra'>Libra</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                variant="outlined"
                                value={valor}
                                label="Digite algum valor"
                                type="number"
                                required
                                onChange={e => setValor(e.target.value)}
                                className={classes.textfield}
                            />
                        </Grid>
                        <Grid container justifyContent="center">
                            <Typography variant="h5" color="textPrimary">
                                Valor convertido: R$ {valorConvertido}
                            </Typography>
                        </Grid>
                        <Grid container justifyContent="center">
                            <Button
                                variant="contained"
                                size="large"
                                className={classes.button}
                                onClick={handleConverter}>
                                Converter
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Container>
    )
}

export default Conversor
