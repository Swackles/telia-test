import React, {useState} from 'react';
import './App.css';
import {
    Button,
    Container,
    Grid,
    TextField,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TableBody
} from "@mui/material";
import {AppStore} from "./stores/AppStore";

function App() {
    const [store] = useState(() => AppStore)

    return (
        <div className="App">
            <Container maxWidth="md">
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center">
                    <Grid item
                        xs={6}
                        container
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={2} >
                        <Grid item>
                            <TextField label="Coin name" variant="outlined" value={store.coinName} onChange={(e) => store.setCoinName(e.target.value)} />
                        </Grid>
                        <Grid item><TextField label="Amount" variant="outlined" value={store.coinAmount} onChange={(e) => store.setCoinAmount(e.target.value)} /></Grid>
                        <Grid item><Button variant="outlined">Submit</Button></Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Nimi</TableCell>
                                        <TableCell align="right">Kogus</TableCell>
                                        <TableCell align="right">Summa</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell colSpan={2} />
                                        <TableCell align="right">Kokku: 0</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
