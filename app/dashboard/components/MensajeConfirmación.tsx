import { Button, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';


export function MensajeConfirmación(){
  return (
    <Card sx={{backgroundColor: 'white'}}>
        <CardContent>
            <Typography
            >
                Alert: if you continue, all entries will be deleted</Typography>
        </CardContent>
        <CardContent>
            <Typography
            >
                Do you wish to continue
            </Typography>
        </CardContent>
        <CardActionArea>
            <CardContent>
                <Button
                endIcon= {<CheckIcon/>}
                >
                    Accept
                </Button>
                <Button
                endIcon= {<CancelIcon/>}
                >
                    Cancel
                </Button>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}

