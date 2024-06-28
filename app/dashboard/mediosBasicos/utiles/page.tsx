
import { Card, CardHeader, Grid, Typography } from "@mui/material";
import { NewEntry } from "../../components/NewEntry";
import EntryList from "../../components/EntryList";

export default function útiles() {
    return (
        <>
            <Grid container spacing={2} sx={{ marginY: '5px ' }}>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: 'calc(100vh - 120px)', opacity: 0.9, marginBottom: '5px', overflowY: 'scroll' }}>
                        <CardHeader title='Buen Estado' />
                        <NewEntry state= 'Útil'/>
                        <EntryList status="Bien" state="Útil"/>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: 'calc(100vh - 120px)', opacity: 0.9, marginBottom: '5px', overflowY: 'scroll' }}>
                        <CardHeader title='Reparados' />
                        <EntryList status="Regular" state="Útil"/>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: 'calc(100vh - 120px)', opacity: 0.9, marginBottom: '5px', overflowY: 'scroll' }}>
                        <CardHeader title='Bajas' />
                        <EntryList status="Mal" state="Útil"/>
                    </Card>
                </Grid>
            </Grid>
            <Typography variant="subtitle2">Útil</Typography>
        </>
    )
}