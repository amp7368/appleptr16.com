import { Button, Container, Stack } from '@mui/material';

import { AppPaper } from '../base/AppPaper';
import { AppTypography } from '../base/AppTypography';
import { Page } from '../common/Page';
import { SectionHeader } from '../pages/projects/common/SectionHeader';

interface SubDomainProps {
    name: string;
    newSubdomain: string;
}
function getURL(prefix: string) {
    return `${prefix}.${location.hostname}`;
}
function SubDomain(props: SubDomainProps) {
    return (
        <Button
            variant="outlined"
            onClick={() =>
                (document.location.href = `https://${getURL(
                    props.newSubdomain
                )}`)
            }
            color="secondary"
        >
            <AppTypography textTransform="none">
                {getURL(props.newSubdomain)}
            </AppTypography>
        </Button>
    );
}
export function BackendPage() {
    return (
        <Page title="Backend Portal">
            <AppPaper>
                <Stack
                    padding={4}
                    direction="column"
                    spacing={2}
                    alignItems="center"
                >
                    <AppTypography variant="h4">
                        This page links password-protected functions
                    </AppTypography>
                    <Container>
                        <SectionHeader>Stuff</SectionHeader>
                    </Container>
                    <SubDomain name="docker" newSubdomain="docker" />
                    <SubDomain name="reposilite" newSubdomain="reposilite" />
                    <SubDomain name="host" newSubdomain="host" />
                    <SubDomain
                        name="ambrosia-loans"
                        newSubdomain="ambrosia-loans"
                    />
                    <SubDomain name="ambrosia" newSubdomain="ambrosia" />
                    <SubDomain name="test" newSubdomain="test" />
                </Stack>
            </AppPaper>
        </Page>
    );
}
