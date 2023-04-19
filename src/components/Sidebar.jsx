import { Box, ButtonBase, Divider, List, ListItemButton, ListItemIcon, Typography, createStyles, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { BsCollection, BsOutlet } from 'react-icons/bs';
const styles = createStyles({
    container: {
        height: "100%",
        p: 0.25,
        borderRight: "1px solid #00000010"
    },
    button: {
        height: 50,
        width: 80,
        display: "flex",
        alignItems: "center",
        m: 0.25,
        borderRadius: 0.5,
        borderLeft: "2px solid",
        borderColor: "transparent",
        transition: "0.15s ease-in",
        icon: {
            fontSize: 17
        },
        text: {
            fontSize: 11,
            lineHeight: 1
        }
    }
});

const items = [
    {
        key: "/collections",
        label: "Collections",
        icon: BsCollection
    },
    {
        key: "/environments",
        label: "Environments",
        icon: BsOutlet
    }
]
export default function Sidebar() {
    const theme = useTheme();
    const router = useRouter();
    const redirect = (pathname) => {
        router.push(pathname);
    }
    return (
        <Box sx={styles.container}>
            {
                items.map(item => (
                    <React.Fragment key={item.key}>
                        <ButtonBase
                            onClick={e => redirect(item.key)}
                            sx={{
                                ...styles.button,
                                color: router.pathname == item.key ? "black" : "grey",
                                borderColor: router.pathname == item.key ? theme.palette.primary.main : "transparent",
                                backgroundColor: router.pathname == item.key ? "#00000020" : "transparent",
                            }}>
                            <Box>
                                <item.icon {...styles.button.icon} />
                                <Typography sx={{ ...styles.button.text, mb: 0 }}>{item.label}</Typography>
                            </Box>
                        </ButtonBase>
                    </React.Fragment>
                ))
            }

        </Box>
    )
}