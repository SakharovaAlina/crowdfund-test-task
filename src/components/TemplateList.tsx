import * as React from 'react';
import Box from '@mui/material/Box';
import TemplateCard from './TemplateCard';
import {ITemplate} from 'src/constants';

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

export interface ITemplateListProps {
    templates: ITemplate[];
    headerList: string;
}

export default function TemplateList(props: ITemplateListProps) {
    return (
        <Box p={1} sx={{justifyContent: 'center', alignItems: 'center'}}>
            <Grid container spacing={2}>
                {props?.templates?.map((temp: any) => {
                    return (
                        <Grid xs={4} key={'temp' + temp.id}>
                            <TemplateCard
                                key={'temp' + temp.id}
                                name={temp.name}
                                fileName={temp.fileName}
                                date={temp.date}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}
