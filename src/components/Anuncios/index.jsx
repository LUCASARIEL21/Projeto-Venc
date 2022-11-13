import React, { Fragment } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import * as S from "./styles";
import { Box, CircularProgress } from "@mui/material";

const Anuncios = ({ adverts, loadedData }) => {
  return (
    <S.Container>
      {loadedData ? (
        <List
          sx={{
            height: "100%",
            width: "100%",
            bgcolor: "#fff",
            borderRadius: "10px",
          }}
        >
          {adverts?.map((advert) => (
            <Fragment key={advert.id}>
              <ListItem alignItems="flex-start">
                <div
                  style={{
                    height: "200px",
                    width: "300px",
                    marginRight: "10px",
                  }}
                >
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "20px",
                    }}
                    src={advert.advertsImages[0]}
                    crossOrigin="anonymous"
                  />
                </div>
                <ListItemText
                  primary={<h3>{advert.title}</h3>}
                  secondary={
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                      }}
                    >
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.primary"
                        sx={{
                          wordWrap: "break-word",
                          maxWidth: "700px",
                          maxHeight: "200px",
                        }}
                      >
                        Descrição: {advert.description}
                      </Typography>

                      <Typography
                        sx={{ mt: 2, fontSize: "13px" }}
                        variant="body2"
                      >
                        Categoria:
                      </Typography>
                      <S.divCategory>
                        <p>{`${advert.category}`}</p>
                      </S.divCategory>

                      <Typography
                        sx={{ mt: 2, fontSize: "13px" }}
                        variant="body2"
                      >
                        Contatos:
                      </Typography>
                      <S.divContacts>
                        <p>{`Email: ${advert.email}`}</p>
                        <p>{`Telefone: ${advert.telephone}`}</p>
                      </S.divContacts>
                      <div
                        style={{
                          position: "absolute",
                          right: 0,
                          bottom: 0,
                          fontSize: "17px",
                          fontWeight: 600,
                          color: "#000000",
                        }}
                      >
                        R$ {advert.price}
                      </div>
                    </div>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </Fragment>
          ))}
        </List>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          padding="10px 15px"
          position={"relative"}
        >
          <CircularProgress
            size={"200px"}
            sx={{ color: "limegreen" }}
            thickness={2.5}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="body2">Buscando Anúncios</Typography>
          </Box>
        </Box>
      )}
    </S.Container>
  );
};

export default Anuncios;
