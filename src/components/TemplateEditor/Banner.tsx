import * as React from 'react';
import Card from '@mui/material/Card';
import {ITemplate} from 'src/constants';
import {Button, Grid} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export interface IBannerProps {
    items: ITemplate[];
    onBannerClick: (item: ITemplate) => void;
}

export default function Banner(props: IBannerProps) {
    const {items, onBannerClick} = props;

    const handleClickOnPress = React.useCallback(
        (o: ITemplate) => {
            console.log('CLICKEED', o);
            if (onBannerClick) {
                onBannerClick(o);
            }
        },
        [onBannerClick]
    );
    console.log('item', items);
    return (
        <Card
            raised
            className="Banner"
            sx={{height: 400, position: 'relative'}}>
            <Grid
                container
                spacing={2}
                className="BannerGrid"
                sx={{height: 400, position: 'relative'}}>
                {items.map(o => (
                    <Grid
                        item
                        xs={6}
                        key={o.name}
                        sx={{cursor: 'pointer'}}
                        onClick={() => handleClickOnPress(o)}>
                        <CardMedia
                            component="img"
                            height="180"
                            className="Media"
                            image={'/' + o.fileName}
                            title={o.name}
                            sx={{
                                backgroundColor: 'white',
                                overflow: 'hidden',
                                position: 'relative',
                            }}
                        />
                        <Typography>{o.name}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Card>
    );
}
