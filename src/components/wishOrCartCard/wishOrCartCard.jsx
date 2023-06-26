import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import {
  addToCart,
  addToWishlist,
  delFromCart,
  delFromWishlist,
} from "../../redux/action/action";

const CardItemContainer = styled(Card)`
  display: flex;
  justify-content: space-between;
  height: 200px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add box shadow */
  margin: 15px auto 15px auto;
  width: 70%;
`;

const ImageContainer = styled("div")`
  display: flex;
  width: 50%;
`;

const Image = styled("img")`
  height: 170px;
  width: 170px;
  margin: auto 0 auto 15px;
  object-fit: cover;
`;

const DetailsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 16px;
`;

const Details = styled("div")`
  display: flex;
  flex-direction: column;
`;

const Title = styled(Typography)`
  font-weight: bold;
`;

const Row = styled("div")`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const ButtonContainer = styled("div")`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const CardItem = ({ prod }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const getTotalPrice = () => {
    return prod.price * quantity;
  };

  const dispatch = useDispatch();

  const delProductFromCart = (product) => {
    dispatch(delFromCart(product));
  };

  const delProductFromWishlist = (product) => {
    dispatch(delFromWishlist(product));
  };

  const addProductToCart = (product) => {
    dispatch(addToCart(product));
  };

  const addProductToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };

  return (
    <CardItemContainer>
      <ImageContainer>
        <Image src={prod.image} alt={prod.title} />
        <DetailsContainer>
          <Details>
            <Title variant="subtitle1">{prod.title.substring(0, 15)}</Title>
            <Row>
              <Typography
                variant="subtitle2"
                sx={{
                  border: "1px solid rgba(0, 0, 0, 0.4)",

                  padding: "5px",
                  width: "100px",
                  textAlign: "center",
                }}
              >
                Rs. {prod.price}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  border: "1px solid rgba(0, 0, 0, 0.4)",

                  padding: "5px",
                  width: "80px",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <StarIcon sx={{ fontSize: 16 }} />
                {prod.rating.rate}
              </Typography>
            </Row>
          </Details>
        </DetailsContainer>
      </ImageContainer>
      <CardContent>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <FormControl>
              <Select value={quantity} onChange={handleQuantityChange}>
                {[1, 2, 3, 4, 5].map((num) => (
                  <MenuItem key={num} value={num}>
                    {num}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                border: "1px solid rgba(0, 0, 0, 0.4)",
                fontWeight: "700",
                padding: "5px",
                //   width: "70px",
                textAlign: "center",
              }}
            >
              Total Price: {getTotalPrice()}
            </Typography>
          </Grid>
          <Grid item>
            <ButtonContainer>
              <Button variant="outlined" onClick={() => delFromCart(prod)}>
                Remove from Cart
              </Button>
              <Button
                variant="outlined"
                onClick={() => addProductToWishlist(prod)}
              >
                Add to Wishlist
              </Button>
            </ButtonContainer>
          </Grid>
        </Grid>
      </CardContent>
    </CardItemContainer>
  );
};

export default CardItem;
