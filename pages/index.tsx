import type {NextPage} from 'next';

import Layout from 'src/components/Layout';
import {useTemplate} from 'src/hooks/template';
import di from 'server/container';

import {useDispatch} from 'react-redux';
import {useCertificate} from 'src/hooks/certificate';
import TemplateList from 'src/components/TemplateList';
import HomeIcon from '@mui/icons-material/Home';

import Stack from '@mui/material/Stack';

const Home: NextPage = props => {
    const tmp = useTemplate();

    const crt = useCertificate();
    const dispatch = useDispatch();

    console.log('data', tmp.data, crt.data);
    const templateData = tmp.data ? tmp.data.data : tmp.data;
    const certificateData = crt.data ? crt.data.data : crt.data;

    return (
        <Layout
            breadcrumbs={[
                {
                    url: '/',
                    title: 'Home',
                    icon: <HomeIcon sx={{mr: 0.5}} fontSize="inherit" />,
                },
            ]}
            action={{label: 'New Certificate', url: '/editor'}}>
            <Stack spacing={2} alignItems="stretch">
                <TemplateList
                    templates={certificateData}
                    headerList="Certificates"
                />
            </Stack>
        </Layout>
    );
};

export async function getServerSideProps({req, res}) {
    const cert = await di('CertificateController').run(req, res);
    const temp = await di('TemplateController').run(req, res);
    return {props: {cert, temp}};
}
export default Home;
