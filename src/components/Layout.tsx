import * as React from 'react';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {IActionUrl, IBreadcrumbsMenu} from 'src/constants';
import {BreadcrumbsMenu} from './BreadcrumbsMenu';
import AdbIcon from '@mui/icons-material/Adb';
import {Avatar, IconButton, Menu, MenuItem, Tooltip} from '@mui/material';

export interface ILayoutProps {
    children: any;
    breadcrumbs?: IBreadcrumbsMenu[];
    action?: IActionUrl;
}

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Layout(props: ILayoutProps) {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{backgroundColor: '#ededed'}}>
            <Head>
                <title>Certificate</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <React.Fragment>
                    <CssBaseline />
                    <Box sx={{flexGrow: 1}}>
                        <AppBar position="static">
                            <Toolbar>
                                <AdbIcon
                                    sx={{
                                        display: {xs: 'none', md: 'flex'},
                                        mr: 1,
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{flexGrow: 1}}>
                                    Certificate Creation
                                </Typography>
                                <Box sx={{flexGrow: 0}}>
                                    <Tooltip title="Open settings">
                                        <IconButton
                                            onClick={handleOpenUserMenu}
                                            sx={{p: 0}}>
                                            <Avatar
                                                sx={{mr: 2}}
                                                alt="Remy Sharp"
                                                src="https://mui.com/static/images/avatar/2.jpg"
                                            />
                                            <Typography color="white">
                                                User Name
                                            </Typography>
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        sx={{mt: '45px'}}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}>
                                        {settings.map(setting => (
                                            <MenuItem
                                                key={setting}
                                                onClick={handleCloseUserMenu}>
                                                <Typography textAlign="center">
                                                    {setting}
                                                </Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Container>
                        <BreadcrumbsMenu
                            items={props.breadcrumbs}
                            action={props.action}
                        />
                        <Box>{props.children}</Box>
                    </Container>
                </React.Fragment>
            </main>
        </Box>
    );
}
