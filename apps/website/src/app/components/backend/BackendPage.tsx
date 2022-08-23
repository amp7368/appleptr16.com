import { Button, Stack } from '@mui/material';
import { Container } from '@mui/system';
import { AppPaper } from '../base/AppPaper';
import { AppTypography } from '../base/AppTypography';
import { Page } from '../common/Page';
import { SectionHeader } from '../pages/projects/common/SectionHeader';
interface SubDomainProps {
    name: string;
    path: string;
    subdomain: string;
}
function getURL(subDomain: string, path: string) {
    if (path) return `${subDomain}.appleptr16.com/${path}`;
    return `${subDomain}.appleptr16.com`;
}
function SubDomain({ subdomain, path, ...props }: SubDomainProps) {
    return (
        <Button
            variant="outlined"
            href={`https://${getURL(subdomain, path)}`}
            color="secondary"
        >
            <AppTypography textTransform="none">
                {getURL(subdomain, path)}
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
                        Currently, this page references mostly locked utilities.
                        <br />
                        Feel free to ignore this.
                    </AppTypography>
                    <Container>
                        <SectionHeader>Stuff</SectionHeader>
                    </Container>
                    <SubDomain name="docker" subdomain="docker" path="v2" />
                    <SubDomain
                        name="reposilite"
                        subdomain="reposilite"
                        path="#"
                    />
                    <SubDomain
                        name="host"
                        subdomain="host"
                        path="webregistry"
                    />
                    <SubDomain
                        name="ambrosia-loans"
                        subdomain="ambrosia-loans"
                        path=""
                    />
                    <SubDomain name="ambrosia" subdomain="ambrosia" path="" />
                    <SubDomain name="test" subdomain="test" path="" />
                </Stack>
            </AppPaper>
        </Page>
    );
}
