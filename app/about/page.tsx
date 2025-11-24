"use client";
import {
  Container,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";

export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.default,
        minHeight: "100vh",
        color: theme.palette.text.primary,
      }}>
      {/* About Content */}
      <Container sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <Typography variant="h3" align="center" gutterBottom>
            About ALFA TREND
          </Typography>
          <Typography
            paragraph
            align="center"
            sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
            From its beginning in 2007 the company has held a simple belief:
            technology can make global trade smoother and more predictable. What
            started as a small operation has grown into a platform that connects
            trusted manufacturers with industrial clients, enabling faster and
            more transparent deliveries across more than thirty jurisdictions.
            Over the years this approach has turned complexity into clarity,
            giving customers the confidence that their equipment will arrive on
            time and ready to perform. Behind the technology is a team that
            understands both the technical and the human side of logistics. They
            combine digital tracking with multilingual expertise and modern
            compliance tools, but just as important, they bring attention to
            detail and responsibility for every shipment. It is this balance of
            innovation and accountability that keeps projects on course and
            allows the company to build long-term partnerships with clients
            around the world.
          </Typography>
          <Typography
            paragraph
            align="center"
            sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
            Its real strength lies in deep knowledge of cross border trade. This
            expertise makes it possible to source equipment and components
            according to a client’s technical specifications, take into account
            industry standards, control quality at every stage and ensure legal
            clarity of each transaction. The partner network includes leading
            manufacturers from the United States, Germany, Poland, China, Turkey
            and other countries, guaranteeing authenticity and consistent
            product quality.
          </Typography>
          <Typography
            paragraph
            align="center"
            sx={{ mb: 6, px: isMobile ? 0 : 25 }}>
            Optimised sea, road and air transport with continuous visibility.
            Insurance and careful handling ensure cargo arrives safely and on
            schedule.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}
