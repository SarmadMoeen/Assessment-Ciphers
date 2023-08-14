import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Grid,
  InputAdornment,
  styled,
  Checkbox,
  FormControlLabel,
  Box,
  Button,
  Divider,
} from '@mui/material';
import PercentIcon from '@mui/icons-material/Percent';
import SearchIcon from '@mui/icons-material/Search';
import itemsData from './itemsData'; // Make sure to have the correct path to your itemsData.js file

const AppContainer = styled(Container)({
  textAlign: 'center',
  padding: '16px',
});

const AppContent = styled('div')({
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)',
  padding: '16px',
});

const Heading = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '16px',
});

const OptionContainer = styled(Grid)({
  marginTop: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start', // Align items to the left
  borderTop: '1px solid #ccc', // Add greyish horizontal line
  paddingTop: '12px', // Add padding at the top of the container
});

const RoundCheck = styled(Checkbox)({
  '&.Mui-checked': {
    '& .MuiSvgIcon-root': {
      borderRadius: '50%',
      backgroundColor: 'orange',
      fill: 'white',
    },
  },
  '& .MuiSvgIcon-root': {
    borderRadius: '50%',
    border: '1px solid orange',
  },
});

function App() {
  const [applyToAll, setApplyToAll] = useState(false);
  const [applyToSpecific, setApplyToSpecific] = useState(false);

  const handleApplyToAllChange = () => {
    setApplyToAll(!applyToAll);
    if (applyToSpecific) {
      setApplyToSpecific(false);
    }
  };

  const handleApplyToSpecificChange = () => {
    setApplyToSpecific(!applyToSpecific);
    if (applyToAll) {
      setApplyToAll(false);
    }
  };

  return (
    <AppContainer maxWidth="lg">
      <AppContent>
        <Heading variant="h4" style={{marginRight:"950px"}}>Add Tax</Heading>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={8}>
            <TextField label="Tax Rate" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Tax Amount"
              variant="outlined"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PercentIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <OptionContainer item xs={12}>
            <FormControlLabel
              control={
                <RoundCheck
                  checked={applyToAll}
                  onChange={handleApplyToAllChange}
                  name="applyToAll"
                />
              }
              label="Apply to All items collection"
            />
            <FormControlLabel
              control={
                <RoundCheck
                  checked={applyToSpecific}
                  onChange={handleApplyToSpecificChange}
                  name="applyToSpecific"
                />
              }
              label="Apply to Specific"
            />
          </OptionContainer>
          <Grid item xs={4}>
            <TextField
              label="Search"
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Box
              display="flex"
              alignItems="center"
              backgroundColor="#f2f2f2"
              borderRadius="10px"
              height="40px"
              marginTop="16px"
              paddingLeft="16px"
            >
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Bracelets"
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" flexDirection="column">
              {itemsData
                .filter(item => item.category?.name === "Bracelets") // Filter items that belong to the "Bracelets" category
                .map(item => (
                  <FormControlLabel
                    key={item.id}
                    control={<Checkbox color="primary" />}
                    label={item.name}
                  />
                ))}
            </Box>
          </Grid>
        </Grid>

        <Grid item xs={12}>
            <Box
              display="flex"
              alignItems="center"
              backgroundColor="#f2f2f2"
              borderRadius="10px"
              height="40px"
              marginTop="16px"
              paddingLeft="16px"
            >
              <FormControlLabel
                control={<Checkbox color="primary" />}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" flexDirection="column">
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Zero amount with questions "
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="normal item with questions"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="normal Item"
              />
            </Box>
          </Grid>

        <Divider style={{ marginTop: '16px', marginBottom: '16px' }} />

        <Grid item xs={3}>
          <Button
            variant="contained"
            style={{ backgroundColor: 'orange', color: 'white', width: '35%', marginLeft: '650px' }}
          >
            Apply Tax on All Fields
          </Button>
        </Grid>

      </AppContent>
    </AppContainer>
  );
}

export default App;
