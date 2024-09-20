import { Container, Box, Stack } from "@mui/material";
import FAQs from "../components/Sections/FAQs/FAQs";
import OurFamilies from "../components/Sections/OurFamilies/OurFamilies";
import Blogs from "../components/Sections/Blogs/Blogs";
import PatientCaring from "../components/Sections/PatientCaring/PatientCaring"
import Specialists from "../components/Sections/Specialists/Specialists";
import Specialization from "../components/Sections/Specialization/Specialization";
import Offers from "../components/Sections/Offers/Offers";
import NavBar from "../components/NavBar/NavBar";

const Home = () => {
  return (
    <Box>
      <NavBar />
      <Offers />
      <Specialization />
      <Specialists />
        <PatientCaring />
       <Blogs />
      <OurFamilies />
      <FAQs />
    </Box>
  );
};

export default Home;
