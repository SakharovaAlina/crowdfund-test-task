import * as React from 'react';
import moment from 'moment';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export interface ITemplateCardProps {
    name: string;
    fileName: string;
    date: number;
}

export default function TemplateCard(props: ITemplateCardProps) {
    return (
        <Card sx={{p: 1}}>
            <CardMedia
                sx={{height: 270}}
                image={props.fileName}
                title={props.name}
            />
            <CardContent>
                <Typography gutterBottom>{props.name}</Typography>
                <Typography variant="caption">
                    {moment.unix(props.date).format('YYYY-MM-DD HH:mm')}
                </Typography>
            </CardContent>
        </Card>
    );
}
