import * as React from 'react';

import {Breadcrumbs, Link, Grid, Button} from '@mui/material';
import {IActionUrl, IBreadcrumbsMenu} from 'src/constants';
import NextLink from 'next/link';

export interface IBreadcrumbsMenuProps {
    items?: IBreadcrumbsMenu[];
    action?: IActionUrl;
}

export function BreadcrumbsMenu(props: IBreadcrumbsMenuProps) {
    const {items, action} = props;
    return (
        <>
            {(items || action) && (
                <Grid container sx={{p: 1}}>
                    <Grid item xs={8} sx={{p: 1}}>
                        <Breadcrumbs aria-label="breadcrumb">
                            {items?.map((value, index) => {
                                const last = index === items.length - 1;

                                return (
                                    <Link
                                        key={'Breadcrumb_' + index}
                                        underline="hover"
                                        component={NextLink}
                                        color="inherit"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                        href={last ? '' : value.url}>
                                        {value.icon ? value.icon : undefined}
                                        {value.title}
                                    </Link>
                                );
                            })}
                        </Breadcrumbs>
                    </Grid>
                    <Grid
                        item
                        xs={4}
                        sx={{display: 'flex', justifyContent: 'end'}}>
                        {action && (
                            <Button
                                sx={{alignSelf: 'end'}}
                                href={action.url}
                                variant="outlined"
                                LinkComponent={NextLink}>
                                {action.label}
                            </Button>
                        )}
                    </Grid>
                </Grid>
            )}
        </>
    );
}
