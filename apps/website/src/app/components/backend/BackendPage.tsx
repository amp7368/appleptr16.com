import { Button, Stack } from '@mui/material';
import { navTo } from '../../util/routes';
import { AppPaper } from '../base/AppPaper';
import { AppTypography } from '../base/AppTypography';
import { Page } from '../common/Page';
interface SubDomainProps {
    name: string;
    newSubdomain: string;
}
function getURL(prefix: string) {
    return `${prefix}.${location.hostname}:${location.port}`;
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
                <Stack padding={4} direction="column" spacing={2}>
                    <SubDomain
                        name="ambrosia-loans"
                        newSubdomain="ambrosia-loans"
                    />
                    <SubDomain name="host" newSubdomain="host" />
                    <SubDomain name="docker" newSubdomain="docker" />
                    <SubDomain name="reposilite" newSubdomain="reposilite" />
                    <SubDomain name="ambrosia" newSubdomain="ambrosia" />
                    <SubDomain name="test" newSubdomain="test" />
                </Stack>
            </AppPaper>
        </Page>
    );
}
