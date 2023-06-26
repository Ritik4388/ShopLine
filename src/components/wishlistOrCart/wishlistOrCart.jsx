import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import WishOrCartCard from "../wishOrCartCard/wishOrCartCard";

const WishlistOrCart = ({ cart }) => {
  const prods = useSelector((state) => (cart ? state.cart : state.wishlist));
//   console.log(prods);
  useEffect(() => {}, [prods]);
  return (
    <>
      {prods?.map((prod) => {
        return (
          <Box>
            <WishOrCartCard prod={prod} />
          </Box>
        );
      })}
    </>
  );
};

export default WishlistOrCart;
