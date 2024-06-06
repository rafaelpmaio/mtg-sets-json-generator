import {
  Box,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from "@mui/material";
import DateRangeSelector from "components/DateRangeSelector";
import React, { useState } from "react";
import { US, BR } from 'country-flag-icons/react/3x2'
import styles from './flag.module.css'

const Home = () => {
  const [language, setLanguage] = useState("pt-BR")

  const handleLanguageChange = (_event: React.MouseEvent<HTMLElement>, updatedLanguage: string) => {
    if (updatedLanguage === null) {
      updatedLanguage = language
    }
    setLanguage(updatedLanguage);
  }

  const accordionData = [
    {
      summary: "About",
      details: "teste de details"
    },
    {
      summary: "teste2",
      details: "teste de details2"
    },
  ]


  return (
    <Box
      component="main"
      gap={4}
      sx={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
    >
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="language options"
          value={language}
          onChange={handleLanguageChange}
          exclusive

        >
          <ToggleButton value="pt-BR" aria-label="pt-BR" sx={{ padding: 0 }} >
            <BR title="Brasil" className={`${styles.flag} ${language !== "pt-BR" && styles.flag_inative}`} />
          </ToggleButton>
          <ToggleButton value="en-US" aria-label="en-US" sx={{ padding: 0 }}>
            <US title="United States" className={`${styles.flag} ${language !== "en-US" && styles.flag_inative}`} />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <DateRangeSelector />

      <Stack sx={{ width: "500px" }}>
        {accordionData.map((data, index) => (
          <Accordion >
            <AccordionSummary
              id={`panel${index}-header`}
              aria-controls={`panel${index}-content`}
            // expandIcon={<ExpandMoreIcon />}
            >
              <Typography>{data.summary}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{data.details}</Typography>
            </AccordionDetails>
          </Accordion>))}
      </Stack>

    </Box>
  );
};

export default Home;