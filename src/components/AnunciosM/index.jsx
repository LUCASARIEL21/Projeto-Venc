import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import * as S from "./styles";

const AnunciosM = () => {
  return (
    <S.Container>
      <List
        sx={{
          height: "500px",
          width: "90%",
          bgcolor: "#fff",
          borderRadius: "10px",
          marginTop: "50px",
          marginLeft: "50px",
        }}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <img
              style={{
                height: "100px",
                width: "100px",
                marginRight: "10px",
                borderRadius: "10px",
              }}
              alt="Phone"
              src="https://a-static.mlcdn.com.br/800x560/apple-iphone-13-128gb-estelar-tela-61-12mp-ios/magazineluiza/234661900/a783ddbd0a2cdce3a0b21bb2c90bbad3.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Iphone 13"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Celular
                </Typography>
                {
                  " - Iphone 13 Branco, 128GB de Memoria, Tela 6,1 e Camera 12Mp "
                }
                <br />
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Preço:
                </Typography>
                {" 5.000R$"}
                <br />
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Contatos:
                </Typography>
                <br />
                {"Email: augustinhocarrara@gmail.com"}
                <br />
                {"Telefone: (11) 99989-5566"}
              </React.Fragment>
            }
          />
          <button
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: "10px",
              border: "none",
              color: "white",
              backgroundColor: "limegreen",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <EditIcon style={{ color: "white" }} />
            <h5 style={{ textAlign: "center", fontSize: "13px" }}>Editar</h5>
          </button>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <img
              style={{
                height: "100px",
                width: "100px",
                marginRight: "10px",
                borderRadius: "10px",
              }}
              alt="Car"
              src="https://heycar.com.br/images/2018/Agosto/Urus.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Lamborghini Urus"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Automovel
                </Typography>
                {" - Lamborghini Urus amarela, ano 2020, nova"}
                <br />
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Preço:
                </Typography>
                {" 4.000.000R$"}
                <br />
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Contatos:
                </Typography>
                <br />
                {"Email: jorgeolavo@gmail.com"}
                <br />
                {"Telefone: (11) 91234-5678"}
              </React.Fragment>
            }
          />
          <button
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: "10px",
              border: "none",
              color: "white",
              backgroundColor: "limegreen",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <EditIcon style={{ color: "white" }} />
            <h5 style={{ textAlign: "center", fontSize: "13px" }}>Editar</h5>
          </button>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <img
              style={{
                height: "100px",
                width: "100px",
                marginRight: "10px",
                borderRadius: "10px",
              }}
              alt="Imovel"
              src="https://imgs.kenlo.io/VWRCUkQ2Tnp3d1BJRDBJVe1szkhnWr9UfpZS9bJDwnbk9Kawbnev1nxMNm9yHFhIP-MQkSx9WYNvxUhi7Ils1BpmzP0DBJOehCyqwJi6+tjJrxyMwInxuZ3ci-+nB8mB570+1InEFGmAj4N-R8J6EUolTehFbznbYd6CPnV4uBWSmkLsar15Rk8L2y0Lsk50mGnoV4bx00Q8+RjwFKqA8HLJTP+4URYYX-lYCtoz5F9N4lGnUVdgqR9Qu4m9s2qFPub2JoCihipUBAow-56-X7-hkZaPK5RkVqk2dXwP61MDUbcUm+6GWehj7QEYoKGUV0XA3lnD0LF9Icv9XI1LmaMCxVzLH+NIuU-tkoCThayqOxiBLi9ioueK+vLneaCmR7zzJHy+gZcQ5pzKKsRPIMf2WShVXHE1bHAD5AO24LnapQClIDWKtghdSkw=.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Lamborghini Urus"
            style={{ fontFamily: "sans-serif", fontSize: "20px" }}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Automovel
                </Typography>
                {" - Lamborghini Urus amarela, ano 2020, nova"}
                <br />
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Preço
                </Typography>
                {" 4.000.000R$"}
                <br />
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Contatos
                </Typography>
                <br />
                {"Email: jorgeolavo@gmail.com"}
                <br />
                {"Telefone: (11) 91234-5678"}
              </React.Fragment>
            }
          />
          <button
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: "10px",
              border: "none",
              color: "white",
              backgroundColor: "limegreen",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <EditIcon style={{ color: "white" }} />
            <h5 style={{ textAlign: "center", fontSize: "13px" }}>Editar</h5>
          </button>
        </ListItem>
      </List>
    </S.Container>
  );
};

export default AnunciosM;
