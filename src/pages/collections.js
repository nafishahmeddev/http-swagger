import { Box, Breadcrumbs, Button, ButtonBase, Collapse, Divider, InputBase, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Popover, Select, TextField, Typography } from '@mui/material'
import Head from 'next/head'
import { useState } from 'react';
import { BsPlus, BsSearch, BsThreeDotsVertical, BsFolder, BsChevronUp, BsChevronDown, BsThreeDots } from 'react-icons/bs';

const collections = [
  {
    name: "Admin",
    collections: [
      {
        name: "Auth",
        collections: [
          {
            name: "initRegistration",
            collections: [
              {
                name: "deleteUser",
                request: {
                  method: "DELETE"
                }
              },
              {
                name: "update User",
                request: {
                  method: "PATCH"
                }
              },
            ],

          },
          {
            name: "deleteUser",
            request: {
              method: "DELETE"
            }
          },
          {
            name: "update User",
            request: {
              method: "PATCH"
            }
          },
          {
            name: "Partial update user",
            request: {
              method: "PUT"
            }
          }
        ]
      },
    ]
  },
  {
    name: "get user details",
    request: {
      method: "GET"
    }
  }
];

const colors = {
  "GET": "#dead1b",
  "POST": "green",
  "PUT": "orange",
  "DELETE": "red",
  "PATCH": "black"
}


const CollectionItem = ({ item, level = 0 }) => {
  const [open, setOpen] = useState(false);
  const hasCollections = Boolean(item.collections ?? false);
  const [hovered, setHovered] = useState(false);
  const [optionAnchor, setOptionAnchor] = useState(null);

  const width = (level - 1) * 15;
  const mr = 1;
  const borderRight = "1px solid #e5e5e5";

  const onClickOption = (e) => {
    e.stopPropagation();
    setOptionAnchor(e.currentTarget);
  }
  return (
    <>
      <ListItem disablePadding disableGutters sx={{ display: "block", position: "relative" }} onMouseOver={e => setHovered(true)} onMouseLeave={e => setHovered(false)}>

        <ListItemButton sx={{ py: 0, height: 24, }}>
          <Box width={width + "px"} mr={mr} height="24px" sx={{ borderRight: borderRight, }} />
          <Typography fontSize={11} sx={{ width: 20, color: "black" }} onClick={e => setOpen(!open)} >
            {open ? <BsChevronDown /> : <BsChevronUp />}
          </Typography>
          <Typography fontSize={10} sx={{ color: hasCollections ? "#000" : colors[item.request.method] }}>
            {hasCollections ? <BsFolder /> : item.request.method.toUpperCase()}
          </Typography>
          <Typography fontSize={12} sx={{ ml: 1, flexGrow: 1 }}>{item.name}</Typography>
        </ListItemButton>


        <ButtonBase sx={{ position: "absolute", top: "2px", right: 0, p: 0.5, zIndex: 2, display: hovered ? undefined : "none", borderRadius: 0.5, }} onClick={onClickOption}>
          <BsThreeDots fontSize={11} />
        </ButtonBase>
        <Popover
          anchorEl={optionAnchor}
          open={Boolean(optionAnchor)}
          onClose={e => setOptionAnchor(null)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}>

          <List dense>
            {
              hasCollections ? (
                <>
                  <ListItemButton>
                    <ListItemText>Edit</ListItemText>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText>Add request</ListItemText>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText>Add folder</ListItemText>
                  </ListItemButton>
                </>
              ) : (
                <>
                  <ListItemButton>
                    <ListItemText>Open in tab</ListItemText>
                  </ListItemButton>
                </>
              )
            }
            <ListItemButton>
              <ListItemText>Rename</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText>Duplicate</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText>Delete</ListItemText>
            </ListItemButton>
          </List >

        </Popover >
      </ListItem >
      {
        hasCollections && (
          <Collapse in={open} unmountOnExit>
            <List dense sx={{ py: 0 }}>
              {
                item.collections.map(subItem => <CollectionItem key={subItem.name} item={subItem} level={level + 1} />)
              }
            </List>
          </Collapse>
        )
      }

    </>
  )

}
export default function CollectionsPage() {
  return (
    <>
      <Head>
        <title>Collections</title>
        <meta name="description" content="Collections" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box display="flex" height="100%">
        <Box sx={{ borderRight: "1px solid #00000010" }} height="100%" width="250px" display="flex" flexDirection="column" bgcolor="#fafafa">
          <Box p={0.5} display="flex" gap="2%" fontSize={0}>
            <Box>
              <ButtonBase sx={{ height: 25, width: 25, borderRadius: 1 }}> <BsPlus /> </ButtonBase>
            </Box>
            <Box flexGrow={1} borderRadius={1} bgcolor="#00000010" display="flex" alignItems="center" pl={1}>
              <BsSearch fontSize={14} />
              <InputBase sx={{ px: 1, height: 25, fontSize: "small" }} />
            </Box>
            <Box>
              <ButtonBase sx={{ height: 25, width: 25, borderRadius: 1 }}> <BsThreeDotsVertical /> </ButtonBase>
            </Box>
          </Box>
          <Box flexGrow={1} py={1}>
            <List dense sx={{ py: 0 }}>
              {
                collections.map(collection => <CollectionItem key={collection.name} item={collection} level={0} />)
              }
            </List>
          </Box>
        </Box>
        <Box flexGrow={1} display="flex" flexDirection="column">
          <Box display="flex" p={1} borderBottom="1px solid #e5e5e5">
            <Breadcrumbs>
              <Link color="#666" underline="hover">backend</Link>
              <Link color="#666" underline="hover">auth</Link>
              <Link color="#000" underline="hover">initReg</Link>
            </Breadcrumbs>
          </Box>
          <Box p={1}>
            <Box border="1px solid #e5e5e5" borderRadius={1} display="flex" bgcolor="#fafafa">
              <Box height="100%" display="flex" alignItems="center" p={0.5} px={2} borderRight="1px solid #e5e5e5">POST</Box>
              <InputBase sx={{ flexGrow: 1, px: 2 }} placeholder='Enter URL or paste text' />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
