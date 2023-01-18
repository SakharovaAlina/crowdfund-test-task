import type {NextPage} from 'next';

import Layout from 'src/components/Layout';
import {useTemplate} from 'src/hooks/template';
import di from 'server/container';

import {useDispatch} from 'react-redux';
import {useCertificate} from 'src/hooks/certificate';
import CreationForm from 'src/components/CreationForm';
import TemplateImg from 'src/components/TemplateImg';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {ITemplate} from 'src/constants';
import TemplateEditor from 'src/components/TemplateEditor';
import React, {useCallback} from 'react';

const items: ITemplate[] = [
    {
        name: 'Electronics',
        fileName: '/cert3.webp',
    },
    {
        name: 'Macbook Pro',
        fileName: '/cert2.webp',
    },
    {
        name: 'iPhone',
        fileName: '/cert3.webp',
    },
    {
        name: 'Home Appliances',
        fileName: '/cert1.png',
    },
    {
        name: 'Washing Machine WX9102',
        fileName: '/cert1.png',
    },
    {
        name: 'Learus Vacuum Cleaner',
        fileName: '/cert1.png',
    },

    {
        name: 'Decoratives',
        fileName: '/cert1.png',
    },
    {
        name: 'Living Room Lamp',
        fileName: '/cert1.png',
    },
    {
        name: 'Floral Vase',
        fileName: '/cert1.png',
    },
];

const Editor: NextPage = props => {
    const tmp = useTemplate();

    const crt = useCertificate();
    const dispatch = useDispatch();

    const [imageUrl, setImage] = React.useState('/cert1.png');

    const handleBannerClick = useCallback((item: ITemplate) => {
        console.log('item', item);
        setImage(item.fileName);
    }, []);

    // const loading = !data && !error;
    console.log('data', tmp.data, crt.data);
    const templateData = tmp.data ? tmp.data.data : tmp.data;
    const certificateData = crt.data ? crt.data.data : crt.data;
    const breadcrumbs = [
        {
            url: '/',
            title: 'Home',
        },
        {
            url: '/editor',
            title: 'Certificate',
        },
    ];

    return (
        <Layout breadcrumbs={breadcrumbs}>
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{xs: 1, sm: 2, md: 3}}>
                <Grid md={6} sm={12}>
                    <TemplateEditor
                        items={items}
                        image={imageUrl}
                        onBannerClick={handleBannerClick}
                    />
                </Grid>
                <Grid sm={6} xs={12}>
                    <CreationForm />
                </Grid>
            </Grid>
        </Layout>
    );
};

export async function getServerSideProps({req, res}) {
    const cert = await di('CertificateController').run(req, res);
    const temp = await di('TemplateController').run(req, res);
    return {props: {cert, temp}};
}
export default Editor;
