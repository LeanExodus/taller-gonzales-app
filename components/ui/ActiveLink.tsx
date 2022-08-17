import { CSSProperties, FC } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { Button } from "@mui/material";

import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import GarageIcon from '@mui/icons-material/Garage';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const style: CSSProperties = {
    color: "#FFECD1",
    
};

interface Props {
    text: string;
    href: string;
}

export const ActiveLink: FC<Props> = ({ text, href }) => {
    const { asPath } = useRouter();

    return (
        <Link href={href} passHref>
            <Button color="inherit" sx={asPath === href ? style : undefined}>
                {text == 'Productos' && <GarageIcon fontSize="small" sx={{mr:1}}/>}
                {text == 'Contacto' && <ContactMailIcon fontSize="small" sx={{ mr: 1 }} />}
                {text == 'Agendar cita' && <CalendarMonthIcon fontSize="small" sx={{ mr: 1 }} />}
                {text == 'Adminitración' && <AdminPanelSettingsRoundedIcon fontSize="small" sx={{ mr: 1 }} />}
               
                {text}
            </Button>
        </Link>
    );
};
