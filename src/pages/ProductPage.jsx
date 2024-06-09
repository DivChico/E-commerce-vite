import React, { useState } from "react";
import Button from "@mui/material/Button";

import ToggleButton from "@mui/material/ToggleButton";
import Radio from "@mui/material/Radio";
import { pink, blue } from "@mui/material/colors";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Section } from "../components";

const ProductPage = () => {
  const [alignment, setAlignment] = useState("left");
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Section title={"product"} header={"product"}>
      <div className="flex  h-screen mx-44">
        <div className="w-3/5 flex flex-row px-3 gap-2 ">
          <div className="w-1/4 space-y-1">
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />{" "}
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="w-3/4">
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="w-2/5 flex space-y-2  flex-col">
          <div className="border-b py-5">
            <p className="text-xl font-bold tracking-wide">product titlte</p>
            <p className="text-md font-semibold tracking-wide">product price</p>
            <p className="text-md font-semibold tracking-wide text-neutral-500">
              product description
            </p>
          </div>
          {/* chose color */}
          <div className="flex flex-row items-center space-x-5">
            <p>Color :</p>
            <div>
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
                sx={{
                  color: pink[800],
                  "&.Mui-checked": {
                    color: pink[600],
                  },
                }}
              />
              <Radio
                checked={selectedValue === "b"}
                onChange={handleChange}
                value="b"
                name="radio-buttons"
                inputProps={{ "aria-label": "B" }}
                sx={{
                  color: blue[800],
                  "&.Mui-checked": {
                    color: blue[600],
                  },
                }}
              />
            </div>
          </div>

          {/* size */}
          <div className="flex flex-row items-center space-x-5">
            <p>Size :</p>
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
            >
              <ToggleButton value="left" aria-label="left aligned">
                XS
              </ToggleButton>
              <ToggleButton value="center" aria-label="centered">
                S
              </ToggleButton>
              <ToggleButton value="right" aria-label="right aligned">
                M
              </ToggleButton>
              <ToggleButton value="justify" aria-label="justified">
                L
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <Button color="error" variant="contained">
            Add to cart
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default ProductPage;
