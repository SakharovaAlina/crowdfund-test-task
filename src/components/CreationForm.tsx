import * as React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {Dayjs} from 'dayjs';
import TextField from '@mui/material/TextField';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';

export interface ICreationFormProps {
    item?: {};
}

export default function CreationForm(props: ICreationFormProps) {
    const [value, setValue] = React.useState<Dayjs | null>(null);
    const {item} = props;
    const handleSubmit = () => {};
    console.log('item', item);
    return (
        <Paper sx={{padding: 2}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3} alignItems="stretch">
                    <TextField
                        fullWidth
                        id="courseName-basic"
                        label="Course Name"
                        variant="outlined"
                        margin="normal"
                        sx={{margin: 0}}
                    />
                    <TextField
                        fullWidth
                        id="subTitle-basic"
                        label="Subtitle"
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        id="name-basic"
                        label="Name"
                        variant="outlined"
                        margin="normal"
                    />

                    <TextField
                        fullWidth
                        id="description-basic"
                        label="Description"
                        variant="outlined"
                        margin="normal"
                        multiline
                        rows={4}
                    />

                    <DatePicker
                        label="Date"
                        value={value}
                        onChange={newValue => {
                            setValue(newValue);
                        }}
                        renderInput={params => (
                            <TextField fullWidth {...params} />
                        )}
                    />

                    <TextField
                        fullWidth
                        id="signature-basic"
                        label="Signature"
                        variant="outlined"
                        margin="normal"
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="submit-btn"
                        onClick={handleSubmit}>
                        Create
                    </Button>
                </Stack>
            </LocalizationProvider>
        </Paper>
    );
}
