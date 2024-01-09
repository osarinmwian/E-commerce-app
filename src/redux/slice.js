import { createSlice } from "@reduxjs/toolkit";



 const initState =[
  {
image: require('../assets/images/fn5.jpg'),
description: "Elevate your living space with the exquisite design of this luxurious piece. Crafted with precision and attention to detail, it reflects the epitome of opulence. Bring home the essence of grandeur with LuxeLiving Creations.",
price: "1,200,000",
category:"LuxeLiving Creations",
location: "Lagos"
  },
  {
      image: require('../assets/images/fn4.jpg'),
      description: "Embrace the enduring allure of Timeless Trends. This captivating piece seamlessly blends classic and contemporary elements, making it a statement in any setting. Invest in timeless elegance that transcends passing fads.",
      price: "700,000",
      category:"Timeless Trends",
      location: "Asaba"
          },
{
              image: require('../assets/images/fn3.jpg'),
              description: "Immerse yourself in the charm of yesteryears with VintageVogue Interiors. Each piece tells a story of vintage allure,adding character and a touch of nostalgia to your home. Embrace the timeless beauty of the past.",
              price: "1,100,000",
              category:"VintageVogue Interiors",
              location: "Abuja"
 },
{
                      image: require('../assets/images/fn2.jpg'),
                      description: "Curate a space that celebrates craftsmanship and individuality with Artisanal Abodes. This handcrafted masterpiece is a testament to skilled artistry, bringing a touch of uniqueness and warmth to your home.",
                      price: "500,000",
                      category:"Artisanal Abodes",
                      location: "Port Harcourt"
 },
 {
  image: require('../assets/images/fn1.jpg'),
  description: "Experience sophistication and grace with ElegantEssence Interiors. This piece exudes timeless beauty and refined aesthetics, transforming your space into a haven of elegance and style.",
  price: "800,000",
  category:"ElegantEssence Interiors",
  location: "Edo"
      }, 
      {
          image: require('../assets/images/space.jpg'),
          description: "Unwind in tranquility with SereneSculpt Concepts. This piece is a harmonious blend of art and serenity, creating a serene atmosphere that resonates with calmness and relaxation.",
          price: "400,000",
          category:"SereneSculpt Concepts",
          location: "Calabar"
              },       
]
const productSlice = createSlice({
  name: "products",
  initialState: initState,
  reducers: {
    setProducts: (state, action) => {
      return action.payload; 
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;