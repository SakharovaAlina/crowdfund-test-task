import * as React from 'react';
import Stack from '@mui/material/Stack';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@mui/material';
import Box from '@mui/material/Box';

import {ITemplate} from 'src/constants';
import Banner from './Banner';

export interface ITemplateEditorProps {
    items: ITemplate[];
    image: string;
    onBannerClick: (item: ITemplate) => void;
}

export default function TemplateEditor(props: ITemplateEditorProps) {
    const {items, image, onBannerClick} = props;
    console.log('items', items);
    return (
        <Paper sx={{padding: 2}}>
            <Stack spacing={3} alignItems="stretch">
                <Box p={1}>
                    <Paper sx={{backgroundImage: image}}>
                        <img
                            src={image}
                            alt="template"
                            style={{width: '100%'}}
                        />
                    </Paper>
                </Box>
                <Carousel
                    indicators={true}
                    height={200}
                    autoPlay={false}
                    navButtonsAlwaysVisible={true}>
                    {items
                        ?.reduce(
                            (A, v: any) => {
                                const M = A[A.length - 1];
                                M.length < 2 ? M.push(v) : A.push([v]);
                                return A;
                            },
                            [[]] as ITemplate[][]
                        )
                        .map((item, index) => (
                            <Banner
                                items={item}
                                key={'banner_' + index}
                                onBannerClick={onBannerClick}
                            />
                        ))}
                </Carousel>
            </Stack>
        </Paper>
    );
}
